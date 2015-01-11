#!/bin/sh

set -e errexit

./scripts/unit-test.sh
./scripts/e2e-test.sh