const drinkSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, '產品名稱未填寫']
    },
    price: {
        type: Number,
        required: [true, '價錢未填寫']
    },
    ice: {
        type: String,
        default: '正常冰'
    },
    sugar: {
        type: String,
        default: '全糖'
    },
    toppings: {
        type: [String],
    }
});

/**以下為Day7答案 */
const drink = mongoose.model('drink', drinkSchema);

const newDrink = new drink({
    product: '鮮奶茶',
    price: 55,
    sugar: '微糖'
});
newDrink.save()
    .then(() => { console.log('新增資料成功') })
    .catch((error) => { console.log(error) })

// 或另一種方式

drink.create({
    product: '鮮奶茶',
    price: 55,
    sugar: '微糖'
})