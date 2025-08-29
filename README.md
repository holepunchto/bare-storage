# `bare-dir`

Minimal, cross‑platform directory locator for Bare. Intent‑based APIs: **persistent**, **ephemeral**. Returns normalized absolute paths.

```console
npm i bare-dir
```

## Usage

```js
import dir from 'bare-dir'

const data = dir.persistent()
const cache = dir.ephemeral()
```

## API

### `const path = dir.persistent()`

Data that should survive restarts and OS cleanup.

### `const path = dir.ephemeral()`

Cache or temporary data that the OS can wipe.

## License

Apache-2.0

