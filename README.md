## scroll-bottom

Calculate & return bottom position of the vertical scroll

## Install

```bash
$ npm install scroll-bottom
```

## Usage

Simply require and call it.

```js
var scrollBottom = require('scroll-bottom')
var on = require('dom-event')

on(window, 'scroll', function () {
  console.log('scroll bottom =', scrollBottom())
})
```
