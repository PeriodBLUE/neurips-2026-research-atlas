import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  filterPapers,
  summarize,
  exportCsv,
  readState,
} from "../site/logic.js";
const data = JSON.parse(
  readFileSync(new URL("../site/data/papers.json", import.meta.url), "utf8"),
);
const defaults = () => readState("", data.fields);
test("snapshot has unique paper identities and valid two-level classifications", () => {
  assert.equal(data.papers.length, 329);
  assert.equal(new Set(data.papers.map((p) => p.id)).size, 329);
  assert.equal(
    new Set(data.papers.map((p) => p.title.normalize("NFKC").toLowerCase()))
      .size,
    329,
  );
  assert.equal(new Set(data.papers.map((p) => p.openreviewUrl)).size, 329);
  assert.equal(data.fields.length, 15);
  assert.equal(
    data.fields.reduce((n, f) => n + f.subfields.length, 0),
    57,
  );
  for (const p of data.papers) {
    assert.ok(
      data.fields
        .find((f) => f.id === p.field)
        ?.subfields.some((s) => s.id === p.subfield),
      p.id,
    );
    assert.match(
      p.officialUrl,
      /^https:\/\/neurips\.cc\/virtual\/2026\/(poster|oral)\/\d+$/,
    );
    assert.match(
      p.openreviewUrl,
      /^https:\/\/openreview\.net\/forum\?id=[a-zA-Z0-9]+$/,
    );
    assert.ok(p.sourceDecision.toLowerCase().includes(p.type));
    assert.ok(p.authors.length);
  }
});
test("totals remain exact when changing tracks", () => {
  assert.deepEqual(summarize(data.papers), {
    total: 329,
    oral: 108,
    spotlight: 221,
  });
  for (const [track, total, oral, spotlight] of [
    ["main", 275, 90, 185],
    ["evaluations", 39, 13, 26],
    ["position", 15, 5, 10],
  ]) {
    const result = filterPapers(
      data.papers,
      { ...defaults(), track },
      data.fields,
    );
    assert.deepEqual(summarize(result), { total, oral, spotlight });
  }
});
test("field, subfield, presentation and track filters intersect", () => {
  const result = filterPapers(
    data.papers,
    { ...defaults(), field: "D", subfield: "D1", type: "oral", track: "main" },
    data.fields,
  );
  assert.equal(result.length, 4);
  assert.ok(result.some((p) => p.id === "P034"));
});
test("search is case-insensitive, matches authors and Chinese taxonomy", () => {
  assert.equal(
    filterPapers(
      data.papers,
      { ...defaults(), q: "  GENERATIVE   drifting " },
      data.fields,
    ).length,
    1,
  );
  const author = data.papers[0].authors[0];
  assert.ok(
    filterPapers(data.papers, { ...defaults(), q: author }, data.fields).some(
      (p) => p.id === data.papers[0].id,
    ),
  );
  assert.ok(
    filterPapers(data.papers, { ...defaults(), q: "机器遗忘" }, data.fields)
      .length >= 3,
  );
  assert.equal(
    filterPapers(
      data.papers,
      { ...defaults(), q: "not-a-real-paper-xyz" },
      data.fields,
    ).length,
    0,
  );
});
test("reading list only returns saved papers and honors additional filters", () => {
  const saved = new Set(["P034", "P113", "missing"]);
  assert.equal(
    filterPapers(
      data.papers,
      { ...defaults(), view: "saved" },
      data.fields,
      saved,
    ).length,
    2,
  );
  assert.equal(
    filterPapers(
      data.papers,
      { ...defaults(), view: "saved", type: "oral" },
      data.fields,
      saved,
    )[0].id,
    "P034",
  );
  assert.equal(
    filterPapers(
      data.papers,
      { ...defaults(), view: "saved" },
      data.fields,
      new Set(),
    ).length,
    0,
  );
});
test("invalid URL state cannot create inconsistent field filters", () => {
  const s = readState(
    "?field=D&subfield=H1&type=bad&track=bad&sort=bad&view=bad",
    data.fields,
  );
  assert.equal(s.field, "D");
  assert.equal(s.subfield, "");
  assert.equal(s.type, "all");
  assert.equal(s.track, "all");
  assert.equal(s.sort, "type");
  assert.equal(s.view, "papers");
});
test("shareable search and field selections survive URL reconstruction", () => {
  const s = readState(
    "?q=flow+matching&field=D&subfield=D1&type=oral&track=main&view=landscape",
    data.fields,
  );
  assert.equal(s.q, "flow matching");
  assert.equal(s.subfield, "D1");
  assert.equal(s.view, "landscape");
});
test("CSV export escapes commas, quotes, Unicode, and spreadsheet formulas", () => {
  const p = { ...data.papers[0], title: '=HYPERLINK("evil"), 中文\nnext' };
  const csv = exportCsv([p], data.fields);
  assert.ok(csv.startsWith("\uFEFF"));
  assert.ok(csv.includes('"\'=HYPERLINK(""evil""), 中文\nnext"'));
  assert.ok(csv.includes(p.officialUrl));
});
test("pending candidates never enter the public explorer", () => {
  const pending = readFileSync(
    new URL("../site/data/pending_verification.csv", import.meta.url),
    "utf8",
  );
  assert.ok(pending.includes("IndustryCode"));
  assert.ok(!data.papers.some((p) => p.title.startsWith("IndustryCode:")));
});
