const mongoose = require("mongoose");
const TinyUrl = mongoose.model("tinyurl");
const constants = require("../config/constants");
const shortCode = require("../helper/generateTitnyURL");

exports.generate = (originalUrl, shortBaseUrl, isCreate) => {
    let promise = new Promise(function (resolve, reject) {
        try {
            // find originalUrl
            TinyUrl.findOne({
                originalUrl: originalUrl
            }, (error, row) => {
                if (!row && isCreate) {
                    // add new if not found
                    let urlCode = shortCode.generate();
                    let updatedAt = new Date();
                    shortUrl = shortBaseUrl + "/" + urlCode;
                    item = new TinyUrl({
                        originalUrl,
                        shortUrl,
                        urlCode,
                        updatedAt
                    });
                    item.save();
                    resolve(item);
                } else {
                    resolve(row);
                }
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}

exports.checkUrl = (urlCode) => {
    let promise = new Promise(function (resolve, reject) {
        try {
            let item = TinyUrl.findOne({
                urlCode: urlCode
            }, (error, row) => {
                if (item) {
                    resolve(item);
                } else {
                    reject(constants.errorUrl);
                }
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}