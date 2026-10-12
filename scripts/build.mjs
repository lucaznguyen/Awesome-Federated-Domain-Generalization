import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/papers.json'), 'utf8'));
const papers = catalog.papers;
const readText = relative => fs.readFileSync(path.join(root, relative), 'utf8').replace(/\r\n/g, '\n');
const bib = readText('survey.bib').trim();
const active = papers.filter(p => ['published', 'online-first'].includes(p.status));
const chronological = [...papers].sort((a, b) => b.year - a.year || a.venue.localeCompare(b.venue) || a.title.localeCompare(b.title));
const byId = new Map(papers.map(p => [p.id, p]));
const groups = [
  {
    id: 'security', title: 'Security',
    intro: 'FedDG avoids centralizing raw training data, but it still exchanges models, statistics, or generated knowledge. This lens separates privacy-motivated designs, coordination integrity, and the information exposed by those exchanged artifacts. Inclusion here does not certify differential privacy, secure aggregation, or resistance to poisoning.',
    children: [
      ['security-privacy', 'Privacy-motivated representations and knowledge transfer', 'These papers directly connect FedDG with privacy or information-exposure concerns. Read their threat models and evaluations before treating the proposed mechanism as a security guarantee.'],
      ['security-coordination', 'Coordination integrity and trust', 'Ledger-backed coordination changes who can validate updates and how aggregation is governed. It does not automatically conceal the contents of an update.'],
      ['security-artifacts', 'Shared artifacts and their exposure surface', 'These are direct FedDG methods exchanging styles, prompts, or domain knowledge. Their inclusion is an analytical connection to the survey, not a claim that every paper proposes or evaluates a privacy defense.']
    ]
  },
  {
    id: 'communication-efficiency', title: 'Communication Efficiency',
    intro: 'Communication depends on what is sent, how often, and along which links. The papers below connect FedDG to compact model components, shared domain summaries, or alternative coordination. Parameter efficiency alone is not evidence of lower end-to-end bandwidth: count both directions, extra artifacts, rounds, and any peer or edge traffic at comparable unseen-domain performance.',
    children: [
      ['communication-modules', 'Prompts, lightweight components, and selective updates', 'Prompt-based and lightweight designs can reduce the trainable or exchanged state, depending on the actual update regime. Frozen-backbone and full-model settings must not be conflated.'],
      ['communication-summaries', 'Styles, prototypes, distilled knowledge, and domain summaries', 'Compact summaries can convey cross-domain knowledge without transmitting raw images. Check whether models are also exchanged and include the summary-generation and transmission costs.'],
      ['communication-coordination', 'Communication-aware coordination and topology', 'Hierarchical, peer-assisted, and translation-based collaboration redistribute computation and traffic. A reduction in server traffic need not mean a reduction in total network traffic.']
    ]
  },
  {
    id: 'architecture-design', title: 'Architecture Design',
    intro: 'Architecture has two levels in this list: the federation topology that connects clients and the model/learning design that transfers knowledge across domains. Keeping them separate avoids calling hierarchical prompts a hierarchical federation, or equating decentralized data ownership with server-free optimization.',
    children: [
      ['architecture-centralized', 'Server-coordinated learning and aggregation', 'Representative server-coordinated designs establish how source knowledge is aggregated. This is not an exhaustive list of every paper that uses a server.'],
      ['architecture-hierarchical', 'Hierarchical and cloud-edge federation', 'Use this category for explicit coordination tiers, not merely a hierarchy inside the neural network.'],
      ['architecture-decentralized', 'Decentralized, peer-assisted, and ledger-backed coordination', 'These designs have different server, peer, and consensus roles. The category intentionally does not assert that every listed system is fully server-free.'],
      ['architecture-prompts', 'Foundation models, prompts, and knowledge infusion', 'Pretrained backbones and prompt modules change where shared knowledge resides and which components need collaboration.'],
      ['architecture-modules', 'Personalization, normalization, and modular models', 'These methods separate shared and local behavior or assemble multiple components to handle heterogeneous source domains.'],
      ['architecture-causal', 'Causal, debiased, and information-constrained representations', 'These approaches target spurious or domain-specific dependencies. Causal terminology is not by itself a proof of identifiability or invariance.'],
      ['architecture-optimization', 'Invariant learning, alignment, and robust optimization', 'This group covers optimization and representation mechanisms that support the architecture, including gradients, flatness, prototypes, and semantic calibration.'],
      ['architecture-diversity', 'Domain diversity, augmentation, and task-specific designs', 'These methods enrich source-domain variation or specialize the learning design for graphs, medical imaging, re-identification, time series, and other direct FedDG settings.'],
      ['architecture-protocols', 'Deployment-sensitive and target-exposed FedDG extensions', 'Keep these extensions separate when comparing source-only generalization. Test-time adaptation, target-based model selection, and source-only prediction are different experimental protocols.']
    ]
  }
];
const groupNames = new Map(groups.flatMap(g => g.children.map(([id, title]) => [id, g.title + ': ' + title])));
groupNames.set('benchmark', 'Benchmark or empirical evaluation');
const protocolNames = {
  'not-audited': 'Not individually audited for target-access conditions',
  'target-exposed': 'Target-exposed / test-time adaptation',
  'protocol-sensitive': 'Deployment protocol requires inspection',
  'mixed-dg-da': 'Includes both domain generalization and domain adaptation'
};
const md = value => value.replace(/\|/g, '\\|');
const statusLabel = p => p.status === 'online-first'
  ? p.venue + ', online ' + p.onlineYear + '; issue ' + p.year
  : p.venue + ' ' + p.year;
