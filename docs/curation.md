# Curation Policy

[Back to README](../README.md)

## Scope

The catalogue focuses on direct federated domain generalization (FedDG): learning from distributed source data and evaluating generalization to an unseen domain. Explicit federated OOD, graph OOD, medical, re-identification, time-series, and continual-domain extensions can qualify. Personalization alone, ordinary non-IID FL, and cross-client evaluation without an unseen-domain setting do not establish eligibility.

Generic federated privacy, secure aggregation, compression, and centralized DG methods are not added as paper entries. DomainBed is linked only as an evaluation resource.

Strict source-only generalization is the reference setting. Papers explicitly extending FedDG with target-time adaptation are grouped under deployment-sensitive extensions, not silently presented as equivalent source-only evidence. Unlabelled data on source clients must not be mistaken for target-domain access.

## Publication preference

Prioritize CORE A*/A main-track conferences and Q1 journals. Workshop acceptance must not be presented as main-track acceptance. Record the edition of CORE or the year/category of SJR or JCR when claiming a rank. Q1 is category- and year-specific, not a permanent property of a venue.

This restructuring retains inherited publication records; it does not newly certify every legacy venue ranking. Exceptional preprints and accepted manuscripts without a verified proceedings record remain separate, with a reason for retention. Unresolved identities are not in the recommended lists.

## Three connected lenses

- **Security:** privacy-motivated FedDG mechanisms, coordination integrity, and exposure through shared artifacts. Sharing styles instead of images does not prove differential privacy. An anomaly-detection application does not mean its federation resists malicious clients.
- **Communication Efficiency:** compact components, exchanged summaries, and coordination choices. Distinguish parameter count from bytes per round and accuracy-matched total traffic. Count peer, edge, upload, and download traffic.
- **Architecture Design:** federation topology, model modularity, representation learning, and deployment rules. Hierarchical prompts are not hierarchical FL, and decentralized data ownership does not necessarily imply peer-to-peer training.

A record may appear in every substantiated group. Do not add placements just to make the three lists equally long. Security artifact placements are explicitly an exposure-surface analysis, not an attribution of a security defense.

## Source and identity checks

Prefer publisher landing pages, official proceedings, and author manuscripts. Crossref is useful for publisher-deposited title, DOI, and publication-year checks. Search engines and bibliographic indexes are discovery tools, not a substitute for resolving a specific paper.

Check the actual title and authors before matching an acronym. A DOI that resolves successfully can still identify a different paper. An arXiv identifier, repository name, or OpenReview submission does not establish acceptance.

Use the final issue year when assigned, with early-access context where relevant. Separate already-available online-first work assigned to a future issue. Conference and journal extensions can have separate publication records, but must not be counted as independent algorithms.

## Traceability and reproducibility

The source of truth is [data/papers.json](../data/papers.json). Each record has a stable ID, title, venue/year, paper/code links, topical tags, publication status, thematic groups, protocol flag, and metadata-check flag. Added or individually reconciled records include a verification source.

The [chronological index](papers-by-year.md) exposes the record-level flags and notes. The [update notes](update-notes-2026-10-12.md) preserve the before/after rationale for this update. The [verification register](verification.md) retains unresolved identities without recommending their suspect links.

The present search combines the inherited list, exact-title/acronym searches, and publisher/proceedings checks for FedDG, federated domain generalization, federated OOD generalization, decentralized domain generalization, and recent topic-specific variants. It is a curated update, not a preregistered systematic search or a claim of exhaustive coverage.

## Regeneration

Requires Node.js 18 or newer; no npm dependencies.

```sh
node scripts/build.mjs --write
node scripts/build.mjs
git diff --check
```

The builder generates README.md and the chronological, preprint, and verification views. Validation checks unique IDs and active URLs, valid groups/statuses, isolation of known target-exposed papers, the survey citation, and generated-file consistency. It does not perform live link availability, venue-rank, full-text, or code-reproducibility verification.
