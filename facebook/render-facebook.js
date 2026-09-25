/* Facebook-Bilder exportieren:  node render-facebook.js
   Ergebnis: facebook/export/profil-<set>.png   1080×1080
             facebook/export/titel-<set>.png    1640×624                      */
const path = require("path"), fs = require("fs");
const { chromium } = require("playwright");
const OUT = path.join(__dirname, "export");
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1800, height: 1200 }, deviceScaleFactor: 1 });
  await p.goto("file://" + path.join(__dirname, "index.html"), { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts && document.fonts.ready);
  await p.waitForTimeout(500);
  for (const id of await p.$$eval(".pb, .tb", els => els.map(e => e.id))) {
    await p.locator("#" + id).screenshot({ path: path.join(OUT, id + ".png") });
    const { width, height } = await p.locator("#" + id).boundingBox();
    console.log(`✓ ${id}.png  ${width}×${height}`);
  }
  await b.close();
})();
