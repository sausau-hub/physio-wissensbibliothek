import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from 'file:///C:/Users/sausau/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js';
import {subjects,lessons} from './content/library-core.mjs';
import './content/library-anatomy.mjs';
import './content/library-ortho.mjs';
import './content/library-gyn.mjs';
import './content/library-paed.mjs';
import {glossary} from './content/glossary.mjs';
import {clinicalCases} from './content/clinical-cases.mjs';
const here=path.dirname(fileURLToPath(import.meta.url));
const sources=JSON.parse(fs.readFileSync(path.join(here,'content/sources.json'),'utf8').replace(/^\uFEFF/,''));
const ids=new Set();
for(const l of lessons){
 l.clinicalCase=clinicalCases[l.id];
 if(!l.clinicalCase)throw Error('Missing clinical example '+l.id);
 if(ids.has(l.id))throw Error('Duplicate lesson '+l.id);ids.add(l.id);
 if(!subjects.some(s=>s.id===l.subject)||!l.body||!l.questions.length||!l.refs.length)throw Error('Incomplete lesson '+l.id);
 for(const r of l.refs)if(!sources.some(s=>s.id===r.id))throw Error('Missing source '+r.id);
 l.html=marked.parse(l.body).replace(/<table>/g,'<div class="table-scroll"><table>').replace(/<\/table>/g,'</table></div>');
}
for(const s of sources)if(!lessons.some(l=>l.refs.some(r=>r.id===s.id)))throw Error('Unmapped source '+s.id);
const dist=path.join(here,'dist');fs.mkdirSync(dist,{recursive:true});
const termIds=new Set();
for(const g of glossary){if(termIds.has(g.id)||!g.meaning||!g.example||!Array.isArray(g.aliases))throw Error('Invalid glossary '+g.id);termIds.add(g.id);}
for(const f of ['index.html','styles.css','app.js','terms.js','terms.css'])fs.copyFileSync(path.join(here,'src',f),path.join(dist,f));
fs.writeFileSync(path.join(dist,'content.js'),'window.PHYSIO_LIBRARY = '+JSON.stringify({version:2,subjects,lessons,sources,glossary})+';\n');
console.log(`Glossary: ${glossary.length} terms; clinical examples: ${Object.keys(clinicalCases).length}.`);
console.log(`Built ${subjects.length} subjects, ${lessons.length} chapters, ${sources.length} mapped sources.`);
