#! /usr/bin/env bash
set -e
set -x

if command -v uv >/dev/null 2>&1; then
	uv run python app/tests_pre_start.py
else
	python app/tests_pre_start.py
fi

bash scripts/test.sh "$@"
