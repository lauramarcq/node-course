const yargs = require('yargs');
const notes = require('./notes.js')
// const validator = require('validator') //to validate input
const chalk = require('chalk')
yargs.version('1.1.0') 
// const getNotes = require('./notes.js')

//ADDED DURING LESSON 16 TO CHECK PARSED ARGUMENTS BY YARGS
console.log(yargs.argv);

//ADDED ALL THIS DURING LESSON 16 AND 17 - 24
// create add command: ADDED DURING LESSON 16
yargs.command({ //configuration object
    command: 'add', //NAME OF COMMAND
    describe: 'add a new note', //DESCRIPTION OF COMMAND
    builder: { //another property to represent options for the command 
        title: {
            describe: 'Note title',
            demandOption: true, //this is to say it is required
            type: 'string' // ENFORCE IT AS A STRING BECAUSE DEFAULT IS BOOLEAN
        },
        body: {
            describe: 'This is the body',
            demandOption: true,
            type: 'string'
                }
    },
    handler (argv) {
        //CHANGED DURING LESSON 19
        // console.log ('adding a new note', argv)
        // console.log('Title: ' + argv.title)
        notes.addNote(argv.title, argv.body) // THE CODE THAT RUNS WHEN PEOPLE USE THE ADD COMMAND
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
    
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    descibre: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
            }
        },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse(); //THIS PRINTS AND PARSES THE ARGUMENTS


//THIS IS CHALLENGE FROM LESSON 10: IMPORTING YOUR OWN FILES
// const getNotes = require('./notes.js');
// const newNotes = getNotes()
// console.log(newNotes);


//THIS IS FROM LESSON 11. IMPORTING NPM MODULES
// const validator = require('validator');
// console.log(validator.isEmail('email@example.com'))

//THIS IS FROM LESSON 12. PRINTING IN COLOR
console.log(chalk.green.bold.inverse('Sucess!'));

//THIS IS FROM LESSON 15. GETTING INPUT FROM USERS USING COMMAND LINE ARGUMENTS
// console.log(process.argv[1])
// const command = process.argv[2] //the third argument 'add' is provided in the command line
// if (command === 'add') {
//     console.log ('adding note')
// } else if (command === 'remove'){
//     console.log('removing note')
// }
