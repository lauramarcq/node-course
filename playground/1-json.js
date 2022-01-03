

//LESSON 18
//THIS IS DATA IN A JAVASCRIPT OBJECT. IT HAS TO BE CONVERTED TO A STRING JSON SO THAT IT CAN BE SAVED
//TO THE FILE SYSTEM fs. CORE MODULE ONLY WORKS WITH STRING DATA (JSON)
// const book = {
//     title: '100 anos de soledad',
//     author: 'gabriel garcia marquez'
// }

//LESSON 18 FROM MINUTE 6

//JSON.stringify() //THIS TAKES IN ANY VALUE AND RETURNS A JSON STRING

// const bookJSON = JSON.stringify(book) 
// console.log(bookJSON)

//NOW bookJASON IS A STRING AND NOT AN OBJECT. YOU CAN'T ACCESS PROPERTIES WITH IT.
//ONLY THE VARIABLE book CAN ACCESS PROPERTIES LIKE book.title

//JSON.parse()  PARSES THE JSON DATA BACK TO AN OBJECT

// const parsedData  = JSON.parse(bookJSON)
// console.log(parsedData.title)
// this returns the parsed string back as a javascript object

// LESSON 18 FROM MINUTE 8

//CREATE A NEW FILE. FIRST ARGUMENT IS FILE  NAME, SECOND ARGUMENT IS DATA TO PASS TO THAT FILE:

// fs.writeFileSync('1-json.json', bookJSON)
// THIS IS A JSON FILE. HENCE .JSON

//READ THE FILE 
//fs.readFileSync('1-json.json) //read the file
//the data returned here is not json or an object it is a buffer

//STORE THE BINARY BUFFER DATA IN A VARIABLE
// const dataBuffer = fs.readFileSync('1-json.json')
//this is not a string it is binary data json uses as a buffer
// console.log(dataBuffer)

//NOW WE NEED TO CONVERT THAT BUFFER INTO A STRING USING THE .toString() METHOD
// const dataJSON = dataBuffer.toString()
// this turns binary data into a string 
// console.log(dataBuffer.toString())

//NOW WE CAN TURN THAT STRIN dataJSON INTO AN OBJECT WITH JSON.parse() TO ACCESS OTHER METHODS
// const data = JSON.parse(dataJSON)
//this parses the string data into an object we can access
// console.log(data.title)

//CHALLENGE MINUTE 14
const fs = require('fs')

const dataBuffer =  fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'laura'
data.age = '36'

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)


