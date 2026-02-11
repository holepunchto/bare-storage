cmake_minimum_required(VERSION 4.0)

find_package(cmake-bare REQUIRED PATHS node_modules/cmake-bare)

project(bare_storage C)

if(APPLE)
  enable_language(OBJC)
endif()

add_bare_module(bare_storage)

target_sources(
  ${bare_storage}
  PRIVATE
    binding.c
)

if(APPLE)
  set_source_files_properties(
    binding.c
    PROPERTIES
      LANGUAGE OBJC
  )

  target_link_libraries(
    ${bare_storage}
    PRIVATE
      "-framework Foundation"
  )
endif()
