#!/bin/sh

./bin/local-server.js &
SERVER_PID=$!

trap "kill $SERVER_PID" INT TERM EXIT

./node_modules/.bin/protractor config/protractor.config.js