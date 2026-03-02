const binding = require('#binding')

exports.persistent = function persistent() {
  return binding.persistentDir()
}

exports.ephemeral = function ephemeral() {
  return binding.ephemeralDir()
}
