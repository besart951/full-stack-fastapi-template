#! /usr/bin/env bash

set -e
set -x

if command -v uv >/dev/null 2>&1; then
	# Let the DB start
	uv run python app/backend_pre_start.py

	# Run migrations
	uv run alembic upgrade head

	# Create initial data in DB
	uv run python app/initial_data.py
else
	# Let the DB start
	python app/backend_pre_start.py

	# Run migrations
	alembic upgrade head

	# Create initial data in DB
	python app/initial_data.py
fi
