const http = require('http');
const { v4: uuidv4 } = require('uuid');
const errorHandle = require('./errorHandle');
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

    let body = '';
    req.on('data', chunk => {
        body += chunk;
    })
    console.log(req.url);
    if (req.url === '/todos') {
        switch (req.method) {
            case 'OPTIONS':
                res.writeHead(200, headers);
                res.end();
                break;
            case 'GET':
                resFun(res, headers, 200);
                break;
            case 'POST':
                req.on('end', () => {
                    try {
                        todos.push({
                            "title": JSON.parse(body).title,
                            "id": uuidv4()
                        });
                        resFun(res, headers, 200);
                    } catch (error) {
                        errorHandle(res);
                    }

                })
                break;
            case 'DELETE': 
                const id = req.url.startsWith('/todos/').split('/').pop();
                console.log(id);
                // // todos.length = 0;
                resFun(res, headers, 200);
                break;

        }
    } else {
        resFun(res, headers, 404);
    }
}

function resFun(res, headers, status) {
    switch (status) {
        case 200:
            res.writeHead(200, headers);
            res.write(JSON.stringify({
                "status": "success",
                "data": todos
            }));
            break;
        case 404:
            res.writeHead(404, headers);
            res.write(JSON.stringify({
                "status": "false",
                "massage": "沒有此路由"
            }));
            break;

    }
    res.end();
}

const server = http.createServer(requsetListener);

server.listen(8081);
