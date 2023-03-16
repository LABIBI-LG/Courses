const http = require('http');
const { v4: uuidv4 } = require('uuid');
const todos = [
    {
        "title": "今天要學習",
        "id": uuidv4()
    }
]
const requsetListener = (req, res) => {
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
    }
    if(req.url === '/todos'){
        switch(req.method){
            case 'OPTIONS':
                res.writeHead(200, headers);
                res.end();
                break;
            case 'GET':
                resFun(res,headers);
                break;
            case 'POST':
                req.on('end',()=>{
                    const title = JSON.parse(body);
                    console.log(title);
                })
                
                // resFun(res);
                break;
            
        }
    }else{
        res.writeHead(404, headers);
        res.write(JSON.stringify({
            "status": "false",
            "massage": "無此網站路由"
        }));
        res.end();
    }

    // if (req.url === '/todos' && req.method === 'GET') {
    //     res.writeHead(200, headers);
    //     res.write(JSON.stringify({
    //         "status": "success",
    //         "data": todos
    //     }));
    //     res.end();
    // } else if (req.method == "OPTIONS") {
    //     res.writeHead(200, headers);
    //     res.end();
    // }else if (req.method == "POST") {
    //     res.writeHead(200, headers);
    //     res.end();
    // }
    // else {
    //     res.writeHead(404, headers);
    //     res.write(JSON.stringify({
    //         "status": "false",
    //         "massage": "無此網站路由"
    //     }));
    //     res.end();
    // }

}

function resFun(res,headers){
    res.writeHead(200, headers);
    res.write(JSON.stringify({
        "status": "success",
        "data": todos
    }));
    res.end();
}

const server = http.createServer(requsetListener);

server.listen(8081);
