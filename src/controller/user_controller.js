
import * as services from "../services/user_service.js";
import * as perServices from "../services/userPermission_service.js";
import db from "../models/index.js";

const allUser = async (req, res, next) => {
    try {
        const users = await services.user();
        res.json({
            result: users,
        })
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const response = await services.loginUsers(req.body);
        if(response){
            res.json({
                result: response,
            });
        }
        // const {emailUser, passwordUser} = req.body;
        // const user = await db.Users.findOne({
        //    where: {
        //     emailUser: req.body.emailUser,
        //    } 
        // });
        // const password = await db.Users.findOne({
        //     where:{
        //         passwordUser: req.body.passwordUser,
        //     }
        // });
        // if(!user){
        //     res.status(400).json(`${emailUser} not found`);
        // } else {
        //     if(!password){
        //         return res.json({
        //             code: 0
        //         })
        //     }else{
        //         res.json({
        //             code: 1
        //         });
        //     }
        // }
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        const {emailUser, passwordUser} = req.body;
        const isExistEmail = await db.Users.findOne({
            where: {emailUser}
        })
        if(isExistEmail){
            res.json({
                code: 0,
                message: `${emailUser} already exists`
            });
        } else {
            const saveUser = await db.Users.create({
                //id: genarateId(),
                emailUser: req.body.emailUser,
                nameUser: req.body.nameUser,
                passwordUser: req.body.passwordUser,
                phoneUser: req.body.phoneUser,
                avatarUser: req.body.avatarUser
            });
            return res.json({
                status: 1,
                element: saveUser,
            });
        }
    } catch (error) {
        next(error);
    }
}

const deletedUser = async(req, res, next) =>{
    try {
        const response = await services.deleteUser(req.params.id);
        if(response){
           res.status(200).json({
            status: 200,
            message: "User was deleted",
           }) 
        }
    } catch (error) {
        next(error);
    }
}
module.exports = {
    allUser,
    createUser,
    loginUser,
    deletedUser,
}