# Karriereseite Dreher CNC – Zerspanungsmechaniker (m/w/d)

Mini-Karriereseite (Recruiting-Funnel) für die **Dreher Präzisionsdrehteile GmbH**.
Aufbau analog zur Mauser-Karriereseite, gestaltet in der Dreher-CI (Türkis/Anthrazit).

Die gesamte Seite ist **eine einzige Datei**: [`index.html`](index.html) – kein Build,
keine Abhängigkeiten. Einfach per GitHub Pages ausliefern.

---

## Fotos

Die Werkstatt-Fotos liegen zentral in [`fotos/`](fotos/) und werden doppelt
genutzt: als Textur hinter dem Hero und als Bildstrecke „Hier arbeitest du"
auf der Seite, sowie als Motive der Anzeigen-Creatives. Für die Seite kommen
die verkleinerten Fassungen aus `fotos/web/` zum Einsatz (Bildstrecke lädt
verzögert nach).

---

## Ablauf für Bewerber

1. **Hero + Mini-Check** – Frage 1 ist sofort sichtbar (auch mobil, ohne Scrollen)
2. **4 Fragen** zur Vorqualifizierung (ca. 40 Sekunden)
3. **Kontaktformular** inkl. Match-Ergebnis und optionalem Lebenslauf-Upload
4. **Danke-Screen** mit den nächsten Schritten

Darunter: Stelle im Detail, Bildstrecke aus der Halle und ein zweiter
Einstieg in den Check.

Wer die Knockout-Kriterien nicht erfüllt, landet auf einem freundlichen
Absage-Screen – **und wird nicht als Lead übertragen**.

---

## Der Fragebogen

| # | Frage | Wertung |
|---|-------|---------|
| 1 | Abgeschlossene Ausbildung im Metallbereich? | 0–2 Punkte · **Knockout** ohne Metall-Ausbildung |
| 2 | Wie gut sprichst du Deutsch? | 0–2 Punkte · **Knockout** unter Niveau B1 |
| 3 | Erfahrung an CNC-Drehmaschinen? | 0–3 Punkte (INDEX + Rüsten zählt am meisten) |
| 4 | Führerschein Klasse B? | 0–2 Punkte |

**Zwei Filter greifen nacheinander:**

1. **Knockout** – wer keine Metall-Ausbildung hat oder Deutsch unter B1 angibt,
   landet sofort auf dem Absage-Screen.
2. **Mindestpunktzahl** (`minScore`, aktuell **4 von 9**) – wer jede Frage
   gerade so beantwortet, kommt in der Summe trotzdem nicht durch und wird
   ebenfalls freundlich abgelehnt. Beispiel: andere Metall-Ausbildung + B1 +
   keine CNC-Erfahrung + kein Führerschein = 2 Punkte → Absage.

In beiden Fällen wird **kein Lead übertragen**. Der Absage-Screen bleibt
freundlich und bietet „Antwort ändern" an, damit ein Fehltipper nicht zur
Absage führt. Strenger filtern: `minScore` höher setzen.

Aus den gewerteten Fragen entsteht ein Match-Score
(*Top-Match · Guter Match · Entwicklungs-Kandidat*), der mit jedem Lead übertragen wird.

---

## Wohin gehen die Bewerbungen?

Jede Bewerbung geht **doppelt** raus, damit nichts verloren geht:

1. **LeadTable** – als JSON (`application/json`) an den generischen Webhook
   (`CONFIG.leadWebhookUrl`). Scheitert der CORS-Preflight, geht derselbe
   Datensatz formular-kodiert raus – das löst keinen Preflight aus.
2. **E-Mail** – über `formsubmit.co` an `CONFIG.leadEmail`
   (inkl. Lebenslauf als Anhang, falls hochgeladen)

### Feldnamen – bitte nicht ergänzen

LeadTable sammelt für **Name**, **E-Mail** und **Telefon** alle passenden
Schlüssel ein und hängt sie aneinander. Werden `Name` und `name` gesendet,
steht der Name doppelt im Feld; bei vier Telefon-Schlüsseln viermal die Nummer.
Deshalb enthält der Payload bewusst **genau einen** Schlüssel je Standardfeld:
`name`, `email`, `phone`. Aliase wie `Telefonnummer` oder `E-Mail` dürfen nicht
zusätzlich hinein.

### Die übrigen Angaben sichtbar machen

Alles Weitere wird unter sprechenden Namen mitgeschickt, LeadTable zeigt davon
aber nur, wofür in der Tabelle ein Feld existiert. In der Lead-Ansicht über
**„Neues Feld hinzufügen"** anlegen – der Feldname muss **exakt** so heißen:

