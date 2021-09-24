const data = {
    "result": {
        "Brand1": {
            "sum": 284,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 70,
                    "price": 93281
                },
                {
                    "date": "2021-09-09",
                    "quantity": 79,
                    "price": 119153
                },
                {
                    "date": "2021-09-10",
                    "quantity": 48,
                    "price": 66768
                },
                {
                    "date": "2021-09-11",
                    "quantity": 51,
                    "price": 71113
                },
                {
                    "date": "2021-09-12",
                    "quantity": 36,
                    "price": 56294
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        },
        "Brand2": {
            "sum": 481,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 136,
                    "price": 138679
                },
                {
                    "date": "2021-09-09",
                    "quantity": 134,
                    "price": 157216
                },
                {
                    "date": "2021-09-10",
                    "quantity": 101,
                    "price": 124991
                },
                {
                    "date": "2021-09-11",
                    "quantity": 66,
                    "price": 78118
                },
                {
                    "date": "2021-09-12",
                    "quantity": 44,
                    "price": 46562
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        },
        "Brand3": {
            "sum": 218,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 40,
                    "price": 41760
                },
                {
                    "date": "2021-09-09",
                    "quantity": 36,
                    "price": 38720
                },
                {
                    "date": "2021-09-10",
                    "quantity": 34,
                    "price": 34648
                },
                {
                    "date": "2021-09-11",
                    "quantity": 65,
                    "price": 70793
                },
                {
                    "date": "2021-09-12",
                    "quantity": 43,
                    "price": 35368
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        },
        "total": {
            "sum": 983,
            "data": [
                {
                    "date": "2021-09-08",
                    "quantity": 246,
                    "price": 273720
                },
                {
                    "date": "2021-09-09",
                    "quantity": 249,
                    "price": 315089
                },
                {
                    "date": "2021-09-10",
                    "quantity": 183,
                    "price": 226407
                },
                {
                    "date": "2021-09-11",
                    "quantity": 182,
                    "price": 220024
                },
                {
                    "date": "2021-09-12",
                    "quantity": 123,
                    "price": 138224
                },
                {
                    "date": "2021-09-13",
                    "quantity": 0,
                    "price": 0
                }
            ]
        }
    }
}

const quantityOutput = [];
const priceOutput = [];

const brands = Object.entries(data.result);
brands.pop();

function getBrandsDataByDate(date) {
    return brands.reduce((accumulator, currentValue)  => {
        const key = currentValue[0];
        const value = currentValue[1].data.find(item => item.date === date);
        accumulator[0][key] = value.quantity;
        accumulator[1][key] = value.price;
        return accumulator;
    }, [{}, {}])
}

data.result.total.data.forEach(item => {
    const dateData = getBrandsDataByDate(item.date)

    quantityOutput.push({name: item.date, ...dateData[0], total: item.quantity})
    priceOutput.push({name: item.date, ...dateData[1], total: item.price})
})
