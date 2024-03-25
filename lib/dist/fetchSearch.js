"use strict";
exports.__esModule = true;
function fetchSearch(url) {
    var username = process.env.OXYLABS_USERNAME;
    var password = process.env.OXYLABS_PASSWORD;
    var newUrl = new URL("https://www.walmart.com/search?q=" + url);
    var body = {
        source: "universal_ecommerce",
        url: newUrl.toString(),
        geo_location: "United States",
        parse: true
    };
    var response = fetch('https://realtime.oxylabs.io/v1/queries', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64')
        }
    })
        .then(function (res) {
        if (!res.ok) {
            throw new Error("HTTP error! status: " + res.status);
        }
        return res.json();
    })
        .then(function (data) {
        if (!data || !data.results || data.results.length === 0)
            return;
        var result = data.results[0];
        return result;
    })["catch"](function (err) { return console.log(err); });
    return response;
}
exports["default"] = fetchSearch;
