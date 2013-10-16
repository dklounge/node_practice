// http://blog.modulus.io/absolute-beginners-guide-to-nodejs
// Paser constructor
var Parser = function() {

};

// Parses the text
Parser.prototype.parse = function(text) {
  var results = {};

  // Break lines
  var lines = text.split('\n');

  lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);

    if(!results[letter]) {
      results[letter] = 0;
    }

    results[letter] += parseInt(count);
  });

  return results;
};

// Export the Parser constructor
module.exports = Parser;
