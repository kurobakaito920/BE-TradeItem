import db from "../models/index.js";

const permission = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const permissions = await db.Permissions.findAll({
                attributes:{
                    exclude: ["createdAt","updatedAt"],
                }
            });
            resolve(permissions);
        } catch (error) {
            reject(error);
        }
    })
}

const createPer = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Permissions.findOrCreate({
                where: {
                    namePermission: data.namePermission,
                },
                defaults: {
                    id: data.id,
                    namePermission: data.namePermission
                }
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "permission has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updatePer = (peid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Permissions.update({
                namePermission: data.namePermission,
            }, 
            {
                where: {id: peid}
            });
            resolve({
                err: response[0] > 0? 0 : 1,
                mes:
                  response[0] > 0
                   ? `${response[0]} Permission updated`
                    : "Cannot update new Permission/ Permission ID not found",
              });
        } catch (error) {
            reject(error);
        }
    });
};

const deletePer = (peid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Permissions.destroy({
                where: {id: peid}
            });
            resolve({
                err: response > 0? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    permission,
    createPer,
    updatePer,
    deletePer
}