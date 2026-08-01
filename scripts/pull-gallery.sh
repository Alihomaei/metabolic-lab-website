#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# Pull the gallery photos from the previous BWH site into this project.
# Run once from anywhere:  bash scripts/pull-gallery.sh
# Runs on your Mac (curl is built in). Safe to re-run; it overwrites.
# Filenames must match data/gallery.ts.
# -----------------------------------------------------------------------------

cd "$(dirname "$0")/.." || exit 1
mkdir -p public/gallery

BASE="https://surgery.bwh.harvard.edu/wp-content/uploads"

dl () { # $1 = url path under BASE, $2 = outfile
  if curl -fsSL "$BASE/$1" -o "public/gallery/$2"; then
    echo "  ok    public/gallery/$2"
  else
    echo "  FAILED public/gallery/$2"
  fi
}

echo "Gallery photos -> public/gallery/"
dl "2021/10/20211021_163246-2-scaled.jpg"                lab-group-2021.jpg
dl "2022/06/20220522_095732-scaled.jpg"                  spring-outing-2022-group.jpg
dl "2022/06/Resized_20220522_071032.jpeg"                spring-outing-2022-morning.jpg
dl "2021/10/Kimball-Farms-1024x769-3.jpg"                kimball-farm.jpg
dl "2022/02/Annual-Report-3-cropped-2.png"               annual-report.png
dl "2021/10/20170810_120012_012-1024x576-2.jpg"          lab-gathering-2017.jpg
dl "2021/10/20180407_124247-1024x768-1.jpg"              lab-gathering-2018.jpg
dl "2021/10/DSCN4630-1024x768-1.jpg"                     archive-01.jpg
dl "2021/10/2018-Tammy-at-Discover-Brigham-1.png"        discover-brigham-2018.png
dl "2021/10/grayboxIMG_8012A1-1-e1633915314485.png"      archive-02.png
dl "2021/10/Presentation1-1024x576-1.jpg"                archive-03.jpg
dl "2021/10/IMG_0511-1024x768-1.jpg"                     archive-04.jpg
dl "2021/10/Chinese-dinner-Jan-15-1024x768-1.jpg"        lab-dinner-2015.jpg
dl "2021/10/Sheu-Tavakkoli-Harris-Lab-Picture.jpg"       sheu-tavakkoli-harris-labs.jpg
dl "2021/10/TammyLo_Ali_Eric_picture2020-scaled.jpg"     with-drs-tavakkoli-sheu-2020.jpg
dl "2021/10/TammyDave-ASC2019-picture-scaled.jpg"        asc-2019.jpg

echo ""
echo "Done. Reload /gallery to see the photos."
