# Werkstatt-Fotos

Zentraler Bildordner – genutzt von **beidem**: der Karriereseite (`index.html`)
und den Anzeigen-Motiven (`creatives/`).

## Originale

Die fünf Fotos und ihre Verwendung in den Anzeigen-Motiven:

| Datei | Motiv | Verwendet in |
|---|---|---|
| `werkzeugausgabe.jpg` | Kollege an der Werkzeugausgabe (Schubladen 1–11) | `buerokratie` |
| `index-c200-team.jpg` | Zwei Kollegen am Touchpanel der INDEX C200 | `team`, `region` |
| `index-c200-4d.jpg` | Kollege an der INDEX C200-4D (Siemens-Steuerung) | `index` |
| `messtechnik-keyence.jpg` | Kollege am Keyence-Messgerät | `toleranz` |
| `voreinstellgeraet.jpg` | Kollege am Werkzeug-Voreinstellgerät | `check` |

## Web-Versionen (`web/`)

Für die Website liegen verkleinerte Fassungen in `web/` – die Originale wären
mit ~400 KB pro Bild zu schwer fürs Handy:

| Datei | Verwendung | Größe |
|---|---|---|
| `index-c200-team-hero.jpg` | Textur hinter dem Hero | 1400 px breit, ~170 KB |
| `*-860.jpg` | Bildstrecke „Hier arbeitest du" | 860 px breit, ~100 KB |

Die Bildstrecke lädt verzögert (`loading="lazy"`), beim Seitenaufruf wird also
nur das Hero-Bild geladen.

## Foto austauschen

Original unter demselben Namen ersetzen, die Web-Version in `web/` neu erzeugen
(oder das Original verkleinert dort ablegen) und im Ordner `creatives/` einmal
`node render.js` laufen lassen. Passt der Bildausschnitt danach nicht, das
Feld `focus` (und optional `focusStory`) des Motivs in `index.html` anpassen –
das ist eine CSS-`background-position`, also z. B. `"60% 30%"`: erst waagrecht,
dann senkrecht. Faustregel: die Person gehört in die obere Bildhälfte, unten
liegt der Textblock im abgedunkelten Bereich.

## Bildlook

Alle Fotos werden automatisch in **Graustufen + Türkis-Duoton** umgerechnet und
nach unten abgedunkelt. Dadurch wirken Messraum, Werkzeugausgabe und
Maschinenhalle wie eine zusammengehörige Kampagne, und die Schrift ist auf
jedem Motiv lesbar.

## Bildrechte

Auf allen Fotos sind Mitarbeitende erkennbar – sie erscheinen sowohl in den
Anzeigen als auch auf der Karriereseite. Vor dem Start bitte die schriftliche
Einwilligung der abgebildeten Personen zur werblichen Nutzung einholen.
