import { filterPapers, summarize, exportCsv, readState } from "./logic.js";

const icons = {
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  list: '<path d="M9 6h12M9 12h12M9 18h12M3 6h.1M3 12h.1M3 18h.1"/>',
  chart: '<path d="M4 20V4M4 20h17M9 16v-5M14 16V7M19 16V3"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/>',
  github:
    '<path d="M9 19c-4.3 1.3-4.3-2.2-6-2.6m12 5v-3.8c0-1.2-.4-2-.8-2.4 2.8-.3 5.8-1.4 5.8-6A4.7 4.7 0 0 0 18.7 6c.1-.3.6-1.7-.1-3.5 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6 0C6.5 2.1 5.4 2.5 5.4 2.5 4.7 4.3 5.2 5.7 5.3 6A4.7 4.7 0 0 0 4 9.2c0 4.6 3 5.7 5.8 6-.4.4-.8 1.2-.8 2.4v3.8"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  moon: '<path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  grid: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>',
  arrow: '<path d="M6 18 18 6M6 6h12v12"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.compass}</svg>`;
const $ = (id) => document.getElementById(id);
const escape = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
};
let lang = storage.get("atlas-language", "en");
if (!["en", "zh"].includes(lang)) lang = "en";
let theme = storage.get("atlas-theme", "light");
if (!["light", "dark"].includes(theme)) theme = "light";
let data,
  state,
  visible = [],
  saved = new Set(),
  toastTimer;
