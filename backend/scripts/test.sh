#!/usr/bin/env bash

set -e
set -x

if [ ! -d tests ]; then
	echo "No tests directory found, skipping test execution."
	exit 0
fi

if command -v uv >/dev/null 2>&1; then
	uv run coverage run -m pytest tests/
	uv run coverage report
	uv run coverage html --title "${@-coverage}"
else
	coverage run -m pytest tests/
	coverage report
	coverage html --title "${@-coverage}"
fi
