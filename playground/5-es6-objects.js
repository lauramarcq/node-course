//THIS IS FROM LESSON 39

// const name = 'Andrew'
// const userAge = 27
// const user = {
//     name,
//     age: userAge,
//     location: 'Philadelphia'
// }
// console.log(user)

//object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 301,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

//TO RENAME VARIABLES FROM OBJECTS
// const {label:productLabel, stock} = product

// console.log(label)
// console.log(stock)

//TO SET DEFAULT VALUES
// const {label, stock, rating = 4} = product

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)