const fs = require('fs');

var fetchNotes = () => {
    //Set try-catch statement for if file exist or contain corrupted data
    try{
        //Get Existing Note
        var noteString = fs.readFileSync('note-data.json');
        //Store into notes array
        return JSON.parse(noteString);
    }catch(e){
    }
};

var saveNotes = (notes) => {
    //Write into json file
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    // Fetch Notes
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    // Check title (Unique Value) is duplicated
    var duplicateNotes = notes.filter((note) => note.title === title);
    // identical (note) => {return note.title === title;}

    if(duplicateNotes.length === 0){
        //Push new note to notes array
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNote();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var getNote = notes.filter((note) => note.title === title);
    return getNote;
};

var removeNote = (title) => {
    //fetch note
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new note array
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('-------------------------');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
}

module.exports = {
    addNote, //Identical to addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
};