const links = p => '[[paper](' + p.paper + ')]' + (p.code ? ' [[code](' + p.code + ')]' : '');
const entry = p => '- **' + md(p.title) + '**. ' + statusLabel(p) + '. ' + links(p)
  + ' [[record](docs/papers-by-year.md#' + p.id + ')]'
  + (p.protocol !== 'not-audited' ? ' — ' + protocolNames[p.protocol] + '.' : '');
const records = list => list.map(p => [
  '<a id="' + p.id + '"></a>',
  '### ' + p.title,
  '',
  '**' + statusLabel(p) + '**. ' + links(p),
  '',
  '- Lenses: ' + p.groups.map(g => groupNames.get(g)).join('; ') + '.',
  '- Protocol: ' + protocolNames[p.protocol] + '.',
  '- Metadata check: ' + p.metadataCheck + (p.verificationSource ? '; [source](' + p.verificationSource + ')' : '') + '.',
  ...(p.tags.length ? ['- Topic tags: ' + p.tags.join(', ') + '.'] : []),
  ...(p.note ? ['', p.note] : []),
  ''
].join('\n')).join('\n');

let readme = [
  '# Awesome Federated Domain Generalization',
  '',
  '[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)',
  '',
  'A curated companion reading list for our survey:',
  '',
  '> **A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design**',
  '>',
  '> Thinh Nguyen, Trung Phan, Nhi Trinh, Anh Tran, Anh Hoang, Shih Yin Ooi, and Kok-Seng Wong.',
  '>',
  '> [SSRN preprint](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5467730), posted 10 September 2025. [DOI: 10.2139/ssrn.5467730](https://doi.org/10.2139/ssrn.5467730) · [BibTeX](survey.bib)',
  '',
  'Federated domain generalization (FedDG) learns from distributed source domains to generalize to unseen domains. Following the survey, this repository organizes the literature around three connected questions: **what information is exposed, what collaboration costs, and how the federation and model are designed**. A paper can therefore appear under several lenses.',
  '',
  'This is a living reading list, updated independently of the archived preprint. The archive link identifies the 2025 SSRN version, not a claim of journal acceptance or a later manuscript revision.',
  '',
  '**Literature update: ' + catalog.updated + '.** We prioritize A/A* main-track conferences and Q1 journals, with selective preprints kept separate. Venue rankings depend on the ranking system, subject category, and year; inherited ranking claims have not all been re-audited. See the [curation policy](docs/curation.md) and [verification register](docs/verification.md). This list is not an exhaustive census.',
  '',
  '## Contents',
  '',
  '- [Scope and how to read this list](#scope-and-how-to-read-this-list)',
  '- [Security](#security)',
  '- [Communication Efficiency](#communication-efficiency)',
  '- [Architecture Design](#architecture-design)',
  '- [Benchmarks and further reading](#benchmarks-and-further-reading)',
  '- [Papers by year](docs/papers-by-year.md)',
  '- [Selective preprints](docs/preprints.md)',
  '- [Verification register](docs/verification.md)',
  '- [Update notes](docs/update-notes-2026-10-12.md)',
  '- [Contributing](#contributing)',
  '- [Citation](#citation)',
  '',
  '## Scope and how to read this list',
  '',
  '- **Direct FedDG only.** The method or evaluation must explicitly address generalization from federated source domains to an unseen domain. Generic FL, standalone centralized DG, and general security or compression foundations are not paper entries here.',
  '- **Source-only is the reference protocol.** Strict target-free FedDG does not use target data to train, select, adapt, or choose an attachment topology. Ordinary prediction on an incoming example is not, by itself, adaptation. Known target-exposed and protocol-sensitive extensions are labelled separately.',
  '- **Clients are not necessarily domains.** One client can contain mixed latent domains, and one domain can span clients. Read client-domain mappings when interpreting invariance, aggregation, and held-out-domain results.',
  '- **Themes are analytical lenses, not endorsements.** A privacy-motivated paper is not necessarily a formal privacy defense; a compact model is not necessarily a measured bandwidth saving. A non-centralized name does not establish a server-free implementation.',
  '- **One record, multiple placements.** Titles, links, and publication status come from [data/papers.json](data/papers.json). Repeated thematic entries refer to the same record. Conference and journal articles may be related publications, not independent methods.',
  '- **Verification is explicit.** A publisher metadata check does not constitute a full protocol audit. Per-paper records distinguish inherited metadata from records checked in this update; uncertain identities are held out of the main lists.',
  '',
  'Within each subsection, papers are ordered by publication year, newest first. Issue year is used when assigned; online-first availability is labelled separately. Code links are included only when retained from the existing list or verified as an author implementation.',
  ''
].join('\n');
for (const g of groups) {
  readme += '\n## ' + g.title + '\n\n' + g.intro + '\n';
  for (const [id, title, intro] of g.children) {
    readme += '\n### ' + title + '\n\n' + intro + '\n\n'
      + chronological.filter(p => active.includes(p) && p.groups.includes(id)).map(entry).join('\n') + '\n';
  }
  if (g.id === 'architecture-design') {
    readme += '\n**Test-time attachment matters.** For an unseen client, report which existing nodes or components it can use, how neighbors or clusters are chosen, whether target data influence that choice, and whether any local adaptation occurs. Training topology alone does not define this deployment rule. Do not infer an attachment policy from a held-out-domain accuracy result.\n';
  }
}
readme += [
  '',
  '## Benchmarks and further reading',
  '',
  'These resources support comparison and context; they are not additional FedDG method entries.',
  '',
  ...chronological.filter(p => p.groups.includes('benchmark')).map(entry),
  '- **Federated Domain Generalization: A Survey**. Proceedings of the IEEE, 2025. [[paper](https://doi.org/10.1109/JPROC.2025.3596173)] — a complementary direct FedDG survey.',
  '- **DomainBed**. [[code](https://github.com/facebookresearch/DomainBed)] — a centralized DG evaluation toolkit, not a federated benchmark.',
  '',
  'For the complete retained publication index, use [papers by year](docs/papers-by-year.md). [Selective preprints](docs/preprints.md) are deliberately separate from published work; unresolved identities and lower-priority publication records are documented in the [verification register](docs/verification.md).',
  '',
  '## Contributing',
  '',
  'Please follow [CONTRIBUTING.md](CONTRIBUTING.md): provide a primary source, explain the direct FedDG setting, and justify each thematic placement. Edit the catalogue first, then regenerate the views with \x60node scripts/build.mjs --write\x60. Validate with \x60node scripts/build.mjs\x60.',
  '',
  '## Citation',
  '',
  'If this survey or its organization helps your work, please cite the archived survey. The BibTeX below is based on the verified SSRN record; [download it here](survey.bib).',
  '',
  '\x60\x60\x60bibtex',
  bib,
  '\x60\x60\x60',
  ''
].join('\n');

