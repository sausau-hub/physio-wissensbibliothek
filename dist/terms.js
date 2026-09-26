(() => {
 'use strict';
 const glossary=window.PHYSIO_LIBRARY.glossary||[], byId=new Map(glossary.map(g=>[g.id,g]));
 const aliases=new Map();
 for(const g of glossary)for(const a of [g.title,...g.aliases])if(a&&!aliases.has(a.toLocaleLowerCase('de')))aliases.set(a.toLocaleLowerCase('de'),g.id);
 const escapeRE=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const pattern=new RegExp('(?<![\\p{L}\\p{N}])('+[...aliases.keys()].sort((a,b)=>b.length-a.length).map(escapeRE).join('|')+')(?![\\p{L}\\p{N}])','giu');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const dialog=document.createElement('dialog');dialog.id='term-dialog';dialog.setAttribute('aria-labelledby','term-title');document.body.append(dialog);
 let returnFocus=null;
 function close(){dialog.close();if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});}
 function frame(body){dialog.innerHTML=`<div class="term-head"><span class="eyebrow">KURZ & ANSCHAULICH</span><button id="term-close" aria-label="Erklärung schließen">Schließen ×</button></div>${body}`;dialog.querySelector('#term-close').onclick=close;dialog.scrollTop=0;if(!dialog.open){returnFocus=document.activeElement;dialog.showModal();}dialog.querySelector('#term-close').focus();}
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
 dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 function explain(id){const g=byId.get(id);if(!g)return;frame(`<h2 id="term-title">${esc(g.title)}</h2><p class="term-meaning">${esc(g.meaning)}</p><div class="term-example"><h3>Stell es dir so vor</h3><p>${esc(g.example)}</p></div>${['afferent','efferent','reflexbogen','ia','motoneuron','spindel','rezeptor','effektor'].includes(id)?`<div class="mini-path" aria-label="Vereinfachte Signalrichtung"><span>Körper meldet</span><b aria-hidden="true">→</b><span>Rückenmark / Gehirn</span><b aria-hidden="true">→</b><span>Körper reagiert</span></div><p class="caption">Zum ZNS = afferent. Vom ZNS weg = efferent. Die Pfeile zeigen einen vereinfachten Ablauf.</p>`:''}<p class="caption">Lesehilfe zum Kapitel. Der Fachbegriff bleibt im ursprünglichen Text erhalten.</p>`);}
 document.addEventListener('click',e=>{const b=e.target.closest('[data-term]');if(b)explain(b.dataset.term);});
 window.decorateTerms=(root,lesson)=>{
  const found=new Set();
  const targets=root.querySelectorAll('.reading,.example,.question h3,.answer,.clinical-case');
  for(const target of targets){
   const walk=document.createTreeWalker(target,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest('button,a,textarea,script,style,summary,h1,h2,.caption')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
   const nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);
   for(const node of nodes){pattern.lastIndex=0;const matches=[...node.nodeValue.matchAll(pattern)];if(!matches.length)continue;let pos=0;const fragment=document.createDocumentFragment();for(const m of matches){const id=aliases.get(m[0].toLocaleLowerCase('de'));if(!id)continue;fragment.append(document.createTextNode(node.nodeValue.slice(pos,m.index)));const b=document.createElement('button');b.type='button';b.className='term';b.dataset.term=id;b.textContent=m[0];b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-label',m[0]+' – einfach erklärt');fragment.append(b);found.add(id);pos=m.index+m[0].length;}fragment.append(document.createTextNode(node.nodeValue.slice(pos)));node.replaceWith(fragment);}
  }
  const reading=root.querySelector('.reading');if(reading&&found.size){const help=document.createElement('div');help.className='term-help';help.innerHTML=`<span>Gepunktet markierte Fachwörter antippen: einfache Erklärung + Beispiel.</span><button type="button">${found.size} Begriffe in diesem Kapitel</button>`;reading.before(help);help.querySelector('button').onclick=()=>frame(`<h2 id="term-title">Begriffe in diesem Kapitel</h2><p class="caption">Wähle einen Begriff. Deine Leseposition bleibt erhalten.</p><div class="term-list">${[...found].map(id=>byId.get(id)).sort((a,b)=>a.title.localeCompare(b.title,'de')).map(g=>`<button type="button" data-term="${g.id}">${esc(g.title)} ↗</button>`).join('')}</div>`);}
  if(lesson.id==='reflex'){
   const diagram=document.createElement('section');diagram.className='reflex-picture';diagram.innerHTML=`<div class="eyebrow">EIN BEISPIEL, FÜNF STATIONEN</div><h2>Vom Klopfen zum gestreckten Knie</h2><p>Die Fachperson klopft kurz auf die Patellarsehne. Dadurch wird der Quadrizeps gedehnt. Tippe eine Station an.</p><div class="reflex-track">${[['spindel','1','Muskelspindel','Merkt die Dehnung'],['ia','2','Ia-Afferenz','Meldet zum Rückenmark'],['motoneuron','3','Schaltung im Rückenmark','Übergabe an das α-Motoneuron'],['efferent','4','Motorische Faser','Signal zurück zum Muskel'],['effektor','5','Quadrizeps','Spannt an → Knie streckt']].map(([id,n,t,s])=>`<button type="button" data-term="${id}" aria-haspopup="dialog"><span class="step-number">${n}</span><strong>${t}</strong><small>${s}</small></button>`).join('<span class="flow-arrow" aria-hidden="true">→</span>')}</div><p class="caption">Vereinfachtes Funktionsschema, keine maßstabsgetreue Anatomie. Die zusätzliche Hemmung des Gegenspielers ist im Text erklärt.</p>`;reading.before(diagram);
  }
 };
 window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();});
})();
