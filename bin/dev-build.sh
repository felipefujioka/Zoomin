#!/bin/sh

pushd $(dirname $0)/.. > /dev/null

npm install
bower install
grunt config-dev
grunt build

popd > /dev/null
