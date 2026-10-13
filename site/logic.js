export function normalize(text='') { return String(text).normalize('NFKC').toLocaleLowerCase().replace(/\s+/g,' ').trim(); }
export function filterPapers(papers, state, fields, saved=new Set()) {
  const q=normalize(state.q);
  const terms=q.split(' ').filter(Boolean);
  const fieldMap=new Map(fields.map(f=>[f.id,f]));
  return papers.filter(p=>{
    if(state.type!=='all'&&p.type!==state.type)return false;
    if(state.track!=='all'&&p.track!==state.track)return false;
    if(state.field&&p.field!==state.field)return false;
    if(state.subfield&&p.subfield!==state.subfield)return false;
    if(state.view==='saved'&&!saved.has(p.id))return false;
    if(!terms.length)return true;
    const f=fieldMap.get(p.field),s=f?.subfields.find(x=>x.id===p.subfield);
    const text=normalize([p.title,...p.authors,f?.en,f?.zh,s?.en,s?.zh,p.noteZh,p.id].join(' '));
    return terms.every(t=>text.includes(t));
  }).sort((a,b)=>{
    if(state.sort==='type'&&a.type!==b.type)return a.type==='oral'?-1:1;
    if(state.sort==='field'&&a.field!==b.field)return fieldMap.get(a.field).en.localeCompare(fieldMap.get(b.field).en);
    return a.title.localeCompare(b.title);
  });
}
export function summarize(papers) {
  const oral=papers.filter(p=>p.type==='oral').length;
  return {total:papers.length,oral,spotlight:papers.length-oral};
}
export function csvCell(value) {
  let s=String(value??'');
  if(/^[=+@\-\t\r]/.test(s))s="'"+s;
  return '"'+s.replaceAll('"','""')+'"';
}
export function exportCsv(papers,fields) {
  const fm=new Map(fields.map(f=>[f.id,f]));
  const header=['ID','Title','Authors','Presentation','Track','Primary field','Subfield','Official page','OpenReview'];
  const rows=papers.map(p=>{const f=fm.get(p.field);return [p.id,p.title,p.authors.join('; '),p.type,p.track,f.en,f.subfields.find(s=>s.id===p.subfield).en,p.officialUrl,p.openreviewUrl];});
  return '\uFEFF'+[header,...rows].map(r=>r.map(csvCell).join(',')).join('\r\n');
}
export function readState(search,fields) {
  const p=new URLSearchParams(search);
  const state={q:p.get('q')||'',field:p.get('field')||'',subfield:p.get('subfield')||'',type:p.get('type')||'all',track:p.get('track')||'all',sort:p.get('sort')||'type',view:p.get('view')||'papers',page:1};
  if(!fields.some(f=>f.id===state.field))state.field='';
  if(!fields.find(f=>f.id===state.field)?.subfields.some(s=>s.id===state.subfield))state.subfield='';
  if(!['oral','spotlight','all'].includes(state.type))state.type='all';
  if(!['main','evaluations','position','all'].includes(state.track))state.track='all';
  if(!['type','title','field'].includes(state.sort))state.sort='type';
  if(!['papers','saved','landscape'].includes(state.view))state.view='papers';
  return state;
}
