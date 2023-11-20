import db from "../models/index.js";

const newsFavorite = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const newsFavorites = await db.newsFavorites.findAll({
                inlcude: [
                    {
                        model: db.News,
                        atttributes: {
                            exclude: ["createAt","updateAt"]
                        }
                    },
                    {
                        model: db.Users,
                        atttributes: {
                            exclude: ["createAt","updateAt"]
                        }
                    }
                ],
                atttributes: {
                    exclude: ["createAt","updateAt","newsID", "userID"]
                }
            });
            resolve(newsFavorites)
        } catch (error) {
            reject(error);
        }
    });
}

const createNewsFavor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.newsFavorites.create({
                id: data.id,
                newsID: data.newsID,
                userID:data.userID
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "user_favorite has been updated",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateNewsFavor = (nfid, data) => {
    return new Promise(async (resolve, reject) =>{
        try {
            const response = await db.newsFavorites.update({
                newsID: data.newsID,
                userID: data.userID
            },{
                where: {id: nfid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "news_favorite has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteNewsFavor = (nfid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.newsProducts.destroy({
                where: {id: nfid}
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "news_favorite has been deleted",
              });
        } catch (error) {
            
        }
    });
}

module.exports = {
    newsFavorite,
    createNewsFavor,
    updateNewsFavor,
    deleteNewsFavor
}