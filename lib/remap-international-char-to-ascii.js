function remapInternationalCharToAscii (c) {
  if      ('àáâäãåą' .indexOf(c) != -1) return 'a'
  else if ('èéêëę'   .indexOf(c) != -1) return 'e'
  else if ('ìíîïı'   .indexOf(c) != -1) return 'i'
  else if ('òóôõöøőð'.indexOf(c) != -1) return 'o'
  else if ('ùúûüŭů'  .indexOf(c) != -1) return 'u'
  else if ('çćčĉ'    .indexOf(c) != -1) return 'c'
  else if ('żźž'     .indexOf(c) != -1) return 'z'
  else if ('śşšŝ'    .indexOf(c) != -1) return 's'
  else if ('ñń'      .indexOf(c) != -1) return 'n'
  else if ('ýÿ'      .indexOf(c) != -1) return 'y'
  else if ('ğĝ'      .indexOf(c) != -1) return 'g'
  else if ('ř' == c) return 'r'
  else if ('ł' == c) return 'l'
  else if ('đ' == c) return 'd'
  else if ('ß' == c) return 'ss'
  else if ('Þ' == c) return 'th'
  else if ('ĥ' == c) return 'h'
  else if ('ĵ' == c) return 'j'
  else return ''
}

module.exports = remapInternationalCharToAscii

