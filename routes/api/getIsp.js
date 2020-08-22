const fs = require("fs");
const express = require("express");
const path = require("path");
const xml = require("xml2js");

const route = express.Router();


route.get("/api/isp", (req, res) => {
    var type = req.query.type;
    if (!type) {
        res.status(400).send("error")

        return;
    }
    let rawdata = fs.readFileSync(path.join(__dirname, '/') + 'isp.json');
    let isp = JSON.parse(rawdata);
    if (type.toLowerCase() == "json") {

        res.status(200).json(isp);
    } else {
        const builder = new xml.Builder();

        var data = builder.buildObject(isp);
        res.status(200).send(data);
    }
})

route.post("/api/isp", (req, res) => {
    var type = req.body.type;
    if (!type) {
        res.status(400).send("error")
        return;
    }
    let rawdata = fs.readFileSync(path.join(__dirname, '/') + 'isp.json');
    let isp = JSON.parse(rawdata);
    if (type.toLowerCase() == "json") {

        res.status(200).json(isp);
    } else {
        const builder = new xml.Builder();

        var data = builder.buildObject(isp);
        res.status(200).send(data);
    }
})

module.exports = route;