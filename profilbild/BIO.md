# Instagram: Profilbild und Bio

## Profilbild

Vier Varianten in `export/`, alle 1080×1080. Instagram beschneidet automatisch
auf einen Kreis – die Bildmarke sitzt deshalb mittig mit Luft zum Rand.

### Zweiter Anlauf – die stärkeren Entwürfe

| Datei | Beschreibung |
|---|---|
| `j-gross.png` | **Empfehlung** – Bildmarke formatfüllend. Bleibt bis 32 px unmissverständlich, weil die Marke den ganzen Kreis nutzt statt brav in der Mitte zu sitzen |
| `e-drehrillen.png` | Konzentrische Drehrillen wie auf einer plangedrehten Stirnfläche. Der charaktervollste Entwurf – das Muster erzählt das Handwerk mit, ohne ein Bild zu brauchen |
| `i-ring.png` | Weißer Innenring. Gibt dem Profilbild auch auf weißem Untergrund eine klare Kante |
| `f-kraeftig.png` | Wie A, aber mit dickerem Strich – die sichere, ruhige Lösung |

### Erster Anlauf

| Datei | Beschreibung |
|---|---|
| `a-tuerkis.png` | Weiße Bildmarke auf Markenfläche, Strich in Originalstärke |
| `b-weiss.png` | Türkise Marke auf Weiß – am nächsten am Original-Logo, wirkt im Feed aber zurückhaltend |
| `c-anthrazit.png` | Türkis auf Anthrazit |
| `d-mit-wortmarke.png` | Mit „DREHER" darunter – **ab 64 px ist der Schriftzug nicht mehr lesbar** |

### Was nicht funktioniert hat

| Datei | Warum |
|---|---|
| `g-werkstatt.png` | Werkstattfoto im Duoton. Bei 170 px noch reizvoll, darunter ein dunkler Fleck – ein Foto verträgt den Kreisbeschnitt auf 32 px nicht |
| `h-diagonal.png` | Diagonal geteilte Fläche. Der Schnitt liest sich eher als Bildfehler denn als Gestaltung |

Die Bildmarke ist nach der Original-Logodatei neu gezeichnet (offener Kreis =
das C, darin das N), damit sie bei 1080 px scharf bleibt. Die Vorlage ist mit
77 px Höhe zu klein, um sie hochzuskalieren.

**Markenfarbe: `#00A294`** – Pixel für Pixel aus der Logodatei ausgelesen.

### Neu erzeugen

```bash
cd profilbild && npm i -D playwright && node render-profil.js
```

Farben, Größen und Varianten stehen oben in `index.html`.

---

## Bio

Aufbau wie das Vorbild: Emoji, senkrechter Strich, kurze Aussage – vier Zeilen.
Instagram erlaubt 150 Zeichen; Emoji zählen je nach Client doppelt, deshalb
liegen alle Varianten darunter.

### Variante 1 · Nah am Vorbild  ·  143 Zeichen

```
🔧 I Ihr Partner für Präzisionsdrehteile
⚙️ I CNC-Drehen | Fräsen | Veredelung
👉🏻 I Komplexe Teile, keine Massenware
📍 I Aus Balgheim für Europa
```

### Variante 2 · Maschinenpark  ·  148 Zeichen

```
🔩 I Ihr Partner für Präzisionsdrehteile
⚙️ I CNC-Drehteile | Frästeile | INDEX
👉🏻 I Schwer zerspanbare Werkstoffe
📍 I Made in Germany – aus Balgheim
```

### Variante 3 · Nähe & Team  ·  137 Zeichen

```
🔧 I Ihr Partner für Präzisionsdrehteile
⚙️ I CNC-Drehen | Fräsen | Veredelung
👉🏻 I 19 Kollegen, kurze Wege
📍 I Balgheim, Kreis Tuttlingen
```

### Vor dem Einstellen prüfen

- **„Aus Balgheim für Europa"** (Variante 1) ist eine Aussage über eure
  Absatzmärkte, die ich nicht belegen kann. Stimmt sie nicht, nimm Variante 2
  oder 3 – oder ersetze sie durch „Aus Balgheim in ganz Deutschland".
- Das Vorbild nennt einen **Durchmesserbereich** („Ø 1–30 mm"). Das ist ein
  starkes, konkretes Detail – euer Bereich ist mir aber nicht bekannt. Wenn du
  ihn kennst, ersetze damit Zeile 3, das schlägt jede allgemeine Formulierung:

  ```
  👉🏻 I Höchste Präzision, Ø X–Y mm
  ```

### Link im Profil

Solange die Recruiting-Kampagne läuft, gehört in das Link-Feld die
Karriereseite statt der Website-Startseite:

```
https://saviold.github.io/drehercnc/?utm_source=instagram&utm_medium=bio&utm_campaign=zerspaner
```
