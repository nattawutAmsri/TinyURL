const repositories = require("./repositories");

module.exports = app => {
    app.get("/api/note/find/:_id", async (req, res) => {
        let _id = req.params._id;
        await repositories.findNode(_id)
            .then((val) => {
                return res.status(200).json(val);
            }).catch((err) => {
                return res.status(401).json(err)
            });
    });

    app.post("/api/note/add", async (req, res) => {
        let _params = req.body;
        await repositories.createOrUpdate(_params)
            .then((val) => {
                return res.status(200).json(val);
            }).catch((err) => {
                return res.status(401).json(err)
            });
    });

    app.get("/api/note/remove/:_id", async (req, res) => {
        let _id = req.params._id;
        await repositories.remove(_id)
            .then((val) => {
                return res.status(200).json(val);
            }).catch((err) => {
                return res.status(401).json(err)
            });
    });

    app.get("/api/note/all", async (req, res) => {
        await repositories.allNotes()
            .then((val) => {
                return res.status(200).json(val);
            }).catch((err) => {
                return res.status(401).json(err)
            });
    });
};