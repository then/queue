'use strict';

module.exports = ThenQueue
module.exports.default = ThenQueue

function ThenQueue() {
  if (!(this instanceof ThenQueue)) return new ThenQueue()
  this._items = new SimpleQueue();
  this._waiting = new SimpleQueue();
  this.length = 0
}

ThenQueue.prototype.push = function push(item) {
  this.length++

  var waiting = this._waiting.shift()
  if (waiting) {
    waiting(item)
  }
  else {
    this._items.push(item)
  }
}

ThenQueue.prototype.shift = function shift() {
  this.length--

  var item = this._items.shift()
  if (item) {
    return Promise.resolve(item)
  }
  else {
    var waiting = this._waiting
    return new Promise(function(resolve) {
      waiting.push(resolve)
    })
  }
}

function SimpleQueue() {
  this._head = [];
  this._tail = [];
}
SimpleQueue.prototype.push = function push(item) {
  this._tail.push(item);
}
SimpleQueue.prototype.shift = function shift() {
  if (this._head.length !== 0) {
    return this._head.pop();
  }
  if (this._tail.length === 1) {
    return this._tail.pop();
  }
  if (this._tail.length > 1) {
    var temp = this._tail.reverse()
    this._tail = this._head
    this._head = temp
    return this._head.pop();
  }
  return undefined;
}
