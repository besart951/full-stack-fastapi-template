$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Set-Location -Path $PSScriptRoot
Set-Location -Path ".."

$hasUv = $null -ne (Get-Command uv -ErrorAction SilentlyContinue)

if ($hasUv) {
    uv run ruff check app scripts --fix
    uv run ruff format app scripts
}
else {
    ruff check app scripts --fix
    ruff format app scripts
}
