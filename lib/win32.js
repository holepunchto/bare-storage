const os = require('os')
const path = require('path')

const appdata = os.getEnv('APPDATA')
const inApp = appdata !== ''

exports.ephemeral = function ephemeral() {
  return os.tmpdir()
}

if (inApp) {
  exports.persistent = function persistent() {
    return appdata
  }
} else {
  exports.persistent = function persistent() {
    return path.join(os.homedir(), 'Documents')
  }
}
