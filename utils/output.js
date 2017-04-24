function output (message) {
  process.stdout.write(`${message}\n`)
}

output.style = function (m, s) {
  return (s || [])
  .filter(valid)
  .reduce(style, m)
}

function style (m, s) {
  return `\x1b[${output[s]}${m}\x1b[0m`
}

function valid (s) {
  return output[s]
}

output.bold = '1m'
output.underline = '4m'
output.strikethrough = '5m'
output.black = '30m'
output.red = '31m'
output.green = '32m'
output.yellow = '33m'
output.blue = '34m'
output.magenta = '35m'
output.cyan = '36m'
output.white = '37m'
output.bg_black = '40m'
output.bg_red = '41m'
output.bg_green = '42m'
output.bg_yellow = '43m'
output.bg_blue = '44m'
output.bg_magenta = '45m'
output.bg_cyan = '46m'
output.bg_white = '47m'

module.exports = output
