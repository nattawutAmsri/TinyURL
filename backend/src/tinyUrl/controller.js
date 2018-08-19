const repositories = require("./repositories");
const validUrl = require("valid-url");
module.exports = app => {
  app.get("/:code", async (req, res) => {
    let urlCode = req.params.code;
    await repositories.checkUrl(urlCode)
    .then( (val) => {
      return res.redirect(val.originalUrl);
    }).catch((err) =>{
      return res.status(401).json(err)
    })
  });

  app.post("/api/tinyurl", async (req, res) => {
    const { shortBaseUrl, originalUrl, isCreate } = req.body;
    if (validUrl.isUri(shortBaseUrl)) {    } else {
      return res.status(404).json("Invalid Base Url format");
    }

    if (validUrl.isUri(originalUrl)) {
      // find or create new 
      await repositories.generate(originalUrl,shortBaseUrl, isCreate)
        .then( (val) => {       
          return res.status(200).json(val); 
        }).catch((err) =>{
          return res.status(401).json(err)
        }); 
    } else {

      console.log(originalUrl);
      await repositories.checkUrl(originalUrl)
        .then( (val) => {
          return res.status(200).json(val); 
        }).catch((err) =>{
          return res.status(401).json(err)
        })
    }

  });
};