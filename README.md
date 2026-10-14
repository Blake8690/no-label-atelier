# NO LABEL Atelier

Hemsida för NO LABEL Atelier – ett UF-företag.

Ren HTML/CSS/JS, inga byggsteg. Öppna `index.html` i webbläsaren för att se sidan.

## Filer

- `index.html` – allt innehåll (text, sektioner, länkar)
- `styles.css` – utseende, färger och typsnitt (färgerna ligger överst under `:root`)
- `script.js` – mobilmeny, scroll-animationer och kontaktformuläret
- `assets/` – logga och bilder

## Lägga in produkter

I `index.html`, under `<!-- KOLLEKTION -->`: lägg produktbilden i `assets/` och byt ut
`<div class="product-media tone-1"><span>Bild kommer</span></div>` mot
`<div class="product-media"><img src="assets/din-bild.jpg" alt="Beskrivning"></div>`.
Ändra sedan namn, beskrivning och pris.

## Publicera gratis med GitHub Pages

Settings → Pages → *Deploy from a branch* → välj branch och mappen `/ (root)`.
