/* ==========================================================================
   Creatives als PNG exportieren
   -------------------------------------------------------------------------
   Voraussetzung: Node + Playwright (npm i -D playwright)
   Aufruf:        node render.js
   Ergebnis:      creatives/export/<motiv>-feed.jpg  (1080×1350)
                  creatives/export/<motiv>-story.jpg (1080×1920)
                  JPEG statt PNG, weil die Motive fotografisch sind – Meta
                  rechnet ohnehin neu und die Dateien bleiben handlich.

   Die Fotos liegen in fotos/ (Repo-Wurzel) – Zuordnung siehe fotos/README.md.
   Fehlt ein Foto, rendert das Motiv auf der türkisen Markenfläche – die
   Datei ist trotzdem verwendbar, wirkt aber ohne Werkstatt-Bezug.
   ========================================================================== */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const OUT = path.join(__dirname, "export");
const PAGE = "file://" + path.join(__dirname, "index.html");

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1400 },
    deviceScaleFactor: 1, // 1080er Kante = exakt 1080 px im PNG
  });

  await page.goto(PAGE, { waitUntil: "networkidle" });
  // Webfonts abwarten – sonst rendert die Headline in der Ersatzschrift
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(400);

  const ids = await page.$$eval(".canvas", (els) => els.map((e) => e.id));
  if (!ids.length) throw new Error("Keine Motive gefunden – index.html prüfen.");

  for (const id of ids) {
    const file = path.join(OUT, id + ".jpg");
    await page.locator("#" + id).screenshot({ path: file, type: "jpeg", quality: 92 });
    const { width, height } = await page.locator("#" + id).boundingBox();
    console.log(`✓ ${id}.jpg  ${width}×${height}`);
  }

  console.log(`\n${ids.length} Motive exportiert nach ${OUT}`);
  await browser.close();
})();
