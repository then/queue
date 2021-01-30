# then-queue

  a simple asynchronous queue

[![Build Status](https://img.shields.io/travis/then/queue/master.svg)](https://travis-ci.org/then/queue)
[![NPM version](https://img.shields.io/npm/v/then-queue.svg)](https://www.npmjs.com/package/then-queue)

## Installation

    npm install then-queue

## API

### new Queue()

```js
var Queue = require('then-queue');
var q = new Queue();
```

  A fresh queue!

### queue.push(item)

  Push an item onto the queue

### queue.shift() -> Promise Item

  Remove an item from the queue

### queue.length

  Amount of items in the queue (note that this can be negative if `shift` has been called more times than `push`).
