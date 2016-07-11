#!/bin/sh
grunt config-production
grunt build
cd public
python -m SimpleHTTPServer 8080
