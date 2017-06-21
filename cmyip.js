var request = require('request');
var html_parser = require('fast-html-parser');
var url_server = 'http://cmyip.org';

request.get(url_server, function(err, res) {
    if (!err && res.statusCode == 200) {
        var $ = html_parser.parse(res.body);
        console.log($.querySelector('h1.page-title').childNodes[0]['rawText'] +
       $.querySelector('h3.page-title').childNodes[0]['rawText']);
        // console.log($.querySelector('h3.page-title').childNodes[0]['rawText']);
    }
});
