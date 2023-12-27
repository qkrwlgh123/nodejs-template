const express = require("express");
const cors = require("cors");
const fruitsDatas = require("./datas");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/api/list", (req, res) => {
    res.json({ status: true, data: fruitsDatas });
});

app.listen(4000, () => console.log("4000번 포트 대기중"));
