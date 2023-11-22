import db from "../models/index.js";

const rates = () => {
    return new Promise(async(resolve, reject) =>{
        try {
            const rate = await db.Rates.findAll({
                include: [
                    {
                        model: db.News,
                        attributes: {
                            exclude: ["createAt", "updateAt"]
                        }
                    },
                    {
                        model: db.Users,
                        attributes: {
                            exclude: ["createAt", "updateAt"]
                        },
                    }
                ],
                attributes: {
                    exclude: ["createAt", "updateAt","newsID","userID"]
                }
            });
            resolve(rate);
        } catch (error) {
            reject(error);
        }
    });
}

const createRate = (data) => {
    return new Promise(async(resolve, reject) =>{
        try {
            const response = await db.Rates.create({
                id: data.id,
                newsID: data.newsID,
                userID: data.userID,
                valueRate: data.valueRate,
                timeRate: data.timeRate
            });
            resolve({
                status: response[1] ? 0 : 0,
                msg: response[1] ? "Created" : "rate has been created",
            });
        } catch (error) {
            reject(error);
        }
    });
}

const udpateRate = (rid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Rates.update({
                newsID: data.newsID,
                userID: data.userID,
                valueRate: data.valueRate,
                timeRate: data.timeRate
            },
            {
                where: {id: rid}
            });
            resolve({
                err: response[0] > 0 ? 0 : 1,
                mes:
                    response[0] > 0 
                    ? `${response[0]} rate updated` 
                    : "Cannot update new rate/ rateID not found"
            });
        } catch (error) {
            reject(error);            
        }
    });
}

const deleteRate = (rid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Rates.destroy({
                where: {id: rid}
            });
            resolve({
                err: response > 0 ? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error)
        }
    });
};

module.exports = {
    rates,
    createRate,
    udpateRate,
    deleteRate
}