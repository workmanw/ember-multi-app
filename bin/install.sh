#!/bin/bash

do_install()
{
  pushd apps/$1
  npm install
  bower install
  popd
}

do_install app1
do_install app2
