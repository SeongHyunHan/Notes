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
    node.addNote(argv.title, argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Command Not Recognized');
}