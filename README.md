# bare-storage

Minimal, cross‑platform directory locator for Bare. Intent‑based APIs: Persistent or ephemeral. Returns normalized absolute paths.

```
npm i bare-storage
```

## Usage

```js
import dir from 'bare-storage'

const data = dir.persistent()
const cache = dir.ephemeral()
```

## API

#### `const path = dir.persistent()`

Data that should survive restarts and OS cleanup.

#### `const path = dir.ephemeral()`

Cache or temporary data that the OS can wipe.

## License

Apache-2.0
