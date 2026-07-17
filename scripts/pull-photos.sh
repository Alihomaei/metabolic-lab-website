#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# Pull the lab logo + team headshots from the previous BWH site into this
# project. Run once from anywhere:  bash scripts/pull-photos.sh
# Runs on your Mac (curl + sips are built in). Safe to re-run; it overwrites.
# -----------------------------------------------------------------------------

cd "$(dirname "$0")/.." || exit 1
mkdir -p public/team public/brand

dl () { # $1 = url, $2 = outfile
  if curl -fsSL "$1" -o "$2"; then echo "  ok    $2"; else echo "  FAILED $2"; fi
}

echo "Team headshots -> public/team/"
dl "https://surgery.bwh.harvard.edu/wp-content/uploads/2019/06/AT-headshot.jpeg"           public/team/ali-tavakkoli.jpg
dl "https://surgery.bwh.harvard.edu/wp-content/uploads/2019/06/ES-e1629297580592.jpg"      public/team/eric-sheu.jpg
dl "https://surgery.bwh.harvard.edu/wp-content/uploads/2021/08/Yingjia-Chen.jpg"           public/team/yingjia-chen.jpg
dl "https://surgery.bwh.harvard.edu/wp-content/uploads/2023/12/DSC_0001-Copy-1-scaled.jpg" public/team/vasundhara-mathur.jpg
dl "https://surgery.bwh.harvard.edu/wp-content/uploads/2023/12/IMG-20230910-WA0000.jpg"    public/team/weronika-stupalkowska.jpg

echo "Lab logo -> public/brand/lab-logo.png"
if curl -fsSL "https://surgery.bwh.harvard.edu/wp-content/uploads/2022/06/cropped-Banner-Logo.jpg" -o /tmp/lab-logo.jpg; then
  sips -s format png /tmp/lab-logo.jpg --out public/brand/lab-logo.png >/dev/null 2>&1 \
    && echo "  ok    public/brand/lab-logo.png" \
    || { cp /tmp/lab-logo.jpg public/brand/lab-logo.png; echo "  ok    public/brand/lab-logo.png (copied as-is)"; }
else
  echo "  FAILED lab logo"
fi

echo ""
echo "Add these by hand (not on the old site):"
echo "  public/team/ali-homaei.jpg               <- your own headshot"
echo "  public/brand/mass-general-brigham.png    <- your transparent PNG"
echo "  public/brand/harvard-medical-school.png  <- your transparent PNG"
