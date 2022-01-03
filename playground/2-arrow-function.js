//NORMAL FUNCTION
// const square =  function (num) {
//     return num * num
// }

//ARROW FUNCTION
// const square = (num) => {
//     return num * num
// }

//ARROW FUNCTION IN ONE LINE NO NEED FOR KEY WORD RETURN
const square = (num) => num*num
console.log(square(5))

//ARROW FUNCTIONS AS PROPERTIES ON AN OBJECT
// const celebration = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }
// celebration.printGuestList()

//SAME FUNCTION IN ES6 = REMOVE WORD FUNCTION AND COLON.
//ARROW FUNCTIONS DONT HAVE ACCESS TO THE THIS KEY WORD 
//ARROW FUNCTIONS DON'T BIND THEIR OWN THIS VALUE. SO IN THIS CASE, THIS IS TAKEN FORM THE PARENT FUNCTION
const celebration = {
    name: 'Birthday Party',
    guestList: [jen, bob, pat],
    printGuestList () {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
celebration.printGuestList()

