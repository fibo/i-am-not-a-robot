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

Why not reCAPTCHA? Cause then you should deal with its *Terms of Service*
and *Privacy Policy*: this is the **main feature**.

I would like to achieve the following features:

* more games: a bot can play one game, its intelligence is not multi purpouse.
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

In case you use the dist build, you will find a global variable available: `Iamnotarobot`.

## Usage

Suppose you have a div like this

```html
<div id="antispam"></div>
```

Then you can mount *ticTacToe* game with the following code. The callback
will be triggered when on game end, regardeless of whether or not user
win or loses.

```javascript
const game = require('i-am-not-a-robot').ticTacToe

const callback = () => {
  // Usually you may want to enable a submit button here.
  alert('You are not a robot')
}

game(document.getElementById('antispam'), callback)
```

## Demo

See [online demo](http://g14n.info/i-am-not-a-robot/demo/index.html)
or launch demo locally

```bash
npm install
npm run start
```

## License

[MIT](http://g14n.info/mit-license/)

