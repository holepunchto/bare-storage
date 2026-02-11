const os = require('bare-os')

const platform = os.platform()

if (platform === 'darwin' || platform === 'ios') {
  module.exports = require('./lib/apple')
} else if (platform === 'android') {
  module.exports = require('./lib/android')
} else {
  throw new Error('Unsupported platform: ' + platform)
}