let years = '# Papers by Year\n\n[Back to README](../README.md)\n\n'
  + 'Publication records are listed once here. Use the thematic README for cross-cutting connections. Issue publication year is used when assigned; accepted/online-first work with a future issue year is separated below. Related conference and journal articles are retained as publication records, not counted as independent algorithms.\n\n'
  + 'Metadata checks refer to identity, title, venue, year, or link checks as documented in the update notes. They do not certify venue quartiles, all code links, or strict target-free protocols. “Not individually audited” means the target-access conditions remain to be checked; it does not imply that a paper uses target data.\n';
for (const year of [...new Set(papers.filter(p => p.status === 'published').map(p => p.year))].sort((a, b) => b - a)) {
  years += '\n## ' + year + '\n\n' + records(chronological.filter(p => p.status === 'published' && p.year === year));
}
years += '\n## Online-first with a future issue year\n\n' + records(chronological.filter(p => p.status === 'online-first'));
const preprints = '# Selective FedDG Preprints\n\n[Back to README](../README.md)\n\n'
  + 'These manuscripts are kept separate from peer-reviewed publications. An arXiv, SSRN, or OpenReview entry alone does not establish acceptance. Retention is selective, based on distinctive FedDG settings or mechanisms; it is not a claim that every preprint meets the venue priority.\n\n'
  + 'The \x60preprint\x60 status means a peer-reviewed publication was not established in this update, not necessarily that none exists. Please contribute a verified publisher record when available.\n\n'
  + records(chronological.filter(p => p.status === 'preprint'));
