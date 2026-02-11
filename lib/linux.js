const os = require('bare-os')
const path = require('bare-path')

exports.persistent = function persistent() {
  return os.getEnv('XDG_DATA_HOME') || path.join(os.homedir(), '.local', 'share')
}

exports.ephemeral = function ephemeral() {
  return os.tmpdir()
}
