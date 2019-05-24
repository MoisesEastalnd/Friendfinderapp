var express = require ('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("testing route using express.js");
});

server.listen(3000,() => {
    console.log(`server test on port ${PORT}`);
});