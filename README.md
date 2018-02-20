# React Breakpoints (react-brk)

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## About

Easy, ready to use, well defined, react media queries taken from [react-responsive](https://github.com/contra/react-responsive) and packed here.

This package lacks originality and does not introduce anything new.

It's just a wrapper of [react-responsive](https://github.com/contra/react-responsive) made for convinience, just plug and play.

All the credit goes to the folks of [react-responsive](https://github.com/contra/react-responsive).

## Why this

Instead of a normal css query, this will render or not your react component based on the size of the device.

## Installation

`npm install react-brk --save`

`yarn add react-brk`

## Breakpoints

`Desktop` minWidth: 992

`Tablet` minWidth: 768, maxWidth: 991

`Mobile` maxWidth: 767

`Default` minWidth: 768

## Example

```js
import { Desktop, Tablet, Mobile, Default } from 'react-brk'

  const app = () => (
    <div>
      <Desktop>
        <div>Desktop (width > 992px)</div>
      </Desktop>
      <Tablet>
        <div>Tablet (768 < width < 991)</div>
      </Tablet>
      <Mobile>
        <div>Mobile (width < 767)</div>
      </Mobile>
      <Default>
        <div>Default (width > 768)</div>
      </Default>
    </div>
  )
  ```


[build-badge]: https://img.shields.io/travis/Woile/react-brk/master.png?style=flat-square
[build]: https://travis-ci.org/Woile/react-brk

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-brk

[coveralls-badge]: https://img.shields.io/coveralls/Woile/react-brk/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/Woile/react-brk
