
# css-inject
[![package version](https://img.shields.io/npm/v/css-inject.svg?style=flat-square)](https://npmjs.org/package/css-inject)
[![package downloads](https://img.shields.io/npm/dm/css-inject.svg?style=flat-square)](https://npmjs.org/package/css-inject)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/css-inject.svg?style=flat-square)](https://npmjs.org/package/css-inject)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/css-inject.svg)](https://greenkeeper.io/)

> Inject CSS rules into the head above any other stylesheets

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install css-inject
$ # OR
$ yarn add css-inject
```

## Usage

```js
import ccInject from 'css-inject'

const rules = `
  body { background: tomato; }
  div { padding: 10px; }
`

const remove = cssInject(rules)

// To remove style again
remove()
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    