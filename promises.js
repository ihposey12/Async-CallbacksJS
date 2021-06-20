let isShopOpen = false

let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
}

const order = (time, work) => {
    return new Promise((res, rej) => {
        if(isShopOpen) {
            setTimeout(() => {
                res(work())
            }, time)
        } else {
            rej(console.log('Our Shop is Closed.'))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
.then(() => {
    return order(0000, () => console.log('production has started'))
})
.then(() => {
    return order(2000, () => console.log('Fruit has been chopped'))
})
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(() => {
    return order(1000, () => console.log('start the machine'))
})
.then(() => {
    return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[1]}`))
})
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
})
.then(() => {
    return order(2000, () => console.log('Serve ice cream'))
})

.catch(() => {
    console.log("Customer Left")
})

.finally(() => {
    console.log('end of day')
})