

/* exercise 1 */

var http = require('http'),
    fs = require('fs'),
    url = require('url');
    
    http.createServer(function (request,response) { /* handle request */
        
        console.log('createServer');
        var path = url.parse(request.url).pathname;
        
        console.log('createServer path = ' + path);
        path = '.' + path;
        getFile(path,function(err,body){
           console.log('calling getFile'); 
           response.writeHead(body.statusCode, {
        'Content-Length': body.length,
        'Content-Type': 'text/html' })
        response.end(body.body, 'utf-8');
        });
        
    }).listen(process.env.PORT);
    
    
    function getFile(path, callback) {
        console.log('entered getFile');
    var response = {};
    console.log('getFile path = ' + path);
    fs.readFile(path, function(err, data) {
        if (err) {
            console.log('found file failure');
            response.statusCode = 500;
            response.body = 'There was an error getting the requested file: ' + err;
            response.length = response.body.length;
            console.log(err);
        } else {
            console.log('found file success');
            response.statusCode = 200;
            response.body = data.toString();
            response.length = response.body.length;
        }
        callback(err, response);
    });
    };
    
    