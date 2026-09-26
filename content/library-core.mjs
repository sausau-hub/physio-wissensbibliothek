export const subjects = [
 ['anatomie','Anatomie 1','Knochen, Gelenke & Muskeln','Vom Knochenpunkt zur Bewegung. Schultergürtel, Arm und Wirbelsäule.','A1'],
 ['neuroanatomie','Anatomie 3','Nervensystem & Gehirn','Die räumliche Landkarte: Rückenmark, Nervenwurzeln, Hirnregionen und Gefäße.','A3'],
 ['neurophysiologie','Neurophysiologie','Reize, Reflexe & Schmerz','Was mit einer Information auf ihrem Weg durch das Nervensystem passiert.','NP'],
 ['pns','PNS','Die peripheren Nerven','Sechs Nerven verstehen: Verlauf, Versorgung und mögliche Ausfälle.','PN'],
 ['orthopaedie','PT Orthopädie','Knie & Lendenwirbelsäule','Anatomie mit Belastung, Befund und funktionellen Problemen verbinden.','OR'],
 ['mt','Manuelle Therapie','Befund & Gelenkmechanik','Bewegungen unterscheiden und die Logik der Untersuchung verstehen.','MT'],
 ['gyn','PT Gynäkologie','Blase & Schwangerschaft','Lage und Funktion verstehen, Entwicklung und Veränderungen einordnen.','GY'],
 ['paed','PT Pädiatrie','Entwicklung & Neonatologie','Vom Kreislaufwechsel bis zur sensomotorischen Entwicklung.','PÄ']
].map(([id,title,subtitle,description,short])=>({id,title,subtitle,description,short}));
export const lessons=[];
export function add(subject,id,title,level,summary,refs,body,example,questions,notice=''){
 lessons.push({subject,id,title,level,summary,refs:refs.map(([id,pages])=>({id,pages})),body,example,questions,notice});
}
add('neuroanatomie','nervensystem','Die Landkarte des Nervensystems',1,'ZNS/PNS und afferent/efferent sind zwei verschiedene Ordnungssysteme.',[['s00','2–8']],`
### Erst den Ort, dann die Richtung klären
**ZNS** bedeutet zentrales Nervensystem: Gehirn und Rückenmark. **PNS** sind die Nervenstrukturen außerhalb davon. Diese Einteilung beantwortet: Wo befindet sich die Struktur?

**Afferent** heißt: Information läuft zum ZNS. **Efferent** heißt: Information läuft vom ZNS weg zu einem Erfolgsorgan. Diese Einteilung beantwortet: In welche Richtung läuft die Information? Ein peripherer Nerv kann beides enthalten.

### Welche Aufgabe wird geregelt?
Das **somatische Nervensystem** verbindet unter anderem bewusste Wahrnehmung und Skelettmuskulatur. Das **vegetative Nervensystem** reguliert innere Organe. Dazu gehören Sympathikus, Parasympathikus und das enterische Nervensystem. „Somatisch“ bedeutet nicht, dass jede Reaktion bewusst ausgelöst wird: Auch ein Muskelreflex ist somatisch.

### Grau und weiß
Graue Substanz enthält besonders viele Nervenzellkörper und Verschaltungen, weiße Substanz besonders viele Nervenfasern. Das ist eine Beschreibung der vorherrschenden Bestandteile, keine vollständige Trennung.

### Ein Nerv ist kein einzelner Draht
Endoneurium umgibt einzelne Nervenfasern, Perineurium ein Faszikel, Epineurium den ganzen Nerv. Das Mesoneurium verbindet ihn mit seiner Umgebung und unterstützt seine Beweglichkeit. Blutgefäße versorgen den Nerv; Nervi nervorum versorgen seine Hüllen.`,
'Du greifst eine Tasse. Die Berührungsmeldung aus der Hand läuft afferent zum ZNS. Der Befehl an die Fingerbeuger läuft efferent zurück. Beides kann durch denselben gemischten Nerv laufen. Das Kabelbild hilft beim Bündeln; echte Nerven leiten zusätzlich biologische Signale und brauchen Blutversorgung.',
[['Grundlage','Ist „PNS“ eine Bewegungsrichtung?','Nein. PNS bezeichnet die Lage außerhalb von Gehirn und Rückenmark. Afferent/efferent bezeichnet die Richtung relativ zum ZNS.'],['Transfer','Warum ist „Ein Nerv ist entweder sensibel oder motorisch“ falsch?','Viele periphere Nerven sind gemischt. Verschiedene Fasern übernehmen sensible, motorische und vegetative Aufgaben.']]);
add('neuroanatomie','rueckenmark','Rückenmark, Häute & Liquorräume',1,'Den Schutzraum von außen nach innen aufbauen.',[['s10','2–12'],['s19','1–2']],`
### Der Inhalt und seine Hülle
Der **Canalis vertebralis** ist der knöcherne Kanal. Das **Rückenmark** liegt darin. Die Rückenmarkshäute heißen von außen nach innen **Dura mater → Arachnoidea → Pia mater**. Die Pia liegt dem Rückenmark unmittelbar an.

Zwischen Arachnoidea und Pia liegt der **Subarachnoidalraum** mit Liquor. Der epidurale Raum liegt außerhalb der Dura. „Subdural“ bezeichnet einen potenziellen Spaltraum, keinen normalen großen Liquorraum. Spinal- und Epiduralanästhesie nutzen deshalb unterschiedliche Räume; hier geht es um die anatomische Unterscheidung.

### Warum unten Nervenwurzeln statt Rückenmark liegen
Beim Erwachsenen endet das Rückenmark meist ungefähr auf Höhe L1/L2 als **Conus medullaris**. Weiter nach unten laufende Wurzeln bilden die **Cauda equina**. Das **Filum terminale** ist dagegen ein fadenförmiger Halteapparat, nicht die Gesamtheit der Nervenwurzeln.

### Querschnitt lesen
Innen liegt schmetterlingsförmige graue Substanz: Hinterhorn für sensible Verarbeitung, Vorderhorn mit motorischen Nervenzellkörpern, in bestimmten Abschnitten Seitenhorn mit vegetativen Anteilen. Außen verlaufen in weißer Substanz auf- und absteigende Bahnen. In der Mitte liegen Zentralkanal und verbindende Kommissuren.

Ein Rückenmarkssegment ist einem Spinalnervenpaar zugeordnet. Ein Wirbelsäulen-Bewegungssegment umfasst dagegen benachbarte Wirbel und ihre Verbindungen. Die Begriffe sind nicht austauschbar.`,
'Stell dir ein mehrstöckiges Haus vor: Das Rückenmark endet vor dem unteren Ende des Gebäudes. Die Leitungen zu tieferen Stockwerken müssen daher noch ein Stück im Kanal nach unten ziehen. Diese Leitungsgruppe ist die Cauda equina.',
[['Grundlage','In welchem Raum befindet sich der Liquor um das Rückenmark?','Im Subarachnoidalraum zwischen Arachnoidea und Pia.'],['Transfer','Sind Filum terminale und Cauda equina dasselbe?','Nein. Das Filum ist ein Haltefaden; die Cauda equina besteht aus Nervenwurzeln.']],
'Materialkorrektur: Das Skript vermischt stellenweise Filum/Cauda equina und Rückenmarks-/Bewegungssegment. Die Begriffe sind hier ausdrücklich getrennt.');
add('neuroanatomie','spinalnerv','Von der Wurzel zum gemischten Nerv',2,'Radix und Ramus auseinanderhalten – dann wird die Plexusbildung verständlich.',[['s11','3–11']],`
### Die Reihenfolge ist entscheidend
**Radix dorsalis** führt sensible Afferenzen; im Spinalganglion liegen die zugehörigen Zellkörper. **Radix ventralis** führt motorische beziehungsweise efferente Fasern. Beide vereinigen sich zum kurzen, gemischten Spinalnerv.

Erst danach entstehen **Ramus dorsalis und Ramus ventralis**. Beide sind gemischt. „Dorsale Wurzel ist sensibel“ bedeutet also ausdrücklich nicht „dorsaler Ast ist nur sensibel“.

### Wohin führen die Äste?
Der Ramus dorsalis versorgt unter anderem autochthone Rückenmuskulatur und Haut am Rücken. Die ventralen Äste bilden in Hals-, Arm- und Beinregion Nervengeflechte: Plexus cervicalis, brachialis, lumbalis und sacralis. Im Thorax bleiben viele ventrale Äste als Interkostalnerven segmental organisiert.

Der **Ramus meningeus** zieht zurück in den Wirbelkanal und versorgt dort Strukturen. **Rami communicantes** verbinden mit dem sympathischen Grenzstrang. Weiße Verbindungsäste sind typischerweise T1–L2 zugeordnet; graue finden sich auf allen segmentalen Höhen.

### Dermatome sind keine einzelnen peripheren Nerven
Ein Dermatom ist das Hautgebiet einer spinalen Wurzel beziehungsweise eines Segments. Ein peripheres Nervenversorgungsgebiet folgt einem benannten Nerv, der nach der Plexusmischung Fasern mehrerer Segmente enthält. Die Karten können sich überlappen und sind nicht identisch.`,
'Wie Straßen vor und nach einem Verkehrsknoten: Die Wurzeln kommen getrennt an. Nach der Vereinigung und Neuverteilung verlaufen im selben Ast unterschiedliche „Verkehrsarten“. So kann ein Hautgebiet Hinweise auf eine Wurzel oder einen peripheren Nerv geben – je nach Muster.',
[['Grundlage','Welche beiden Strukturen vereinigen sich zum Spinalnerv?','Dorsale und ventrale Wurzel.'],['Knifflig','Warum kann eine Schädigung des Ramus dorsalis Muskeln schwächen?','Der Ramus dorsalis ist gemischt und enthält auch motorische Fasern zur autochthonen Rückenmuskulatur.']],
'Materialkorrektur: Wurzeln und Äste sowie Dermatome und periphere Hautgebiete werden in den Folien teilweise zu stark gleichgesetzt. Auch die Angabe zu allen Rami communicantes ist zu pauschal.');
add('neuroanatomie','hirnlappen','Großhirnlappen: Aufgaben räumlich ordnen',2,'Nicht nur Namen lernen: Jede Region mit einer Funktion verbinden.',[['s12','3–9']],`
### Vier Lappen, vier Orientierungspunkte
**Frontal:** willkürliche Motorik, Planung und Handlungssteuerung. Der präzentrale Gyrus enthält primär-motorische Areale. Sprachproduktion ist bei den meisten Menschen überwiegend links organisiert.

**Parietal:** somatosensorische Verarbeitung, Körper- und Raumorientierung. Der postzentrale Gyrus verarbeitet unter anderem Informationen aus Haut und Bewegungsapparat.

**Okzipital:** visuelle Verarbeitung. Sehinformation erreicht die Sehrinde über vorgeschaltete Stationen; der Sehnerv endet nicht einfach direkt dort.

**Temporal:** Hörverarbeitung sowie wichtige Anteile von Sprachverständnis und Gedächtnis. Das limbische System verbindet unter anderem Gedächtnis, Emotion und Motivation; es ist kein einzelner fünfter Hirnlappen.

### Tiefer verstehen
Funktionen entstehen in Netzwerken. Ein Zuordnungssatz wie „Frontal = Bewegung“ ist ein Einstieg, keine vollständige Funktionskarte. Für eine Prüfungsantwort nennst du Region, eine Kernaufgabe und ein denkbares Ausfallbeispiel.`,
'Du siehst einen Schlüssel, erkennst ihn, planst das Greifen und spürst ihn in der Hand. Sehen, Erkennen, Planen, Bewegen und Fühlen brauchen zusammenarbeitende Regionen. Ein einziger „Schlüsselbereich“ würde das nicht erklären.',
[['Grundlage','Welche Lappen verbindest du zuerst mit Sehen und Körperempfindung?','Okzipital mit Sehen, Parietal mit somatosensorischer Verarbeitung.'],['Transfer','Warum reicht eine Hirnlappenliste nicht zur genauen Diagnose?','Weil Funktionen verteilt sind und Ausfälle von genauer Lage, Ausmaß und Netzwerkverbindungen abhängen.']]);
add('neuroanatomie','hirngefaesse','Hirngefäße & Versorgungsgebiete',3,'Vom Zufluss zu ACA, MCA und PCA – ohne gefährliche Sicherheits-Abkürzungen.',[['s12','10–20']],`
### Zwei Zuflüsse
Die **Aa. carotides internae** bilden den vorderen Zufluss. Die **Aa. vertebrales** ziehen aus der Subclavia kommend durch die Halsregion und vereinigen sich zur **A. basilaris**. Der Circulus arteriosus verbindet vordere und hintere Stromgebiete über kommunizierende Arterien.

### Drei große Namen
**ACA (A. cerebri anterior):** vor allem mediale Großhirnflächen; im motorischen/sensiblen Kontext ist die Beinrepräsentation ein wichtiger Anker.

**MCA (A. cerebri media):** große laterale Flächen und tiefe Äste; unter anderem Arm/Gesicht sowie auf der dominanten Seite wichtige Sprachnetzwerke.

**PCA (A. cerebri posterior):** unter anderem Okzipitalregion und visuelle Verarbeitung. Vertebrobasiläre Äste versorgen außerdem Hirnstamm und Kleinhirn.

### Nicht auswendig übervereinfachen
Kollateralen können einen Ausfall teilweise ausgleichen, garantieren das aber nicht. Ein Gefäßverschluss hat keine immer identische Symptomkombination. Die in den Folien gezeigten provokativen Halspositionstests sind keine zuverlässige Freigabe für eine Behandlung. Das IFOMPT-Rahmenwerk verwendet eine umfassende klinische Einschätzung statt eines einzelnen negativen Positionstests.`,
'Wenn auf einer Stadtkarte die Brücke einer Hauptstraße ausfällt, hängt die Versorgung von Ort und Nebenwegen ab. Genau deshalb lernst du Gefäß und typisches Gebiet zusammen, ohne aus dem Namen eine sichere Einzeldiagnose abzuleiten.',
[['Grundlage','Welche Arterien vereinigen sich zur Basilaris?','Die beiden Aa. vertebrales.'],['Knifflig','Ein Positionstest ist negativ. Ist damit eine Gefäßproblematik ausgeschlossen?','Nein. Ein negativer provokativer Positionstest ist keine verlässliche Sicherheitsfreigabe.']],
'Fachlicher Abgleich: IFOMPT Cervical Framework 2020/2023, https://www.ifompt.org/site/ifompt/IFOMPT%20cervical%20framework%20final%202020%20Add%202023.pdf . Die Sicherheitsfolgerung aus den Unterrichtsfolien wird hier nicht übernommen.');
add('neurophysiologie','reflex','Reflexbogen, Eigen- & Fremdreflex',1,'Fünf Stationen erklären, statt eine Definition herunterzusagen.',[['s09','2–8'],['s09','14–16']],`
### Vom Reiz zur Antwort
**Rezeptor → afferente Faser → zentrale Verschaltung → efferente Faser → Effektor.** Ein Reflex ist eine unwillkürliche Antwort. Das Gehirn kann Reflexe beeinflussen; die schnelle spinale Verschaltung benötigt aber keine vorherige bewusste Entscheidung.

### Eigenreflex
Reizaufnahme und Antwort finden im selben Organ statt. Beim Muskeldehnungsreflex registriert die **Muskelspindel** eine Dehnung; die Ia-Afferenz aktiviert das passende α-Motoneuron. Die direkte erregende Verbindung ist monosynaptisch. Die zusätzliche Hemmung des Gegenspielers benötigt ein Interneuron.

### Fremdreflex
Rezeptor und Effektor liegen in unterschiedlichen Organen, etwa Hautreiz und Muskelantwort. Die Verschaltung ist polysynaptisch. Beim Rückziehreflex beugt sich die gereizte Extremität; beim gekreuzten Streckreflex kann die Gegenseite die Stützfunktion übernehmen.

### Häufige Verwechslung
Das Golgi-Sehnenorgan erfasst Spannung und gehört mit Ib-Afferenzen zu anderen Regelkreisen. Es ersetzt nicht die Muskelspindel im klassischen Dehnungsreflex.`,
'Du trittst überraschend auf etwas Spitzes. Das betroffene Bein zieht sich zurück. Das andere Bein muss gleichzeitig Last übernehmen, damit du nicht umfällst. Das erklärt den Sinn der gekreuzten Reaktion.',
[['Grundlage','Was ist der Rezeptor beim klassischen Muskeldehnungsreflex?','Die Muskelspindel.'],['Knifflig','Ist beim monosynaptischen Eigenreflex jede beteiligte Verschaltung monosynaptisch?','Nein. Die direkte erregende Ia-α-Verbindung ist monosynaptisch; zusätzliche Schaltungen wie die reziproke Hemmung nicht.']],
'Korrektur gegenüber der vermischten Darstellung in den Folien. Abgleich: Purves, Neuroscience, „The Stretch Reflex“, https://www.ncbi.nlm.nih.gov/books/NBK10809/ .');
add('neurophysiologie','kennreflexe','Kennmuskeln & klinische Reflexe',2,'Segment, Bewegung und Reflex gemeinsam abrufen.',[['s09','9–13'],['s09','17']],`
### Vier sichere Anker aus deinem Skript
| Reflex | Muskel/Antwort | Segmentanker im Kurs |
|---|---|---|
| Bizepssehnenreflex | Bizeps, Ellenbogenflexion | C5/C6 |
| Trizepssehnenreflex | Trizeps, Ellenbogenextension | C7 |
| Patellarsehnenreflex | Quadrizeps, Knieextension | L3/L4 |
| Achillessehnenreflex | Triceps surae, Plantarflexion | S1/S2 |

### Kennmuskel bedeutet Schwerpunkt
Ein Kennmuskel hilft bei der segmentalen Orientierung. Er wird meistens aus mehreren Wurzeln versorgt. Deshalb ist „ein Muskel = genau eine Wurzel“ zu grob. Deine Tabelle nennt unter anderem Deltoideus, Bizeps, Trizeps, Handmuskeln, Quadrizeps, Tibialis anterior und Triceps surae.

Gehe bei jeder Zeile so vor: **Segment → Muskel → Bewegung → passender peripherer Nerv**. Vergleiche anschließend, ob sensible und reflektorische Befunde zum gleichen Muster passen. Ein schwacher Muskel allein lokalisiert eine Läsion nicht sicher.

### Faserklassen einordnen
Die Tabelle unterscheidet A-, B- und C-Fasern. Große myelinisierte Fasern leiten schneller als kleine unmyelinisierte. Ia-/Aα-Fasern sind für schnelle propriozeptive Regelung wichtig; Aδ- und C-Fasern begegnen dir bei der Nozizeption.`,
'Beim Treppensteigen muss das Knie stabil strecken. Ordne die Funktion dem Quadrizeps zu, dann dem N. femoralis und schließlich den Segmentankern. So wird die Reflexliste zu einer Funktionskarte.',
[['Grundlage','Welcher Reflex passt zur Plantarflexion?','Der Achillessehnenreflex mit dem Triceps surae.'],['Transfer','Warum beweist ein schwacher Quadrizeps allein keine bestimmte Wurzelläsion?','Mehrere Wurzeln, der periphere Nerv, Muskel und weitere Faktoren können beteiligt sein; zusätzliche Befunde sind nötig.']]);
add('neurophysiologie','beruehrung','Mechanorezeptoren: Was wird wahrgenommen?',1,'Druck, Bewegung, Dehnung und Vibration getrennt betrachten.',[['s01','2–7']],`
### Vom mechanischen Reiz zum Signal
Verformung der Haut beeinflusst spezialisierte Rezeptoren. Daraus entsteht ein elektrisches Signal in der afferenten Bahn. Ein Rezeptor kann bestimmte Reize besonders gut abbilden; das bedeutet nicht, dass er ein kleines fertiges Bild des Gegenstands sendet.

| Rezeptor | Nützlicher Lernanker | Anpassung |
|---|---|---|
| Merkel | anhaltender Druck, Formdetails | langsam |
| Meissner | bewegte leichte Berührung | schnell |
| Ruffini | Hautdehnung | langsam |
| Pacini | rasche Veränderungen, Vibration | sehr schnell |

### Was heißt Adaptation?
Bei einem gleichbleibenden Reiz nimmt die Aktivität schnell adaptierender Rezeptoren stark ab. Sie melden besonders Veränderungen. Langsam adaptierende Rezeptoren liefern länger Information über einen anhaltenden Zustand. **Schnell adaptierend** und **schnelle Nervenleitung** sind zwei verschiedene Eigenschaften.

Rezeptive Felder sind die Bereiche, aus denen eine Faser Information erhält. Kleine Felder und dichte Versorgung unterstützen eine feine räumliche Unterscheidung.`,
'Beim Anziehen spürst du den Ärmel deutlich. Später fällt die gleichbleibende Berührung weniger auf. Bewegt sich der Stoff plötzlich, bemerkst du die Veränderung erneut. Dieses Beispiel erklärt Adaptation, ohne alle beteiligten Rezeptoren auf einen Typ zu reduzieren.',
[['Grundlage','Welcher Rezeptor ist ein Anker für Vibration?','Pacini-Körperchen.'],['Knifflig','Bedeutet schnelle Adaptation automatisch schnelle Leitung?','Nein. Adaptation beschreibt die Antwort auf einen anhaltenden Reiz; Leitung die Ausbreitung entlang der Faser.']]);
add('neurophysiologie','sensible-bahnen','Sensible Bahnen: Wo kreuzt die Information?',2,'Feine Berührung und Schmerz anhand ihrer Kreuzung unterscheiden.',[['s01','8–14'],['s02','15–17']],`
### Feine Berührung und bewusste Propriozeption
Die Hinterstrangbahn steigt zunächst **auf derselben Seite im Rückenmark** auf. Untere Körperabschnitte verlaufen im Fasciculus gracilis, obere zusätzlich im Fasciculus cuneatus. Umschaltung und Kreuzung erfolgen in der **Medulla oblongata**. Danach führt der Weg über den Lemniscus medialis zum Thalamus und zur somatosensorischen Großhirnrinde.

### Schmerz und Temperatur
Die Afferenz wird im Hinterhorn verschaltet. Die weiterführenden Fasern kreuzen schon auf Rückenmarksebene und ziehen im anterolateralen System, unter anderem im Tractus spinothalamicus, nach oben. Schmerzverarbeitung umfasst zusätzliche verteilte Systeme.

### Warum die Kreuzung wichtig ist
Bei einer Schädigung im Rückenmark sind feine Berührung/Propriozeption und Schmerz/Temperatur nicht zwangsläufig auf derselben Körperseite betroffen. Für die Begründung musst du wissen, ob die betreffende Bahn ihre Kreuzung schon passiert hat. Grobe Berührung wird in den Kursfolien ebenfalls spinothalamischen Anteilen zugeordnet; setze sie nicht mit der gesamten Mechanosensibilität gleich.`,
'Zeichne zwei Aufzüge links und rechts. Die feine Berührung fährt erst bis zur Medulla hoch und wechselt dort. Die Schmerzbahn wechselt früh im Rückenmark. Markiere nun eine Unterbrechung: Welche Information kommt dort auf welcher Seite vorbei?',
[['Grundlage','Wo kreuzt die Hinterstrang-Lemniscus-medialis-Bahn?','In der Medulla oblongata nach Umschaltung in den Hinterstrangkernen.'],['Knifflig','Warum ist „Alle sensiblen Bahnen kreuzen sofort im Rückenmark“ falsch?','Die Hinterstrangbahn steigt zunächst ipsilateral auf; die Kreuzung erfolgt erst in der Medulla.']],
'Die Folien vereinfachen die Wege stellenweise. Abgleich der Hinterstrangbahn: https://www.ncbi.nlm.nih.gov/books/NBK11142/ .');
add('neurophysiologie','schmerz','Nozizeption ist nicht gleich Schmerz',3,'Gewebereiz, Weiterleitung und persönliche Erfahrung auseinanderhalten.',[['s02','5–14'],['s02','18–21']],`
### Zwei Begriffe
**Nozizeption** bezeichnet die neuronale Verarbeitung potenziell schädigender Reize. **Schmerz** ist eine unangenehme persönliche sensorische und emotionale Erfahrung. Die Erfahrung wird von biologischen, psychologischen und sozialen Faktoren beeinflusst. Das bedeutet nicht, dass sie eingebildet ist.

### Von der Peripherie zum Erleben
Aδ- und C-Fasern leiten nozizeptive Information. Entzündungsmediatoren können die Reizantwort verändern: Ein zuvor wenig empfindlicher Bereich reagiert dann stärker. Auf dem weiteren Weg können Signale verstärkt oder gehemmt werden. Aufmerksamkeit, Bedrohung, Erfahrung und Kontext beeinflussen das Erleben.

### Begriffe sauber verwenden
**Hypalgesie:** verminderte Schmerzempfindlichkeit. **Analgesie:** fehlende Schmerzempfindung. **Hyperalgesie:** verstärkter Schmerz bei normalerweise schmerzhaftem Reiz. **Allodynie:** Schmerz bei einem normalerweise nicht schmerzhaften Reiz. **Parästhesie:** ungewöhnliche Empfindung wie Kribbeln. **Anästhesie** ist weiter gefasst als Analgesie und betrifft Empfindungsverlust.

### Medikamentenfolien einordnen
Die Unterlagen erwähnen NSAR und Opioide. Als Grundidee: NSAR beeinflussen die Prostaglandinbildung; Opioide wirken an Opioidrezeptoren. Das ersetzt weder eine ärztliche Auswahl noch Dosierungswissen. Das INOMT-Ebenenmodell in der Quelle ist ein Unterrichtsmodell; insbesondere seine energetischen Annahmen sind nicht mit gesicherter Neurophysiologie gleichzusetzen.`,
'Eine leichte Berührung am Sonnenbrand tut weh, obwohl dieselbe Berührung an unverletzter Haut angenehm wäre. Das ist ein verständlicher Anker für Allodynie und Sensibilisierung. Es beweist allein keine bestimmte Ursache bei einer realen Person.',
[['Grundlage','Wie heißt Schmerz durch normalerweise nicht schmerzhaften Reiz?','Allodynie.'],['Transfer','Kann man aus der Schmerzstärke direkt die Größe eines Gewebeschadens berechnen?','Nein. Schmerz und Gewebeschaden stehen nicht in einer einfachen Eins-zu-eins-Beziehung.']],
'Die wiederholte Begriffstabelle in mehreren Nerven-PDFs setzt Anästhesie und Analgesie fälschlich gleich. Allodynie ist außerdem kein reines Ausfallsymptom.');
