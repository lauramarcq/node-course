//THIS WAS CREATED DURING LESSON 10 and updated during lesson 19
const { notStrictEqual } = require('assert')
const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
//     return 'Your notes...'
// }
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title)
    //THIS IS BETTER THAN FILTER BECAUSE IT STOPS AT THE FIRST INSTANCE,
    //WHILE FILTER WILL SEARCH ALL INSTANCES
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }   
}

const removeNote = (title) => {
    const allNotes = loadNotes()
    // const filtered = allNotes.filter(function (note) {
    //     return note.title !== title
    // })
    const filtered = allNotes.filter( (note) => note.title !== title)
    if (allNotes.length > filtered.length){
        console.log(chalk.green.inverse('Note has been removed'))
        saveNotes(filtered)
    } else {
        console.log(chalk.red.inverse('No note found or removed'))
    }
}

const listNotes = ()=> {
    const notes = loadNotes()
    console.log('Your notes:')
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title)=> {
    const notes = loadNotes()
    const noteMatch = notes.find((note) => note.title === title)
    if(noteMatch) {
        console.log(chalk.inverse(noteMatch.title))
    }else {
        console.log(chalk.inverse.red('Note not found'))
    }
    
}
//EXPORT VARIABLES TO APP.JS
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}