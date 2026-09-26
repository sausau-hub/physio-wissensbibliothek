# Physio Wissensbibliothek

Deutschsprachige Wissensbibliothek: 8 Fachbereiche, 50 frei zugängliche Kapitel, 100 aufklappbare Fragen/Antworten und ein Register aller 39 bereitgestellten PDFs. Fach → Grundlagen → Zusammenhänge → Anwendung, ohne verpflichtenden Tagesplan.

`dist/index.html` öffnen oder `dist/` über HTTP bereitstellen. Hash-Links öffnen Fächer und Kapitel direkt. Die Original-PDFs werden nicht mitveröffentlicht: Unter Quellen kann der lokale sources-Ordner pro Browsersitzung verbunden werden, ohne Upload. Gleichnamige Monatsblätter benötigen den Unterordnerkontext.

Notizen, Antworten, Merkliste und Selbsteinschätzung liegen unter `physio-library-v2` im lokalen Browser-Speicher. Export/Import überträgt sie auf ein anderes Gerät. Der Chat erhält sie nicht automatisch. Alte Speicherstände bleiben unangetastet.

Kapitel stehen in `content/library-*.mjs`, Quellenmetadaten in `content/sources.json`, Oberfläche in `src/`. `build.mjs` erzeugt `dist/` und prüft IDs, Referenzen und Dateizuordnung. Build mit dem bereitgestellten Node-Runtime ausführen. Der marked-Import verwendet dessen Windows-Pfad; auf anderen Rechnern anpassen.

Die Kapitel sind didaktische Zusammenfassungen, keine vollständige Abschrift oder garantierter Prüfungskatalog. Materialtiefe zu Zyklus/Organen, 6. Lebensmonat und Rötelnembryopathie fehlt weiterhin. Praktische Kompetenz erfordert direkte Rückmeldung.
