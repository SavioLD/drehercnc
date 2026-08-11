# Karriereseite Dreher CNC – Zerspanungsmechaniker (m/w/d)

Mini-Karriereseite (Recruiting-Funnel) für die **Dreher Präzisionsdrehteile GmbH**.
Aufbau analog zur Mauser-Karriereseite, gestaltet in der Dreher-CI (Türkis/Anthrazit).

Die gesamte Seite ist **eine einzige Datei**: [`index.html`](index.html) – kein Build,
keine Abhängigkeiten. Einfach per GitHub Pages ausliefern.

---

## Ablauf für Bewerber

1. **Hero + Mini-Check** – Frage 1 ist sofort sichtbar (auch mobil, ohne Scrollen)
2. **5 Fragen** zur Vorqualifizierung (ca. 60 Sekunden)
3. **Kontaktformular** inkl. Match-Ergebnis und optionalem Lebenslauf-Upload
4. **Danke-Screen** mit den nächsten Schritten

Wer die Knockout-Kriterien nicht erfüllt, landet auf einem freundlichen
Absage-Screen – **und wird nicht als Lead übertragen**.

---

## Der Fragebogen

| # | Frage | Wertung |
|---|-------|---------|
| 1 | Abgeschlossene Ausbildung im Metallbereich? | **Knockout** ohne Ausbildung als Zerspanungsmechaniker/in oder Industriemechaniker/in |
| 2 | Wie gut sprichst du Deutsch? | **Knockout** unter Niveau B1 (A1–A2) |
| 3 | Erfahrung an INDEX-Drehautomaten? | Punkte (kein Knockout) |
| 4 | Maschinen selbstständig rüsten und einfahren? | Punkte |
| 5 | Führerschein Klasse B? | reine Information |

Aus den gewerteten Fragen entsteht ein Match-Score
(*Top-Match · Guter Match · Entwicklungs-Kandidat*), der mit jedem Lead übertragen wird.

---

## Wohin gehen die Bewerbungen?

Jede Bewerbung geht **doppelt** raus, damit nichts verloren geht:

1. **LeadTable** – als JSON an den generischen Webhook
   (`CONFIG.leadWebhookUrl`). Der Token in der URL enthält Tabelle, Kunde und
   Agentur; die Leads landen in
   `portal.lead-table.com/customer/6a71f059661192ffc3215ed6/table/6a71f064a9408391921a95d1/leads`
2. **E-Mail** – über `formsubmit.co` an `CONFIG.leadEmail`
   (inkl. Lebenslauf als Anhang, falls hochgeladen)

Übertragen werden u. a. Name, Telefon, Wunsch-Kontakt (Anruf/WhatsApp), PLZ,
E-Mail, frühester Start, Nachricht, alle Antworten aus dem Mini-Check, der
Match-Score sowie die Kampagnen-Variante (`?v=`). Die Antworten werden zusätzlich
mit ASCII-Keys (`antwort_ausbildung`, `antwort_deutschkenntnisse`, …) mitgeschickt,
damit sie sich in LeadTable leicht als Spalten mappen lassen.

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
| `?v=region` | „Zerspaner aus der Region? **Komm zu Dreher.**“ |

Die gewählte Variante wird als `Kampagne` / `variant` mit dem Lead übertragen –
so ist auswertbar, welches Creative die Bewerbung gebracht hat.

---

## Anzeigen-Creatives

Im Ordner [`creatives/`](creatives/) liegen sechs Motive für Meta – jeweils als
Feed 4:5 (1080×1350) und Story 9:16 (1080×1920). Jedes Motiv verweist auf die
passende Headline-Variante der Karriereseite (`?v=…`), damit Anzeige und Seite
dieselbe Sprache sprechen.

```bash
cd creatives && npm i -D playwright && node render.js
```

Vorher die Werkstatt-Fotos nach `creatives/fotos/` legen – Dateinamen und
Zuordnung stehen in [`creatives/fotos/README.md`](creatives/fotos/README.md).
Eine Vorschau aller Motive: [`creatives/uebersicht.png`](creatives/uebersicht.png).

---

Umgesetzt von [Ländle Digital](https://laendle-digital.com).
