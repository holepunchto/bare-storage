# `bare-dir`

Minimal, cross‑platform directory locator for Bare. Intent‑based APIs: **persistent**, **ephemeral**. Returns normalized absolute paths.

---

## Install

```sh
npm i bare-dir
```

---

## Usage

```js
import dir from 'bare-dir'

const data = dir.persistent()
const cache = dir.ephemeral()
```

---

## API

### `dir.persistent() -> string | null`

Data that should survive restarts and OS cleanup.

### `dir.ephemeral() -> string | null`

Cache or temporary data that the OS can wipe.

---

## License

Apache-2.0

