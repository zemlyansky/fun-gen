const f1 = [
  Math.exp,
  Math.abs,
  Math.cos,
  Math.sin,
  Math.tan,
  Math.log,
  (a) => a * a,
  (a) => a * a * a
]

const f2 = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b
]

const randint = (n) => Math.floor(Math.random() * n)

const sample = (x) => x[randint(x.length)]

const fungen = (n, ps = [0.2, 0.2, 0.2, 0.3], start = true) => {
  const p = Math.random()
  if (p < ps[0] || start) {
    // Generate function of 2 args
    const f = sample(f2)
    const a = fungen(n, ps, false)
    const b = fungen(n, ps, false)
    return (x) => f(a(x), b(x))
  } else if (p < ps[0] + ps[1]) {
    // Generate function of 1 arg
    const f = sample(f1)
    const a = fungen(n, ps, false)
    return (x) => f(a(x))
  } else if (p < ps[0] + ps[1] + ps[2]) {
    // Generate function that return one of xs
    const i = randint(n)
    return (x) => x[i]
  } else {
    // Generate function that return const
    const num = Math.random() * 10
    return (x) => num
  }
}

module.exports = fungen
