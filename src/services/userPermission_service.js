import db from "../models/index.js";

const userPer = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const userPermission = await db.userPermissions.findAll({
                include: [
                    {
                        model: db.Permissions,
                        attributes:{
                            exclude: ["createdAt", "updatedAt"],
                        }
                    },
                    {
                        model: db.Users,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt", "userID", "permissionID"]
                }
            });
            resolve(userPermission);
        } catch (error) {
            reject(error);
        }
    });
}

const createUserPer = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.userPermissions.create({
                id: data.id,
                permissionID: data.permissionID,
                userID: data.userID
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "UserPermission has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateUserPer = (upid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.userPermissions.update({
                permissionID: data.permissionID,
                userID: data.userID
            },{
                where: {
                    id: upid
                }
            });
            resolve({
                err: response[0] > 0 ? 0 : 1,
                mes:
                  response[0] > 0
                    ? `${response[0]} userPermission updated`
                    : "Cannot update new userPermission/ userPermission ID not found",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteUserPer = (upid) =>{
    return new Promise(async (response, reject) => {
        try {
            const response = await db.userPermissions.destroy({
                where: {
                    id: upid,
                }
            });
            resolve({
                err: response > 0 ? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error);
        }
    })  
}

module.exports = {
    userPer,
    createUserPer,
    updateUserPer,
    deleteUserPer
}