function checkScore(name) {
    return new Promise((resolve, reject) => {
        console.log('正在批改作業');
        setTimeout(() => {
            const score = Math.round(Math.random() * 100);
            if (score >= 20) {
                resolve({
                    name: name,
                    score: score
                })
            } else {
                reject('慘招退學!')
            }
        }, 1000)
    })
}

function checkReward(data) {
    return new Promise((resolve, reject) => {
        console.log('正在選擇獎品');
        setTimeout(() => {
            if (data.score >= 90) {
                resolve(`${data.name}${data.score}分=>獲得了電影票`);
            }else if(data.score < 90 && data.score >= 60){
                resolve(`${data.name}${data.score}分=>獲得了嘉獎`);
            }else{
                reject(`${data.name}${data.score}分=>沒有獎品慘朝毒打!`)
            }
        }, 1000)
    })
}

// checkScore('小明')
//     .then((data) => checkReward(data))
//     .then((reward) => console.log(reward))
//     .catch((error) => console.log(error))

// async、await 寫法
const init = async function(){
    try{
        const score = await checkScore('小明');
        const reward = await checkReward(score);
        console.log(reward);
    }catch(error){
        console.log(error);
    }
}
init();
