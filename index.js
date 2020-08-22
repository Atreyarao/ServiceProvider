const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const getisp = require("./routes/api/getIsp");
const path = require("path");
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use("/", getisp);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log("listing on port " + 3100);
})