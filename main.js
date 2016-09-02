(function () {

    'use strict';

    var http      = require('http'),
        query     = require('querystring'),
        request   = require('request');

    var PORT = process.env.PORT || 8080;

    http.createServer(function (req, res) {

        if (req.url.indexOf('?') >= 0) {
            var params = query.parse(req.url.replace(/^.*\?/, ''));

            var user = params.user,
                pwd  = params.password,
                url  = params.url;
        }

        if (user && pwd && url) {

            var target = 'https://' + user + ':' + pwd + '@' + url;
            console.log(target);

            request(target).pipe(res);
        } else {
            res.writeHead(400);
            res.end('error with params');
        }

    }).listen(PORT, function () {
        console.log('Listenning on port ', PORT);
    });

}());
