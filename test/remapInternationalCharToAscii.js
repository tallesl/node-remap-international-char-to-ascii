var assert                        = require('assert')
  , remapInternationalCharToAscii = require('../lib/remapInternationalCharToAscii')

it('should remap correctly', function () {
  var a  = 7
    , e  = 5
    , i  = 5
    , o  = 8
    , u  = 6
    , c  = 4
    , z  = 3
    , s  = 4
    , n  = 2
    , y  = 2
    , g  = 2
    , r  = 1
    , l  = 1
    , d  = 1
    , ss = 1
    , th = 1
    , h  = 1
    , j  = 1

  for (var index = 0; index <= 65535; ++index) {
    var current    = String.fromCharCode(index)
      , normalized = remapInternationalCharToAscii(current)
    switch (normalized) {
      case  'a':  --a ; break
      case  'e':  --e ; break
      case  'i':  --i ; break
      case  'o':  --o ; break
      case  'u':  --u ; break
      case  'c':  --c ; break
      case  'z':  --z ; break
      case  's':  --s ; break
      case  'n':  --n ; break
      case  'y':  --y ; break
      case  'g':  --g ; break
      case  'r':  --r ; break
      case  'l':  --l ; break
      case  'd':  --d ; break
      case 'ss': --ss ; break
      case 'th': --th ; break
      case  'h':  --h ; break
      case  'j':  --j ; break
      case   '':      ; break
      default: throw new Error('shouldn\'t reach here')
    }
  }

  assert.equal(a,  0)
  assert.equal(e,  0)
  assert.equal(i,  0)
  assert.equal(o,  0)
  assert.equal(u,  0)
  assert.equal(c,  0)
  assert.equal(z,  0)
  assert.equal(s,  0)
  assert.equal(n,  0)
  assert.equal(y,  0)
  assert.equal(g,  0)
  assert.equal(r,  0)
  assert.equal(l,  0)
  assert.equal(d,  0)
  assert.equal(ss, 0)
  assert.equal(th, 0)
  assert.equal(h,  0)
  assert.equal(j,  0)
})

