# Kampagnen-Setup: Zerspanungsmechaniker (m/w/d)

Alles zum direkten Einrichten in Meta. Pro Motiv stehen unten die Felder so,
wie sie im Anzeigenmanager abgefragt werden.

**Zielseite:** `https://saviold.github.io/drehercnc/`
(Voraussetzung: GitHub Pages ist aktiv – Settings → Pages → Branch `main`, Ordner `/`)

---

## Struktur

Eine Kampagne, eine Anzeigengruppe, sechs Anzeigen – die Motive laufen
gegeneinander, Meta verteilt das Budget auf das, was zieht.

```
Kampagne:        Dreher · Zerspanungsmechaniker
└─ Anzeigengruppe: Raum Balgheim
   ├─ ZSM_toleranz      (4:5 + Story)
   ├─ ZSM_team          (4:5 + Story)
   ├─ ZSM_index         (4:5 + Story)
   ├─ ZSM_check         (4:5 + Story)
   ├─ ZSM_buerokratie   (4:5 + Story)
   └─ ZSM_region        (4:5 + Story)
```

- **Ziel:** Traffic oder Conversions (nicht Lead-Formular – der Mini-Check auf
  der Seite ist die Vorqualifizierung und filtert deutlich schärfer)
- **Platzierungen:** Automatisch. Jede Anzeige bekommt beide Formate –
  `*-feed.jpg` für Feed, `*-story.jpg` für Story/Reels
- **Targeting:** Umkreis um 78582 Balgheim (Vorschlag: 30–40 km, deckt
  Tuttlingen, Spaichingen, Trossingen, Rottweil ab), Alter ab 18, Sprache
  Deutsch. Interessen bewusst offen lassen – die Vorqualifizierung passiert
  auf der Landingpage, nicht im Targeting
- **Nach etwa einer Woche:** Motive mit den teuersten Klicks pausieren, Budget
  auf die verbleibenden. Welches Motiv eine Bewerbung gebracht hat, steht in
  LeadTable in der Spalte `Kampagne`

**Vor dem Start prüfen:** Meta fragt je nach Land und Konto eine
Sonderkategorie für Beschäftigungsanzeigen ab. Wird sie verlangt, ist das
Targeting eingeschränkter – dann den Radius großzügiger setzen.

---

## Anzeigentexte

Die Texte sind **bildunabhängig** formuliert: jeder Primärtext passt zu jedem
der sechs Motive. So lassen sie sich in Metas dynamischen Creatives frei
kombinieren – du hinterlegst alle Varianten einmal, Meta mischt und findet die
beste Kombination selbst.

### Primärtext – 3 Varianten

**A · Handwerk**
> Ein Hundertstel zu viel und das Teil ist Schrott.
>
> Wer das kennt, kennt auch das andere Gefühl: wenn das Maß sitzt und die Serie
> sauber durchläuft. Genau dafür fertigen wir in Balgheim Präzisionsdrehteile –
> komplexe Teile statt Massenware, an INDEX-Drehautomaten, im Team von 19.
>
> 5 Fragen, 60 Sekunden. Danach weißt du, ob es passt.

**B · Kein Konzern**
> Wir sind 19. Da leitet keine Abteilung etwas weiter – da fragst du den
> Kollegen zwei Maschinen weiter.
>
> Entscheidungen fallen an der Maschine. Werkzeug ziehst du per Knopfdruck,
> nicht per Antrag. Und der Weg zum Chef ist zwanzig Meter lang.
>
> Wenn dir das lieber ist als eine Personalnummer: kurz prüfen, ob es passt.

**C · Ohne Hürde**
> Kein Anschreiben. Kein Lebenslauf-Zwang.
>
> 5 Fragen, 60 Sekunden – danach weißt du, ob die Stelle als
> Zerspanungsmechaniker in Balgheim zu dir passt. Und wir wissen es auch. Passt
> es, melden wir uns innerhalb von 2 Werktagen.
>
> Raum Tuttlingen, Spaichingen, Trossingen: dein Arbeitsweg wird kurz.

### Überschrift – 3 Varianten

1. `Zerspanungsmechaniker (m/w/d)`
2. `19 Kollegen. Und bald 20?`
3. `Bewerben ohne Anschreiben`

### Beschreibung – 3 Varianten

1. `Balgheim · Kreis Tuttlingen`
2. `60-Sekunden-Check, kein Lebenslauf nötig`
3. `Präzisionsdrehteile an INDEX-Drehautomaten`

### Button

`Mehr dazu` – oder `Jetzt bewerben`, wenn Überschrift 3 läuft.

### Link

Bei gemischten Creatives ein Link für alle Anzeigen:

```
https://saviold.github.io/drehercnc/?v=fit&utm_source=meta&utm_medium=paid&utm_campaign=zerspaner&utm_content=mix
```

Wer die Motive lieber einzeln als eigene Anzeigen aufsetzt, nimmt pro Motiv die
passende Variante – `team` und `buerokratie` auf `?v=team`, `region` auf
`?v=region`, der Rest auf `?v=fit` – und setzt `utm_content` auf den Motivnamen.
Dann steht in LeadTable in der Spalte `Kampagne`, welches Motiv gezogen hat.

---

## Bilddateien

| Motiv | Feed 4:5 | Story 9:16 |
|---|---|---|
| toleranz | `export/toleranz-feed.jpg` | `export/toleranz-story.jpg` |
| team | `export/team-feed.jpg` | `export/team-story.jpg` |
| index | `export/index-feed.jpg` | `export/index-story.jpg` |
| check | `export/check-feed.jpg` | `export/check-story.jpg` |
| buerokratie | `export/buerokratie-feed.jpg` | `export/buerokratie-story.jpg` |
| region | `export/region-feed.jpg` | `export/region-story.jpg` |

---

## Was noch offen ist

- **Einwilligung der abgebildeten Kollegen** zur werblichen Nutzung der Fotos
  einholen – sie sind auf allen Motiven und auf der Karriereseite erkennbar
- **Benefits auf der Landingpage** mit Dreher abstimmen (stehen aktuell bewusst
  ohne konkrete Zahlen und Zusagen)
- **Impressum-/Datenschutz-Links** der Karriereseite einmal gegenprüfen
- **Erste Testbewerbung** über die Seite abschicken und in LeadTable
  kontrollieren, ob der Lead sauber ankommt
