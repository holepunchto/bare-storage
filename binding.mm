#include <bare.h>
#include <js.h>
#include <jstl.h>

#import <Foundation/Foundation.h>

static const char *bare_storage_persistent_dir(js_env_t *env) {
  NSString *home = NSHomeDirectory();
  NSString *documents = [home stringByAppendingPathComponent:@"Documents"];
  return [documents UTF8String];
}

static const char *bare_storage_ephemeral_dir(js_env_t *env) {
  NSString *tmp = NSTemporaryDirectory();
  return [tmp UTF8String];
}

static js_value_t *bare_storage_exports(js_env_t *env, js_value_t *exports) {
  int err;

#define V(name, fn)                                                            \
  err = js_set_property<fn>(env, exports, name);                               \
  assert(err == 0);

  V("persistentDir", bare_storage_persistent_dir)
  V("ephemeralDir", bare_storage_ephemeral_dir)
#undef V

  return exports;
}

BARE_MODULE(bare_storage, bare_storage_exports)
