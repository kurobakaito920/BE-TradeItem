import Joi from "joi";

const userValidate = (data) => {
    const userSchema = Joi.object({
        userName: Joi.string(),
        emailUser: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {allow: ["com", "net"]},
            })
            .lowercase()
            .required(),
        passwordUser: Joi.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .required(),
        phoneUser: Joi.string()
        //avatarUser: Joi.string(),
    });
    return userSchema.validate(data);
}

module.exports = {
    userValidate,
}