#include <bare.h>
#include <js.h>

static js_value_t *
bare_storage_exports(js_env_t *env, js_value_t *exports) {
  return exports;
}

BARE_MODULE(bare_storage, bare_storage_exports)
