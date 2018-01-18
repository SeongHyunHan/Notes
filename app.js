// Built-in Modules
const fs = require('fs');

// 3rd Party Modules
const _ = require('lodash');
const yargs = require('yargs');

// Custom Modules
const notes = require('./notes');

const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

// Getting Arugment using Yargs module
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body:{
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    }).command('read', 'Read a note', {
        title: titleOption
    }).command('list', 'List all notes')
    .command('remove', 'Remove note', {
        title: titleOption
    }).help().argv;

// Getting Argument in CLI
var command = yargs._[0];

if(command === 'add'){
    var note = node.addNote(argv.title, argv.body);
    if(note){
        console.log('Adding Note Successful');
        notes.logNote(note);
    }else{
        console.log('Adding Note Failed');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found!');
        notes.logNote(note);
    }else{
        console.log("Note not found!");
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command Not Recognized');
}