| Feld | Inhalt |
|---|---|
| `Bewerbung` | **die komplette Bewerbung als Klartext** – wer nur ein Feld anlegt, nimmt dieses |
| `Stelle` | Zerspanungsmechaniker (m/w/d) |
| `PLZ` | Postleitzahl |
| `Qualifikation` | Match-Score, z. B. „Top-Match (9/9)" |
| `Kampagne` | Anzeigen-Variante aus `?v=` |
| `Wunsch-Kontakt` | Anruf oder WhatsApp |
| `Frühester Start` | Ab sofort, In 1 Monat, … |
| `Nachricht` | Freitext des Bewerbers |
| `Ausbildung` · `Deutschkenntnisse` · `CNC-Erfahrung` · `Führerschein` | die vier Antworten |

---

## Konfiguration

Alles Wichtige steht oben im `<script>`-Block von `index.html` in `CONFIG`:

```js
const CONFIG = {
  leadEmail:      "…",   // Empfänger der Bewerbungs-Mail
  leadWebhookUrl: "…",   // LeadTable-Webhook
  leadTable:      { … }, // Kunden-/Tabellen-ID (Referenz)
  phone:          "07424 / 50 10 21",
  address:        "Steigäcker 10 · 78582 Balgheim",
  contactEmail:   "info@dreher-cnc.de",
};
```

Kontaktdaten stammen aus dem Impressum von dreher-cnc.de. Sie erscheinen in der
Kopfzeile (Telefon) und im Footer; leere Felder werden automatisch ausgeblendet.

### Noch offen (TODO im Code markiert)

- [ ] **Benefits und Money-Hook** mit Dreher abstimmen (aktuell bewusst ohne konkrete Zahlen/Zusagen)
- [ ] **Impressum-/Datenschutz-Slugs** einmal gegenprüfen – verlinkt ist
      `dreher-cnc.de/impressum/` bzw. `/datenschutz/`
- [ ] **Original-Logo** einsetzen – aktuell ist die Wortmarke als SVG nachgebaut.
      Sobald die Datei vorliegt: `logo.svg` ins Repo legen und das `<svg>` + `<span class="logo__name">`
      durch `<img class="logo__img" src="logo.svg" alt="Dreher Präzisionsdrehteile GmbH">` ersetzen
      (Kopfzeile **und** Footer).

---

## Weitere Stellen ergänzen

Im `JOBS`-Objekt einen neuen Eintrag nach dem Muster von `zerspanungsmechaniker`
anlegen und `active: true` setzen.

- Nur **eine** aktive Stelle → die Seite lädt direkt diese Stelle
- **Mehrere** aktive Stellen → es erscheint automatisch eine Stellen-Auswahl
- Direktlink je Stelle: `index.html?job=<slug>`

Knockout-Kriterium: einer Antwort-Option `ko: true` und einen `koReason` mitgeben.

## Kampagnen-Varianten (Message-Match)

Für unterschiedliche Anzeigen-Creatives lässt sich die Headline über `?v=` steuern:

| Link | Headline |
|------|----------|
| `?v=fit` (Standard) | „Präzision statt **Massenware**.“ |
| `?v=team` | „19 Kollegen. **Ein Team.**“ |
| `?v=region` | „Zerspaner aus der Region? **Komm nach Balgheim.**“ |

Die gewählte Variante wird als `Kampagne` / `variant` mit dem Lead übertragen –
so ist auswertbar, welches Creative die Bewerbung gebracht hat.

---

## Anzeigen-Creatives

Im Ordner [`creatives/`](creatives/) liegen sechs Motive für Meta – jeweils als
Feed 4:5 (1080×1350) und Story 9:16 (1080×1920). Jedes Motiv verweist auf die
passende Headline-Variante der Karriereseite (`?v=…`), damit Anzeige und Seite
dieselbe Sprache sprechen.

Die fertigen Dateien liegen in [`creatives/export/`](creatives/export/), die
Werkstatt-Fotos sind eingebunden. Übersicht aller Motive:
[`creatives/uebersicht.jpg`](creatives/uebersicht.jpg).

Alle Anzeigentexte, Buttons und fertigen Links zum Einrichten:
[`creatives/KAMPAGNE.md`](creatives/KAMPAGNE.md).

Nach einer Text- oder Fotoänderung neu erzeugen:

```bash
cd creatives && npm i -D playwright && node render.js
```

---

Umgesetzt von [Ländle Digital](https://laendle-digital.com).
