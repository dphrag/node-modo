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
    availability:function(startTime, endTime, callback) {
        request({
            json: true,
            qs: {
                format: "json"
            },
            url: "https://bookit.modo.coop/api/fleet/availability/" + startTime + "/" + endTime
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