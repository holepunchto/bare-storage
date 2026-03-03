const os = require('os')

switch (os.platform()) {
  case 'darwin':
  case 'ios':
    module.exports = require('./lib/apple.js')
    break
  case 'linux':
    module.exports = require('./lib/linux.js')
    break
  case 'android':
    module.exports = require('./lib/android.js')
    break
  case 'win32':
    module.exports = require('./lib/win32.js')
    break
  default:
    throw new Error(`Unsupported platform: ${platform}`)
}
