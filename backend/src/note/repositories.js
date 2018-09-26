const mongoose = require("mongoose");
const NoteModel = mongoose.model("notes");

exports.createOrUpdate = (form) => {
    let promise = new Promise(function (resolve, reject) {
        try {
            // find originalUrl
            NoteModel.findOne({
                originalUrl: form.hash
            }, (error, row) => {
                let item = new NoteModel({
                    _id: form._id,
                    title: form.title,
                    note: form.note,
                    hash: form.hash,
                    updatedAt: new Date()
                });

                if (!row) {      
                    item.save();
                    resolve(item);
                } else {
                    NoteModel.update(
                        form._id,
                        item,
                        (err, note) => {
                            console.log(note);
                            resolve(note);
                        }
                    );
                }
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}

exports.createOrUpdate = (form) => {
    let promise = new Promise(function (resolve, reject) {
        try {
            // find originalUrl
            NoteModel.findOne({
                originalUrl: form.hash
            }, (error, row) => {
                // set note
                console.log(form);
                let item = new NoteModel({
                    _id: form._id,
                    title: form.title,
                    note: form.note,
                    hash: form.hash,
                    updatedAt: new Date()
                });

                if (!row) {      
                    item.save();
                    resolve(item);
                } else {
                    NoteModel.update(
                        form._id,
                        item,
                        (err, note) => {
                            console.log(note);
                            resolve(note);
                        }
                    );
                }
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}

exports.findNode = (_hash) => {
    let promise = new Promise(function (resolve, reject) {
        try {
            NoteModel.findOne({
                hash: _hash
            }, (error, note) => {
                console.log(_hash);
                resolve(note);
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}

exports.allNotes = () => {
    let promise = new Promise(function (resolve, reject) {
        try {
            NoteModel.find({}, (error, notes) => {
                resolve(notes);
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}

exports.remove = (id) => {
    let promise = new Promise(function (resolve, reject) {
        try {
            NoteModel.findByIdAndRemove(id, (err, note) => {
                if (err) reject(err);
                const response = {
                    message: "Note successfully deleted",
                    id: note
                };
                resolve(note);
            });
        } catch (error) {
            reject(error);
        }
    })
    return promise;
}