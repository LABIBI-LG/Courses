const checkScore = (name) => {
    return new Promise((resolve, reject) => {
        console.log('正在批改作業');
        setTimeout(() => {
            const score = Math.round(Math.random() * 100);
            resolve({
                name: name,
                score: score
            });
        }, 2000)
    })
}

checkScore('小明')
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