const quarantine = chronological.filter(p => p.status === 'needs-verification');
let verification = '# Verification Register\n\n[Back to README](../README.md)\n\n'
  + 'Last curation update: ' + catalog.updated + '. See [update notes](update-notes-2026-10-12.md) for corrected records and evidence.\n\n'
  + '## Unresolved identities: not in the main reading lists\n\n'
  + 'These are inherited entries, not verified publications. Their original strings are preserved for reconciliation. The suspect links are shown as text, not recommended reading links.\n\n';
for (const p of quarantine) {
  verification += '### ' + p.title + '\n\n'
    + '- Catalogue ID: \x60' + p.id + '\x60.\n'
    + '- Inherited venue/year: ' + p.venue + ' ' + (p.year ?? '(year unverified)') + '.\n'
    + '- Inherited paper link: \x60' + p.paper + '\x60.\n'
    + (p.code ? '- Inherited code link: \x60' + p.code + '\x60.\n' : '')
    + '\n' + p.note + '\n\n';
}
verification += '## Confirmed publication outside the priority list\n\n'
  + chronological.filter(p => p.status === 'other-publication').map(p =>
    '- **' + p.title + '**. ' + statusLabel(p) + '. ' + links(p) + ' ' + p.note).join('\n')
  + '\n\n## Limits of the present audit\n\n'
  + '- This update corrects documented identity/link errors and checks the added records; it is not a full-text security, protocol, or reproducibility audit of every paper.\n'
  + '- \x60inherited\x60 records have not all been re-verified. \x60crossref-2026-10-12\x60 records had publisher-deposited metadata checked; \x60checked-2026-10-12\x60 records were individually reconciled with the sources recorded in the catalogue or update notes.\n'
  + '- The A/A* and Q1 preference is not a blanket certification of all retained venues. Ranking edition, subject category, and publication year should be supplied before using this list as a strict eligibility filter.\n'
  + '- Code repositories retained from the earlier list have not all been audited for authorship, license, or reproducibility.\n'
  + '- Thematic placement is editorial interpretation. In particular, the shared-artifact security subsection identifies an exposure surface, not a demonstrated attack or defense.\n'
  + '- Do not compare reported accuracies without matching held-out domains, client-domain mappings, backbone pretraining, public data, and target-access rules.\n';

