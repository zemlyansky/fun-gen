const fungen = require('.')

const p = 5
const n = 1000
const X = []
const y = []
const f = fungen(p)

let res = (new Array(p)).fill('x').map((v, i) => v + (i + 1)).join(',') + ',y\n'

for (let i = 0; i < n; i += 1) {
  const xi = new Array(p).fill(0).map(v => Math.random())
  const yi = f(xi)
  X.push(xi)
  y.push(yi)
  res += (xi.join(',') + ',' + yi + '\n')
}

console.log(res)
