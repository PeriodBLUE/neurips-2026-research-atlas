<div align="center">

<img src="site/assets/favicon.svg" width="62" alt="Research Atlas">

# NeurIPS ’26 · Research Atlas

### 少一点搜寻，多一点发现。

面向文献调研、组会阅读与研究选题的两级论文导航。

**329 篇已核验论文 · 15 个一级领域 · 57 个二级领域**

[**打开网站 ↗**](https://periodblue.github.io/neurips-2026-research-atlas/) · [下载论文表](site/data/papers_classified.csv) · [完整分类报告](docs/report.zh-CN.md) · [English](README.md)

</div>

![Research Atlas 网页预览](site/assets/preview.jpg)

> **先了解数据边界。** 本项目整理的是截至 **2026 年 10 月 13 日**官方公开数据中可直接核验的 Oral / Spotlight 子集，并非大会最终完整名单。展示类别来自官方 `decision` 字段；研究领域属于分析者归类，欢迎有依据的修正。

## 为做 research 的人准备

文献调研不只是搜索标题，还需要知道一篇论文处于什么研究问题中、与哪些方向相邻、为什么值得进一步阅读。

你可以用这份图谱：

- **开始一个方向的调研：** 先选一级领域，再进入二级主题。
- **准备组会：** 筛选「主赛道 + Oral」，收藏感兴趣的论文，导出 Markdown 阅读清单。
- **比较研究分布：** 在领域分布视图中查看同一赛道、同一展示类别的样本数量。
- **核对原始内容：** 点击任意论文标题进入官网，也可直接打开 OpenReview。
- **分享阅读线索：** 筛选条件保存在 URL 中；论文归类说明也有可复制的直达链接。

网站提供中英文界面、浅色与深色主题、移动端布局。按 `/` 可快速定位搜索框。

## 数据范围

| 赛道 | Oral | Spotlight | 合计 |
| --- | ---: | ---: | ---: |
| 主赛道 | 90 | 185 | 275 |
| 评测与数据集 | 13 | 26 | 39 |
| 立场论文 | 5 | 10 | 15 |
| **已核验子集** | **108** | **221** | **329** |

不包含 Workshop。数量是样本分布，**不能用来推断领域录用率，也不代表领域质量排名**。

为什么不是全量？本次官方程序 JSON 有 9,242 条记录，标题去重后仅 5,901 项；官方论文下载目录则有 9,110 篇。两者覆盖不同。其中带 Oral/Spotlight 标签的 621 条程序记录，去重后为 329 篇。所有入选记录具有唯一的标题和 OpenReview 链接，快照内没有展示标签冲突。

另有 86 篇仅见于第三方历史快照，保存在[待核验清单](site/data/pending_verification.csv)，未进入网站及统计。**未在这里核验不代表论文没有中稿，也不代表没有获得高亮展示。**

## 两级领域如何划分

一级领域涵盖：学习理论与优化、可信 AI、AI for Science、生成模型、通用表征与结构化学习、视觉与三维图形、语言模型与智能体、多模态、强化学习、神经科学与认知、高效计算、具身智能、统计与因果、时序与音频、数据与评测。

每篇论文有一个一级领域和一个二级领域，按**核心研究问题和贡献**归类，避免重复计数：

- 用 RL 优化图像生成，归入生成模型后训练。
- 用扩散模型设计 RNA，归入科学应用。
- 研究 LLM 越狱、量化或可学习性，分别归入安全、效率或理论。

因此，「语言模型」一栏不是全部涉及 LLM 的论文数量。交叉方向在归类说明中补充。领域标签属于便于阅读的分析判断，不是 NeurIPS 官方领域统计或专家共识。

[一级领域统计](site/data/primary_summary.csv) · [二级领域统计](site/data/secondary_summary.csv) · [逐篇归类](site/data/papers_classified.csv)

## 阅读清单与隐私

收藏、语言和主题保存在当前浏览器的 `localStorage` 中，不需要登录，也不会上传收藏。清理浏览器数据会清除这些偏好；建议导出 Markdown 或 CSV 留存。

没有分析追踪脚本。导出由浏览器本地完成；字体可能向 Google Fonts 发起请求，无法加载时使用系统字体。论文链接会打开外部原始网站。

## 来源与复现

- [NeurIPS 官方程序数据](https://neurips.cc/static/virtual/data/neurips-2026-orals-posters.json)
- [官方论文下载目录](https://neurips.cc/Downloads/2026)
- [官方摘要数据](https://neurips.cc/static/virtual/data/neurips-2026-abstracts.json)
- [数据快照与来源哈希](site/data/provenance.json)
- [第三方历史候选来源：NeurIPS Explorer](https://github.com/flecomet/neurips-explorer)

来源哈希标识本次分析使用的输入；原始大体积抓取文件未随仓库发布。上游实时链接可能变化，不能保证以后重新下载得到相同快照。

网站保留论文标题、公开作者信息、官方链接及分类注释，不转载论文全文或完整摘要。用于研究时，请标明快照日期与分类版本；科学结论应引用原论文。

## 本地使用

```bash
git clone https://github.com/PeriodBLUE/neurips-2026-research-atlas.git
cd neurips-2026-research-atlas
python -m http.server 8766 --bind 127.0.0.1 --directory site
```

打开 [localhost:8766](http://localhost:8766)。网站通过 HTTP 读取 JSON，不建议直接双击 HTML 文件。

无前端构建步骤、无生产环境 npm 依赖。Node.js 22+ 可运行验证：

```bash
npm test
```

Fork 后在 **Settings → Pages → Source** 选择 **GitHub Actions**，推送到 `main` 即可校验并发布 `site/` 目录。发布个人副本前，请修改项目中的仓库链接、canonical URL 和社交预览 URL。

## 一起完善

欢迎补充有官方来源的遗漏论文、修正展示标签、讨论更合适的领域归属，以及改进研究工作流与可访问性。见[贡献指南](CONTRIBUTING.md)。

项目代码与原创说明文档采用 [MIT License](LICENSE)。第三方论文、元数据与外部资产保留各自权利。本项目独立维护，与 NeurIPS 官方无隶属或背书关系。
