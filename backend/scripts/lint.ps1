$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Set-Location -Path $PSScriptRoot
Set-Location -Path ".."

$hasUv = $null -ne (Get-Command uv -ErrorAction SilentlyContinue)

if ($hasUv) {
    Write-Host "mypy..."
    uv run mypy app
    Write-Host "ruff check..."
    uv run ruff check app
    Write-Host "ruff format..."
    uv run ruff format app --check
}
else {
    Write-Host "mypy..."
    mypy app
    Write-Host "ruff check..."
    ruff check app
    Write-Host "ruff format..."
    ruff format app --check
}
