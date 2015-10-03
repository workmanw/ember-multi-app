#!/bin/bash

do_test()
{
  pushd apps/$1

  # Build
  ember test

  # Reset
  popd
}

# Start building
do_test app1
do_test app2
