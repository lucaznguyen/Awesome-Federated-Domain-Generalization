# Contributing

Thank you for helping maintain this FedDG reading list.

1. Read the [scope and curation policy](docs/curation.md).
2. Supply a primary paper link and the exact title, authors, venue, publication year, and acceptance/publication evidence.
3. Explain the direct unseen-domain FedDG setting. State any known target-data access, adaptation, public reference data, or client-domain mapping assumptions.
4. Justify each Security, Communication Efficiency, or Architecture Design placement. Multi-label placement is encouraged when supported.
5. For A/A* or Q1 claims, include the ranking source, edition/year, and journal category. Separate main-track, workshop, preprint, and online-first status.
6. Add an author code link only when its association with the paper is established.
7. Edit [data/papers.json](data/papers.json), using a unique stable ID and existing group names. Preserve uncertainty in the notes rather than guessing.
8. Regenerate and validate the views:

```sh
node scripts/build.mjs --write
node scripts/build.mjs
git diff --check
```

Please do not hand-edit the generated reading lists. Include the source and reason when correcting a DOI, year, code association, protocol flag, or publication status. An issue containing the same evidence is welcome if you prefer not to edit the catalogue.
