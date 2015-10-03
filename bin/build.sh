#!/bin/bash

do_build()
{
  pushd apps/$1

  # Build
  ember build --environment=production

  # Move and rename files
  cd dist
  mv index.html $1.html
  cp -Rf * ../../../dist/

  # Cleanup
  cd ..
  rm -Rf dist

  # Reset
  popd
}

# Clean out any old build
rm -Rf dist
mkdir dist

# Start building
do_build app1
do_build app2
