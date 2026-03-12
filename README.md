# Full Stack FastAPI Template

**Stack:** FastAPI · SQLModel · PostgreSQL · React · TypeScript · Vite · Tailwind CSS · Docker Compose

---

## Docker Dev Quickstart (recommended)

If you want the easiest development setup, use Docker for the full stack.

### 1. Start everything

```bash
docker compose watch
```

Wait until the initial setup is complete (first run can take a minute).

### 2. Open the apps

| Service            | URL                        |
| ------------------ | -------------------------- |
| Frontend           | http://localhost:5173      |
| Backend API        | http://localhost:8000      |
| API Docs (Swagger) | http://localhost:8000/docs |
| Adminer (DB UI)    | http://localhost:8080      |
| Mailcatcher        | http://localhost:1080      |
| Traefik UI         | http://localhost:8090      |

### 3. Login (default local credentials)

From `.env`:

```dotenv
FIRST_SUPERUSER=admin@example.com
FIRST_SUPERUSER_PASSWORD=password
```

### 4. Useful commands

```bash
# all logs
docker compose logs -f

# only backend logs
docker compose logs -f backend

# check services status
docker compose ps
```

### 5. If login does not work

Most common reasons in local development:

- A separate local backend is already running on port 8000.
- The Docker `prestart` step did not finish yet.
- You changed `.env` and did not restart compose.

Run:

```bash
docker compose ps
docker compose logs -f prestart
docker compose logs -f backend
```

You should see `prestart` complete successfully before expecting the first user to exist.

---

## Prerequisites

- [Docker](https://www.docker.com) and Docker Compose
- [uv](https://docs.astral.sh/uv/) (Python package manager for local backend development)
- [Node.js](https://nodejs.org) + [bun](https://bun.sh) (for local frontend development)

---

## 1. Setup

### Clone the repository

```bash
git clone https://github.com/fastapi/full-stack-fastapi-template.git my-project
cd my-project
```

### Configure environment variables

Copy the example env file and adjust the values:

```bash
cp .env.example .env
```

At minimum, change these values in `.env`:

```dotenv
SECRET_KEY=changethis
FIRST_SUPERUSER_PASSWORD=changethis
POSTGRES_PASSWORD=changethis
```

Generate secure random values with:

```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

---

## 2. Run with Docker (full stack)

Use the Docker Dev Quickstart above as the primary flow.

If you need a clean reset:

```bash
docker compose down -v
docker compose up -d --build
docker compose logs -f prestart
```

---

## 3. Dev Mode (local backend and/or frontend)

The idea: keep infrastructure (database, Mailcatcher, Traefik) running in Docker but replace the backend and/or frontend with a local dev server for hot-reload and debugging.

### Backend with uv

Install dependencies and activate the environment:

```bash
cd backend
uv sync
```

Stop the Docker backend service and start it locally:

```bash
# in project root:
docker compose stop backend

# in backend/:
uv run fastapi dev app/main.py
```

The backend is now running at http://localhost:8000 with auto-reload on code changes.

**Useful backend commands:**

```bash
# Run tests
uv run pytest

# Linting
uv run ruff check .

# Type checking
uv run mypy .

# Install pre-commit hooks (runs automatically on git commit)
uv run prek install -f
```

### Frontend with bun

Stop the Docker frontend service and start it locally:

```bash
# in project root:
docker compose stop frontend

# in frontend/:
cd frontend
bun install
bun run dev
```

The frontend is now running at http://localhost:5173 with hot-reload.

### Run everything locally (no Docker)

If you want to run without Docker at all, keep only the database and Mailcatcher running:

```bash
docker compose up db mailcatcher -d
```

Then start backend and frontend as described above.

---

## Deployment

See [deployment.md](./deployment.md) for production setup with Traefik and HTTPS.

## License

MIT
