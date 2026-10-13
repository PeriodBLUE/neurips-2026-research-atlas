# Contributing to Research Atlas

Thank you for helping researchers find and interpret the literature. A small, well-evidenced correction is a useful contribution.

## Paper additions and presentation corrections

Include the complete title, the official NeurIPS page or OpenReview forum, the conference year, the track, and primary evidence for the Oral / Spotlight decision. A paper’s `/poster/` URL alone is not sufficient evidence of its presentation category.

For papers that only appear in a community list, add them to the pending-verification list rather than the verified explorer. Do not infer status from scores, author reputation, a related workshop, or a previous year’s acceptance.

## Classification improvements

Specify the existing primary field and subfield, your proposed assignment, and a short explanation grounded in the main contribution. Mention meaningful alternative classifications. The counts use one primary field per paper; do not duplicate a paper across fields.

The taxonomy is a navigation tool, not an assertion that research boundaries are fixed. Avoid using these subset counts to claim an area has a better acceptance rate.

## Data files and checks

The website reads `site/data/papers.json`. Keep paper IDs stable so shared links and saved reading lists continue to work. Preserve source decisions, event IDs, and original source links.

When adding, removing, or reclassifying papers, update the matching CSVs, statistics in the READMEs and HTML, snapshot provenance, and affected test expectations together. Explain count changes in the pull request. Do not change the snapshot date without new evidence.

Run:

```bash
node --check site/app.js
npm test
```

For UI changes, check a desktop and a phone layout, light and dark themes, English and Chinese, keyboard focus, an empty result, and opening a source link. Keep the site usable without accounts and avoid adding analytics or remote services without a clear rationale.

## Source and attribution

Link to primary sources. Do not upload credentials, personal notes unrelated to the dataset, scraped account information, full copyrighted papers, or other material outside the research-navigation scope. Original code and documentation contributions are made under the repository’s MIT license; third-party material retains its own rights.