const views = {
  'README.md': readme,
  'docs/papers-by-year.md': years,
  'docs/preprints.md': preprints,
  'docs/verification.md': verification
};
const assert = (condition, message) => { if (!condition) throw new Error(message); };
assert(byId.size === papers.length, 'Duplicate catalogue IDs');
assert(/^\d{4}-\d{2}-\d{2}$/.test(catalog.updated), 'Invalid update date');
const urls = new Set();
for (const p of papers) {
  assert(p.id && p.title && (Number.isInteger(p.year) || (p.status === 'needs-verification' && (p.year === null || typeof p.year === 'string'))), 'Missing identity fields: ' + p.id);
  assert(/^https:\/\//.test(p.paper), 'Non-HTTPS paper URL: ' + p.id);
  assert(Object.hasOwn(protocolNames, p.protocol), 'Unknown protocol: ' + p.id);
  assert(['published', 'online-first', 'preprint', 'needs-verification', 'other-publication'].includes(p.status), 'Unknown status: ' + p.id);
  assert(p.groups.every(g => groupNames.has(g)), 'Unknown group: ' + p.id);
  if (['published', 'online-first', 'preprint'].includes(p.status)) {
    assert(p.groups.length > 0, 'Unclassified record: ' + p.id);
    assert(!urls.has(p.paper), 'Duplicate active paper URL: ' + p.id);
    urls.add(p.paper);
  }
  if (p.protocol === 'target-exposed') assert(p.groups.every(g => g === 'architecture-protocols'), 'Target-exposed core placement: ' + p.id);
  if (p.status === 'needs-verification') assert(!readme.includes(p.title), 'Unresolved title in main list: ' + p.id);
}
for (const g of groups) for (const [id] of g.children) {
  assert(active.some(p => p.groups.includes(id)), 'Empty thematic group: ' + id);
}
assert(!readme.includes('abstract_id=5199400'), 'Old incorrect survey URL');
assert(readme.includes('5467730') && bib.includes('5467730'), 'Survey citation mismatch');
assert(!readme.includes('Borderline / Excluded Papers'), 'Removed legacy section restored');
assert(!readme.includes('under review'), 'Unverified review status assertion');

// Validate local Markdown links against generated content and hand-maintained docs.
const localDocs = ['CONTRIBUTING.md', 'docs/curation.md', 'docs/update-notes-2026-10-12.md'];
const documents = new Map(Object.entries(views));
for (const relative of localDocs) documents.set(relative, readText(relative));
const anchors = content => new Set([
  ...[...content.matchAll(/^#{1,6} (.+)$/gm)].map(m => m[1].toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, '').replace(/ /g, '-')),
  ...[...content.matchAll(/<a id="([^"]+)"><\/a>/g)].map(m => m[1])
]);
for (const [relative, content] of documents) {
  for (const match of content.matchAll(/\]\(([^\s)]+)\)/g)) {
    const target = match[1];
    if (/^[a-z]+:/i.test(target)) continue;
    const [file, fragment] = target.split('#');
    const resolved = file ? path.posix.normalize(path.posix.join(path.posix.dirname(relative), file)) : relative;
    assert(documents.has(resolved) || fs.existsSync(path.join(root, resolved)), 'Missing local link: ' + relative + ' -> ' + target);
    if (fragment && documents.has(resolved)) assert(anchors(documents.get(resolved)).has(fragment), 'Missing anchor: ' + relative + ' -> ' + target);
  }
}

if (process.argv.includes('--emit')) {
  process.stdout.write(JSON.stringify(views));
} else if (process.argv.includes('--write')) {
  for (const [relative, content] of Object.entries(views)) {
    const dest = path.join(root, relative);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content, 'utf8');
  }
  console.log('Generated: ' + Object.keys(views).join(', '));
} else {
  for (const [relative, content] of Object.entries(views)) {
    assert(readText(relative) === content, 'Stale generated view: ' + relative);
  }
  const counts = Object.fromEntries([...new Set(papers.map(p => p.status))].map(status => [status, papers.filter(p => p.status === status).length]));
  console.log('PASS: catalogue schema, IDs, groups, protocol isolation, unique URLs, survey citation, and generated views.');
  console.log(JSON.stringify({ records: papers.length, counts }, null, 2));
}
