# i-am-not-a-robot

> cause I can play games

[Features](#features) |
[Installation](#installation) |
[Usage](#usage) |
[Demo](#demo) |
[License](#license)

[![NPM version](https://badge.fury.io/js/i-am-not-a-robot.svg)](http://badge.fury.io/js/i-am-not-a-robot)
[![Badge size](https://badge-size.herokuapp.com/fibo/i-am-not-a-robot/master/dist/i-am-not-a-robot.min.js)](https://github.com/fibo/i-am-not-a-robot/blob/master/dist/i-am-not-a-robot.min.js)
[![No deps](https://img.shields.io/badge/dependencies-none-green.svg)](https://github.com/fibo/i-am-not-a-robot)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

I would like to achieve the following features:

* customization: cause it is fun to have your own anti spam system.
* accessibility: it would be really sad if some human would be considered a robot.

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install i-am-not-a-robot
```

or use a CDN

```html
<script src="https://unpkg.com/i-am-not-a-robot/dist/i-am-not-a-robot.min.js"></script>
```

## Usage

```javascript
const game = require('i-am-not-a-robot').ticTacToe

game(
  document.getElementById('antispam'),
  () => alert('You are not a robot')
)
```

## Demo

See [online demo](http://g14n.info/i-am-not-a-robot/demo.html)
or launch demo locally

```bash
npm install
npm run start
```

## License

[MIT](http://g14n.info/mit-license/)

