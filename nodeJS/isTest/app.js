var http = require('http'); // node.js 內建的模組

http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{"Content-type":"text/plain"});
    res.write('HI');
    res.end();
}).listen(8081);


