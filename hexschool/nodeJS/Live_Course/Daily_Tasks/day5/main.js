const init = async function () {
    try {
        const data = await correctTest('小明');
        const reward = await checkReward(data)
        console.log(reward);
    } catch (err) {
        console.log(err);
    }
}
init();