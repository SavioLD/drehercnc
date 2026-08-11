# Recruiting-Creatives Dreher CNC

Sechs Motive, jeweils als **Feed 4:5 (1080×1350)** und **Story/Reel 9:16 (1080×1920)** –
also 12 fertige Dateien. Alle in der Dreher-CI, mit den echten Werkstatt-Fotos,
und bewusst **ohne** das übliche „Wir suchen ab sofort …“.

## Erzeugen

```bash
cd creatives
npm i -D playwright        # einmalig
node render.js             # → creatives/export/*.png
```

`index.html` lässt sich auch einfach im Browser öffnen – dort liegen alle Motive
in Originalgröße untereinander. Der Ordner `export/` wird bei jedem Lauf
überschrieben.

> **Vorher die Fotos ablegen:** siehe [`fotos/README.md`](fotos/README.md).
> Ohne Fotos rendern die Motive auf der türkisen Markenfläche.

> **Schriften:** `index.html` lädt Inter von Google Fonts. Ohne Internet-
> verbindung rendert der Export in einer Ersatzschrift – dann sitzen zwar alle
> Elemente richtig, die Typografie ist aber nicht die finale.

---

## Die Motive

Jedes Motiv hat einen eigenen Winkel – gedacht zum Gegeneinandertesten, nicht
als sechs Varianten derselben Aussage.

| Motiv | Aussage | Headline | Foto |
|---|---|---|---|
| `toleranz` | Handwerksstolz statt Benefit-Liste | **0,01 mm** – zwischen gut und Ausschuss · „Manche nennen das Pingeligkeit. Wir nennen es Beruf." | Keyence-Messgerät |
| `team` | Anti-Konzern | „19 Kollegen. Und bald **20**?" | Zwei am INDEX-Panel |
| `index` | Maschine als Köder | „Deine nächste Maschine spricht **INDEX**." | INDEX C200-4D |
| `check` | Die Bewerbungshürde selbst ist das Angebot | „5 Fragen. Dann weißt **du**, ob es passt." | Voreinstellgerät |
| `buerokratie` | Alltag statt Floskel | „Werkzeug per Knopfdruck. Freigabe-Zettel: **keiner**." | Werkzeugausgabe |
| `region` | Pendel-Argument | „Dein Arbeitsweg endet in **Balgheim**." | Zwei am INDEX-Panel |

### Warum kein „Wir suchen"

Jedes Motiv startet mit einer Aussage über **die Arbeit** oder **den Bewerber** –
nicht mit dem Bedarf des Unternehmens. `toleranz` spricht Fachstolz an,
`buerokratie` und `team` greifen an, was Zerspaner im Konzern nervt, und `check`
macht aus dem Mini-Check der Landingpage selbst den Aufhänger. Der Stellentitel
steht klein neben dem Button – sichtbar, aber nicht als Überschrift.

---

## Zielsetzung: Motiv → Landingpage

Jedes Motiv verweist auf die passende Headline-Variante der Karriereseite, damit
Anzeige und Landingpage dieselbe Sprache sprechen (Message-Match). Die Variante
wird als `Kampagne` mit jedem Lead an LeadTable übergeben – so ist auswertbar,
welches Motiv tatsächlich Bewerbungen bringt.

| Motiv | Ziel-Link |
|---|---|
| `toleranz`, `index`, `check` | `…/drehercnc/?v=fit` |
| `team`, `buerokratie` | `…/drehercnc/?v=team` |
| `region` | `…/drehercnc/?v=region` |

Empfehlung: zusätzlich `&utm_source=meta&utm_content=<motiv>` anhängen, dann
lässt sich die Auswertung auch außerhalb von LeadTable sauber zuordnen.

---

## Anzeigentexte (Primary Text)

Vorschläge für den Textbaustein über dem Bild – bewusst kurz, weil Meta mobil
nach ca. zwei Zeilen abschneidet.

**toleranz**
> Ein Hundertstel zu viel und das Teil ist Schrott. Wer das kennt, weiß auch,
> wie gut es sich anfühlt, wenn's passt. Wir fertigen Präzisionsdrehteile in
> Balgheim – und suchen jemanden, der genauso tickt. 60-Sekunden-Check ↓

**team**
> Wir sind 19. Da gibt es keine Abteilung, die etwas „weiterleitet" – da fragt
> man den Kollegen zwei Maschinen weiter. Wenn du das dem Konzern vorziehst:
> kurz prüfen, ob es passt ↓

**index**
> C200, C200-4D – unsere Maschinen stehen. Was fehlt, ist jemand, der sie
> rüstet, einfährt und rausholt, was drinsteckt. Erfahrung an INDEX? Dann
> dauert der Check keine Minute ↓

**check**
> Kein Anschreiben. Kein Lebenslauf-Zwang. 5 Fragen, 60 Sekunden – danach weißt
> du, ob die Stelle als Zerspanungsmechaniker zu dir passt. Und wir wissen es
> auch ↓

**buerokratie**
> Werkzeug ziehst du dir per Knopfdruck. Entscheidungen triffst du an der
> Maschine. Bei 19 Leuten braucht es dafür keine drei Unterschriften ↓

**region**
> Balgheim, Kreis Tuttlingen. Wenn du aus der Ecke kommst, ist dein Arbeitsweg
> ab sofort kurz – und die Teile sind anspruchsvoller als am Band ↓

---

## Weitere Stelle ergänzen

Aktuell ist nur der Zerspanungsmechaniker ausgeschrieben. Für eine zweite Stelle
in `index.html`:

1. `JOB` pro Motiv setzbar machen (oder ein zweites `CREATIVES`-Array anlegen),
2. Motive mit eigenem `id`-Präfix versehen, z. B. `fraeser-toleranz`,
3. `node render.js` – die Dateinamen der Exporte folgen automatisch der `id`.
