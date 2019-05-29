const friends = require ("../app/data/friends");


module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req,res){
        
        if (friends.length>3) {
            friends.push(req.body);
            res.json(true);
        }







    });
};