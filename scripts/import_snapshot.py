"""Import the curated local analysis, without publishing raw HTML or private files.

Usage: python scripts/import_snapshot.py ../neurips2026_analysis
"""
import csv
import hashlib
import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]).resolve()
records = json.loads((source / 'classified.json').read_text(encoding='utf-8'))
original = {f"P{p['index']:03d}": p for p in json.loads((source / 'selected_unique.json').read_text(encoding='utf-8'))}
names = {
'A': ('Language models & agents', ['Pretraining, architectures & scaling', 'Reasoning & self-improvement', 'Planning, tools & collaboration', 'Retrieval & search', 'Diffusion language models', 'Language & agent evaluation']),
'B': ('Multimodal learning', ['Cross-modal alignment & fusion', 'Vision-language reasoning', '3D understanding & grounding']),
'C': ('Vision & 3D graphics', ['3D reconstruction & rendering', 'Segmentation & visual representations', 'Image & video forensics']),
'D': ('Generative models', ['Diffusion, flow matching & theory', 'Image generation, editing & restoration', 'Video & 3D generation', 'Post-training & reward modeling']),
'E': ('Reinforcement learning', ['Exploration & skill learning', 'Policy optimization & fundamentals', 'Offline, imitation & safe RL', 'Multi-agent reinforcement learning', 'Bandits & Bayesian optimization']),
'F': ('Learning theory & optimization', ['Statistical learning & complexity', 'Deep learning theory & dynamics', 'Continuous optimization & training', 'Online learning & algorithms', 'Games, mechanisms & combinatorial optimization']),
'G': ('Statistics & causality', ['Uncertainty, calibration & inference', 'Bayesian & simulation-based inference', 'Causal modeling & discovery']),
'H': ('Trustworthy AI', ['Alignment & agent safety', 'Privacy, attacks & model ownership', 'Interpretability & model auditing', 'Fairness, society & human–AI interaction', 'Machine unlearning']),
'I': ('Efficient ML & systems', ['Compression & efficient adaptation', 'Inference & resource scheduling', 'Training systems & efficient architectures']),
'J': ('Representations & structured learning', ['Graph learning', 'Transfer, few-shot learning & model merging', 'Geometry, clustering & neurosymbolic learning', 'Sequence & emerging architectures']),
'K': ('Robotics & embodied AI', ['Navigation, mapping & control', 'World models & physical dynamics', 'Embodied systems, data & touch']),
'L': ('AI for Science & applications', ['Genomics & molecular biology', 'Molecules, drugs & materials', 'Physics, PDEs & scientific computing', 'Earth, climate, ecology & remote sensing', 'Medical imaging & clinical AI', 'Scientific discovery & industry applications']),
'M': ('Neuroscience & cognition', ['Computational neuroscience & brain dynamics', 'Neural encoding, decoding & BCIs', 'Cognition, behavior & neuro-inspired computing']),
'N': ('Time series & audio', ['Forecasting, adaptation & data quality', 'Audio, music & sound datasets']),
'O': ('Data & evaluation', ['Evaluation methods & model selection', 'Data quality, distillation & annotation'])}
colors = ['#41665e','#5e738b','#976d56','#aa7642','#7c8261','#6b6d87','#7a8581','#9d6254','#5c7c80','#8a7854','#698971','#7a8398','#a0798f','#698a9c','#8d8c71']
fields=[]
for (code,(name,subnames)),color in zip(names.items(),colors):
    rr=[r for r in records if r['_primary']==code]
    subfields=[]
    for i,subname in enumerate(subnames,1):
        subcode=f'{code}{i}'
        matching=[r for r in rr if r['_secondary']==subcode]
        assert matching, subcode
        subfields.append({'id':subcode,'en':subname,'zh':matching[0]['二级领域']})
    fields.append({'id':code,'en':name,'zh':rr[0]['一级领域'],'color':color,'subfields':subfields})
tracks={'主赛道':'main','评测与数据集':'evaluations','立场论文':'position'}
papers=[]
for row in records:
    raw=original[row['编号']]
    papers.append({'id':row['编号'],'title':row['论文标题'],'type':row['展示类别'].lower(),'track':tracks[row['赛道']],
        'field':row['_primary'],'subfield':row['_secondary'],'noteZh':row['分类说明'],
        'authors':[a['fullname'] for a in raw.get('authors',[])],
        'officialUrl':row['官方论文页'],'openreviewUrl':row['OpenReview'],
        'officialTopic':raw.get('topic'),'sourceDecision':raw['decision'],'sourceEventIds':sorted(raw['aliases'])})
payload={'version':1,'snapshotDate':'2026-10-13','scope':'Verified public subset, not a complete acceptance list',
         'fields':fields,'papers':papers,'sources':[
         {'name':'Official program data','url':'https://neurips.cc/static/virtual/data/neurips-2026-orals-posters.json'},
         {'name':'Official paper downloads','url':'https://neurips.cc/Downloads/2026'},
         {'name':'Official abstracts','url':'https://neurips.cc/static/virtual/data/neurips-2026-abstracts.json'}]}
(ROOT/'site/data').mkdir(parents=True,exist_ok=True)
(ROOT/'site/data/papers.json').write_text(json.dumps(payload,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
(ROOT/'docs').mkdir(exist_ok=True)
for name in ['papers_classified.csv','primary_summary.csv','secondary_summary.csv','pending_verification.csv']:
    shutil.copyfile(source/name,ROOT/'site/data'/name)
shutil.copyfile(source/'report.md',ROOT/'docs/report.zh-CN.md')
manifest=json.loads((source/'manifest.json').read_text(encoding='utf-8'))
manifest['sha256']={name:hashlib.sha256((source/name).read_bytes()).hexdigest() for name in ['neurips-2026-orals-posters.json','official_download.json','classified.json']}
(ROOT/'site/data/provenance.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Imported {len(papers)} papers, {len(fields)} fields, {sum(len(f["subfields"]) for f in fields)} subfields.')
