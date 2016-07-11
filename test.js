'use strict'

/* global it */

const assert = require('assert')
const remap = require('.')

it('should remap correctly', () => {
  let a = 7
  let e = 5
  let i = 5
  let o = 8
  let u = 6
  let c = 4
  let z = 3
  let s = 4
  let n = 2
  let y = 2
  let g = 2
  let r = 1
  let l = 1
  let d = 1
  let ss = 1
  let th = 1
  let h = 1
  let j = 1

  for (let index = 0; index <= 65535; ++index) {
    switch (remap(String.fromCharCode(index))) {
      case 'a': --a; break
      case 'e': --e; break
      case 'i': --i; break
      case 'o': --o; break
      case 'u': --u; break
      case 'c': --c; break
      case 'z': --z; break
      case 's': --s; break
      case 'n': --n; break
      case 'y': --y; break
      case 'g': --g; break
      case 'r': --r; break
      case 'l': --l; break
      case 'd': --d; break
      case 'ss': --ss; break
      case 'th': --th; break
      case 'h': --h; break
      case 'j': --j; break
      case '': break
      default: throw new Error('shouldn\'t reach here')
    }
  }

  assert.equal(a, 0)
  assert.equal(e, 0)
  assert.equal(i, 0)
  assert.equal(o, 0)
  assert.equal(u, 0)
  assert.equal(c, 0)
  assert.equal(z, 0)
  assert.equal(s, 0)
  assert.equal(n, 0)
  assert.equal(y, 0)
  assert.equal(g, 0)
  assert.equal(r, 0)
  assert.equal(l, 0)
  assert.equal(d, 0)
  assert.equal(ss, 0)
  assert.equal(th, 0)
  assert.equal(h, 0)
  assert.equal(j, 0)
})
