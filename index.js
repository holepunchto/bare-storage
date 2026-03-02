const os = require('os')

const platform = os.platform()

let mod

switch (platform) {
  case 'darwin':
  case 'ios':
    mod = require('./lib/apple.js')
    break
  case 'linux':
    mod = require('./lib/linux.js')
    break
  case 'android':
    mod = require('./lib/android.js')
    break
  case 'win32':
    mod = require('./lib/win32.js')
    break
  default:
    throw new Error(`Unsupported platform: ${platform}`)
}

exports.persistent = mod.persistent
exports.ephemeral = mod.ephemeral
