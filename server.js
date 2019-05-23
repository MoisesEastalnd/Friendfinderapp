var express = require ('express');

const PORT = 3000;

const server = express();

server.get("/", (req, res) => {
    console.log(`testing route for server`);
});

server.listen(3000,() => {
    console.log(`server test on port ${PORT}`);
});