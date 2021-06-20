let shopOpen = true
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
}

const time = (ms) => {
    return new Promise((res, rej) => {
        if(shopOpen) {
            setTimeout(res, ms)
        } else {
            rej(console.log('shop is closed'))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log('production has started')

        await time(2000)
        console.log('fruit has been chopped')

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
        
        await time(1000)
        console.log('start the machine')

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log('serve ice cream')
    }
    catch(error) {
        console.log('Come back later', error)
    }
    finally{
        console.log('Welcome to the Ice Cream Shop!')
    }
}

kitchen()