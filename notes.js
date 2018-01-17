const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    //Set try-catch statement for if file exist or contain corrupted data
    try{
        //Get Existing Note
        var noteString = fs.readFileSync('note-data.json');
        //Store into notes array
        notes = JSON.parse(noteString);
    }catch(e){
    }

    // Check title (Unique Value) is duplicated
    var duplicateNotes = notes.filter((note) => note.title === title);
    // identical (note) => {return note.title === title;}

    if(duplicateNotes.length === 0){
        //Push new note to notes array
        notes.push(note);
        //Write into json file
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting Note by title', title);
};

var removeNote = (title) => {
    console.log('Removing Note by title', title);
};

module.exports = {
    addNote, //Identical to addNote: addNote
    getAll,
    getNote,
    removeNote
};