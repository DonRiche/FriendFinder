var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);


        var user = req.body;


        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }


        var bestFriend = 0;
        var match = 50;


        for (var i = 0; i < friends.length; i++) {
            var allDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                allDifference += difference;
            }


            if (allDifference < match) {
                bestFriend = i;
                match = allDifference;
            }
        }

     friends.push(user);


     res.json(friends[bestFriend]);
    });
};