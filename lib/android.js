const fs = require('fs')
const path = require('path')

const buf = fs.readFileSync('/proc/self/cmdline')
const cmdline = buf.subarray(0, buf.indexOf(0)).toString()

const inApp = cmdline.includes('.')

if (inApp) {
  const appdir = path.join('/data', 'user', '0', cmdline)

  exports.persistent = function persistent() {
    return path.join(appdir, 'files')
  }

  exports.ephemeral = function ephemeral() {
    return path.join(appdir, 'cache')
  }
} else {
  exports.persistent = function persistent() {
    return path.join('/storage', 'emulated', '0', 'Documents')
  }

  exports.ephemeral = function ephemeral() {
    return path.join('/data', 'local', 'tmp')
  }
}
