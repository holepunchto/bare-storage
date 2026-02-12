const fs = require('bare-fs')
const os = require('bare-os')
const path = require('bare-path')

function ensure(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true })
  } catch {}
  return dir
}

exports.persistent = function persistent() {
  return ensure(os.getEnv('XDG_DATA_HOME') || path.join(os.homedir(), '.local', 'share'))
}

exports.ephemeral = function ephemeral() {
  return ensure(os.getEnv('XDG_CACHE_HOME') || path.join(os.homedir(), '.cache'))
}
