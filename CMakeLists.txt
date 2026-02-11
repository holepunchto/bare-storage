cmake_minimum_required(VERSION 4.0)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)
find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)

project(bare_storage C)

add_bare_module(bare_storage)

if(APPLE)
  enable_language(OBJCXX)

  fetch_package("github:holepunchto/libjstl#098664c")

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
