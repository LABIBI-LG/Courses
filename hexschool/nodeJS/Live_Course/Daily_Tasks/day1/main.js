const checkScore = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const score = Math.round(Math.random() * 100);
            if (score >= 60) {
                resolve(`${score} => 及格`);
            } else {
                reject(`${score} => 不及格`);
            }
        }, 1000)
    })
}

checkScore()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
