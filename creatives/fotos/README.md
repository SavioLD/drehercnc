# Fotos für die Creatives

Hier gehören die fünf Werkstatt-Fotos rein – **exakt unter diesen Dateinamen**,
dann greifen die Motive automatisch darauf zu:

| Dateiname | Welches Foto | Wird verwendet in |
|---|---|---|
| `messtechnik-keyence.jpg` | Mitarbeiter am Keyence-Messgerät (Bildschirm mit Messkurve) | `toleranz` |
| `index-c200-team.jpg` | Zwei Kollegen am Touchpanel der INDEX C200 | `team`, `region` |
| `index-c200-4d.jpg` | Mitarbeiter an der INDEX C200-4D (Siemens-Steuerung) | `index` |
| `voreinstellgeraet.jpg` | Mitarbeiter am blauen Werkzeug-Voreinstellgerät | `check` |
| `werkzeugausgabe.jpg` | Mitarbeiter an der Werkzeugausgabe (Schubladen 1–11) | `buerokratie` |

Danach im Ordner `creatives/` einmal `node render.js` ausführen – fertig.

## Format

- **Hochformat** ist ideal (die Fotos sind bereits hochkant).
- Mindestens **1400 px** in der Breite, sonst wird es im 1080er Export unscharf.
- JPG oder PNG. Bei PNG einfach die Endung im Dateinamen anpassen
  (in `index.html` im `CREATIVES`-Array).

## Bildlook

Alle Fotos werden automatisch in **Graustufen + Türkis-Duoton** umgerechnet und
mit einem Verlauf abgedunkelt. Dadurch wirken die unterschiedlichen Aufnahmen
wie eine zusammengehörige Kampagne, und die Schrift ist immer lesbar –
unabhängig davon, wie hell oder bunt das Originalfoto ist.

Fehlt eine Datei, rendert das Motiv auf der türkisen Markenfläche. Das sieht
sauber aus, verschenkt aber den Werkstatt-Bezug.

## Bildrechte

Auf allen Fotos sind Mitarbeitende erkennbar (auch von hinten). Vor dem
Anzeigenstart bitte die schriftliche Einwilligung der abgebildeten Personen
zur werblichen Nutzung einholen.
