// Built-in Modules
const fs = require('fs');

// 3rd Party Modules
const _ = require('lodash');

// Custom Modules
const notes = require('./notes');

// Getting Argument in CLI
var command = process.argv[2];

console.log('Command ', command);

if(command === 'add'){
    console.log('Adding New Note');
}else if(command === 'list'){
    console.log('Listing All Notes');
}else if(command === 'read'){
    console.log('Reading Note');
}else if(command === 'remove'){
    console.log('Removing Note');
}else{
    console.log('Command Not Recognized');
}