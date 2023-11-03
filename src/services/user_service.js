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
    findUser,
    deleteUser,
}