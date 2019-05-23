var express = require ('express');

const PORT = 3000;

const server = express();

server.listen(3000,() => {
    console.log(`server test on port 3000 ${PORT}`);
});