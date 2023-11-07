import db from "../models/index.js";

const cities = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const city = await db.Cities.findAll({
                attributes:{
                    exclude: ["createdAt", "updatedAt"],
                }
            });
            resolve(city);
        } catch (error) {
            reject(error);
        }
    });
}

const createCity = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Cities.findOrCreate({
                where: {
                    nameCity: data.nameCity
                },
                defaults:{
                    id:data.id,
                    nameCity: data.nameCity,
                }
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "nameCity has been created",
            });
        } catch (error) {
            reject(error);
        }
    });
}

const updateCity = (ciid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Cities.update({nameCity: data.nameCity}, {
                where: {
                    id: ciid,
                }
            });
            resolve({
                err: response[0] > 0 ? 0 : 1,
                mes:
                  response[0] > 0
                    ? `${response[0]} City updated`
                    : "Cannot update new Cities/ cityID not found",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteCity = (ciid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Cities.destroy({
                where: {id: ciid}
            });
            resolve({
                err: response > 0 ? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    cities,
    createCity,
    updateCity,
    deleteCity,
}