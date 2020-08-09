
module.exports = Phrase;
// Adds 'reverse' to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

String.prototype.blank = function () {
  return !!(this.match(/^\s*$/g));
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}
