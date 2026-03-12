param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$TitleArgs = @()
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Set-Location -Path $PSScriptRoot
Set-Location -Path ".."

if (-not (Test-Path -Path "tests" -PathType Container)) {
    Write-Host "No tests directory found, skipping test execution."
    return
}

$title = if ($TitleArgs -and $TitleArgs.Count -gt 0) { $TitleArgs -join " " } else { "coverage" }
$hasUv = $null -ne (Get-Command uv -ErrorAction SilentlyContinue)

if ($hasUv) {
    uv run coverage run -m pytest tests/
    uv run coverage report
    uv run coverage html --title $title
}
else {
    coverage run -m pytest tests/
    coverage report
    coverage html --title $title
}
