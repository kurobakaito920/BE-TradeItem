import db from "../models/index.js";

const ward = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const wards = await db.Wards.findAll({
                include: {
                    model: db.Districts,
                    attributes:{
                        exclude: ["createdAt","updatedAt"],
                    },
                    include: {
                        model: db.Cities,
                        attributes:{
                            exclude: ["createdAt","updatedAt"],
                        }
                    },
                },
                attributes:{
                    exclude: ["createdAt","updatedAt"],
                }
            });
            resolve(wards);
        } catch (error) {
            reject(error);
        }
    })
}

const createWard = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Wards.findOrCreate({
                where: {
                    nameWard: data.nameWard,
                },
                defaults: {
                    id: data.id,
                    districtID: data.districtID,
                    nameWard: data.nameWard,
                }    
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "Ward has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateWard = (wid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Wards.update({districtID: data.district.id, nameWard: data.nameWard},
                {
                    where: {id: wid}
                });
                resolve({
                    err: response[0] > 0? 0 : 1,
                    mes:
                      response[0] > 0
                       ? `${response[0]} Ward updated`
                        : "Cannot update new Wards/ wardID not found",
                  });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteWard = (wid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Wards.destroy({
                where: {id: wid}
            });
            resolve({
                err: response > 0? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    ward,
    createWard,
    updateWard,
    deleteWard
}