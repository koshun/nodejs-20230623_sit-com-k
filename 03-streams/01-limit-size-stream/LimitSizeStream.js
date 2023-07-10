const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
<<<<<<< HEAD
    this.limit = options.limit;
    this.size = 0;
  }

  _transform(chunk, encoding, callback) {
   this.size += chunk.length;
=======

    this.limit = options.limit;
    this.size = 0;
    this.isObjectMode = !!options.readableObjectMode;
  }

  _transform(chunk, encoding, callback) {
    if (this.isObjectMode) {
      this.size += 1;
    } else {
      this.size += chunk.length;
    }
>>>>>>> 608936756b3a740e8e68c5c07551cefb6d08c216

    if (this.size > this.limit) {
      callback(new LimitExceededError());
    } else {
      callback(null, chunk);
    }
  }
}
module.exports = LimitSizeStream;
