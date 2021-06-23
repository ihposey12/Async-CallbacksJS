//callback hell

let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
}

const order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
        call_production()
    }, 2000)
}

const production = () => {
    setTimeout(() => {
        console.log('production has started')
        setTimeout(() => {
            console.log('The fruit has been chopped')
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log('Start the machine')
                    setTimeout(() => {
                        console.log(`Ice Cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log('serve ice cream')
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
}

order(0, production)