$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Set-Location -Path $PSScriptRoot
Set-Location -Path ".."

$hasUv = $null -ne (Get-Command uv -ErrorAction SilentlyContinue)

if ($hasUv) {
    Write-Host "backend pre-start..."
    uv run python app/backend_pre_start.py

    Write-Host "running migrations..."
    uv run alembic upgrade head
    Write-Host "initial data..."
    uv run python app/initial_data.py
}
else {
    Write-Host "backend pre-start..."
    python app/backend_pre_start.py
    Write-Host "running migrations..."
    alembic upgrade head
    Write-Host "initial data..."
    python app/initial_data.py
}
