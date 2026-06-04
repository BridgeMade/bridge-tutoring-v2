# Bridge Tutoring — Cloudflare Pages deploy script
# Run: .\scripts\deploy.ps1

$src = "$PSScriptRoot\..\open-next" | Resolve-Path
$assets = "$PSScriptRoot\..\open-next\assets" | Resolve-Path

Write-Host "Copying worker bundle into assets..." -ForegroundColor Cyan

Copy-Item "$src\worker.js" "$assets\_worker.js" -Force

foreach ($dir in @("cloudflare", "middleware", "server-functions", ".build")) {
  if (Test-Path "$src\$dir") {
    Copy-Item "$src\$dir" "$assets\$dir" -Recurse -Force
  }
}

Write-Host "Deploying to Cloudflare Pages..." -ForegroundColor Cyan
npx wrangler pages deploy .open-next/assets --project-name=bridge-tutoring-v2 --commit-dirty=true
