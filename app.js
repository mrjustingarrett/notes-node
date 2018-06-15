const fs = require('fs'); // stores the fs module inside of the constant variable fs
const _ = require('lodash');//Calls the lodash module you loaded and stores in _
const yargs = require('yargs');

const notes = require('./notes.js');//stores the file notes.js inside of constant variable notes

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command == 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log();
    console.log('Note created');
    notes.logNote(note);
    console.log();
  } else {
    console.log();
    console.log('Note title taken');
}
} else if (command == 'list'){
  var allNotes = notes.getAll();
  console.log();
  console.log(`Printing ${allNotes.length} note(s).`);
  console.log();
  allNotes.forEach((note) => notes.logNote(note));
  console.log();

} else if (command == 'read'){
  var note = notes.getNote(argv.title);
  if (note) {
    console.log();
    console.log('Note found');
    notes.logNote(note);
    console.log();
  } else {
    console.log();
    console.log('Note not found');
  }
} else if (command == 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log();
  console.log(message);
  console.log();
} else {
  console.log();
  console.log('Command not recognized');
}
