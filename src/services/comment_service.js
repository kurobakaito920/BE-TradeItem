import db from "../models/index.js";

const comment = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const comments = await db.Comments.findAll({
                include: [
                    {
                        model: db.Users,
                        attributes: {
                            exclude: ["createAt", "updateAt"],
                        },
                    }, 
                    {
                        model: db.News,
                        attributes: {
                            exclude: ["createAt", "updateAt"], 
                        },
                    }
                ],
                attributes: {
                    exclude: ["createAt", "updateAt", "userID", "newsID"],
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

const createComment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Comments.create({
                id: data.id,
                userID: data.userID,
                newsID: data.newsID,
                contentComment: data.contentComment,
                timeComment: data.timeComment,
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "Comment has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateComment = (coid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Comments.update({
                userID: data.userID,
                newsID: data.newsID,
                contentComment: data.contentComment,
                timeComment: data.timeComment
            },{
                where: {id: coid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "Comments has been updated",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deletedComment = (coid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Comments.destroy({
                where: {id: coid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "Comments has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    comment,
    createComment,
    updateComment,
    deletedComment
}