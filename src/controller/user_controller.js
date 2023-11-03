import createError from "http-errors";
import * as services from "../services/user_service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {userValidate, uid} from "../config/validatation.js";
import { v4 as genarateId } from "uuid";
import joi from "joi";
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
        console.log(req.body);
        const {emailUser, passwordUser} = req.body;
        const user = await db.Users.findOne({
           where: {
            emailUser: req.body.emailUser,
           } 
        });
        if(!user){
            res.status(400).json(`${emailUser} not found`);
        } else {
            const passwordValid = await bcrypt.compare(passwordUser, db.Users.passwordUser);
            if(!passwordValid){
                return res.json(`Incorrect email or password!!!`)
            }
            const token = jwt.sign({id: db.Users.id}, process.env.JWT_SECRET,{
                expiresIn: process.env.JWT_REFRESH_EXPIRATION
            });
            res.status.json({
                id: req.body.id,
                emailUser: req.body.emailUser,
                passwordUser: req.body.passwordUser,
                accessToken: token
            });
        }
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const {emailUser, passwordUser} = req.body;
        // const {error} = userValidate(req.body);
        // if(error){
        //     throw createError(error.details[0].message);
        // }
        const isExistEmail = await db.Users.findOne({
            where: {emailUser}
        })
        if(isExistEmail){
            res.status(400).json(`${emailUser} is has already`);
        } else {
            const saveUser = await db.Users.create({
                //id: genarateId(),
                emailUser: req.body.emailUser,
                nameUser: req.body.nameUser,
                passwordUser: await bcrypt.hash(passwordUser, 15),
                phoneUser: req.body.phoneUser
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