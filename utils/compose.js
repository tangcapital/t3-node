function pipe () {
  const fns = Array.from(arguments)
  return function (v) {
    return fns.reduce(function (acc, fn) {
      return fn(acc)
    }, v)
  }
}

function compose () {
  const fns = Array.from(arguments)
  return function (v) {
    return fns.reduceRight(function (acc, fn) {
      return fn(acc)
    }, v)
  }
}

function curry (fn) {
  const arity = fn.length
  return function curried () {
    const args = Array.from(arguments)
    if (args.length >= arity) {
      return fn.apply(null, args)
    } else {
      return function () {
        return curried.apply(null, args)
      }
    }
  }
}

module.exports = {
  compose,
  pipe,
  curry
}
