// Vertiefung der sechs PNS-Nervenkapitel: Verlauf Station für Station, Muskeln nach Region,
// sensibles Gebiet, Läsionen nach Höhe und Merkzettel. Wird in library-anatomy.mjs an die
// bestehenden Abschnitte angehängt; der vorhandene Text bleibt unverändert.
// Abgleich mit den Kurs-PDFs s03–s08 (Platter). „(ergänzt)“ = nicht aus dem Handout, Standard-Lehrbuchwissen.

const legend='\n\n*So liest du die Tabellen: Einträge mit **(ergänzt)** stehen nicht in deinem Handout, sondern stammen aus Standard-Lehrbuchwissen. Alles andere entspricht deinen Kursfolien.*';

const flow=(label,steps)=>`\n\n<div class="flow" role="img" aria-label="${label}">${steps.map(([t,s])=>`<div class="flow-step"><strong>${t}</strong>${s?`<small>${s}</small>`:''}</div>`).join('<span class="flow-arrow" aria-hidden="true">→</span>')}</div>`;

const merke=(satz,punkte)=>`\n\n<div class="box merke"><div class="box-label">📝 Das schreibst du dir auf</div><p><strong>Ein Satz:</strong> ${satz}</p><ul>${punkte.map(p=>`<li>${p}</li>`).join('')}</ul></div>`;

