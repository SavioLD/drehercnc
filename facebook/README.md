# Facebook: Profilbild, Titelbild und Bio

## Die Formate

| | Hochladen | Facebook zeigt |
|---|---|---|
| **Profilbild** | 1080×1080 (quadratisch) | Kreis – Seite 168 px, Beiträge 40 px, Suche 36 px |
| **Titelbild** | 1640×624 | Desktop 820×312 · Handy 640×360 |

Das Titelbild wird in doppelter Auflösung angelegt (1640×624 statt 820×312),
damit es auf Retina-Displays scharf bleibt.

## Warum der Beschnitt beim Titelbild das eigentliche Problem ist

Facebook zeigt dasselbe Bild auf Desktop und Handy **unterschiedlich**:

- **Desktop** zeigt das volle 820×312-Bild. Das Profilbild überlappt unten **links**.
- **Handy** füllt 640×360. Dafür skaliert Facebook das Bild hoch und schneidet
  links und rechts je rund 130 px weg – sichtbar bleibt nur die **mittlere
  Spalte von etwa 68 %**. Das Profilbild überlappt unten **mittig**.

Deshalb liegt in beiden Entwürfen der gesamte Text waagrecht in der Mitte und
im oberen Bereich. Beides ist am nachgebauten Seitenkopf geprüft – Desktop und
Handy, mit exaktem Beschnitt und überlappendem Profilbild.

**Wenn du das Titelbild änderst:** Text nur zwischen x = 270 und x = 1370 der
1640 px setzen, und nicht unter y = 440. Sonst verschwindet er auf dem Handy
oder hinter dem Profilbild.

## Die zwei Sets

Profil- und Titelbild sind jeweils aufeinander abgestimmt – gleiche Markenfarbe,
gleiche Bildmarke, gleiche Machart.

### Set 1 · Werkstatt

| Datei | |
|---|---|
| `export/profil-werkstatt.png` | Bildmarke formatfüllend auf Markenfläche |
| `export/titel-werkstatt.png` | Werkstattfoto im Türkis-Duoton, Claim „CNC-Dreh- & Frästeile aus Balgheim" |

Passt zu den Anzeigen-Motiven, weil dort dieselbe Duoton-Behandlung läuft. Zeigt
echte Kollegen an der echten Maschine.

### Set 2 · Drehrillen

| Datei | |
|---|---|
| `export/profil-drehrillen.png` | Bildmarke auf konzentrischen Drehrillen |
| `export/titel-drehrillen.png` | Dieselben Rillen quer über die Fläche, Claim „Präzision, die man messen kann." |

Ruhiger und zeitloser, weil ohne Foto – veraltet nicht, wenn sich Maschinenpark
oder Belegschaft ändern.

## Neu erzeugen

```bash
cd facebook && npm i -D playwright && node render-facebook.js
```

Claims, Farben und Bildausschnitte stehen oben in `index.html` im `SETS`-Objekt.

---

## Bio (Kurzbeschreibung)

Facebook erlaubt **255 Zeichen**. Alle drei Varianten liegen darunter.

### A · Leistung im Fokus — 249 Zeichen

```
Dreher Präzisionsdrehteile GmbH – CNC-Dreh- und Frästeile aus Balgheim im Kreis Tuttlingen. Von der Kundenzeichnung über die Fertigung bis zur Veredelung: komplexe Teile, schwer zerspanbare Werkstoffe, faire Preise. Made in Germany. ⚙️ dreher-cnc.de
```

### B · Haltung — 251 Zeichen

```
Unmögliches möglich machen – dafür stehen wir. Als mittelständische Dreherei fertigen wir in Balgheim CNC-Drehteile und Frästeile in bester Qualität: kundenindividuell, flexibel, Made in Germany. 19 Kollegen, kurze Wege, faire Preise. ⚙️ dreher-cnc.de
```

Greift den Satz von der Website auf („Unmögliches möglich machen") – klingt nach
dem Unternehmen und nicht nach Branchenbaukasten.

### C · Kurz — 219 Zeichen

```
Ihr Partner für Präzisionsdrehteile aus Balgheim. CNC-Drehen, Fräsen, Veredelung – komplexe Teile statt Massenware, Made in Germany. Von der Zeichnung bis zum fertigen Bauteil begleiten wir Ihr Projekt. ⚙️ dreher-cnc.de
```

Lässt Luft, falls ihr noch einen Hinweis anhängen wollt – während der
Recruiting-Kampagne zum Beispiel:

```
Wir stellen ein: Zerspanungsmechaniker (m/w/d).
```

(47 Zeichen, passt hinter Variante C.)

### Weitere Felder der Seite

- **Kategorie:** Industrieunternehmen oder Metallverarbeitung
- **Website:** während der Kampagne die Karriereseite statt der Startseite:
  `https://saviold.github.io/drehercnc/?utm_source=facebook&utm_medium=bio&utm_campaign=zerspaner`
- **Impressum:** Facebook verlangt für Unternehmensseiten die Impressumsangaben.
  Sie stehen im Feld „Impressum" unter Seiteninfos – Inhalt wie auf
  dreher-cnc.de/impressum
