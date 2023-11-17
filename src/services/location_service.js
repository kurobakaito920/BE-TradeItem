import db from "../models/index.js";

const locations = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const location = await db.Locations.findAll({
                include:
                {
                    model: db.Cities,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }
            });
            resolve(location);
        } catch (error) {
            reject(error);
        }
    });
}

const createLocation = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Locations.create({
                id: data.id,
                cityID: data.cityID,
                nameStreet: data.nameStreet,
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "locations has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateLocation = (lid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Locations.update({
                cityID: data.cityID,
                nameStreet: data.nameStreet
            },{
                where: {id: lid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "Location has been updated",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteLocation = (lid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Locations.destroy({
                where: {id: lid},
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "Location has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    locations,
    createLocation,
    updateLocation,
    deleteLocation,
}