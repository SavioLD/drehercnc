/* Profilbild-Varianten als PNG exportieren:  node render-profil.js
   Ergebnis: profilbild/export/<variante>.png (1080×1080)                     */
const path = require("path"), fs = require("fs");
const { chromium } = require("playwright");
const OUT = path.join(__dirname, "export");
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 1200 }, deviceScaleFactor: 1 });
  await p.goto("file://" + path.join(__dirname, "index.html"), { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts && document.fonts.ready);
  await p.waitForTimeout(400);
  for (const id of await p.$$eval(".pb", els => els.map(e => e.id))) {
    await p.locator("#" + id).screenshot({ path: path.join(OUT, id + ".png") });
    console.log("✓ " + id + ".png  1080×1080");
  }
  await b.close();
})();
