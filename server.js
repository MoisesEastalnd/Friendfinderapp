const express = require ("express");

const PORT = process.env.PORT || 3000;

const app = express();

//app.get("/", (req, res) => {
   // res.send("testing route using express.js");
//})

require("./routing/htmlRoutes")(app);



require("./routing/apiRoutes")(app);


app.listen(PORT,() => {
    console.log(`server test on port ${PORT}`);
});