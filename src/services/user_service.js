import db from "../models/index.js"
import { v4 as genarateId } from "uuid";

const user = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.Users.findAll();
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
}

const loginUsers = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.Users.findOne({
                where: {
                    emailUser: data.emailUser,
                    passwordUser: data.passwordUser,
                }
            });
            const userPerAdmin = await db.userPermissions.findOne({
                where: {
                    userID: user.id, // Assuming 'userID' is the foreign key in userPermissions table
                    permissionID: 1, // Assuming you pass permissionID in 'data'
                },
            });
            const userPerVip = await db.userPermissions.findOne({
                where: {
                    userID: user.id, // Assuming 'userID' is the foreign key in userPermissions table
                    permissionID: 2, // Assuming you pass permissionID in 'data'
                },
            })
            if(!user && !userPerAdmin) {
                resolve({
                    status: 0,
                });
            } else {
                if (userPerAdmin) {
                    resolve({
                        status: 2,
                        message: 'Login Admin successful',
                    });
                } else if(userPerVip){
                    resolve({
                        status: 2,
                        message: 'Login Vip successful',
                    });
                } else {
                    resolve({
                        status: 2,
                        message: 'Login successful',
                    });
                }
            };
        } catch (error) {
            reject(error);
        }
    });
};

const findUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.Users.findOne({
                where: {id},
                attributes: { exclude: ["createdAt", "updatedAt"] },
            })
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
}

const deleteUser = (uid) => {
    return new Promise(async (resolve, reject) =>{
        try {
            const response = await db.Users.destroy({
                where: {
                    id: uid,
                }
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
    user,
    loginUsers,
    findUser,
    deleteUser,
}