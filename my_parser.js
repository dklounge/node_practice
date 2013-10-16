// Scripting example
// http://blog.modulus.io/absolute-beginners-guide-to-nodejs

// Require parser.js file.
var Parser = require('./parser');

// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory
fs.readFile('example_log.txt', function(err, logData) {

  // Error handling
  if (err) throw err;

  // logData is a Buffer, convert to string.
  var text = logData.toString();

  // Create a parser object instance
  var parser = new Parser();


  console.log(parser.parse(text));
});
