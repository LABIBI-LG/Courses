/** 基本promise處理非同步 */
function getData(name, haveErr) {
    return new Promise((resolve, reject) => {
        console.log('開始處理程式');
        // 模擬非同步行為
        setTimeout(() => {
            if (!haveErr) {
                resolve(`${name}成功了`);
            } else {
                reject(`${name}失敗了`);
            }
        }, 1000)
    })
}
getData('小明', false)
    .then((res) =>console.log(res))
    .catch((err) => console.log(err))

/** promise橫跨兩個非同步(依照順序執行) */
function getData(name, haveErr) {
    return new Promise((resolve, reject) => {
        console.log('開始處理程式');
        // 模擬非同步行為
        setTimeout(() => {
            if (!haveErr) {
                resolve({
                    name: name,
                    text: '成功了'
                });
            } else {
                reject({
                    name: name,
                    text: '失敗了'
                });
            }
        }, 1000)
    })
}
function getText(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            if(data.text === '成功了'){
                resolve(`${data.name}他${data.text}`);
            }else{
                reject(`${data.name}他${data.text}`);
            }
        }, 1000)
    })
}
getData('小明', true)
    .then((res) => getText(res))
    .then((text) => console.log(text))
    .catch((err) => console.log(err))


/** 改寫上方程式使用 async await */

function getData(name, haveErr) {
    return new Promise((resolve, reject) => {
        console.log('開始處理程式');
        // 模擬非同步行為
        setTimeout(() => {
            if (!haveErr) {
                resolve({
                    name: name,
                    text: '成功了'
                });
            } else {
                reject({
                    name: name,
                    text: '失敗了'
                });
            }
        }, 1000)
    })
}
function getText(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            if(data.text === '成功了'){
                resolve(`${data.name}他${data.text}`);
            }else{
                reject(`${data.name}他${data.text}`);
            }
        }, 1000)
    })
}

const init = async function(){
    // async、await的方式需要使用try catch來寫(這樣才能抓到error)
    try{
        const data = await getData('小明', false);
        const text = await getText(data);
        console.log(text);
    }catch(err){
        console.log(err);
    }
}
init();

/** 使用promise all 來同時處理多個非同步 */

function getScore(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const score = Math.round(Math.random()*100);
            resolve({
                name: name,
                score: score
            })
        }, 1000)

    })
}
Promise.all([getScore('小明'), getScore('小天'), getScore('小才')])
    .then((res) => console.log(res))


/** fetch方式 網絡發送 HTTP 請求，並返回一個 Promise 物件*/
//https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json
const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))



/** XMLHttpRequest 方式寫網絡發送 HTTP 請求*/
//https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json
const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = () => console.log(xhr.responseText);
xhr.onerror = () => console.log(xhr.responseText);
xhr.send();

/** 用Promise改寫XMLHttpRequest */
//https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json
function init() {
    return new Promise((resolve, reject) => {
        const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.responseText);
        xhr.send();
    })
}
init()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

/** 改成用 axios.get */
//https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json
const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
const axios = {
    get: function (url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.responseText);
            xhr.send();
        })
    }
}
axios.get(url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))