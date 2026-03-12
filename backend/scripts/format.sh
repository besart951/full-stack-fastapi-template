#!/bin/sh -e
set -x

if command -v uv >/dev/null 2>&1; then
	uv run ruff check app scripts --fix
	uv run ruff format app scripts
else
	ruff check app scripts --fix
	ruff format app scripts
fi
