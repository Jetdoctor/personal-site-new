# erselerbay.com

Personal website: plain HTML/CSS/JS, no build step. Just edit and push.

## Structure

```
index.html            Home
about/index.html      About
resume/index.html     Resume  ← edit this when your CV changes
projects/index.html   Projects
contact/index.html    Contact
styles.css            All styling (colors/fonts at the top in :root)
main.js               Player-card stats + mobile menu
images/               Photos & project art (KEEP this folder!)
CNAME                 Custom domain (do not delete)
404.html              Not-found page
```

## How to update content

1. Open the relevant `index.html` in any text editor.
2. Edit the text between the tags. For a new job on the resume, copy an
   existing `<div class="t-item"> ... </div>` block and change the text.
3. Commit and push. GitHub Pages redeploys automatically in ~1 minute.

## Personal stats (player card)

Edit the top of `main.js`:
- `BIRTH_DATE`: set your real birth date (current value is an estimate!)
- `GAMES_FINISHED`, `COUNTRIES_VISITED`, `CURRENT_CITY`

## Downloadable CV

A phone-free PDF (phone replaced with erselerbay.com) is included at
`files/Ersel-Erbay-CV.pdf` and linked from the Resume page.
When your CV changes, export a new phone-free PDF and overwrite that file.

## Fonts

Self-hosted in `fonts/` (no Google Fonts request = GDPR-friendly + faster).

## Dark mode

Automatic, follows the visitor's system preference. Dark palette lives at
the bottom of `styles.css`.

## Deploying (first time replacing the old site)

```bash
git clone https://github.com/jetdoctor/Personal-Site-Final.git
cd Personal-Site-Final
# Check which branch GitHub Pages deploys from:
# GitHub → repo → Settings → Pages → "Branch". Switch to it if needed.

# Keep the images folder, delete everything else:
find . -mindepth 1 -maxdepth 1 ! -name images ! -name .git -exec rm -rf {} +

# Copy the new site files in (from the unzipped folder), then:
git add -A
git commit -m "New site: hand-written HTML/CSS, updated CV content"
git push
```

Wait a minute, hard-refresh erselerbay.com (Ctrl+Shift+R), done.
