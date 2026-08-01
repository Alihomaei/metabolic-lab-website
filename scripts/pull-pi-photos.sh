#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# Pull the previous-PI headshots from the old BWH site into this project.
# Run once from anywhere:  bash scripts/pull-pi-photos.sh
# Runs on your Mac (curl is built in). Safe to re-run; it overwrites.
# Filenames must match data/team.ts (previousPIs).
# -----------------------------------------------------------------------------

cd "$(dirname "$0")/.." || exit 1
mkdir -p public/team

BASE="https://surgery.bwh.harvard.edu/wp-content/uploads/2021/10"

dl () { # $1 = filename on the old site, $2 = outfile
  if curl -fsSL "$BASE/$1" -o "public/team/$2"; then
    echo "  ok    public/team/$2"
  else
    echo "  FAILED public/team/$2"
  fi
}

echo "Previous-PI headshots -> public/team/"
dl "Stan-Ashley-scaled.jpg"     stanley-ashley.jpg
dl "Ed-Whang.jpg"               edward-whang.jpg
dl "Jacobs-Danny41-scaled.jpg"  danny-jacobs.jpg
dl "wilmore-douglas-scaled.jpg" douglas-wilmore.jpg
dl "francis_moore1-1.jpg"       francis-moore.jpg

echo ""
echo "Done. Reload /team to see the Previous Principal Investigators section."
