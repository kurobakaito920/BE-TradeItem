import db from "../models/index.js";

const imgSlide = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const imgSlide = await db.imgSlide.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            });
            resolve(imgSlide);
        } catch (error) {
            reject(error);
        }
    });
}

const createImgSlide = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.imgSlide.create({
                id: data.id,
                imageSlider: data.imageSlider,
                imageSlider2: data.imageSlider2,
                imageSlider3: data.imageSlider3,
                imageSlider4: data.imageSlider4,
                imageSlider5: data.imageSlider5
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "imgSlide has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
};

const updateImgSlide = (isid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.imgSlide.update({
                imageSlider: data.imageSlider,
                imageSlider2: data.imageSlider2,
                imageSlider3: data.imageSlider3,
                imageSlider4: data.imageSlider4,
                imageSlider5: data.imageSlider5
            }, {
                where: {
                    id: isid,
                }
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "imgSlide has been updated",
              });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteImgSlide = (isid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.imgSlide.destroy({
                where: {
                    id: isid,
                }
            })
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "imgSlide has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    imgSlide,
    createImgSlide,
    updateImgSlide,
    deleteImgSlide
}