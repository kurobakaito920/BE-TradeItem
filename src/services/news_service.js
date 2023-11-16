import db from "../models/index.js";

const allNews = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const news = await db.News.findAll({
                include:
                {
                    model: db.Locations,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    }
                },
                attributes: {
                    exclude: ["createdAt","updatedAt"],
                }
            })
            resolve(news);
        } catch (error) {
            reject(error);
        }
    });
}

const createNews = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.News.findOrCreate({
                where: {
                    title: data.title,
                },
                defaults: {
                    id: data.id,
                    locationID: data.locationID,
                    description: data.description,
                    timeUpload: data.timeUpload
                }
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "news has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
};