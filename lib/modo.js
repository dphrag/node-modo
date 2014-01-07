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

    }
};