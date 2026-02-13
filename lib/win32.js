const os = require('bare-os')
const path = require('bare-path')

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
