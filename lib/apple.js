const os = require('bare-os')
const path = require('bare-path')

const homedir = os.homedir()
const inApp = homedir.includes('/var/mobile/') || homedir.startsWith('/private/var/')

if (inApp) {
  const binding = require('../binding')

  exports.persistent = function persistent() {
    return binding.persistentDir()
  }

  exports.ephemeral = function ephemeral() {
    return binding.ephemeralDir()
  }
} else {
  exports.persistent = function persistent() {
    return path.join(os.homedir(), 'Documents')
  }

  exports.ephemeral = function ephemeral() {
    return os.tmpdir()
  }
}