const pageSize = 20;
const words = {
  en: {
    exploreNav: "Explore papers",
    methodology: "Methodology",
    eyebrow: "A FIELD GUIDE FOR RESEARCHERS",
    heroOne: "Big ideas. A clearer perspective.",
    heroDescription:
      "Explore Oral & Spotlight papers by research field. Find the work that connects to yours.",
    startExploring: "Explore papers",
    openCommunity: "Open source. Built for researchers.",
    verifiedPapers: "Verified papers",
    overviewTitle: "INSIDE THE COLLECTION",
    primaryFields: "research fields",
    secondaryFields: "subfields",
    fieldSubfield: "Fields / Subfields",
    snapshot: "SNAPSHOT",
    coverage: "Verified subset · View scope & sources",
    collectionKicker: "The paper collection",
    papersTab: "Papers",
    landscapeTab: "Landscape",
    savedTab: "Reading list",
    browseFields: "BROWSE BY FIELD",
    taxonomyNote:
      "One primary field per paper. A starting point for discovery, not a boundary between ideas.",
    howClassified: "How we classify ↗",
    export: "Export",
    allTypes: "All papers",
    subfield: "Subfield",
    reset: "Reset filters ↺",
    communityKicker: "A COMMUNITY RESEARCH COMPANION",
    communityTitle: "Good research starts with a better question.",
    communityDescription:
      "Spot a missing paper or a more useful classification? Help make this atlas a better starting point for everyone.",
    contribute: "Contribute to the atlas",
    footerNote: "An independent research guide. Not affiliated with NeurIPS.",
    dataDownload: "Dataset ↗",
    allFields: "All research fields",
    allSubfields: "All subfields",
    main: "Main track",
    evaluations: "Evaluations & Datasets",
    position: "Position papers",
    allTracks: "All tracks",
    oralFirst: "Oral first",
    titleSort: "Title A–Z",
    fieldSort: "By field",
    searchPlaceholder: "Search titles, authors, or research topics…",
    details: "Field notes",
    save: "Save paper",
    unsave: "Remove saved paper",
    savedToast: "Added to your reading list",
    removedToast: "Removed from your reading list",
    storageFailed:
      "Saved for this session only. Browser storage is unavailable.",
    noPapers: "No papers in this corner of the atlas.",
    noPapersDescription:
      "Try a broader query or reset your filters to explore the collection.",
    noSaved: "Your next reading list starts here.",
    noSavedDescription:
      "Bookmark a paper as you explore. Your list stays in this browser, without an account.",
    browseCollection: "Browse the collection",
    previous: "← Previous",
    next: "Next →",
    paperWord: "papers",
    matching: "matching papers",
    readlist: "My reading list",
    landscape: "The research landscape",
    landscapeNote:
      "Counts describe this verified subset, not acceptance rates. Each paper has one primary field. Change the track filter to compare like with like.",
    fieldNotes: "FIELD NOTES",
    classification: "PRIMARY FIELD → SUBFIELD",
    officialPaper: "Official paper ↗",
    openReview: "OpenReview ↗",
    related: "Continue in this subfield",
    copyLink: "Copy paper link",
    copied: "Paper link copied",
    copyFailed: "Copy this URL from your address bar",
    exportTitle: "Take your reading with you.",
    exportDescription:
      "Export the current filtered results. Files contain titles, authors, research fields, and direct source links.",
    exportCsv: "Download CSV",
    exportMarkdown: "Download reading list",
    exportNone: "No papers to export. Adjust your filters first.",
    methodTitle: "A map, with its boundaries visible.",
    methodIntro:
      "Research Atlas organizes a verified public subset of NeurIPS 2026 Oral and Spotlight papers into 15 primary fields and 57 subfields. It is an independent research companion, not an official conference index.",
    methodLimits: "What the numbers mean",
    methodLimitsBody:
      "This snapshot includes 329 unique papers: 108 Oral and 221 Spotlight. Main track: 275; Evaluations & Datasets: 39; Position papers: 15. It does not establish the full conference totals, and excludes workshops.",
    methodCoverage: "Why this is a subset",
    methodCoverageBody:
      "The retrieved official program contains 9,242 records but only 5,901 unique titles, while the official download directory lists 9,110 papers. Its 621 highlighted event records deduplicate to 329 papers. Another 86 titles found only in a third-party historical snapshot remain unverified and are excluded from the explorer.",
    methodClassification: "How classification works",
    methodClassificationBody:
      "Presentation labels come from the official decision field. Primary and secondary research fields are analyst-assigned from titles, abstracts, and central contributions. Security, theory, efficiency, and scientific applications are classified by the research problem, even when LLMs or reinforcement learning are used. Every paper is counted once.",
    methodCaution:
      "Counts show the composition of this subset, not acceptance probabilities or field quality. Field granularity and incomplete source coverage affect comparisons. The overview shows the complete verified subset; explorer counts follow the active filters.",
    methodSources: "Sources & reproducibility",
    rawData: "Download classified data",
    pending: "86 unverified candidates (CSV)",
    provenance: "Snapshot provenance & source hashes",
    readReport: "Classification report",
    privacyTitle: "A reading list that stays with you",
    privacy:
      "Bookmarks, language, and theme are stored only in this browser. There are no accounts or analytics. CSV and Markdown exports are generated locally. Fonts may load from Google Fonts; paper links open the original external sources.",
    close: "Close dialog",
    downloaded: "Export downloaded",
    sourceEvidence: "SOURCE EVIDENCE",
    sourceExplanation:
      "Presentation confirmed from the official program decision. Field assignment is an interpretation for research navigation.",
  },
  zh: {
    exploreNav: "探索论文",
    methodology: "整理方法",
    eyebrow: "研究者的论文导航",
    heroOne: "从研究全景，到下一篇精读。",
    heroDescription:
      "按领域探索 Oral 与 Spotlight，为文献调研、组会阅读和下一次选题找到方向。",
    startExploring: "探索论文",
    openCommunity: "开源共建，为研究者而作。",
    verifiedPapers: "已核验论文",
    overviewTitle: "论文合集 · 一览",
    primaryFields: "一级领域",
    secondaryFields: "二级领域",
    fieldSubfield: "一级领域 / 二级领域",
    snapshot: "数据快照",
    coverage: "已核验子集 · 查看范围与来源",
    collectionKicker: "探索论文合集",
    papersTab: "论文列表",
    landscapeTab: "领域分布",
    savedTab: "阅读清单",
    browseFields: "按一级领域浏览",
    taxonomyNote: "每篇论文只有一个主领域。分类是探索的起点，不是研究的边界。",
    howClassified: "了解归类方法 ↗",
    export: "导出",
    allTypes: "全部论文",
    subfield: "二级领域",
    reset: "重置筛选 ↺",
    communityKicker: "与研究社区共同完善",
    communityTitle: "更好的研究，始于更好的问题。",
    communityDescription:
      "发现遗漏的论文，或有更合适的领域划分？欢迎一起完善这份研究导航。",
    contribute: "参与共建",
    footerNote: "独立研究导航，与 NeurIPS 官方无隶属关系。",
    dataDownload: "下载数据 ↗",
    allFields: "全部研究领域",
    allSubfields: "全部二级领域",
    main: "主赛道",
    evaluations: "评测与数据集",
    position: "立场论文",
    allTracks: "全部赛道",
    oralFirst: "Oral 优先",
    titleSort: "标题 A–Z",
    fieldSort: "按领域排序",
    searchPlaceholder: "搜索标题、作者或研究方向…",
    details: "归类说明",
    save: "收藏论文",
    unsave: "取消收藏",
    savedToast: "已加入阅读清单",
    removedToast: "已从阅读清单移除",
    storageFailed: "浏览器存储不可用，收藏仅保留在本次会话。",
    noPapers: "这里暂时没有匹配的论文。",
    noPapersDescription: "换一个关键词，或清除筛选条件，继续探索。",
    noSaved: "从第一篇论文，开始你的阅读清单。",
    noSavedDescription:
      "点击论文右侧的收藏图标即可保存。清单保留在当前浏览器中，无需登录。",
    browseCollection: "浏览论文合集",
    previous: "← 上一页",
    next: "下一页 →",
    paperWord: "篇",
    matching: "篇匹配论文",
    readlist: "我的阅读清单",
    landscape: "研究领域分布",
    landscapeNote:
      "数量反映已核验样本的分布，不代表录用率。每篇只计入一个主领域；可切换赛道，使用一致口径比较。",
    fieldNotes: "研究领域说明",
    classification: "一级领域 → 二级领域",
    officialPaper: "论文官网 ↗",
    openReview: "OpenReview ↗",
    related: "继续探索同一二级领域",
    copyLink: "复制论文链接",
    copied: "已复制论文直达链接",
    copyFailed: "请从地址栏复制当前链接",
    exportTitle: "把阅读计划带走。",
    exportDescription:
      "导出当前筛选结果，包含论文标题、作者、两级领域和原始页面链接。",
    exportCsv: "下载 CSV 数据",
    exportMarkdown: "下载 Markdown 阅读清单",
    exportNone: "当前没有可导出的论文，请调整筛选条件。",
    methodTitle: "一份说明边界的研究地图。",
    methodIntro:
      "Research Atlas 将当前可核验的 NeurIPS 2026 Oral 与 Spotlight 论文，整理为15个一级领域、57个二级领域。这是独立研究导航，并非大会官方论文索引。",
    methodLimits: "如何理解数量",
    methodLimitsBody:
      "当前快照包含329篇独立论文：108篇Oral、221篇Spotlight。其中主赛道275篇，评测与数据集39篇，立场论文15篇。这些不是大会最终总数；不包含Workshop。",
    methodCoverage: "为什么只是子集",
    methodCoverageBody:
      "本次官方程序文件含9,242条记录，但按标题去重只有5,901项；官方下载目录则有9,110篇。程序文件中621条Oral/Spotlight记录去重后得到329篇。另有86篇仅见于第三方历史快照，列入待核验清单，未计入网站统计。",
    methodClassification: "如何进行两级归类",
    methodClassificationBody:
      "Oral/Spotlight取自官网decision字段。研究领域由分析者依据标题、摘要和核心贡献划分。安全、理论、效率、科学应用优先按研究问题归类，即使使用LLM或强化学习。每篇只计入一个主领域，交叉属性写入归类说明。",
    methodCaution:
      "这些数量不能用于推断领域录用率或研究质量；领域粒度和公开数据覆盖缺口都会影响比较。首页概览展示全部已核验子集；论文区数量随当前筛选条件变化。",
    methodSources: "来源与可复现性",
    rawData: "下载逐篇分类表",
    pending: "86篇待核验候选（CSV）",
    provenance: "数据快照与来源哈希",
    readReport: "完整分类报告",
    privacyTitle: "留在你手中的阅读清单",
    privacy:
      "收藏、语言和主题只保存在当前浏览器中，无需账户，也没有分析追踪。CSV与Markdown由本地生成。字体可能从Google Fonts加载；论文链接会打开外部原始页面。",
    close: "关闭弹窗",
    downloaded: "已导出文件",
    sourceEvidence: "来源依据",
    sourceExplanation:
      "展示标签来自官方程序decision字段，研究领域属于便于检索的分析者归类。",
  },
};
const t = (key) => words[lang][key] || key;
const local = (x) => x[lang] || x.en;
const fieldOf = (p) => data.fields.find((f) => f.id === p.field);
const subOf = (p) => fieldOf(p).subfields.find((s) => s.id === p.subfield);
function hydrateIcons(root = document) {
  root
    .querySelectorAll("[data-icon]")
    .forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
}
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  $("theme").innerHTML = icon(theme === "light" ? "moon" : "sun");
  $("theme").setAttribute(
    "aria-label",
    lang === "zh"
      ? `切换${theme === "light" ? "深色" : "浅色"}主题`
      : `Switch to ${theme === "light" ? "dark" : "light"} theme`,
  );
}
function translate() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.textContent = t(el.dataset.i18n)));
  $("language").textContent = lang === "en" ? "中文" : "EN";
  $("language").setAttribute(
    "aria-label",
    lang === "en" ? "切换中文" : "Switch to English",
  );
  $("search").placeholder = t("searchPlaceholder");
  $("search").setAttribute("aria-label", t("searchPlaceholder"));
  $("close-modal").setAttribute("aria-label", t("close"));
  $("track").innerHTML = ["all", "main", "evaluations", "position"]
    .map(
      (x) =>
        `<option value="${x}">${t(x === "all" ? "allTracks" : x)}</option>`,
    )
    .join("");
  $("sort").innerHTML = [
    ["type", "oralFirst"],
    ["title", "titleSort"],
    ["field", "fieldSort"],
  ]
    .map(([v, k]) => `<option value="${v}">${t(k)}</option>`)
    .join("");
  applyTheme();
}
function toast(message) {
  clearTimeout(toastTimer);
  $("toast").textContent = message;
  $("toast").classList.add("visible");
  toastTimer = setTimeout(() => $("toast").classList.remove("visible"), 3000);
}
function persistUrl(paperId) {
  const params = new URLSearchParams();
  for (const [k, def] of Object.entries({
    q: "",
    field: "",
    subfield: "",
    type: "all",
    track: "all",
    sort: "type",
    view: "papers",
  })) {
    if (state[k] !== def) params.set(k, state[k]);
  }
  if (paperId) params.set("paper", paperId);
  const query = params.toString();
  try {
    history.replaceState(
      null,
      "",
      location.pathname + (query ? "?" + query : "") + location.hash,
    );
  } catch {
    /* local files and restricted embeds may not allow history updates */
  }
}
function renderOverview() {
  const counts = summarize(data.papers);
  $("overview-total").textContent = counts.total;
  $("overview-oral").textContent = counts.oral;
  $("overview-spotlight").textContent = counts.spotlight;
  $("overview-fields").textContent = data.fields.length;
  $("overview-subfields").textContent = data.fields.reduce(
    (n, f) => n + f.subfields.length,
    0,
  );
  $("overview-oral-bar").style.width = `${(counts.oral / counts.total) * 100}%`;
  $("overview-spotlight-bar").style.width =
    `${(counts.spotlight / counts.total) * 100}%`;
}
function renderFields() {
  const scope = data.papers.filter(
    (p) => state.track === "all" || p.track === state.track,
  );
  const ordered = [...data.fields].sort(
    (a, b) =>
      scope.filter((p) => p.field === b.id).length -
      scope.filter((p) => p.field === a.id).length,
  );
  $("field-list").innerHTML =
    `<button class="field-button all ${!state.field ? "active" : ""}" data-field="" aria-pressed="${!state.field}">${icon("grid")}<span>${t("allFields")}</span><span>${scope.length}</span></button>` +
    ordered
      .map(
        (f) =>
          `<button class="field-button ${state.field === f.id ? "active" : ""}" data-field="${f.id}" aria-pressed="${state.field === f.id}"><i style="background:${f.color}"></i><span>${escape(local(f))}</span><span>${scope.filter((p) => p.field === f.id).length}</span></button>`,
      )
      .join("");
  const f = data.fields.find((f) => f.id === state.field);
  $("subfield-row").hidden = !f;
  if (f) {
    $("subfield").innerHTML =
      `<option value="">${t("allSubfields")}</option>` +
      f.subfields
        .map((s) => `<option value="${s.id}">${escape(local(s))}</option>`)
        .join("");
    $("subfield").value = state.subfield;
  }
}
function paperCard(p) {
  const f = fieldOf(p),
    s = subOf(p);
  return `<article class="paper-card" data-paper="${p.id}"><div class="paper-top"><span class="badge ${p.type}">${p.type.toUpperCase()}</span><span class="paper-track">${t(p.track)}</span><span class="paper-index">${p.id}</span><button class="save-button" data-save="${p.id}" aria-label="${t(saved.has(p.id) ? "unsave" : "save")}: ${escape(p.title)}" aria-pressed="${saved.has(p.id)}">${icon("bookmark")}</button></div><h3 class="paper-title"><a href="${escape(p.officialUrl)}" target="_blank" rel="noopener noreferrer">${escape(p.title)}<span class="arrow" aria-hidden="true">↗</span></a></h3><p class="authors" title="${escape(p.authors.join(", "))}">${escape(p.authors.join(" · "))}</p><div class="paper-bottom"><div class="paper-taxonomy"><span class="paper-topic"><i style="background:${f.color}"></i>${escape(local(f))}</span><span class="topic-separator">/</span><span class="sub-topic">${escape(local(s))}</span></div><div class="paper-links"><button data-details="${p.id}">${t("details")} ↗</button><a href="${escape(p.openreviewUrl)}" target="_blank" rel="noopener noreferrer">OpenReview ↗</a></div></div></article>`;
}
function renderLandscape() {
  const max = Math.max(
    1,
    ...data.fields.map((f) => visible.filter((p) => p.field === f.id).length),
  );
  $("results").innerHTML =
    `<p class="landscape-note">${t("landscapeNote")}</p><div class="landscape-grid">` +
    data.fields
      .map((f) => {
        const rr = visible.filter((p) => p.field === f.id),
          c = summarize(rr);
        return { f, rr, c };
      })
      .filter((x) => x.c.total)
      .sort((a, b) => b.c.total - a.c.total)
      .map(
        ({ f, rr, c }) =>
          `<button class="landscape-card" data-landscape="${f.id}" aria-label="${escape(local(f))}: ${c.total} ${t("paperWord")}"><h3><i style="background:${f.color}"></i>${escape(local(f))}<span style="margin-left:auto">↗</span></h3><span class="land-count">${c.total}</span><span class="land-details">${c.oral} Oral · ${c.spotlight} Spotlight</span><div class="bar-track"><span class="bar-oral" style="width:${(c.oral / max) * 100}%"></span><span class="bar-spotlight" style="width:${(c.spotlight / max) * 100}%"></span></div><div class="sub-stats">${f.subfields
            .map((s) => {
              const ss = summarize(rr.filter((p) => p.subfield === s.id));
              return ss.total
                ? `<div><span>${escape(local(s))}</span><b>${ss.oral} O / ${ss.spotlight} S</b></div>`
                : "";
            })
            .join("")}</div></button>`,
      )
      .join("") +
    "</div>";
  $("pagination").innerHTML = "";
}
function render() {
  visible = filterPapers(data.papers, state, data.fields, saved);
  state.page = Math.max(
    1,
    Math.min(state.page, Math.ceil(visible.length / pageSize) || 1),
  );
  $("search").value = state.q;
  $("track").value = state.track;
  $("sort").value = state.sort;
  document
    .querySelectorAll("[data-type]")
    .forEach((el) =>
      el.setAttribute("aria-pressed", el.dataset.type === state.type),
    );
  document
    .querySelectorAll("[data-view]")
    .forEach((el) =>
      el.setAttribute("aria-selected", el.dataset.view === state.view),
    );
  $("saved-count").textContent = saved.size;
  renderFields();
  const count = summarize(visible),
    f = data.fields.find((f) => f.id === state.field);
  $("results-title").textContent =
    state.view === "saved"
      ? t("readlist")
      : state.view === "landscape"
        ? t("landscape")
        : f
          ? local(f)
          : t("allFields");
  $("results-meta").textContent =
    `${count.total} ${t("matching")} · ${count.oral} Oral · ${count.spotlight} Spotlight`;
  $("active-filters").innerHTML = state.q
    ? `<span class="active-pill">${escape(state.q)}<button data-clear-query aria-label="Clear search">×</button></span>`
    : "";
  $("export").disabled = !visible.length;
  if (!visible.length) {
    const emptySaved = state.view === "saved" && !saved.size;
    $("results").innerHTML =
      `<div class="empty-state">${icon(emptySaved ? "bookmark" : "compass")}<h3>${t(emptySaved ? "noSaved" : "noPapers")}</h3><p>${t(emptySaved ? "noSavedDescription" : "noPapersDescription")}</p><button class="outline-button" data-empty-reset>${t(emptySaved ? "browseCollection" : "reset")}</button></div>`;
    $("pagination").innerHTML = "";
  } else if (state.view === "landscape") renderLandscape();
  else {
    const start = (state.page - 1) * pageSize;
    $("results").innerHTML = visible
      .slice(start, start + pageSize)
      .map(paperCard)
      .join("");
    const pages = Math.ceil(visible.length / pageSize);
    $("pagination").innerHTML =
      `<div class="pagination"><button data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>${t("previous")}</button><span>${start + 1}–${Math.min(start + pageSize, visible.length)} / ${visible.length}</span><button data-page="${state.page + 1}" ${state.page === pages ? "disabled" : ""}>${t("next")}</button></div>`;
  }
  persistUrl();
}
function change(patch) {
  Object.assign(state, patch, { page: 1 });
  render();
}
function toggleSaved(id) {
  if (!data.papers.some((p) => p.id === id)) return;
  const removing = saved.has(id);
  removing ? saved.delete(id) : saved.add(id);
  const persisted = storage.set("atlas-saved", Array.from(saved));
  render();
  toast(
    t(persisted ? (removing ? "removedToast" : "savedToast") : "storageFailed"),
  );
}
function openModal(content) {
  $("modal-body").innerHTML = `<div class="modal-body">${content}</div>`;
  if (!$("modal").open) $("modal").showModal();
  $("modal").scrollTop = 0;
}
function openPaper(id) {
  const p = data.papers.find((x) => x.id === id);
  if (!p) return;
  const f = fieldOf(p),
    s = subOf(p);
  const note =
    lang === "zh"
      ? p.noteZh
      : `Primary contribution: ${s.en.toLowerCase()}. This assignment follows the main research problem; other useful cross-field readings are possible.`;
  const related = data.papers
    .filter((x) => x.subfield === p.subfield && x.id !== p.id)
    .slice(0, 4);
  openModal(
    `<p class="modal-eyebrow">${t("fieldNotes")} / ${p.id}</p><span class="badge ${p.type}">${p.type.toUpperCase()}</span> <span class="paper-track">${t(p.track)}</span><h2 id="modal-title" class="modal-title">${escape(p.title)}</h2><p>${escape(p.authors.join(" · "))}</p><div class="modal-actions"><a class="primary-button" href="${escape(p.officialUrl)}" target="_blank" rel="noopener noreferrer">${t("officialPaper")}</a><a class="outline-button" href="${escape(p.openreviewUrl)}" target="_blank" rel="noopener noreferrer">${t("openReview")}</a><button class="outline-button" data-modal-save="${id}">${icon("bookmark")}${t(saved.has(id) ? "unsave" : "save")}</button></div><div class="modal-classification"><span>${t("classification")}</span><h3>${escape(local(f))} → ${escape(local(s))}</h3><p>${escape(note)}</p></div><h3>${t("sourceEvidence")}</h3><p>${t("sourceExplanation")}<br><code>${escape(p.sourceDecision)}</code> · ${escape(data.snapshotDate)}</p>${related.length ? `<h3>${t("related")}</h3><div class="modal-related">${related.map((x) => `<a href="${escape(x.officialUrl)}" target="_blank" rel="noopener noreferrer">${escape(x.title)} ↗</a>`).join("")}</div>` : ""}<div class="modal-actions"><button class="outline-button" data-copy="${id}">${t("copyLink")}</button></div>`,
  );
  persistUrl(id);
}
function openAbout() {
  openModal(
    `<p class="modal-eyebrow">METHOD & PROVENANCE / 2026-10-13</p><h2 id="modal-title" class="modal-title">${t("methodTitle")}</h2><p>${t("methodIntro")}</p><div class="modal-stats"><div><strong>275</strong><span>${t("main")}</span></div><div><strong>39</strong><span>${t("evaluations")}</span></div><div><strong>15</strong><span>${t("position")}</span></div></div><h3>${t("methodLimits")}</h3><p>${t("methodLimitsBody")}</p><h3>${t("methodCoverage")}</h3><p>${t("methodCoverageBody")}</p><h3>${t("methodClassification")}</h3><p>${t("methodClassificationBody")}</p><p>${t("methodCaution")}</p><h3>${t("methodSources")}</h3><ul>${data.sources.map((s) => `<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.name)} ↗</a></li>`).join("")}<li><a href="./data/provenance.json" target="_blank">${t("provenance")}</a></li><li><a href="./data/pending_verification.csv">${t("pending")}</a></li><li><a href="https://github.com/PeriodBLUE/neurips-2026-research-atlas/blob/main/docs/report.zh-CN.md" target="_blank" rel="noopener noreferrer">${t("readReport")} ↗</a></li></ul><h3>${t("privacyTitle")}</h3><p>${t("privacy")}</p>`,
  );
}
function exportMarkdown() {
  return (
    "# NeurIPS 2026 — Research reading list\n\nSnapshot: 2026-10-13. Verified public subset, not the full program.\n\n" +
    visible
      .map((p) => {
        const f = fieldOf(p),
          s = subOf(p);
        return `- [ ] **${p.type.toUpperCase()}** — [${p.title.replace(/[\[\]]/g, "")}](${p.officialUrl})\n  - ${p.authors.join(", ")}\n  - ${local(f)} → ${local(s)}\n  - [OpenReview](${p.openreviewUrl})\n`;
      })
      .join("\n")
  );
}
function download(format) {
  if (!visible.length) {
    toast(t("exportNone"));
    return;
  }
  const csv = format === "csv";
  const blob = new Blob(
    [csv ? exportCsv(visible, data.fields) : exportMarkdown()],
    { type: csv ? "text/csv;charset=utf-8" : "text/markdown;charset=utf-8" },
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `neurips-2026-${state.view === "saved" ? "reading-list" : "selection"}.${csv ? "csv" : "md"}`;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  toast(t("downloaded"));
}
function reset() {
  change({
    q: "",
    field: "",
    subfield: "",
    type: "all",
    track: "all",
    sort: "type",
  });
}

hydrateIcons();
applyTheme();
$("theme").onclick = () => {
  theme = theme === "light" ? "dark" : "light";
  storage.set("atlas-theme", theme);
  applyTheme();
};
try {
  const response = await fetch("./data/papers.json");
  if (!response.ok) throw new Error(`Data request failed (${response.status})`);
  data = await response.json();
  state = readState(location.search, data.fields);
  const storedSaved = storage.get("atlas-saved", []);
  saved = new Set(
    (Array.isArray(storedSaved) ? storedSaved : []).filter((id) =>
      data.papers.some((p) => p.id === id),
    ),
  );
  const initialPaper = new URLSearchParams(location.search).get("paper");
  translate();
  renderOverview();
  render();
  if (initialPaper) openPaper(initialPaper);
  const mq = matchMedia("(max-width:800px)");
  $("field-panel").open = !mq.matches;
  mq.addEventListener("change", (event) => {
    $("field-panel").open = !event.matches;
  });
  $("search").addEventListener("input", (event) =>
    change({ q: event.target.value }),
  );
  $("track").onchange = (event) => change({ track: event.target.value });
  $("sort").onchange = (event) => change({ sort: event.target.value });
  $("subfield").onchange = (event) => change({ subfield: event.target.value });
  $("reset").onclick = reset;
  $("language").onclick = () => {
    lang = lang === "en" ? "zh" : "en";
    storage.set("atlas-language", lang);
    $("modal").close();
    translate();
    render();
  };
  for (const id of ["about-nav", "coverage-button", "taxonomy-about"])
    $(id).onclick = openAbout;
  $("close-modal").onclick = () => $("modal").close();
  $("modal").addEventListener("close", () => persistUrl());
  $("modal").addEventListener("click", (event) => {
    if (event.target === $("modal")) {
      const r = $("modal").getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        $("modal").close();
    }
  });
  $("export").onclick = () =>
    openModal(
      `<p class="modal-eyebrow">EXPORT / ${visible.length} PAPERS</p><h2 id="modal-title" class="modal-title">${t("exportTitle")}</h2><p>${t("exportDescription")}</p><div class="modal-actions"><button class="primary-button" data-download="csv">${t("exportCsv")} ↓</button><button class="outline-button" data-download="md">${t("exportMarkdown")} ↓</button></div>`,
    );
  document.addEventListener("click", async (event) => {
    const b = event.target.closest("button");
    if (!b) return;
    if (b.hasAttribute("data-overview")) {
      change({
        type: b.dataset.overview,
        view: "papers",
        q: "",
        field: "",
        subfield: "",
        track: "all",
      });
      $("workspace").scrollIntoView({ block: "start" });
    }
    if (b.hasAttribute("data-view")) change({ view: b.dataset.view });
    if (b.hasAttribute("data-type")) change({ type: b.dataset.type });
    if (b.hasAttribute("data-field")) {
      change({ field: b.dataset.field, subfield: "" });
      if (mq.matches) $("field-panel").open = false;
    }
    if (b.hasAttribute("data-landscape"))
      change({ view: "papers", field: b.dataset.landscape, subfield: "" });
    if (b.hasAttribute("data-save")) toggleSaved(b.dataset.save);
    if (b.hasAttribute("data-details")) openPaper(b.dataset.details);
    if (b.hasAttribute("data-modal-save")) {
      toggleSaved(b.dataset.modalSave);
      openPaper(b.dataset.modalSave);
    }
    if (b.hasAttribute("data-copy")) {
      const u = new URL(location.href);
      u.searchParams.set("paper", b.dataset.copy);
      u.hash = "";
      try {
        await navigator.clipboard.writeText(u.href);
        toast(t("copied"));
      } catch {
        toast(t("copyFailed"));
      }
    }
    if (b.hasAttribute("data-page")) {
      state.page = Number(b.dataset.page);
      render();
      $("results-title").scrollIntoView({ block: "start" });
    }
    if (b.hasAttribute("data-clear-query")) change({ q: "" });
    if (b.hasAttribute("data-empty-reset")) {
      reset();
      if (state.view === "saved" && !saved.size) change({ view: "papers" });
    }
    if (b.hasAttribute("data-download")) download(b.dataset.download);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "/" &&
      !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName) &&
      !$("modal").open
    ) {
      event.preventDefault();
      $("search").focus();
      $("search").scrollIntoView({ block: "center" });
    }
  });
  addEventListener("popstate", () => {
    state = readState(location.search, data.fields);
    const p = new URLSearchParams(location.search).get("paper");
    render();
    p ? openPaper(p) : $("modal").close();
  });
  addEventListener("storage", (event) => {
    if (event.key === "atlas-saved") {
      const x = storage.get("atlas-saved", []);
      saved = new Set(
        (Array.isArray(x) ? x : []).filter((id) =>
          data.papers.some((p) => p.id === id),
        ),
      );
      render();
    }
  });
} catch (error) {
  console.error("Atlas initialization failed:", error);
  $("results").innerHTML =
    `<div class="empty-state"><h3>The collection could not load.</h3><p>Reload this page, or use the public dataset below.</p><a class="outline-button" href="./data/papers_classified.csv">Download paper data ↗</a></div>`;
  $("results-meta").textContent = "Data unavailable";
}
