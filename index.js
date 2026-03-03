const os = require('os')

switch (os.platform()) {
  case 'darwin':
  case 'ios':
    module.exports = require('./lib/apple')
    break
  case 'linux':
    module.exports = require('./lib/linux')
    break
  case 'android':
    module.exports = require('./lib/android')
    break
  case 'win32':
    module.exports = require('./lib/win32')
    break
  default:
    throw new Error(`Unsupported platform: ${platform}`)
}
