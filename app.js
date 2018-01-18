// Built-in Modules
const fs = require('fs');

// 3rd Party Modules
const _ = require('lodash');
const yargs = require('yargs');

// Custom Modules
const notes = require('./notes');

// Getting Arugment using Yargs module
const argv = yargs.argv;

// Getting Argument in CLI
var command = yargs._[0];

if(command === 'add'){
    var note = node.addNote(argv.title, argv.body);
    if(note){
        console.log('Adding Note Successful');
        console.log('-----------------');
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    }else{
        console.log('Adding Note Failed');
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log(note);
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