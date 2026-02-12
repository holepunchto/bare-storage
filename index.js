const os = require('bare-os')

const platform = os.platform()

if (platform === 'darwin' || platform === 'ios') {
  module.exports = require('./lib/apple')
} else if (platform === 'android') {
  module.exports = require('./lib/android')
} else if (platform === 'linux') {
  module.exports = require('./lib/linux')
} else if (platform === 'win32') {
  module.exports = require('./lib/win32')
} else {
  throw new Error('Unsupported platform: ' + platform)
}
