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
    // 取得body資料
    req.on('data', chunk => { 
        body += chunk;
    })
    /**preflight options API 檢查機制 */
    if (req.method == 'OPTIONS') {
        res.writeHead(200, headers);
        res.end();
    } else if (req.method == 'GET' && req.url === '/todos') {
        resFun(res, headers, 200);
    } else if (req.method == 'POST' && req.url === '/todos') {
        // 確保取得body已結束後
        req.on('end', () => {
            try {
                const title = JSON.parse(body).title;
                if (!!title) {
                    todos.push({
                        "title": title,
                        "id": uuidv4()
                    });
                    resFun(res, headers, 200);
                } else {
                    errorHandle(res);
                }
            } catch (error) {
                errorHandle(res);
            }
        })
    } else if (req.method == 'DELETE' && (req.url === '/todos' || req.url.startsWith('/todos/'))) {
        if (req.url === '/todos') {
            todos.length = 0; // 可直接將陣列資料全刪除
            resFun(res, headers, 200);
        } else if (req.url.startsWith('/todos/')) {
            const index = getReqIndex(req.url);
            if (index !== -1) {
                todos.splice(index, 1); // 將資料刪除第 index索引的資料，1筆
                resFun(res, headers, 200);
            } else {
                resFun(res, headers, 404);
            }
        }
    } else if (req.method == 'PATCH' && req.url.startsWith('/todos/')) {
        const index = getReqIndex(req.url);
        if (index !== -1) {
            req.on('end', () => {
                try {
                    const title = JSON.parse(body).title;
                    if (!!title) {
                        todos[index].title = JSON.parse(body).title;
                        resFun(res, headers, 200);
                    } else {
                        errorHandle(res);
                    }
                } catch (error) {
                    errorHandle(res);
                }
            })
        } else {
            resFun(res, headers, 404);
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

function getReqIndex(url) {
    // split 將 url 用 '/' 切成陣列 ex: /todos/123 => ['','todos','123']
    // pop 將取得陣列最後一筆資料 根據上方例子會取得 '123'
    const id = url.split('/').pop();
    return todos.findIndex(ele => ele.id === id);
}

const server = http.createServer(requsetListener);

server.listen(8081);
