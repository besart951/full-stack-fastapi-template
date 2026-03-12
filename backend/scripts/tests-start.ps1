param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Args
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Set-Location -Path $PSScriptRoot
Set-Location -Path ".."

$hasUv = $null -ne (Get-Command uv -ErrorAction SilentlyContinue)

if ($hasUv) {
    uv run python app/tests_pre_start.py
}
else {
    python app/tests_pre_start.py
}

& "$PSScriptRoot/test.ps1" @Args