export const pnsDeep={

medianus:{
verlauf:`${legend}

#### Der Verlauf Station für Station (von oben nach unten)

| Station | Wo genau? | Was passiert hier? | Engstelle / klinisch wichtig |
|---|---|---|---|
| 1 | Achselhöhle, Plexus brachialis | Je ein Anteil aus dem **Fasciculus lateralis** und dem **Fasciculus medialis** vereinigt sich zum N. medianus („Medianusgabel“ vor der A. axillaris, ergänzt). | **Thoracic-Outlet-Syndrom (TOS):** Einengung schon oberhalb, betrifft den ganzen Plexus. |
| 2 | Oberarm innen, **Sulcus bicipitalis medialis** (Rinne innen neben dem Bizeps) | Läuft zusammen mit der A. brachialis zur Ellenbeuge. Am Oberarm gibt er **keine** Muskeläste ab (ergänzt). | – |
| 3 | Ellenbeuge | Zieht unter dem **Lacertus fibrosus** (sehnige Platte des Bizeps) hindurch in den Unterarm. | – |
| 4 | Oberer Unterarm | Tritt **zwischen den beiden Köpfen des M. pronator teres** hindurch und gibt Äste an die oberflächlichen Beuger ab. | **Pronator-teres-Syndrom:** Der Muskel drückt auf den Nerv, es entsteht die **Schwurhand** (proximale Läsion). |
| 5 | Unterarm Mitte | Läuft zwischen oberflächlichen (FDS) und tiefen Fingerbeugern (FDP). Hier geht der **N. interosseus anterior** ab (ergänzt), zu FPL, radialem FDP und Pronator quadratus. | – |
| 6 | Handgelenk | Zieht **unter dem Retinaculum flexorum** (Querband über der Handwurzel) durch den **Karpaltunnel**, zusammen mit den Beugesehnen. | **Karpaltunnelsyndrom (KTS):** Einengung z. B. durch Entzündung. Die Folge sind **Thenaratrophie** und Sensibilitätsstörung (distale Läsion). |
| 7 | Hohlhand | Teilt sich in seine **Endäste**: zu den Daumenballenmuskeln, den Lumbricales I/II und zur Haut der Finger I–III/IV. | – |
${flow('Route des N. medianus von der Achsel bis in die Hohlhand',[['Plexus brachialis','Fasc. lat. + med.'],['Sulcus bicipitalis medialis','mit A. brachialis'],['Ellenbeuge','unter Lacertus fibrosus'],['Pronator teres','zwischen beiden Köpfen'],['Karpaltunnel','unter Retinaculum flexorum'],['Hohlhand','Endäste']])}
<p class="flow-note">Merke die 3 Ortsmarken: <strong>innen am Oberarm → durch den Pronator teres → durch den Karpaltunnel.</strong></p>`,
muskeln:`

#### Die Muskeln nach Region (in der Reihenfolge, in der die Äste abgehen)

| Region | Muskel | Was macht er? (Alltag) |
|---|---|---|
| Unterarm, oberflächlich | M. pronator teres | Unterarm einwärts drehen, Handfläche nach unten (Schlüssel umdrehen). |
| | M. flexor carpi radialis | Handgelenk beugen. |
| | M. palmaris longus | Handgelenk beugen, spannt die Hohlhand. |
| | M. flexor digitorum superficialis (FDS) | Mittelgelenke der Finger II–V beugen. |
| Unterarm, tief (über N. interosseus anterior) | M. flexor pollicis longus (FPL) | Daumenendglied beugen (Pinzettengriff). |
| | M. flexor digitorum profundus, **radialer Teil** | Endglieder von Zeige- und Mittelfinger beugen. |
| | M. pronator quadratus | Unterarm einwärts drehen. |
| Hand, Daumenballen (Thenar) | M. abductor pollicis brevis | Daumen von der Hand weg abspreizen. |
| | M. flexor pollicis brevis (Caput superficiale) | Daumengrundgelenk beugen. |
| | **M. opponens pollicis** | Daumen dem Kleinfinger **gegenüberstellen (Opposition)**, z. B. beim Knöpfen oder Flasche halten. |
| Hand, Finger | Mm. lumbricales I und II | Grundgelenke von Zeige-/Mittelfinger beugen und gleichzeitig die übrigen Fingergelenke strecken (Buch flach halten). |

**Wichtigster Muskel für die Prüfung:** die Daumenballenmuskeln, vor allem der **Opponens pollicis**. Ohne Medianus keine Opposition.`,
sens:`

**Einfach gesagt:** die **Daumenseite der Handfläche**: palmar Daumen, Zeige-, Mittelfinger und die halbe Ringfingerseite zum Mittelfinger hin (Handout: Finger I–III/IV), dazu die Endglieder dieser Finger auf dem Handrücken. Die Stelle, die fast nur der Medianus versorgt (autonomes Gebiet), sind die **Kuppen von Zeige- und Mittelfinger** (ergänzt).`,
laesion:`

#### Läsionen nach Höhe

| Wo ist der Schaden? | Typische Ursache | Was fällt aus? | Was funktioniert noch? | Typisches Zeichen: wie sieht es aus? |
|---|---|---|---|---|
| **Hoch:** Oberarm / Ellenbogen / Pronator teres | Pronator-teres-Syndrom, Verletzung am Oberarm | **Alle** Medianusmuskeln: Pronation, Beugung von Daumen, Zeige- und Mittelfinger, Thenar, dazu die Sensibilität | Ellenbogen beugen und strecken; Ring- und Kleinfinger beugen (die versorgt der Ulnaris) | **Schwurhand:** Beim Versuch, eine Faust zu machen, beugen sich nur Ring- und Kleinfinger. Daumen und Zeigefinger bleiben gestreckt, der Mittelfinger teilweise, wie beim Schwören. **Warum?** Die Beuger dieser Finger (FDS, radialer FDP, FPL) hängen am Medianus. |
| **Tief:** Handgelenk (Karpaltunnel) | Karpaltunnelsyndrom, z. B. durch Entzündung oder Schwellung | Nur die **Daumenballenmuskeln**, Lumbricales I/II und die Haut von Finger I–III/IV | **Faust machen und Pronation gehen normal**, weil diese Äste schon **vor** dem Tunnel abgegangen sind | **Thenaratrophie:** Der Daumenballen wird flach. Der Daumen kann nicht mehr gegenübergestellt werden und liegt neben dem Zeigefinger (auch „Affenhand“ genannt, ergänzt). Typisch ist **nächtliches Kribbeln** in Daumen, Zeige- und Mittelfinger (ergänzt). Test: **Flaschenzeichen** (ergänzt). Beim Umfassen einer Flasche liegt die Haut zwischen Daumen und Zeigefinger nicht an. |

**Kardinalsymptom laut Handout: Schwurhand.**`,
merke:merke('N. medianus: innen am Oberarm → durch den Pronator teres → durch den Karpaltunnel. Er ist für Opposition und Faustschluss von Daumen, Zeige- und Mittelfinger zuständig.',[
'Herkunft: Plexus brachialis, aus Fasciculus lateralis und medialis (C6–T1).',
'Wichtigste Aufgabe: Daumen gegenüberstellen (Opposition) und Finger I–III beugen.',
'Hohe Läsion (Pronator teres): <strong>Schwurhand</strong>. Beim Faustmachen bleiben Daumen und Zeigefinger gestreckt.',
'Tiefe Läsion (Karpaltunnel): <strong>Daumenballen wird flach</strong>, nachts Kribbeln in Finger I–III. Die Faust geht noch, weil die Unterarmäste vorher abgehen.',
'Gefühl: Daumenseite der Handfläche, Finger I–III.'])
},

radialis:{
verlauf:`${legend}

#### Der Verlauf Station für Station (von oben nach unten)

| Station | Wo genau? | Was passiert hier? | Engstelle / klinisch wichtig |
|---|---|---|---|
| 1 | Achselhöhle | Direkte **Fortsetzung des Fasciculus posterior**. Hier gehen Äste zum Trizeps ab (ergänzt). | **Krückenlähmung** („amerikanische Krücke“): Dauerdruck durch hohe Gehstützen in der Achsel. |
| 2 | Oberarm hinten, **Sulcus nervi radialis** | **Schraubt sich** zusammen mit der A. profunda brachii **spiralig um den Oberarmknochen** (Humerus), direkt auf dem Knochen. | **Oberarmschaftfraktur** (Handout: „proximale Läsion“). **Parkbanklähmung**: Druck durch ungünstige Schlafposition oder OP-Lagerung. |
| 3 | Ca. 10 cm oberhalb des Epicondylus lateralis | Durchbohrt das **Septum intermusculare** (Trennwand zwischen Beuger- und Streckerseite) nach vorne. | – |
| 4 | Vor dem Ellenbogen außen | Läuft **zwischen M. brachioradialis und M. brachialis** zur Ellenbeuge. Kurz davor geht der Hautast N. cutaneus antebrachii posterior ab. Äste zu Brachioradialis und ECRL (ergänzt). | – |
| 5 | Ellenbeuge | **Teilung** in zwei Äste: den **Ramus profundus** (motorisch) und den **Ramus superficialis** (sensibel). | Radiusfraktur oder Luxation des Radiusköpfchens. |
| 6a | Unterarm, tief | Der **R. profundus** tritt durch den **M. supinator (Supinatorloge)** und zieht als **N. interosseus posterior** zum Handgelenk. | **Supinatorlogen-Syndrom:** Einengung im Muskel. |
| 6b | Unterarm, oberflächlich | Der **R. superficialis** läuft mit der A. radialis entlang des Brachioradialis und endet als **Hautast auf dem Handrücken**. | – |
${flow('Route des N. radialis von der Achsel bis zum Handrücken',[['Fasciculus posterior','Achsel'],['Sulcus n. radialis','spiralig um den Humerus'],['Septum intermusculare','ca. 10 cm über Epicondylus lat.'],['Ellenbeuge','Teilung'],['R. profundus','durch Supinator'],['R. superficialis','Handrücken, sensibel']])}
<p class="flow-note">Merke die 3 Ortsmarken: <strong>Achsel → spiralig um den Oberarmknochen → Supinatorloge.</strong></p>`,
muskeln:`

#### Die Muskeln nach Region (in der Reihenfolge, in der die Äste abgehen)

| Region | Muskel | Was macht er? (Alltag) |
|---|---|---|
| Oberarm hinten | **M. triceps brachii** | Ellenbogen strecken (sich vom Stuhl hochdrücken, Liegestütz). |
| | M. anconeus | Hilft beim Strecken des Ellenbogens. |
| Ellenbogen außen (vor der Teilung) | M. brachioradialis | **Ausnahme:** Er **beugt** den Ellenbogen (Glas zum Mund führen, Daumen oben). |
| | **M. extensor carpi radialis longus** (und brevis) | **Handgelenk strecken** (Hand hochziehen). |
| R. profundus | M. supinator | Unterarm auswärts drehen, Handfläche nach oben (Suppe löffeln, Schraube eindrehen). |
| (nach der Supinatorloge) | M. extensor digitorum | Finger strecken, **Hand öffnen** (Gegenstand loslassen). |
| | M. extensor carpi ulnaris | Handgelenk strecken, zur Kleinfingerseite. |
| | M. abductor pollicis longus | Daumen abspreizen. |
| | Mm. extensor pollicis longus et brevis | Daumen strecken („Daumen hoch“). |
| | M. extensor indicis | Zeigefinger strecken (Zeigen). |

**Wichtigste Muskeln für die Prüfung:** **alle Strecker**, vor allem die **Handgelenkstrecker**. Der Radialis ist der „Strecker-Nerv“ des Arms, mit Ausnahme des Brachioradialis.`,
sens:`

**Einfach gesagt:** die **Rückseite**: radialer Unterarm und **Handrücken** auf der Daumenseite (Handout: Unterarm radial, Handrücken/Mittelhand). Die Stelle, die fast nur der Radialis versorgt (autonomes Gebiet), ist die **Haut auf dem Handrücken zwischen Daumen und Zeigefinger** (ergänzt).`,
laesion:`

#### Läsionen nach Höhe

| Wo ist der Schaden? | Typische Ursache | Was fällt aus? | Was funktioniert noch? | Typisches Zeichen: wie sieht es aus? |
|---|---|---|---|---|
| **Achsel** | Krückenlähmung durch hohe Gehstützen | **Alles**, auch der **Trizeps**: Ellenbogen strecken, Hand und Finger strecken, Sensibilität | Ellenbogen beugen über den Bizeps (N. musculocutaneus) | Fallhand **und** schwache Ellenbogenstreckung |
| **Oberarm** (Sulcus nervi radialis) | Oberarmschaftfraktur, Parkbanklähmung | Brachioradialis, alle Hand- und Fingerstrecker, Supinator, Sensibilität Handrücken | **Trizeps**, weil seine Äste schon **vorher** abgehen | **Fallhand:** Streckt man den Arm mit der Handfläche nach unten nach vorne, **hängt die Hand schlaff herunter** und kann nicht angehoben werden. Auch die Faust wird schwach, weil die Beuger ohne gestrecktes Handgelenk schlecht ziehen (ergänzt). |
| **Unterarm** (Supinatorloge, R. profundus) | Einengung im M. supinator | Finger- und Daumenstrecker, ECU, Abductor pollicis longus | Handgelenk strecken geht noch (**ECRL** wird schon vorher versorgt). **Keine Gefühlsstörung**, weil der sensible R. superficialis nicht betroffen ist. | **Keine richtige Fallhand**, aber die **Finger hängen** in den Grundgelenken, und der Daumen kann nicht gestreckt werden (ergänzt). |

**Kardinalsymptom laut Handout: Fallhand.**`,
merke:merke('N. radialis: Er windet sich spiralig um den Oberarmknochen und ist der „Strecker-Nerv“ des Arms. Die typische Läsion ist die Fallhand.',[
'Herkunft: Plexus brachialis, Fasciculus posterior (C5–T1).',
'Wichtigste Aufgabe: Ellenbogen, Handgelenk und Finger strecken. Ausnahme: Der Brachioradialis beugt.',
'Achsel (Krücke): Fallhand und zusätzlich Trizepsschwäche.',
'Oberarm (Fraktur, Parkbank): <strong>Fallhand</strong>. Die Hand hängt herunter, der Trizeps funktioniert noch.',
'Supinatorloge: Die Finger hängen, aber das Handgelenk kann noch gestreckt werden. Kein Gefühlsverlust.'])
},

ulnaris:{
verlauf:`${legend}

#### Der Verlauf Station für Station (von oben nach unten)

| Station | Wo genau? | Was passiert hier? | Engstelle / klinisch wichtig |
|---|---|---|---|
| 1 | Achselhöhle | Entsteht aus dem **Fasciculus medialis (C8–T1)** und zieht durch die Achselhöhle. | **TOS** (Engpass oberhalb, betrifft den Plexus) |
| 2 | Oberarm innen, **Sulcus bicipitalis medialis** | Läuft innen am Oberarm nach unten. Am Oberarm gibt er **keine** Muskeläste ab (ergänzt). | – |
| 3 | Mitte des Oberarms | Durchbohrt das **Septum intermusculare mediale** nach hinten. | – |
| 4 | Ellenbogen hinten-innen, **Sulcus nervi ulnaris** hinter dem Epicondylus medialis | Liegt direkt unter der Haut auf dem Knochen, das ist der **„Musikantenknochen“** (Stoß = Kribbeln bis in den Kleinfinger). | **Druck** am Musikantenknochen, z. B. durch dauerndes Aufstützen des Ellenbogens |
| 5 | Knapp unter dem Epicondylus medialis | Zieht **zwischen den beiden Köpfen des M. flexor carpi ulnaris** zur Beugeseite des Unterarms. Äste zu FCU und ulnarem FDP. | **Kubitaltunnelsyndrom:** Einklemmung zwischen den beiden FCU-Köpfen. Es entsteht eine Krallenhand **mit** Sensibilitätsstörung (proximal). |
| 6 | Unterarm | Läuft unter dem FCU zum Handgelenk. Kurz vor dem Handgelenk geht der **Ramus dorsalis** für den ulnaren Handrücken ab (ergänzt). | – |
| 7 | Handgelenk | Zieht **auf** dem Retinaculum flexorum (**nicht** durch den Karpaltunnel!) neben dem Erbsenbein (Os pisiforme) durch die **Loge de Guyon**. | **Distale Läsion**, z. B. durch Arbeit mit dem Presslufthammer. Es entsteht eine Krallenhand **ohne** Sensibilitätsstörung. |
| 8 | Hohlhand | Teilung in **R. superficialis** (überwiegend sensibel, plus M. palmaris brevis) und **R. profundus** (rein motorisch, zu den kleinen Handmuskeln). | – |
${flow('Route des N. ulnaris von der Achsel bis in die Hohlhand',[['Fasciculus medialis','Achsel'],['Sulcus bicipitalis medialis','Oberarm innen'],['Sulcus n. ulnaris','Musikantenknochen'],['Zwischen FCU-Köpfen','Kubitaltunnel'],['Loge de Guyon','nicht Karpaltunnel!'],['R. superficialis + profundus','Hand']])}
<p class="flow-note">Merke die 3 Ortsmarken: <strong>Musikantenknochen → zwischen den FCU-Köpfen → Loge de Guyon.</strong></p>`,
muskeln:`

#### Die Muskeln nach Region (in der Reihenfolge, in der die Äste abgehen)

| Region | Muskel | Was macht er? (Alltag) |
|---|---|---|
| Unterarm | M. flexor carpi ulnaris (FCU) | Handgelenk beugen und zur Kleinfingerseite kippen (Hammerschlag). |
| | M. flexor digitorum profundus, **ulnarer Teil** | Endglieder von Ring- und Kleinfinger beugen (fest zugreifen). |
| Hand, R. superficialis | M. palmaris brevis | Spannt die Haut über dem Kleinfingerballen. |
| Hand, Kleinfingerballen (Hypothenar) | Mm. abductor, flexor und opponens digiti minimi | Kleinfinger abspreizen, beugen, zum Daumen führen. |
| Hand, zwischen den Mittelhandknochen | **Mm. interossei dorsales et palmares** | **Finger spreizen** (dorsales) und **zusammenführen** (palmares), z. B. eine breite Schüssel umfassen. |
| Hand, Finger | Mm. lumbricales III und IV | Grundgelenke von Ring- und Kleinfinger beugen, Mittel-/Endgelenke strecken. |
| Hand, Daumenseite | **M. adductor pollicis** | Daumen an den Zeigefinger heranziehen (Schlüsselgriff, Papier festhalten). |
| | M. flexor pollicis brevis (Caput profundum) | Daumengrundgelenk beugen. |

**Wichtigste Muskeln für die Prüfung:** die **kleinen Handmuskeln**, vor allem die **Interossei** (Finger spreizen) und den **Adductor pollicis**. Der Ulnaris ist der Nerv der Feinmotorik der Hand.`,
sens:`

**Einfach gesagt:** die **Kleinfingerseite der Hand**: Kleinfinger und die Ringfingerhälfte zum Kleinfinger hin, handflächen- und handrückenseitig (Handout: ulnares Handgelenk, Finger III/IV–V). Die Stelle, die fast nur der Ulnaris versorgt (autonomes Gebiet), ist der **Kleinfinger** (ergänzt).`,
laesion:`

#### Läsionen nach Höhe

| Wo ist der Schaden? | Typische Ursache | Was fällt aus? | Was funktioniert noch? | Typisches Zeichen: wie sieht es aus? |
|---|---|---|---|---|
| **Ellenbogen** (Musikantenknochen / Kubitaltunnel) | Druck durch Aufstützen, Kubitaltunnelsyndrom, Fraktur | FCU, ulnarer FDP, **alle** ulnaren Handmuskeln und die **Sensibilität** der Kleinfingerseite | Alle Medianus- und Radialisfunktionen | **Krallenhand mit Gefühlsstörung:** Ring- und Kleinfinger sind im **Grundgelenk überstreckt** und in **Mittel- und Endgelenk gebeugt**, wie eine Kralle. **Warum?** Die Interossei und Lumbricales III/IV fallen aus. Die Fingerstrecker (Radialis) ziehen das Grundgelenk hoch, die langen Beuger ziehen den Rest krumm. Dazu **Muskelschwund zwischen den Mittelhandknochen**, die Finger lassen sich nicht spreizen. |
| **Handgelenk** (Loge de Guyon) | Dauerdruck, z. B. Presslufthammer | Kleine Handmuskeln (R. profundus) | FCU und ulnarer FDP (Äste vorher abgegangen). Laut Handout **keine Gefühlsstörung**, weil der R. profundus rein motorisch ist. | **Krallenhand ohne Gefühlsstörung** |

**Test: Froment-Zeichen** (ergänzt). Der Patient hält ein Blatt Papier zwischen Daumen und Zeigefinger fest, man zieht daran. Ohne Adductor pollicis **beugt er stattdessen das Daumenendglied** (Ersatz über den FPL, der vom Medianus versorgt wird).`,
merke:merke('N. ulnaris: Er läuft über den Musikantenknochen und durch die Loge de Guyon, nicht durch den Karpaltunnel. Die typische Läsion ist die Krallenhand.',[
'Herkunft: Plexus brachialis, Fasciculus medialis (C8–T1).',
'Wichtigste Aufgabe: kleine Handmuskeln, also Finger spreizen und schließen und den Daumen heranziehen.',
'<strong>Krallenhand</strong>: Ring- und Kleinfinger sind im Grundgelenk überstreckt, vorne gebeugt.',
'Ellenbogen-Läsion: Krallenhand <strong>mit</strong> Gefühlsstörung. Guyon-Loge: Krallenhand <strong>ohne</strong> Gefühlsstörung.',
'Gefühl: Kleinfinger und halber Ringfinger.'])
},

femoralis:{
verlauf:`${legend}

#### Der Verlauf Station für Station (von oben nach unten)

| Station | Wo genau? | Was passiert hier? | Engstelle / klinisch wichtig |
|---|---|---|---|
| 1 | Lendenwirbelsäule, **Plexus lumbalis** | Größter und längster Nerv des Plexus lumbalis. Handout: aus den Segmenten **L1–L4** (Lehrbücher meist L2–L4). | – |
| 2 | Becken, hinter dem Bauchraum | Zieht **zwischen M. psoas major und M. iliacus** nach unten. Äste zum Iliacus (ergänzt). | **Retroperitoneales Hämatom** (Bluterguss hinter dem Bauchraum), **Tumor oder Abszess** drücken hier auf den Nerv. |
| 3 | Leiste | Zieht **unter dem Leistenband** (Lig. inguinale) durch die **Lacuna musculorum**, seitlich (lateral) von A. und V. femoralis (ergänzt). | **Trauma** wie Überstreckung oder Beckenfraktur |
| 4 | Ca. **eine Handbreit unter dem Leistenband** | **Aufteilung** in Muskeläste (Rr. musculares), Hautäste für die Vorderseite des Oberschenkels (Rr. cutanei anteriores) und den **N. saphenus**. | – |
| 5 | Oberschenkel innen | Der **N. saphenus** (rein sensibel) läuft mit den Femoralgefäßen in den **Adduktorenkanal** und dann mit dem M. sartorius zur **Innenseite des Knies**. | – |
| 6 | Unterschenkel innen | Der N. saphenus folgt der V. saphena magna entlang der **Innenseite des Unterschenkels** zum Innenknöchel. | – |
${flow('Route des N. femoralis von der Lendenwirbelsäule bis zum Innenknöchel',[['Plexus lumbalis','L1–L4'],['Zwischen Psoas und Iliacus','Becken'],['Unter dem Leistenband','Lacuna musculorum'],['Aufteilung','1 Handbreit darunter'],['N. saphenus','Adduktorenkanal → Knie innen → Innenknöchel']])}
<p class="flow-note">Merke die 3 Ortsmarken: <strong>zwischen Psoas und Iliacus → unter dem Leistenband → N. saphenus an der Innenseite des Beins.</strong></p>`,
muskeln:`

#### Die Muskeln nach Region

| Region | Muskel | Was macht er? (Alltag) |
|---|---|---|
| Becken / Hüfte | M. iliopsoas (zusammen mit Ästen direkt aus dem Plexus lumbalis) | **Hüfte beugen**, Bein anheben (Treppe hoch, ins Auto einsteigen). |
| | M. pectineus (zusammen mit dem N. obturatorius) | Hüfte beugen und Bein heranziehen. |
| Oberschenkel vorne | M. sartorius | Hüfte beugen und nach außen drehen, Knie beugen (Schneidersitz). |
| | **M. quadriceps femoris**: M. rectus femoris | Hüfte beugen **und** Knie strecken. |
| | **M. quadriceps femoris**: Mm. vasti medialis, lateralis, intermedius | **Knie strecken** (vom Stuhl aufstehen, Treppe steigen, Ball schießen). |

**Wichtigster Muskel für die Prüfung:** der **Quadrizeps**, also die Kniestreckung. Dazu gehört der **Patellarsehnenreflex (PSR)**.`,
sens:`

**Einfach gesagt:** die **Vorder- und Innenseite des Oberschenkels** (Rr. cutanei anteriores) und über den **N. saphenus** die **Innenseite des Unterschenkels** bis zum Innenknöchel bzw. zur Ferse (Handout).`,
laesion:`

#### Läsionen nach Höhe

| Wo ist der Schaden? | Typische Ursache | Was fällt aus? | Was funktioniert noch? | Typisches Zeichen: wie sieht es aus? |
|---|---|---|---|---|
| **Hoch: im Becken** (zwischen Psoas und Iliacus) | Retroperitoneales Hämatom, Tumor, Abszess, Beckenfraktur | **Hüftbeugung** geschwächt (Iliacus) **und Kniestreckung**, dazu Sensibilität vorne am Oberschenkel und innen am Unterschenkel | Etwas Hüftbeugung über die direkten Plexusäste zum Psoas; alle Ischiadicus-Funktionen (Fuß) | Das Bein lässt sich schlecht anheben, **und** das Knie knickt ein |
| **In der Leiste / darunter** | Trauma, Überstreckung | **Kniestreckung** (Quadrizeps), Sartorius, Sensibilität | Hüftbeugung durch den Iliopsoas meist erhalten (Äste schon oberhalb, ergänzt) | **Das Knie knickt beim Gehen ein**, Treppensteigen und Aufstehen vom Stuhl ohne Hände sind kaum möglich. Der **PSR** ist abgeschwächt, der Quadrizeps schwindet. |
| **Nur N. saphenus** (ergänzt) | Druck oder Verletzung an der Knie-Innenseite | **Keine Muskeln**, nur Gefühl | Alle Bewegungen | Taubheit oder Kribbeln an der **Innenseite des Unterschenkels** |

**Handout:** Je nach Ort der Läsion sind verschiedene Ausfälle zu sehen. **Deshalb musst du den Verlauf kennen.**`,
merke:merke('N. femoralis: zwischen Psoas und Iliacus → unter dem Leistenband → er streckt das Knie. Die typische Läsion: Das Knie knickt ein.',[
'Herkunft: Plexus lumbalis (Handout L1–L4).',
'Wichtigste Aufgabe: Knie strecken (Quadrizeps). Dazu gehört der PSR.',
'Läsion: Das Knie knickt ein, Treppe und Aufstehen sind schwer, der PSR ist abgeschwächt.',
'Ursachen: Bluterguss im Becken (retroperitoneales Hämatom), Tumor, Beckenfraktur, Überstreckung.',
'Gefühl: Oberschenkel vorne; über den N. saphenus die Innenseite des Unterschenkels.'])
},

fibularis:{
verlauf:`${legend}

#### Der Verlauf Station für Station (von oben nach unten)

| Station | Wo genau? | Was passiert hier? | Engstelle / klinisch wichtig |
|---|---|---|---|
| 1 | Becken, **Plexus sacralis (L4–S3)** | Bildet zusammen mit dem N. tibialis den **N. ischiadicus**. Verlässt das Becken mit dem N. gluteus inferior durch das **Foramen infrapiriforme** (Lücke unter dem M. piriformis). | **Piriformis-Syndrom:** Der N. ischiadicus wird unter dem Piriformis eingeklemmt, z. B. beim Sitzen. |
| 2 | Oberschenkel hinten, in der Mitte | Der N. ischiadicus läuft **zwischen M. semitendinosus und M. biceps femoris**. Der fibulare Anteil versorgt den **kurzen Kopf des Biceps femoris**. | – |
| 3 | Kniekehle (Fossa poplitea) | Der N. ischiadicus **teilt sich** in N. tibialis und **N. fibularis communis**. | – |
| 4 | Kniekehle außen | Zieht **entlang der Sehne des M. biceps femoris** nach außen zum **Fibulaköpfchen** (Caput fibulae). | – |
| 5 | **Fibulahals** (Collum fibulae) | **Windet sich um den Fibulahals**. Hier liegt er **direkt unter der Haut** auf dem Knochen. | **Häufigste Engstelle:** Druck am Fibulaköpfchen, z. B. **ungewollt bei der Mobilisation des Fibulaköpfchens in der Manuellen Therapie**, außerdem **hohe Fibulafraktur** (Maisonneuve-Fraktur). Ergänzt: Gips, übergeschlagene Beine, langes Hocken. |
| 6 | Im M. fibularis longus | **Teilung** in N. fibularis superficialis und profundus. | – |
| 7a | Unterschenkel außen | Der **N. fibularis superficialis** läuft zwischen M. fibularis longus und Fibula zum **Fußrücken**. | – |
| 7b | Unterschenkel vorne | Der **N. fibularis profundus** tritt durch das Septum intermusculare cruris in die **Streckerloge** und läuft zwischen M. tibialis anterior und M. extensor hallucis longus zum **Fußrücken**. | **Vorderes Tarsaltunnelsyndrom** (am Fußrücken), begünstigt durch **hohe Absätze** (Handout, Folie N. tibialis) |
${flow('Route des N. fibularis communis vom Becken bis zum Fußrücken',[['Plexus sacralis','im N. ischiadicus'],['Unter dem Piriformis','Foramen infrapiriforme'],['Oberschenkel hinten','Teilung in der Kniekehle'],['Fibulahals','direkt unter der Haut!'],['Superficialis','Fibularmuskeln, Fußrücken'],['Profundus','Fußheber, 1. Zehenzwischenraum']])}
<p class="flow-note">Merke die 3 Ortsmarken: <strong>Kniekehle → um den Fibulahals → Teilung in oberflächlich (außen) und tief (vorne).</strong></p>`,
muskeln:`

#### Die Muskeln nach Region

| Region | Muskel | Was macht er? (Alltag) |
|---|---|---|
| Oberschenkel hinten | M. biceps femoris, Caput breve | Knie beugen. |
| Unterschenkel außen (**superficialis**) | Mm. fibulares longus et brevis | Fußaußenrand anheben (**Pronation/Eversion**), verhindert Umknicken. |
| Unterschenkel vorne (**profundus**) | **M. tibialis anterior** | **Fuß heben** (Dorsalextension), damit die Fußspitze beim Gehen nicht am Boden schleift. |
| | M. extensor hallucis longus | Großzehe heben. |
| | M. extensor digitorum longus | Zehen II–V heben. |
| | M. fibularis tertius (ergänzt: über den tiefen Ast) | Fuß heben und nach außen. |
| Fußrücken (**profundus**) | Mm. extensores digitorum et hallucis breves | Zehen strecken. |

**Wichtigster Muskel für die Prüfung:** der **Tibialis anterior**, also den Fuß heben. Der Fibularis ist der Nerv der **Fußheber**.`,
sens:`

**Einfach gesagt:** die **Außen- und Vorderseite des Unterschenkels** und der **Fußrücken** (Handout: meist den Segmenten L4–S1 zugeordnet). Die Stelle, die nur der tiefe Ast versorgt, ist die **Haut zwischen 1. und 2. Zehe** (erster Zehenzwischenraum).`,
laesion:`

#### Läsionen nach Höhe

| Wo ist der Schaden? | Typische Ursache | Was fällt aus? | Was funktioniert noch? | Typisches Zeichen: wie sieht es aus? |
|---|---|---|---|---|
| **Gesäß** (N. ischiadicus) | Piriformis-Syndrom, falsche Spritze ins Gesäß, Hüft-TEP, Beckenfraktur | **Fibularis- und Tibialis-Anteil** zusammen, siehe Kapitel N. tibialis | Hüftbeugung, Kniestreckung (N. femoralis) | Fallfuß **und** kein Zehenspitzenstand |
| **Fibulaköpfchen / Fibulahals** (häufigste Stelle) | Druck (MT-Mobilisation, Gips, übergeschlagene Beine), hohe Fibulafraktur | **Fuß- und Zehenheber**, **Fibularmuskeln**, Gefühl am Fußrücken und seitlichen Unterschenkel | **Kurzer Bizepskopf** (Ast schon oberhalb), alle Wadenmuskeln (N. tibialis): Zehenspitzenstand geht | **Fallfuß:** Der Fuß hängt herunter, die Fußspitze schleift am Boden. **Steppergang** (ergänzt): Der Patient hebt das Knie beim Gehen übertrieben hoch, damit die Fußspitze nicht hängen bleibt, und setzt den Fuß mit der Spitze zuerst auf. **Fersengang** ist nicht möglich (ergänzt). |
| **Fußrücken** (vorderes Tarsaltunnelsyndrom, nur N. fibularis profundus) | Hohe Absätze, enger Schuh | Kurze Zehenstrecker am Fußrücken, Gefühl zwischen 1. und 2. Zehe | Fuß heben geht noch (Äste zum Tibialis anterior liegen höher, ergänzt) | Taubheit oder Kribbeln **zwischen 1. und 2. Zehe** |`,
merke:merke('N. fibularis communis: Er windet sich um den Fibulahals, direkt unter der Haut, und hebt den Fuß. Die typische Läsion ist der Fallfuß mit Steppergang.',[
'Herkunft: Plexus sacralis (L4–S3), zusammen mit dem N. tibialis im N. ischiadicus.',
'Wichtigste Aufgabe: Fuß und Zehen heben (Tibialis anterior), Fußaußenrand heben (Fibularmuskeln).',
'Häufigste Engstelle: <strong>Fibulaköpfchen</strong>, z. B. durch Druck bei der MT-Mobilisation oder durch eine Fibulafraktur.',
'Läsion: <strong>Fallfuß</strong>. Die Fußspitze hängt, der Patient hebt das Knie hoch (Steppergang), Fersengang geht nicht.',
'Gefühl: Unterschenkel außen und Fußrücken; tiefer Ast: zwischen 1. und 2. Zehe.'])
},

tibialis:{
verlauf:`${legend}

#### Der Verlauf Station für Station (von oben nach unten)

| Station | Wo genau? | Was passiert hier? | Engstelle / klinisch wichtig |
|---|---|---|---|
| 1 | Becken, **Plexus sacralis (L4–S3)** | Bildet zusammen mit dem N. fibularis communis den **N. ischiadicus**. Verlässt das Becken mit dem N. gluteus inferior durch das **Foramen infrapiriforme** (unter dem M. piriformis). | **Piriformis-Syndrom** (z. B. beim Sitzen), **falsche Spritze ins Gesäß**, nach **Hüft-TEP** oder **Beckenfraktur** |
| 2 | Oberschenkel hinten, in der Mitte | Der N. ischiadicus läuft **zwischen M. semitendinosus und M. biceps femoris**. Der tibiale Anteil versorgt die **ischiocrurale Muskulatur** (Semitendinosus, Semimembranosus, langer Bizepskopf) und einen Teil des Adductor magnus. | – |
| 3 | Kniekehle (Fossa poplitea) | Nach der Teilung des N. ischiadicus zieht der N. tibialis **gerade durch die Mitte der Kniekehle**. | – |
| 4 | Unterschenkel hinten | Läuft mit den Vasa tibialia posteriora **tief in der Wade** nach unten, unter dem Sehnenbogen des M. soleus hindurch (ergänzt). Äste an alle Wadenmuskeln. | – |
| 5 | **Hinter dem Innenknöchel** (Malleolus medialis) | Zieht durch den **hinteren (medialen) Tarsaltunnel**, einen Kanal unter einem Halteband hinter dem Innenknöchel. | **(Hinteres) Tarsaltunnelsyndrom:** Einengung, z. B. nach **Knöchel- oder Tibiaschaftfraktur** |
| 6 | Fußsohle | Teilung in die **Nn. plantares** (medialis und lateralis, ergänzt). Sie versorgen die kleinen Fußmuskeln und die Haut der Fußsohle. | – |
${flow('Route des N. tibialis vom Becken bis zur Fußsohle',[['Plexus sacralis','im N. ischiadicus'],['Unter dem Piriformis','Foramen infrapiriforme'],['Oberschenkel hinten','ischiocrurale Äste'],['Mitte der Kniekehle','Teilung'],['Tief in der Wade','Wadenmuskeln'],['Tarsaltunnel','hinter dem Innenknöchel'],['Nn. plantares','Fußsohle']])}
<p class="flow-note">Merke die 3 Ortsmarken: <strong>mitten durch die Kniekehle → tief in der Wade → hinter dem Innenknöchel durch den Tarsaltunnel.</strong></p>`,
muskeln:`

#### Die Muskeln nach Region (in der Reihenfolge, in der die Äste abgehen)

| Region | Muskel | Was macht er? (Alltag) |
|---|---|---|
| Oberschenkel hinten (im N. ischiadicus) | Mm. semitendinosus et semimembranosus, M. biceps femoris (Caput longum) | **Knie beugen**, Hüfte strecken (Ferse zum Gesäß). |
| | M. adductor magnus (oberflächlicher Teil) | Bein heranziehen. |
| Kniekehle | M. popliteus | „Entriegelt“ das gestreckte Knie, damit es sich beugen kann. |
| Wade, oberflächlich | **M. triceps surae** (Gastrocnemius + Soleus) | **Auf die Zehenspitzen stellen**, beim Gehen abstoßen. Dazu gehört der **Achillessehnenreflex (ASR)**. |
| | M. plantaris | Hilft dem Triceps surae. |
| Wade, tief | M. tibialis posterior | Fuß nach innen ziehen (Supination), stützt das Fußgewölbe. |
| | M. flexor digitorum longus | Zehen II–V beugen. |
| | M. flexor hallucis longus | Großzehe beugen (letzter Abstoß beim Gehen). |
| Fußsohle | Kleine Fußmuskeln (z. B. kurze Beuger, Interossei, Lumbricales) | Zehen krallen, Fußgewölbe halten. |

**Wichtigster Muskel für die Prüfung:** der **Triceps surae**, also den Fuß senken bzw. Zehenspitzenstand. Der Tibialis ist der Nerv der **Fußsenker**, der Gegenspieler des Fibularis.`,
sens:`

**Einfach gesagt:** die **Rückseite des Unterschenkels** und die **gesamte Fußsohle** (Handout: meist den Segmenten L4–S2 zugeordnet).`,
laesion:`

#### Läsionen nach Höhe

| Wo ist der Schaden? | Typische Ursache | Was fällt aus? | Was funktioniert noch? | Typisches Zeichen: wie sieht es aus? |
|---|---|---|---|---|
| **Gesäß** (ganzer N. ischiadicus) | Piriformis-Syndrom, falsche Spritze ins Gesäß, Hüft-TEP, Beckenfraktur | **Knie beugen** schwach, dazu **alles unterhalb des Knies**: Fuß heben (Fibularis) **und** senken (Tibialis), Gefühl an Unterschenkel und Fuß (außer innen, N. saphenus) | Hüfte beugen und Knie strecken (N. femoralis) | **Fallfuß und kein Zehenspitzenstand** gleichzeitig |
| **Kniekehle / Unterschenkel** (nur N. tibialis) | Verletzung, Fraktur | **Fuß senken**, Fuß nach innen ziehen, Zehen beugen, Gefühl an der Fußsohle | Knie beugen (ischiocrurale Äste schon oberhalb); Fuß heben (N. fibularis) | **Zehenspitzenstand nicht möglich**, schwacher Abstoß beim Gehen, **ASR abgeschwächt oder fehlend**. Ergänzt: Der Fuß kann in eine **Hackenfuß-Stellung** geraten, weil die Fußheber keinen Gegenspieler mehr haben; der Patient geht dann eher auf der Ferse. Dazu **Krallenzehen**, weil die kleinen Fußmuskeln fehlen. |
| **Hinter dem Innenknöchel** (hinteres Tarsaltunnelsyndrom) | Knöchel- oder Tibiaschaftfraktur | Nur **kleine Fußmuskeln** und **Gefühl an der Fußsohle** | **Zehenspitzenstand geht noch**, weil die Wadenäste oberhalb abgehen | Kribbeln oder Brennen an der **Fußsohle**, besonders beim Stehen und Gehen (ergänzt) |

**Zum Vergleich:** Das **vordere** Tarsaltunnelsyndrom betrifft **nicht** den Tibialis, sondern den **N. fibularis profundus** am Fußrücken (hohe Absätze).`,
merke:merke('N. tibialis: Er läuft mitten durch die Kniekehle und hinter dem Innenknöchel durch den Tarsaltunnel und senkt den Fuß. Die typische Läsion: kein Zehenspitzenstand.',[
'Herkunft: Plexus sacralis (L4–S3), zusammen mit dem N. fibularis im N. ischiadicus.',
'Wichtigste Aufgabe: Fuß senken und Zehenspitzenstand (Triceps surae, ASR), Zehen beugen.',
'Gesäß-Läsion (Piriformis, Spritze): Fallfuß <strong>und</strong> kein Zehenstand, weil der ganze Ischiadicus betroffen ist.',
'Unterschenkel: <strong>Kein Zehenspitzenstand</strong>, ASR fehlt, eventuell Hackenfuß und Krallenzehen.',
'Tarsaltunnel (hinter dem Innenknöchel): nur Fußsohle und kleine Fußmuskeln betroffen.'])
}
};
