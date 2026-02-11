cmake_minimum_required(VERSION 4.0)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)
find_package(cmake-fetch REQUIRED PATHS node_modules/cmake-fetch)

project(bare_storage CXX)

if(APPLE)
  enable_language(OBJCXX)
endif()

fetch_package("github:holepunchto/libjstl#098664c")

add_bare_module(bare_storage)

target_sources(
  ${bare_storage}
  PRIVATE
    binding.mm
)

target_link_libraries(
  ${bare_storage}
  PRIVATE
    jstl
)

if(APPLE)
  target_link_libraries(
    ${bare_storage}
    PRIVATE
      "-framework Foundation"
  )
endif()
