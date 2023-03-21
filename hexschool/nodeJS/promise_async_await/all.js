// function checkScore(name) {
//     return new Promise((resolve, reject) => {
//         console.log('正在批改作業');
//         setTimeout(() => {
//             const score = Math.round(Math.random() * 100);
//             resolve({
//                 name: name,
//                 score: score
//             })
//         }, Math.random() * 10000)
//     })
// }

// Promise.all([checkScore('小明'),checkScore('小華'),checkScore('小天')])
//     .then((data) => console.log(data))

// function checkReward(data) {
//     return new Promise((resolve, reject) => {
//         console.log('正在選擇獎品');
//         setTimeout(() => {
//             if (data.score >= 90) {
//                 resolve(`${data.name}${data.score}分=>獲得了電影票`);
//             }else if(data.score < 90 && data.score >= 60){
//                 resolve(`${data.name}${data.score}分=>獲得了嘉獎`);
//             }else{
//                 reject(`${data.name}${data.score}分=>沒有獎品慘朝毒打!`)
//             }
//         }, 1000)
//     })
// }

// // checkScore('小明')
// //     .then((data) => checkReward(data))
// //     .then((reward) => console.log(reward))
// //     .catch((error) => console.log(error))

// // async、await 寫法
// const init = async function(){
//     try{
//         const score = await checkScore('小明');
//         const reward = await checkReward(score);
//         console.log(reward);
//     }catch(error){
//         console.log(error);
//     }
// }
// init();


/**fetch*/
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

/**XMLHttpRequest*/
// const url = 'https://1raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// const xhr = new XMLHttpRequest();
// xhr.open("GET",url);
// xhr.onload = () => console.log(xhr.responseText);
// xhr.onerror = () => console.log(xhr.responseText);
// xhr.send();

/**用Promise改寫XMLHttpRequest*/
// const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// function getData() {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.responseText);
//         xhr.send();
//     })
// }

// getData()
//     .then((data)=> console.log(data))
//     .catch((err) => console.log(err))

/**改成用 axios.get*/
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
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


