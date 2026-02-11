const test = require('brittle')
const path = require('bare-path')
const fs = require('bare-fs')
const dir = require('.')

test('persistent returns a string', (t) => {
  t.is(typeof dir.persistent(), 'string')
})

test('ephemeral returns a string', (t) => {
  t.is(typeof dir.ephemeral(), 'string')
})

test('persistent is an absolute path', (t) => {
  t.ok(path.isAbsolute(dir.persistent()))
})

test('ephemeral is an absolute path', (t) => {
  t.ok(path.isAbsolute(dir.ephemeral()))
})

test('persistent returns a stable value', (t) => {
  t.is(dir.persistent(), dir.persistent())
})

test('ephemeral returns a stable value', (t) => {
  t.is(dir.ephemeral(), dir.ephemeral())
})

test('can write and read from ephemeral', (t) => {
  const file = path.join(dir.ephemeral(), 'bare-storage-test-' + Date.now())
  fs.writeFileSync(file, Buffer.from('hello'))
  t.is(fs.readFileSync(file).toString(), 'hello')
  fs.unlinkSync(file)
})

test('persistent and ephemeral are different', (t) => {
  t.not(dir.persistent(), dir.ephemeral())
})
