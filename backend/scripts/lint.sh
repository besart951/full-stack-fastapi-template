#!/usr/bin/env bash

set -e
set -x

if command -v uv >/dev/null 2>&1; then
	uv run mypy app
	uv run ruff check app
	uv run ruff format app --check
else
	mypy app
	ruff check app
	ruff format app --check
fi
