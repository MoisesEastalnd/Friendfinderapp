const friends = require ("../api/friends");


module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
    
}