const fs = require('fs')
const os = require('os')
const path = require('path')

function ensure(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true })
  } catch {}
  return dir
}

exports.persistent = function persistent() {
  const xdgDataHome =
    typeof process !== 'undefined' ? process.env.XDG_DATA_HOME : os.getEnv('XDG_DATA_HOME')
  return ensure(xdgDataHome || path.join(os.homedir(), '.local', 'share'))
}

exports.ephemeral = function ephemeral() {
  const xdgCacheHome =
    typeof process !== 'undefined' ? process.env.XDG_CACHE_HOME : os.getEnv('XDG_CACHE_HOME')
  return ensure(xdgCacheHome || path.join(os.homedir(), '.cache'))
}
