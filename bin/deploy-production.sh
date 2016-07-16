#!/bin/sh

pushd $(dirname $0)/.. > /dev/null

npm install
bower install
grunt config-production
grunt build
firebase deploy

popd > /dev/null
