import db from "../models/index.js";

const district = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const districts = await db.Districts.findAll({
                include:{
                    model: db.Cities,
                    attributes:{
                        exclude: ["createdAt", "updatedAt"],
                    }
                },
                attributes: {
                    exclude: ["createdAt","updatedAt"],
                }
            });
            resolve(districts);
        } catch (error) {
            reject(error);
        }
    });
}

const createDistrict = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Districts.findOrCreate({
                where: {
                    nameDistrict: data.nameDistrict,
                },
                defaults: {
                    id: data.id,
                    cityID: data.city,
                    nameDistrict: data.nameDistrict
                }
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "district has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateDistrict = (did, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Districts.update({cityID: data.city.id, nameDistrict: data.nameDistrict},
                {
                    where: {id: did}
                });
                resolve({
                    err: response[0] > 0 ? 0 : 1,
                    mes:
                      response[0] > 0
                        ? `${response[0]} District updated`
                        : "Cannot update new Districts/ districtID not found",
                  });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteDistrict = (did) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Districts.destroy({
                where: {id: did}
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
    district,
    createDistrict,
    updateDistrict,
    deleteDistrict
}