cmake_minimum_required(VERSION 4.0)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)
find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)
find_package(cmake-napi REQUIRED PATHS node_modules/cmake-napi)
find_package(cmake-npm REQUIRED PATHS node_modules/cmake-npm)

project(bare_storage C)

if(APPLE)
  enable_language(OBJCXX)

  fetch_package("github:holepunchto/libjstl#098664c")
endif()

add_bare_module(bare_storage)

if(APPLE)
  target_sources(
    ${bare_storage}
    PRIVATE
      binding.mm
  )

  target_link_libraries(
    ${bare_storage}
    PRIVATE
      jstl
      "-framework Foundation"
  )
else()
  target_sources(
    ${bare_storage}
    PRIVATE
      binding.c
  )
endif()

add_napi_module(bare_storage_node)

if(APPLE)
  target_sources(
    ${bare_storage_node}
    PRIVATE
      binding.mm
  )

  target_link_libraries(
    ${bare_storage_node}
    PRIVATE
      jstl
      "-framework Foundation"
  )
else()
  target_sources(
    ${bare_storage_node}
    PRIVATE
      binding.c
  )
endif()

target_compile_definitions(
  ${bare_storage_node}
  PRIVATE
    NAPI_VERSION=9
)

resolve_node_module(bare-compat-napi compat)

target_include_directories(
  ${bare_storage_node}
  PRIVATE
    "${compat}/include"
)
