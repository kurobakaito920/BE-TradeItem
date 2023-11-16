import db from "../models/index.js";

const news = () => {
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
                    exclude: ["createdAt","updatedAt", "locationID"],
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
                    title: data.title,
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

const updateNews = (nid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.News.update({
                title: data.title,
                locationID: data.locationID,
                description: data.description,
                timeUpload: data.timeUpload,
            }, {
                where: {id: nid},
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "News has been updated",
              });
        } catch (error) {
            
        }
    });
}

const deleteNews = (nid) => {
    return new Promise(async (resolve, reject) =>{
        try {
            const response = await db.News.destroy({
                where: {id: nid}
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "News has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    news,
    createNews,
    updateNews,
    deleteNews,
}
