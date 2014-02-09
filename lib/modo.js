var request = require("request");

module.exports = {
    locations:function (callback) {
        request({
            json: true,
            qs: {
                format: "json"
            },
            url: "https://bookit.modo.coop/api/fleet/locations"
        }, function(err, res, body) {
            if (err) {
                callback(err);
            } else if (res.statusCode != 200) {
                callback(body.trim());
            } else {
                callback(null, body);
            }

        });

    },
    availability:function(startTime, endTime, neighbourhoods, callback) {
        var url = "https://bookit.modo.coop/api/availability";
        if (!!startTime) {
            url += "/" + startTime;
            if (!!endTime) url += "/" + endTime;
        }

        if (!!neighbourhoods && neighbourhoods.length > 0) {
            url += "?neighbourhoods=";
            for (var k = 0 ; k < neighbourhoods.length ; k++) {
                url += neighbourhoods[k].id + ",";
            }
        }
        request({
            json: true,
            qs: {
                format: "json"
            },
            url: url
        }, function(err, res, body) {
            if (err) {
                callback(err);
            } else if (res.statusCode != 200) {
                callback(body.trim());
            } else {
                callback(null, body);
            }

        });
    },
    cost:function(plan, startTime, endTime, distance, callback ) {
        request({
            json: true,
            qs: {
                format: "json"
            },
            url: "https://bookit.modo.coop/api/cost/" + plan + "/" + startTime + "/" + endTime + "/" + distance
        }, function(err, res, body) {
            if (err) {
                callback(err);
            } else if (res.statusCode != 200) {
                callback(body.trim());
            } else {
                callback(null, body);
            }

        });
    }
};