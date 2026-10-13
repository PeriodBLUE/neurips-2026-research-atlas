# NeurIPS 2026 Oral／Spotlight 两级领域梳理


截至 2026 年 10 月 13 日（北京时间），本报告整理本次官方公开程序数据中能够核验的 **329 篇独立论文：108 篇 Oral、221 篇 Spotlight**。其中主赛道为 **90 篇 Oral + 185 篇 Spotlight = 275 篇**；评测与数据集赛道为 **13 + 26 = 39 篇**；立场论文赛道为 **5 + 10 = 15 篇**。

**这是可核验公开数据的分类结果，不是大会最终全量统计。** 本次官方程序文件有9,242条记录，但按标题去重后仅5,901项；官方下载页则提供9,110个论文条目。两者覆盖并不一致。带Oral/Spotlight标签的621条程序记录去重后得到329篇。第三方历史快照额外出现86个高亮条目，已单列待核验，未计入以下统计。公开数据不足以支持“已覆盖全部Oral和Spotlight”的结论。

**分类口径：** 15个一级领域、57个二级领域。分类由分析者根据标题、摘要和核心研究问题整理，属于研究导航，不是NeurIPS官方领域划分。每篇论文只有一个一级领域和一个二级领域，便于计数；交叉属性在分类说明中补充。论文展示类别取官网`decision`字段，不能将页面地址中的`poster`直接解释为普通Poster。

**边界规则：** 科学应用按目标问题归入AI for Science；语言模型的安全、理论、效率分别归入对应领域；针对生成模型的RL后训练归入生成模型；专门任务的数据集按该任务领域归类，通用评测方法才归入“数据与评测方法”。因此“LLM领域数量”不是所有使用LLM技术的论文数量。

**统计解释：** 数量表示本样本内的论文分布，不能推导某领域的录用率或选中Oral/Spotlight的概率，因为没有分领域投稿与全部录用分母。不同一级领域粒度不同，排名也会随合并口径改变。主赛道与其他赛道分别保留，Workshop不在本报告范围内。


## 一级领域汇总


| 一级领域 | 主赛道Oral | 主赛道Spotlight | 主赛道合计 | 全部已核验Oral | 全部已核验Spotlight | 全部已核验合计 |
| --- | --- | --- | --- | --- | --- | --- |
| 可信AI、安全与可解释性 | 12 | 21 | 33 | 20 | 31 | 51 |
| 学习理论与优化 | 13 | 24 | 37 | 13 | 25 | 38 |
| AI for Science与专业应用 | 9 | 17 | 26 | 11 | 25 | 36 |
| 生成模型与内容生成 | 7 | 18 | 25 | 7 | 20 | 27 |
| 大语言模型与语言智能体 | 6 | 12 | 18 | 8 | 15 | 23 |
| 计算机视觉与三维图形 | 8 | 12 | 20 | 9 | 13 | 22 |
| 通用表征与结构化学习 | 5 | 17 | 22 | 5 | 17 | 22 |
| 多模态学习与推理 | 4 | 14 | 18 | 4 | 16 | 20 |
| 强化学习与序贯决策 | 6 | 12 | 18 | 6 | 13 | 19 |
| 神经科学、认知与脑机接口 | 9 | 8 | 17 | 9 | 8 | 17 |
| 高效机器学习与计算系统 | 2 | 11 | 13 | 2 | 11 | 13 |
| 机器人与具身智能 | 4 | 5 | 9 | 5 | 8 | 13 |
| 统计推断、概率与因果 | 1 | 8 | 9 | 3 | 8 | 11 |
| 时间序列与音频 | 3 | 4 | 7 | 3 | 6 | 9 |
| 数据与评测方法 | 1 | 2 | 3 | 3 | 5 | 8 |


主赛道合计：90 Oral、185 Spotlight、275篇。三个赛道已核验部分合计：108 Oral、221 Spotlight、329篇。


## 如何理解分布


主赛道已核验部分中，学习理论与优化（37篇）、可信AI／安全／可解释性（33篇）、AI for Science与专业应用（26篇）及生成模型（25篇）规模较大。合并三个赛道后，可信AI／安全／可解释性增至51篇，受评测和立场论文影响明显，不能与主赛道口径混用。


神经科学、认知与脑机接口在主赛道样本中有9篇Oral和8篇Spotlight，值得单独阅读；这只是当前样本的构成，不意味着该领域的录用率更高。


## 二级领域汇总


| 一级领域 | 二级领域 | 主赛道Oral | 主赛道Spotlight | 主赛道合计 | Oral | Spotlight | 合计 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 大语言模型与语言智能体 | 语言模型预训练、架构与扩展规律 | 0 | 4 | 4 | 0 | 4 | 4 |
| 大语言模型与语言智能体 | 推理与自我改进 | 2 | 3 | 5 | 2 | 3 | 5 |
| 大语言模型与语言智能体 | 智能体规划、工具使用与协作 | 3 | 2 | 5 | 3 | 3 | 6 |
| 大语言模型与语言智能体 | 检索与搜索 | 0 | 1 | 1 | 0 | 1 | 1 |
| 大语言模型与语言智能体 | 扩散语言模型 | 0 | 2 | 2 | 0 | 2 | 2 |
| 大语言模型与语言智能体 | 语言能力与智能体任务评测 | 1 | 0 | 1 | 3 | 2 | 5 |
| 多模态学习与推理 | 跨模态表征、对齐与融合 | 1 | 7 | 8 | 1 | 8 | 9 |
| 多模态学习与推理 | 视觉语言推理 | 3 | 1 | 4 | 3 | 2 | 5 |
| 多模态学习与推理 | 三维理解与空间语言定位 | 0 | 6 | 6 | 0 | 6 | 6 |
| 计算机视觉与三维图形 | 三维重建、几何估计与渲染 | 4 | 7 | 11 | 4 | 7 | 11 |
| 计算机视觉与三维图形 | 图像分割与视觉表征 | 2 | 3 | 5 | 2 | 4 | 6 |
| 计算机视觉与三维图形 | 图像视频取证与伪造检测 | 2 | 2 | 4 | 3 | 2 | 5 |
| 生成模型与内容生成 | 扩散、流匹配与生成理论 | 4 | 3 | 7 | 4 | 3 | 7 |
| 生成模型与内容生成 | 图像生成、编辑与复原 | 1 | 7 | 8 | 1 | 8 | 9 |
| 生成模型与内容生成 | 视频与三维内容生成 | 1 | 2 | 3 | 1 | 3 | 4 |
| 生成模型与内容生成 | 生成模型后训练与奖励建模 | 1 | 6 | 7 | 1 | 6 | 7 |
| 强化学习与序贯决策 | 探索、内在动机与技能学习 | 4 | 0 | 4 | 4 | 0 | 4 |
| 强化学习与序贯决策 | 策略优化与强化学习基础 | 0 | 4 | 4 | 0 | 5 | 5 |
| 强化学习与序贯决策 | 离线、模仿与安全鲁棒强化学习 | 0 | 5 | 5 | 0 | 5 | 5 |
| 强化学习与序贯决策 | 多智能体强化学习 | 2 | 1 | 3 | 2 | 1 | 3 |
| 强化学习与序贯决策 | 上下文赌博机与贝叶斯优化 | 0 | 2 | 2 | 0 | 2 | 2 |
| 学习理论与优化 | 统计学习与样本复杂度 | 2 | 7 | 9 | 2 | 7 | 9 |
| 学习理论与优化 | 深度学习理论与训练动力学 | 2 | 9 | 11 | 2 | 10 | 12 |
| 学习理论与优化 | 连续优化与训练算法 | 3 | 3 | 6 | 3 | 3 | 6 |
| 学习理论与优化 | 在线学习与算法 | 5 | 1 | 6 | 5 | 1 | 6 |
| 学习理论与优化 | 博弈、机制与组合优化 | 1 | 4 | 5 | 1 | 4 | 5 |
| 统计推断、概率与因果 | 不确定性、校准与统计推断 | 1 | 5 | 6 | 3 | 5 | 8 |
| 统计推断、概率与因果 | 贝叶斯与仿真推断 | 0 | 2 | 2 | 0 | 2 | 2 |
| 统计推断、概率与因果 | 因果建模与发现 | 0 | 1 | 1 | 0 | 1 | 1 |
| 可信AI、安全与可解释性 | 语言模型对齐与智能体安全 | 5 | 8 | 13 | 7 | 12 | 19 |
| 可信AI、安全与可解释性 | 隐私、攻击防御与模型权益 | 2 | 5 | 7 | 2 | 6 | 8 |
| 可信AI、安全与可解释性 | 机制解释与模型审计 | 4 | 5 | 9 | 5 | 7 | 12 |
| 可信AI、安全与可解释性 | 公平、社会影响与人机交互 | 0 | 2 | 2 | 4 | 5 | 9 |
| 可信AI、安全与可解释性 | 机器遗忘 | 1 | 1 | 2 | 2 | 1 | 3 |
| 高效机器学习与计算系统 | 模型压缩与高效适配 | 2 | 5 | 7 | 2 | 5 | 7 |
| 高效机器学习与计算系统 | 推理加速与资源调度 | 0 | 4 | 4 | 0 | 4 | 4 |
| 高效机器学习与计算系统 | 训练系统与生成架构效率 | 0 | 2 | 2 | 0 | 2 | 2 |
| 通用表征与结构化学习 | 图学习与图结构建模 | 1 | 7 | 8 | 1 | 7 | 8 |
| 通用表征与结构化学习 | 迁移、少样本与模型融合 | 1 | 4 | 5 | 1 | 4 | 5 |
| 通用表征与结构化学习 | 表征几何、聚类与神经符号 | 2 | 4 | 6 | 2 | 4 | 6 |
| 通用表征与结构化学习 | 序列与新型神经架构 | 1 | 2 | 3 | 1 | 2 | 3 |
| 机器人与具身智能 | 导航、建图与运动控制 | 2 | 2 | 4 | 2 | 2 | 4 |
| 机器人与具身智能 | 世界模型与物理场景建模 | 1 | 3 | 4 | 1 | 4 | 5 |
| 机器人与具身智能 | 具身系统、数据与触觉评测 | 1 | 0 | 1 | 2 | 2 | 4 |
| AI for Science与专业应用 | 生物序列、遗传与分子生物学 | 1 | 2 | 3 | 1 | 4 | 5 |
| AI for Science与专业应用 | 分子、药物与材料 | 4 | 4 | 8 | 4 | 4 | 8 |
| AI for Science与专业应用 | 物理、PDE与科学计算 | 1 | 3 | 4 | 1 | 3 | 4 |
| AI for Science与专业应用 | 气象、地球、生态与遥感 | 2 | 2 | 4 | 4 | 6 | 10 |
| AI for Science与专业应用 | 医疗影像与临床AI | 0 | 3 | 3 | 0 | 3 | 3 |
| AI for Science与专业应用 | 自动科学发现与行业应用 | 1 | 3 | 4 | 1 | 5 | 6 |
| 神经科学、认知与脑机接口 | 计算神经科学与脑动力学 | 5 | 1 | 6 | 5 | 1 | 6 |
| 神经科学、认知与脑机接口 | 脑信号编码、解码与脑机接口 | 3 | 2 | 5 | 3 | 2 | 5 |
| 神经科学、认知与脑机接口 | 认知、行为与神经启发计算 | 1 | 5 | 6 | 1 | 5 | 6 |
| 时间序列与音频 | 时间序列预测、适配与质量 | 3 | 3 | 6 | 3 | 4 | 7 |
| 时间序列与音频 | 音频、音乐与声音数据 | 0 | 1 | 1 | 0 | 2 | 2 |
| 数据与评测方法 | 通用评测与模型选择 | 1 | 0 | 1 | 2 | 1 | 3 |
| 数据与评测方法 | 数据质量、蒸馏与标注 | 0 | 2 | 2 | 1 | 4 | 5 |


## 逐篇对应：论文 → 一级领域 → 二级领域


下面包含全部329篇已核验论文。每篇的完整标题、展示类别、赛道、分类依据和官方链接均予以保留。


### 可信AI、安全与可解释性


#### 语言模型对齐与智能体安全（Oral 7／Spotlight 12）


- **P017 · Oral · 主赛道** — [CURE: Counterfactual Unsafe-token Re-masking for Diffusion Large Language Model Test-time Alignment](https://neurips.cc/virtual/2026/poster/151876)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P044 · Oral · 主赛道** — [LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents in Real OS Environments](https://neurips.cc/virtual/2026/oral/150416)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P051 · Oral · 主赛道** — [Neural Chameleons: Language Models Can Learn to Hide Their Thoughts from Unseen Activation Monitors](https://neurips.cc/virtual/2026/poster/148241)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P069 · Oral · 主赛道** — [Soteria: Formally Verified Planning with Runtime Enforcement for Safe LLM Agents](https://neurips.cc/virtual/2026/poster/154927)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P078 · Oral · 主赛道** — [The Attacker in the Mirror: Breaking Self-Consistency in Safety via Anchored Bipolicy Self-Play](https://neurips.cc/virtual/2026/poster/151513)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P106 · Spotlight · 主赛道** — [Beyond Linear Activation Steering: Invertible Latent Transformations for Controlling LLM Behavior](https://neurips.cc/virtual/2026/poster/148807)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P136 · Spotlight · 主赛道** — [Do Thinking Tokens Help with Safety?](https://neurips.cc/virtual/2026/poster/150945)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P137 · Spotlight · 主赛道** — [Don't Lose Focus: Activation Steering via Key-Orthogonal Projections](https://neurips.cc/virtual/2026/poster/154186)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P139 · Spotlight · 主赛道** — [Evaluation Awareness in Language Models Has Limited Effect on Behaviour](https://neurips.cc/virtual/2026/poster/148437)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P166 · Spotlight · 主赛道** — [Inference-time Alignment via Sparse Junction Steering](https://neurips.cc/virtual/2026/poster/155775)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P222 · Spotlight · 主赛道** — [Rethinking LLM Fine-Tuning via Weight Space Reparameterization: Preserving Safety during Downstream Adaptation](https://neurips.cc/virtual/2026/poster/153897)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P226 · Spotlight · 主赛道** — [Safety Reconstructed: Generative Modeling via Masked Diffusion Builds Strong Safety Guardrails](https://neurips.cc/virtual/2026/poster/149672)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P239 · Spotlight · 主赛道** — [Structure vs. Chaos: Asymmetric Entropic Optimization for Enforcing Instruction Hierarchy](https://neurips.cc/virtual/2026/poster/150200)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P276 · Oral · 评测与数据集** — [AgentAbstain: Do LLM Agents Know When Not to Act?](https://neurips.cc/virtual/2026/poster/139558)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P289 · Spotlight · 评测与数据集** — [Are LLM Safety Judges Policy-Invariant? A Three-Principle Stress-Test](https://neurips.cc/virtual/2026/poster/139215)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P296 · Spotlight · 评测与数据集** — [Expected Harm: Rethinking Safety Evaluation of (Mis)Aligned LLMs](https://neurips.cc/virtual/2026/poster/139760)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P315 · Oral · 立场论文** — [Agent Security is a Systems Problem](https://neurips.cc/virtual/2026/poster/140106)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P320 · Spotlight · 立场论文** — [AIs with Secret Loyalties are a Serious but Addressable Threat](https://neurips.cc/virtual/2026/poster/140059)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。核心问题是模型有害行为、越狱、指令注入或智能体安全。


- **P329 · Spotlight · 立场论文** — [Think about how AIs think about themselves](https://neurips.cc/virtual/2026/poster/139993)
  - 领域：可信AI、安全与可解释性 → 语言模型对齐与智能体安全。讨论AI自我概念对合作与风险的影响，属于安全与治理立场。


#### 隐私、攻击防御与模型权益（Oral 2／Spotlight 6）


- **P011 · Oral · 主赛道** — [Catch-Only-One: Non-Transferable Examples for Model-Specific Authorization](https://neurips.cc/virtual/2026/poster/151014)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


- **P028 · Oral · 主赛道** — [Felid: A Flexible and Efficient Design for Transformer Fine-Tuning over Encrypted Data](https://neurips.cc/virtual/2026/poster/148321)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究加密数据上的训练，因此按隐私保护归类；同时涉及高效计算。


- **P101 · Spotlight · 主赛道** — [Anchoring Adversarial Trajectories to Data Manifolds: A Bilevel Transfer Optimization Framework](https://neurips.cc/virtual/2026/poster/153364)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


- **P120 · Spotlight · 主赛道** — [Combating Data Laundering in LLM Training](https://neurips.cc/virtual/2026/poster/155652)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


- **P184 · Spotlight · 主赛道** — [Natural Jammers: When Non-Robust Features Become Antagonistic](https://neurips.cc/virtual/2026/poster/149318)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


- **P205 · Spotlight · 主赛道** — [Poisoning Attacks on LLMs Require a Near-constant Number of Poison Samples](https://neurips.cc/virtual/2026/poster/154663)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


- **P261 · Spotlight · 主赛道** — [UniReFP: Robust Unified Fingerprinting for Vision Models against Cross-Task Repurposing Attacks](https://neurips.cc/virtual/2026/poster/149011)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


- **P325 · Spotlight · 立场论文** — [Position: Reconciling Open Access with Owner Control in AI Model Distribution Deserves More Research Effort](https://neurips.cc/virtual/2026/poster/140082)
  - 领域：可信AI、安全与可解释性 → 隐私、攻击防御与模型权益。研究隐私保护、投毒或对抗攻击、模型授权和数据权益。


#### 机制解释与模型审计（Oral 5／Spotlight 7）


- **P018 · Oral · 主赛道** — [DD-CAM: Minimal Sufficient Explanations for Vision Models Using Delta Debugging](https://neurips.cc/virtual/2026/poster/151520)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P043 · Oral · 主赛道** — [Learning to Audit ML Models with Theory of Mind](https://neurips.cc/virtual/2026/oral/155784)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P045 · Oral · 主赛道** — [LoRAcles: Self-Supervised Weight-Space Interpretability at Scale](https://neurips.cc/virtual/2026/oral/154334)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P077 · Oral · 主赛道** — [The Algorithm Is Not the Behavior: Learned Priors Override Look-Ahead in a Chess-Playing Neural Network](https://neurips.cc/virtual/2026/poster/152268)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P092 · Spotlight · 主赛道** — [A Mechanistic Investigation of Theory of Mind in a Large Language Model](https://neurips.cc/virtual/2026/poster/148276)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P116 · Spotlight · 主赛道** — [CHORD: Cross-Model Hallucination Detection via Relational Graph Discrimination](https://neurips.cc/virtual/2026/poster/153626)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。以跨模型幻觉检测为核心；官网topic将其标作迁移学习，这里按问题重分。


- **P150 · Spotlight · 主赛道** — [fmxcoders: Factorized Masked Crosscoders for Cross-Layer Feature Discovery](https://neurips.cc/virtual/2026/poster/154897)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P162 · Spotlight · 主赛道** — [Hyperbolic Concept Bottleneck Models](https://neurips.cc/virtual/2026/poster/151003)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P242 · Spotlight · 主赛道** — [The Curse of Multiple Mediators: Hidden Interaction Effects in Activation Patching](https://neurips.cc/virtual/2026/poster/154497)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P318 · Oral · 立场论文** — [The Dead Salmons of AI Interpretability: The Need for a Statistical Inference Perspective](https://neurips.cc/virtual/2026/poster/140002)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P324 · Spotlight · 立场论文** — [Mechanistic Interpretability Needs Philosophy](https://neurips.cc/virtual/2026/poster/140011)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


- **P328 · Spotlight · 立场论文** — [Stop Using Plausibility as the Criterion for Explainable AI](https://neurips.cc/virtual/2026/poster/140096)
  - 领域：可信AI、安全与可解释性 → 机制解释与模型审计。研究内部机制、特征解释、行为审计及解释方法有效性。


#### 公平、社会影响与人机交互（Oral 4／Spotlight 5）


- **P176 · Spotlight · 主赛道** — [Mecha-nudges for Machines](https://neurips.cc/virtual/2026/poster/156000)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究环境呈现方式如何影响AI决策，偏向社会行为和人机环境。


- **P209 · Spotlight · 主赛道** — [Predicting Human-Gain Curves under Local Proxy Optimization from Repeated Ratings](https://neurips.cc/virtual/2026/poster/150880)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究公平性、社会影响、对人的影响及AI治理。


- **P281 · Oral · 评测与数据集** — [GenAI Evaluation Results are Largely Artifacts of Evaluation Design Choices: Evidence from Audit Studies of Resume Screening](https://neurips.cc/virtual/2026/oral/138977)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究公平性、社会影响、对人的影响及AI治理。


- **P283 · Oral · 评测与数据集** — [HearSayBench: Can LLMs Navigate from Abstract Human Rights to Lived Lives?](https://neurips.cc/virtual/2026/poster/139278)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。评测模型对人权与生活情境的理解，归入社会影响。


- **P286 · Oral · 评测与数据集** — [Offloading Score: Measuring AI Reliance through Counterfactual Workflows](https://neurips.cc/virtual/2026/oral/139389)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。用用户工作流衡量对AI的依赖，属于人机交互。


- **P307 · Spotlight · 评测与数据集** — [Political Neutrality as Balanced Approval: A Large-Scale Human Evaluation of AI Responses](https://neurips.cc/virtual/2026/poster/139670)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究公平性、社会影响、对人的影响及AI治理。


- **P316 · Oral · 立场论文** — [Position: Fair Representations Cannot Hold What They Promise](https://neurips.cc/virtual/2026/poster/140022)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究公平性、社会影响、对人的影响及AI治理。


- **P322 · Spotlight · 立场论文** — [Community-Centered AI is Feasible and Beneficial for Impacted Communities](https://neurips.cc/virtual/2026/poster/140008)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究公平性、社会影响、对人的影响及AI治理。


- **P323 · Spotlight · 立场论文** — [Large language models can not and should not be banned from peer review](https://neurips.cc/virtual/2026/poster/140035)
  - 领域：可信AI、安全与可解释性 → 公平、社会影响与人机交互。研究公平性、社会影响、对人的影响及AI治理。


#### 机器遗忘（Oral 2／Spotlight 1）


- **P001 · Oral · 主赛道** — [AdaSRU: Adaptive Source-Free Recommendation Unlearning via Gradient-Constrained Optimization](https://neurips.cc/virtual/2026/poster/154534)
  - 领域：可信AI、安全与可解释性 → 机器遗忘。目标是移除模型中的指定知识、数据影响或推荐知识。


- **P144 · Spotlight · 主赛道** — [FedSOUL: Federated Continual Unlearning via Spectral Orthogonality](https://neurips.cc/virtual/2026/poster/153586)
  - 领域：可信AI、安全与可解释性 → 机器遗忘。目标是移除模型中的指定知识、数据影响或推荐知识。


- **P319 · Oral · 立场论文** — [We Should Distinguish Unlearning From Untraining](https://neurips.cc/virtual/2026/poster/140062)
  - 领域：可信AI、安全与可解释性 → 机器遗忘。目标是移除模型中的指定知识、数据影响或推荐知识。


### 学习理论与优化


#### 统计学习与样本复杂度（Oral 2／Spotlight 7）


- **P056 · Oral · 主赛道** — [Prediction Under Imperfect Compression: A Theory of Approximate MDL](https://neurips.cc/virtual/2026/poster/150363)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P072 · Oral · 主赛道** — [Surprises in Proper Positive-Only Learning](https://neurips.cc/virtual/2026/oral/148779)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P095 · Spotlight · 主赛道** — [A Theoretical Analysis of Test-Driven Code Generation](https://neurips.cc/virtual/2026/poster/149483)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P164 · Spotlight · 主赛道** — [Improved Leverage Score Sampling for Constrained Active Linear Regression](https://neurips.cc/virtual/2026/poster/155618)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P207 · Spotlight · 主赛道** — [Polynomial-Time Robust Multiclass Linear Classification under Gaussian Marginals](https://neurips.cc/virtual/2026/poster/153425)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P210 · Spotlight · 主赛道** — [Proper Agnostic Learning of Functions of Halfspaces](https://neurips.cc/virtual/2026/poster/151228)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P221 · Spotlight · 主赛道** — [Requential Coding: Measuring Model Compressibility by Coding Data Instead of Parameters](https://neurips.cc/virtual/2026/poster/150681)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P237 · Spotlight · 主赛道** — [Strategic PAC Learnability via Geometric Definability](https://neurips.cc/virtual/2026/poster/155901)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


- **P267 · Spotlight · 主赛道** — [What the Geometry of Good Models Tells Us](https://neurips.cc/virtual/2026/poster/155858)
  - 领域：学习理论与优化 → 统计学习与样本复杂度。核心贡献是可学习性、泛化、查询复杂度或理论界。


#### 深度学习理论与训练动力学（Oral 2／Spotlight 10）


- **P080 · Oral · 主赛道** — [The Sign Code: The Hidden Binary Nature of Deep Networks](https://neurips.cc/virtual/2026/oral/155586)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P087 · Oral · 主赛道** — [Uniform-in-Time Weak Propagation of Chaos in Shallow Neural Networks](https://neurips.cc/virtual/2026/oral/154795)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P094 · Spotlight · 主赛道** — [A Solvable Model of Chain-of-Thought in In-Context Learning](https://neurips.cc/virtual/2026/poster/154777)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。属于思维链与上下文学习的可解理论模型，按理论贡献归类。


- **P103 · Spotlight · 主赛道** — [Attention-based PCA](https://neurips.cc/virtual/2026/poster/154448)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P133 · Spotlight · 主赛道** — [Diagonalizing the Softmax: Hadamard Initialization for Tractable Cross-Entropy Dynamics](https://neurips.cc/virtual/2026/poster/152327)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P151 · Spotlight · 主赛道** — [Foundations of Categorical Equivariant Deep Learning](https://neurips.cc/virtual/2026/poster/150485)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P169 · Spotlight · 主赛道** — [Large language models suffer from a curse of ambiguity](https://neurips.cc/virtual/2026/poster/150511)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P191 · Spotlight · 主赛道** — [On the Depth of Monotone ReLU Neural Networks and ICNNs](https://neurips.cc/virtual/2026/poster/152162)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P230 · Spotlight · 主赛道** — [Sharpness of Minima in Deep Matrix Factorization](https://neurips.cc/virtual/2026/poster/148982)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P247 · Spotlight · 主赛道** — [The Symmetries of Three-Layer ReLU Networks](https://neurips.cc/virtual/2026/poster/150294)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P256 · Spotlight · 主赛道** — [Two Speeds of Learning: A Representation-Readout Decomposition of Grokking and Double Descent](https://neurips.cc/virtual/2026/poster/153791)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。分析神经网络表达能力、对称性、梯度动力学及泛化现象。


- **P321 · Spotlight · 立场论文** — [Claims of AI emergence should be grounded in information decomposition](https://neurips.cc/virtual/2026/poster/140036)
  - 领域：学习理论与优化 → 深度学习理论与训练动力学。主张用信息分解研究AI涌现，属于理论框架立场论文。


#### 连续优化与训练算法（Oral 3／Spotlight 3）


- **P021 · Oral · 主赛道** — [Do We Need Asynchronous SGD? On the Near-Optimality of Synchronous Methods](https://neurips.cc/virtual/2026/oral/155337)
  - 领域：学习理论与优化 → 连续优化与训练算法。归入优化理论：核心是同步与异步随机优化的理论效率比较。


- **P031 · Oral · 主赛道** — [Follow the Regularized Leader Does Not Converge in Constrained Optimization](https://neurips.cc/virtual/2026/oral/150987)
  - 领域：学习理论与优化 → 连续优化与训练算法。研究优化方法、收敛、梯度更新和凸函数建模。


- **P061 · Oral · 主赛道** — [Reference-Guided Training: Adaptive Gradient Scaling via Per-Sample Loss Comparisons](https://neurips.cc/virtual/2026/poster/148399)
  - 领域：学习理论与优化 → 连续优化与训练算法。研究优化方法、收敛、梯度更新和凸函数建模。


- **P100 · Spotlight · 主赛道** — [AMUSE: Anytime Muon with Stable Gradient Evaluation](https://neurips.cc/virtual/2026/poster/152756)
  - 领域：学习理论与优化 → 连续优化与训练算法。研究优化方法、收敛、梯度更新和凸函数建模。


- **P152 · Spotlight · 主赛道** — [Free Heavy-Tailed Lunch for Muon: A Theoretical Justification of Empirical Success](https://neurips.cc/virtual/2026/poster/155600)
  - 领域：学习理论与优化 → 连续优化与训练算法。研究优化方法、收敛、梯度更新和凸函数建模。


- **P233 · Spotlight · 主赛道** — [SOC-ICNN: From Polyhedral to Conic Geometry for Learning Convex Surrogate Functions](https://neurips.cc/virtual/2026/poster/150828)
  - 领域：学习理论与优化 → 连续优化与训练算法。研究优化方法、收敛、梯度更新和凸函数建模。


#### 在线学习与算法（Oral 5／Spotlight 1）


- **P033 · Oral · 主赛道** — [From Average Sensitivity to Small-Loss Regret Bounds under Random-Order Model](https://neurips.cc/virtual/2026/oral/154660)
  - 领域：学习理论与优化 → 在线学习与算法。研究在线决策、数据流算法、遗憾及稳定性。


- **P046 · Oral · 主赛道** — [MaxSketch: Robust Distinct Counting in Streams via Random Projections](https://neurips.cc/virtual/2026/poster/155987)
  - 领域：学习理论与优化 → 在线学习与算法。研究在线决策、数据流算法、遗憾及稳定性。


- **P076 · Oral · 主赛道** — [Testable and Actionable Calibration for Full Swap Regret](https://neurips.cc/virtual/2026/poster/148311)
  - 领域：学习理论与优化 → 在线学习与算法。研究在线决策、数据流算法、遗憾及稳定性。


- **P079 · Oral · 主赛道** — [The Power of a Random Sample in Online Algorithms](https://neurips.cc/virtual/2026/poster/152757)
  - 领域：学习理论与优化 → 在线学习与算法。研究在线决策、数据流算法、遗憾及稳定性。


- **P081 · Oral · 主赛道** — [The Stability of Online Algorithms in Performative Prediction](https://neurips.cc/virtual/2026/oral/151726)
  - 领域：学习理论与优化 → 在线学习与算法。研究在线决策、数据流算法、遗憾及稳定性。


- **P196 · Spotlight · 主赛道** — [Optimal Recalibration of an Online Predictor](https://neurips.cc/virtual/2026/poster/153807)
  - 领域：学习理论与优化 → 在线学习与算法。研究在线决策、数据流算法、遗憾及稳定性。


#### 博弈、机制与组合优化（Oral 1／Spotlight 4）


- **P086 · Oral · 主赛道** — [UECO: A Unified Encoder with Structure-Aware Attention Mixture via Iterative Edge Evolving for Neural Combinatorial Optimization](https://neurips.cc/virtual/2026/poster/153347)
  - 领域：学习理论与优化 → 博弈、机制与组合优化。研究博弈、资源分配、投票及离散优化。


- **P172 · Spotlight · 主赛道** — [Learning to Price with Persuasion](https://neurips.cc/virtual/2026/poster/154117)
  - 领域：学习理论与优化 → 博弈、机制与组合优化。研究博弈、资源分配、投票及离散优化。


- **P195 · Spotlight · 主赛道** — [Online Fair Division Meets Reordering Buffers](https://neurips.cc/virtual/2026/poster/153060)
  - 领域：学习理论与优化 → 博弈、机制与组合优化。研究博弈、资源分配、投票及离散优化。


- **P206 · Spotlight · 主赛道** — [Polynomial-Time Algorithm for Thiele Voting Rules with Voter Interval Preferences](https://neurips.cc/virtual/2026/poster/148977)
  - 领域：学习理论与优化 → 博弈、机制与组合优化。研究博弈、资源分配、投票及离散优化。


- **P244 · Spotlight · 主赛道** — [The Long-Run Distribution of Regularized Learning in Non-Concave Games: A Large Deviations Approach](https://neurips.cc/virtual/2026/poster/154101)
  - 领域：学习理论与优化 → 博弈、机制与组合优化。研究博弈、资源分配、投票及离散优化。


### AI for Science与专业应用


#### 生物序列、遗传与分子生物学（Oral 1／Spotlight 4）


- **P008 · Oral · 主赛道** — [C3P: Contrastive promoter-protein pretraining yields representations capturing bacterial gene regulation](https://neurips.cc/virtual/2026/poster/156046)
  - 领域：AI for Science与专业应用 → 生物序列、遗传与分子生物学。核心任务是基因调控、mRNA、进化或生物序列建模。


- **P130 · Spotlight · 主赛道** — [Deep Generative Models for Phylogenetic Inference with Complex Evolutionary Processes](https://neurips.cc/virtual/2026/poster/151547)
  - 领域：AI for Science与专业应用 → 生物序列、遗传与分子生物学。核心任务是基因调控、mRNA、进化或生物序列建模。


- **P157 · Spotlight · 主赛道** — [GOLD: Geometric Optimized Latent Diffusion for Structure-Aware RNA Inverse Folding](https://neurips.cc/virtual/2026/poster/153434)
  - 领域：AI for Science与专业应用 → 生物序列、遗传与分子生物学。RNA逆折叠属于生物分子序列设计；使用潜在扩散作为方法。


- **P302 · Spotlight · 评测与数据集** — [mRNABench: A curated benchmark for mature mRNA property and function prediction](https://neurips.cc/virtual/2026/poster/139560)
  - 领域：AI for Science与专业应用 → 生物序列、遗传与分子生物学。核心任务是基因调控、mRNA、进化或生物序列建模。


- **P310 · Spotlight · 评测与数据集** — [Scaling Genomic Language Modeling with Unified Corpus and Evaluation in Bacteria](https://neurips.cc/virtual/2026/poster/139114)
  - 领域：AI for Science与专业应用 → 生物序列、遗传与分子生物学。核心任务是基因调控、mRNA、进化或生物序列建模。


#### 分子、药物与材料（Oral 4／Spotlight 4）


- **P015 · Oral · 主赛道** — [Compact SO(3) Equivariant Atomistic Foundation Models via Structural Pruning](https://neurips.cc/virtual/2026/oral/154866)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。研究原子模型、分子相互作用、药物和蛋白质建模。


- **P024 · Oral · 主赛道** — [Emergent Biological Capabilities in a Foundation Model for Molecular Interactions](https://neurips.cc/virtual/2026/poster/149424)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。研究原子模型、分子相互作用、药物和蛋白质建模。


- **P055 · Oral · 主赛道** — [Polar Transformers: $SO(2)^K$-Equivariant Angular Attention for Cryo-EM Image-Set Processing](https://neurips.cc/virtual/2026/poster/156031)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。SO(2)等变架构服务于冷冻电镜结构生物学任务。


- **P074 · Oral · 主赛道** — [TALK: One-Shot Batch Design for Protein Variant Effect Prediction](https://neurips.cc/virtual/2026/poster/155750)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。蛋白变体效应预测中的批量实验设计，兼具主动学习属性。


- **P110 · Spotlight · 主赛道** — [Binding Mode Matters: Hotspot-Aware Drug Discovery via Explorative Preferences](https://neurips.cc/virtual/2026/poster/153924)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。研究原子模型、分子相互作用、药物和蛋白质建模。


- **P126 · Spotlight · 主赛道** — [CrystalREPA: Transferring Physical Priors from Universal MLIPs to Crystal Generative Models](https://neurips.cc/virtual/2026/poster/154603)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。研究原子模型、分子相互作用、药物和蛋白质建模。


- **P146 · Spotlight · 主赛道** — [Few-Step Cofolding with All-Atom Flow Maps](https://neurips.cc/virtual/2026/poster/151026)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。研究原子模型、分子相互作用、药物和蛋白质建模。


- **P177 · Spotlight · 主赛道** — [MechParser: A Vision-Language Framework for Parsing Chemical Reaction Mechanism Diagrams](https://neurips.cc/virtual/2026/poster/151799)
  - 领域：AI for Science与专业应用 → 分子、药物与材料。研究原子模型、分子相互作用、药物和蛋白质建模。


#### 物理、PDE与科学计算（Oral 1／Spotlight 3）


- **P047 · Oral · 主赛道** — [Mechanism-Aware Ensemble Conditioning for Data-Limited Emulation of Extreme Events](https://neurips.cc/virtual/2026/oral/151390)
  - 领域：AI for Science与专业应用 → 物理、PDE与科学计算。研究物理过程、神经算子、动力学与科学仿真。


- **P093 · Spotlight · 主赛道** — [A meshfree exterior calculus for generalizable and data-efficient learning of physics from point clouds](https://neurips.cc/virtual/2026/poster/154490)
  - 领域：AI for Science与专业应用 → 物理、PDE与科学计算。研究物理过程、神经算子、动力学与科学仿真。


- **P142 · Spotlight · 主赛道** — [Fast Reconstruction of Exact Maxwell Dynamics from Sparse Data](https://neurips.cc/virtual/2026/poster/148197)
  - 领域：AI for Science与专业应用 → 物理、PDE与科学计算。研究物理过程、神经算子、动力学与科学仿真。


- **P170 · Spotlight · 主赛道** — [Learned Lagrangian Models of PDEs via Euler–Lagrange Residual Minimization](https://neurips.cc/virtual/2026/poster/151132)
  - 领域：AI for Science与专业应用 → 物理、PDE与科学计算。研究物理过程、神经算子、动力学与科学仿真。


#### 气象、地球、生态与遥感（Oral 4／Spotlight 6）


- **P019 · Oral · 主赛道** — [Decomposing Earth Embeddings with Sparse Autoencoders](https://neurips.cc/virtual/2026/oral/150169)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P020 · Oral · 主赛道** — [DIAGNO: Diagonal Spherical Neural Operators for Heterogeneous Earth Dynamics Modeling](https://neurips.cc/virtual/2026/oral/154009)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P156 · Spotlight · 主赛道** — [GeoWind2Plan: Mission-Time 3D Urban Wind Prediction for Energy-Efficient UAV Planning](https://neurips.cc/virtual/2026/poster/149346)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P189 · Spotlight · 主赛道** — [OceanCBM: A Concept Bottleneck Model for Mechanistic Interpretability in Ocean Forecasting](https://neurips.cc/virtual/2026/poster/150573)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P279 · Oral · 评测与数据集** — [Can LLM Agents Respond to Disasters? Benchmarking Heterogeneous Geospatial Reasoning in Emergency Operations](https://neurips.cc/virtual/2026/oral/139775)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P285 · Oral · 评测与数据集** — [MOVEBENCH: A Benchmark for Global-Scale Wildlife Movement Forecasting](https://neurips.cc/virtual/2026/poster/139749)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P297 · Spotlight · 评测与数据集** — [Fluxtrapolation: A benchmark on extrapolating ecosystem fluxes](https://neurips.cc/virtual/2026/poster/139401)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P298 · Spotlight · 评测与数据集** — [GeoG2U-Bench: When Does Generation Help Understanding in Ultra-High-Resolution Remote Sensing?](https://neurips.cc/virtual/2026/poster/139820)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


- **P299 · Spotlight · 评测与数据集** — [InSpect: A Curated Natural History Collection Dataset for Insect Specimen Understanding](https://neurips.cc/virtual/2026/poster/139783)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。昆虫标本数据集，同时涉及计算机视觉和生物多样性。


- **P312 · Spotlight · 评测与数据集** — [StomataBench: Measuring Taxonomic Generalization in Stomatal Detection](https://neurips.cc/virtual/2026/poster/139110)
  - 领域：AI for Science与专业应用 → 气象、地球、生态与遥感。研究地球系统、气象、环境、遥感及生态领域任务。


#### 医疗影像与临床AI（Oral 0／Spotlight 3）


- **P109 · Spotlight · 主赛道** — [Beyond Sparse Captions: Aligning Slide-Level Text and Patch-Level Vision in Pathology](https://neurips.cc/virtual/2026/poster/149751)
  - 领域：AI for Science与专业应用 → 医疗影像与临床AI。研究病理影像、医学视觉语言模型及医疗任务。


- **P124 · Spotlight · 主赛道** — [CRAFT: Causal Responsibility and Failure Tracing in Medical Vision Language Models](https://neurips.cc/virtual/2026/poster/149960)
  - 领域：AI for Science与专业应用 → 医疗影像与临床AI。研究病理影像、医学视觉语言模型及医疗任务。


- **P238 · Spotlight · 主赛道** — [STREAM: Stochastic Riemannian Flow Matching with Anisotropic Decoder for Digital Histopathology Image Generation](https://neurips.cc/virtual/2026/poster/149538)
  - 领域：AI for Science与专业应用 → 医疗影像与临床AI。研究病理影像、医学视觉语言模型及医疗任务。


#### 自动科学发现与行业应用（Oral 1／Spotlight 5）


- **P030 · Oral · 主赛道** — [Fisher-R1: Training LLM Agents for Reliable Hypothesis Testing](https://neurips.cc/virtual/2026/oral/152495)
  - 领域：AI for Science与专业应用 → 自动科学发现与行业应用。核心任务是科学假设检验工作流中的智能体推断可靠性。


- **P118 · Spotlight · 主赛道** — [Closed Loop Dynamic Driving Data Mixture for Real-Synthetic Co-Training](https://neurips.cc/virtual/2026/poster/149779)
  - 领域：AI for Science与专业应用 → 自动科学发现与行业应用。面向自动驾驶的真实与合成训练数据混合。


- **P140 · Spotlight · 主赛道** — [ExperiGen: Agentic Hypothesis Discovery from Observational Data](https://neurips.cc/virtual/2026/poster/149912)
  - 领域：AI for Science与专业应用 → 自动科学发现与行业应用。研究科学工作流、实验设计、科学智能体和专业行业应用。


- **P240 · Spotlight · 主赛道** — [TagBO: LLM-Driven Task-Aware Graph Bayesian Optimization for Scientific Discovery](https://neurips.cc/virtual/2026/poster/148670)
  - 领域：AI for Science与专业应用 → 自动科学发现与行业应用。研究科学工作流、实验设计、科学智能体和专业行业应用。


- **P290 · Spotlight · 评测与数据集** — [BEAKER: An Expert-Curated Benchmark for Embodied Brains in Self-Driving Chemical Laboratories](https://neurips.cc/virtual/2026/poster/139293)
  - 领域：AI for Science与专业应用 → 自动科学发现与行业应用。研究科学工作流、实验设计、科学智能体和专业行业应用。


- **P306 · Spotlight · 评测与数据集** — [OTel: Open Telco AI Datasets, Benchmarks, and Models](https://neurips.cc/virtual/2026/poster/139129)
  - 领域：AI for Science与专业应用 → 自动科学发现与行业应用。研究科学工作流、实验设计、科学智能体和专业行业应用。


### 生成模型与内容生成


#### 扩散、流匹配与生成理论（Oral 4／Spotlight 3）


- **P034 · Oral · 主赛道** — [Generative Modeling via Drifting](https://neurips.cc/virtual/2026/poster/154240)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。研究通用生成机制、采样界、流映射或生成路径几何。


- **P060 · Oral · 主赛道** — [Query Lower Bounds for Diffusion Sampling](https://neurips.cc/virtual/2026/poster/151581)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。属于生成采样复杂度理论，优先按生成研究对象归类。


- **P071 · Oral · 主赛道** — [Strong Stochastic Flow Maps](https://neurips.cc/virtual/2026/poster/149475)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。研究通用生成机制、采样界、流映射或生成路径几何。


- **P075 · Oral · 主赛道** — [Tessellations of Semi-Discrete Flow Matching](https://neurips.cc/virtual/2026/oral/153678)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。研究通用生成机制、采样界、流映射或生成路径几何。


- **P236 · Spotlight · 主赛道** — [Spherical Flows for Sampling Categorical Data](https://neurips.cc/virtual/2026/poster/148878)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。通用离散序列生成机制，兼具语言建模用途。


- **P265 · Spotlight · 主赛道** — [What kills $v$-prediction? A Patch-wise PCA Perspective on Pixel-Space Flow Matching](https://neurips.cc/virtual/2026/poster/154141)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。研究通用生成机制、采样界、流映射或生成路径几何。


- **P266 · Spotlight · 主赛道** — [What Makes a Good Path? Factoring Manifold Support and Path Geometry](https://neurips.cc/virtual/2026/poster/149855)
  - 领域：生成模型与内容生成 → 扩散、流匹配与生成理论。研究通用生成机制、采样界、流映射或生成路径几何。


#### 图像生成、编辑与复原（Oral 1／Spotlight 8）


- **P063 · Oral · 主赛道** — [Representation Fréchet Loss for Visual Generation](https://neurips.cc/virtual/2026/poster/154990)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P102 · Spotlight · 主赛道** — [Arena-T2I Hard: Benchmarking and Improving Faithfulness with Dependency-Aware Checklist Rewards](https://neurips.cc/virtual/2026/poster/151320)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P134 · Spotlight · 主赛道** — [Diff-CA: Separating Common and Salient Factors with Diffusion Models](https://neurips.cc/virtual/2026/poster/152753)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P161 · Spotlight · 主赛道** — [Hybrid Reinforcement Learning for One-step Degraded Infrared and Visible Image Fusion](https://neurips.cc/virtual/2026/poster/148710)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。红外与可见光图像融合，强化学习用于控制复原过程。


- **P168 · Spotlight · 主赛道** — [L2P: Unlocking Latent Potential for Pixel Generation](https://neurips.cc/virtual/2026/poster/153588)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P188 · Spotlight · 主赛道** — [Noise-Started One-Step Image Super-Resolution via LR-Conditioned SplitMeanFlow and GAN Refinement](https://neurips.cc/virtual/2026/poster/150670)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P249 · Spotlight · 主赛道** — [Toward Semantically-Consistent Tuning-Free Customization for Rectified Flow Transformers](https://neurips.cc/virtual/2026/poster/152751)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P275 · Spotlight · 主赛道** — [X2HDR: HDR Image Generation in a Perceptually Uniform Space](https://neurips.cc/virtual/2026/poster/148447)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


- **P301 · Spotlight · 评测与数据集** — [MegaStyle: Constructing Diverse and Scalable Style Dataset via Consistent Text-to-Image Style Mapping](https://neurips.cc/virtual/2026/poster/139382)
  - 领域：生成模型与内容生成 → 图像生成、编辑与复原。核心任务是图像生成、编辑、融合、超分辨率或高动态范围成像。


#### 视频与三维内容生成（Oral 1／Spotlight 3）


- **P085 · Oral · 主赛道** — [Trellis4D: Complex 4D Mesh Generation](https://neurips.cc/virtual/2026/oral/153900)
  - 领域：生成模型与内容生成 → 视频与三维内容生成。研究视频生成、三维网格或可控三维环境生成。


- **P113 · Spotlight · 主赛道** — [Breaking the Uniformity Trap: Scaling Video Diffusion Model via SplitMoE](https://neurips.cc/virtual/2026/poster/152515)
  - 领域：生成模型与内容生成 → 视频与三维内容生成。研究视频生成、三维网格或可控三维环境生成。


- **P229 · Spotlight · 主赛道** — [Seed-Your-Motion: Householder Orthogonal Noise for Motion-Controllable Video Diffusion Models](https://neurips.cc/virtual/2026/poster/150697)
  - 领域：生成模型与内容生成 → 视频与三维内容生成。研究视频生成、三维网格或可控三维环境生成。


- **P295 · Spotlight · 评测与数据集** — [Dream-Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes](https://neurips.cc/virtual/2026/poster/139806)
  - 领域：生成模型与内容生成 → 视频与三维内容生成。生成可交互三维世界的数据与模型，归入三维内容生成。


#### 生成模型后训练与奖励建模（Oral 1／Spotlight 6）


- **P054 · Oral · 主赛道** — [ParetoSlider: Diffusion Models Post-Training for Continuous Reward Control](https://neurips.cc/virtual/2026/poster/154172)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。研究生成模型的偏好优化、奖励、控制及多样性。


- **P148 · Spotlight · 主赛道** — [Flow Matching Reinforcement Learning via SDE Inference](https://neurips.cc/virtual/2026/poster/153016)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。优化对象是流匹配生成模型，强化学习是后训练方法。


- **P155 · Spotlight · 主赛道** — [GenRM-Flow: Generators are Process-aware Reward Models in Flow Matching](https://neurips.cc/virtual/2026/poster/151044)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。研究生成模型的偏好优化、奖励、控制及多样性。


- **P216 · Spotlight · 主赛道** — [Read It Back: Pretrained MLLMs Are Zero-shot Reward Models for Text-to-Image Generation](https://neurips.cc/virtual/2026/poster/155394)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。研究生成模型的偏好优化、奖励、控制及多样性。


- **P223 · Spotlight · 主赛道** — [Rethinking Visual Reasoning in Text-to-Image Reward Modeling](https://neurips.cc/virtual/2026/poster/153173)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。研究生成模型的偏好优化、奖励、控制及多样性。


- **P269 · Spotlight · 主赛道** — [When Policy Entropy Constraint Fails: Preserving Diversity in Flow-based RLHF via Perceptual Entropy](https://neurips.cc/virtual/2026/poster/155843)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。研究图像生成后训练的多样性，RLHF是方法。


- **P274 · Spotlight · 主赛道** — [WTF?! Simulation-Free Reinforcement Learning with Wasserstein-Tilted Flow Maps](https://neurips.cc/virtual/2026/poster/150454)
  - 领域：生成模型与内容生成 → 生成模型后训练与奖励建模。研究生成流的奖励优化，按生成模型后训练归类。


### 大语言模型与语言智能体


#### 语言模型预训练、架构与扩展规律（Oral 0／Spotlight 4）


- **P129 · Spotlight · 主赛道** — [Decomposing and Reshaping Scaling Laws through Token Learning Times](https://neurips.cc/virtual/2026/poster/152417)
  - 领域：大语言模型与语言智能体 → 语言模型预训练、架构与扩展规律。研究语言模型的训练目标、结构或规模规律。


- **P160 · Spotlight · 主赛道** — [How Much Is One Recurrence Worth? Iso-Depth Scaling Laws for Looped Language Models](https://neurips.cc/virtual/2026/poster/150418)
  - 领域：大语言模型与语言智能体 → 语言模型预训练、架构与扩展规律。研究语言模型的训练目标、结构或规模规律。


- **P183 · Spotlight · 主赛道** — [MoTo: Mixture of Tokenizers Towards Fair Multilingual Language Modeling](https://neurips.cc/virtual/2026/poster/151404)
  - 领域：大语言模型与语言智能体 → 语言模型预训练、架构与扩展规律。研究语言模型的训练目标、结构或规模规律。


- **P219 · Spotlight · 主赛道** — [Reinforced Fast Weights via Next-Sequence Prediction](https://neurips.cc/virtual/2026/poster/154908)
  - 领域：大语言模型与语言智能体 → 语言模型预训练、架构与扩展规律。研究语言模型的训练目标、结构或规模规律。


#### 推理与自我改进（Oral 2／Spotlight 3）


- **P025 · Oral · 主赛道** — [Escaping the Cognitive Well: Efficient Competition Math with Off-the-Shelf Models](https://neurips.cc/virtual/2026/poster/150429)
  - 领域：大语言模型与语言智能体 → 推理与自我改进。研究语言推理、数学解题与模型自我改进。


- **P050 · Oral · 主赛道** — [Nemotron-Cascade: Scaling Cascaded Reinforcement Learning for General-Purpose Reasoning Models](https://neurips.cc/virtual/2026/poster/155022)
  - 领域：大语言模型与语言智能体 → 推理与自我改进。研究语言推理、数学解题与模型自我改进。


- **P154 · Spotlight · 主赛道** — [G-Zero: Self-Play for Open-Ended Generation from Zero Data](https://neurips.cc/virtual/2026/poster/152249)
  - 领域：大语言模型与语言智能体 → 推理与自我改进。研究语言推理、数学解题与模型自我改进。


- **P163 · Spotlight · 主赛道** — [Imitation Dominates Reinforcement: Direct In-Context RL Is Closer to ICL Than RL](https://neurips.cc/virtual/2026/poster/151209)
  - 领域：大语言模型与语言智能体 → 推理与自我改进。研究语言推理、数学解题与模型自我改进。


- **P217 · Spotlight · 主赛道** — [Reasoning with Undecoded Tokens in Diffusion Language Models](https://neurips.cc/virtual/2026/poster/152594)
  - 领域：大语言模型与语言智能体 → 推理与自我改进。研究语言推理、数学解题与模型自我改进。


#### 智能体规划、工具使用与协作（Oral 3／Spotlight 3）


- **P002 · Oral · 主赛道** — [APS: Bias-Controlled Adaptive Prototype Simulation for Population-Scale LLM Agents](https://neurips.cc/virtual/2026/poster/149524)
  - 领域：大语言模型与语言智能体 → 智能体规划、工具使用与协作。研究语言智能体的执行、工具调用、协作或持续能力提升。


- **P027 · Oral · 主赛道** — [ExComm: Exploration-Stage Communication for Error-Resilient Agentic Test-Time Scaling](https://neurips.cc/virtual/2026/poster/154319)
  - 领域：大语言模型与语言智能体 → 智能体规划、工具使用与协作。研究语言智能体的执行、工具调用、协作或持续能力提升。


- **P066 · Oral · 主赛道** — [Self-Programmed Execution for Language-Model Agents](https://neurips.cc/virtual/2026/oral/155632)
  - 领域：大语言模型与语言智能体 → 智能体规划、工具使用与协作。研究语言智能体的执行、工具调用、协作或持续能力提升。


- **P167 · Spotlight · 主赛道** — [Knowing When to Ask: Segment-Level Credit Assignment for LLM Tool Use](https://neurips.cc/virtual/2026/poster/149224)
  - 领域：大语言模型与语言智能体 → 智能体规划、工具使用与协作。研究语言智能体的执行、工具调用、协作或持续能力提升。


- **P232 · Spotlight · 主赛道** — [SkillOpt: Executive Strategy for Self-Evolving Agent Skills](https://neurips.cc/virtual/2026/poster/151264)
  - 领域：大语言模型与语言智能体 → 智能体规划、工具使用与协作。研究语言智能体的执行、工具调用、协作或持续能力提升。


- **P327 · Spotlight · 立场论文** — [Sampling Is Not Curiosity: Why LLM Agents Should Investigate](https://neurips.cc/virtual/2026/poster/140072)
  - 领域：大语言模型与语言智能体 → 智能体规划、工具使用与协作。研究语言智能体的执行、工具调用、协作或持续能力提升。


#### 检索与搜索（Oral 0／Spotlight 1）


- **P108 · Spotlight · 主赛道** — [Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction](https://neurips.cc/virtual/2026/poster/155649)
  - 领域：大语言模型与语言智能体 → 检索与搜索。研究语言智能体的检索和搜索机制。


#### 扩散语言模型（Oral 0／Spotlight 2）


- **P123 · Spotlight · 主赛道** — [Continuous Latent Diffusion Language Model](https://neurips.cc/virtual/2026/poster/154716)
  - 领域：大语言模型与语言智能体 → 扩散语言模型。核心对象是文本扩散建模和并行生成。


- **P198 · Spotlight · 主赛道** — [Orthrus: Memory-Efficient Parallel Token Generation via Dual-View Diffusion](https://neurips.cc/virtual/2026/poster/150719)
  - 领域：大语言模型与语言智能体 → 扩散语言模型。核心对象是文本扩散建模和并行生成。


#### 语言能力与智能体任务评测（Oral 3／Spotlight 2）


- **P016 · Oral · 主赛道** — [Computer Use at the Edge of the Statistical Precipice](https://neurips.cc/virtual/2026/poster/151946)
  - 领域：大语言模型与语言智能体 → 语言能力与智能体任务评测。评测语言理解、事实性、智能体操作或方法发明能力。


- **P277 · Oral · 评测与数据集** — [ALTER: An Allen's Algebra-Based Evaluation Framework for Temporal Reasoning of LLMs](https://neurips.cc/virtual/2026/poster/139265)
  - 领域：大语言模型与语言智能体 → 语言能力与智能体任务评测。评测语言理解、事实性、智能体操作或方法发明能力。


- **P284 · Oral · 评测与数据集** — [MLS-Bench: A Holistic and Rigorous Assessment of AI Systems on Building Better AI](https://neurips.cc/virtual/2026/poster/139626)
  - 领域：大语言模型与语言智能体 → 语言能力与智能体任务评测。评测语言理解、事实性、智能体操作或方法发明能力。


- **P311 · Spotlight · 评测与数据集** — [SLAyiNG: A Diverse and Community-validated Dataset of Queer Slang](https://neurips.cc/virtual/2026/poster/138946)
  - 领域：大语言模型与语言智能体 → 语言能力与智能体任务评测。酷儿俚语数据集，兼具社会文化与社区代表性属性。


- **P314 · Spotlight · 评测与数据集** — [The FACTS Leaderboard: A Comprehensive Benchmark for Large Language Model Factuality](https://neurips.cc/virtual/2026/poster/139445)
  - 领域：大语言模型与语言智能体 → 语言能力与智能体任务评测。评测语言理解、事实性、智能体操作或方法发明能力。


### 计算机视觉与三维图形


#### 三维重建、几何估计与渲染（Oral 4／Spotlight 7）


- **P005 · Oral · 主赛道** — [Beyond Family Labels: A Taxonomic Ornstein-Uhlenbeck Prior for Avian 3D Shape Recovery](https://neurips.cc/virtual/2026/oral/151997)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P012 · Oral · 主赛道** — [Certifiably Optimal Robust Angular Synchronization](https://neurips.cc/virtual/2026/poster/153331)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。以旋转同步和几何估计为核心，优化算法是实现手段。


- **P022 · Oral · 主赛道** — [Déjà View: Looping Transformers for Multi-View 3D Reconstruction](https://neurips.cc/virtual/2026/oral/154304)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P065 · Oral · 主赛道** — [SAM 3D Animal: Promptable Animal 3D Reconstruction from Images in the Wild](https://neurips.cc/virtual/2026/oral/155675)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P091 · Spotlight · 主赛道** — [3R-Adapter: Retrieval, Rewiring, and Refinement for Efficient Adaptation of 3D Reconstruction Model](https://neurips.cc/virtual/2026/poster/155977)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P131 · Spotlight · 主赛道** — [Deformable 2D Gaussian Splatting](https://neurips.cc/virtual/2026/poster/153737)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P182 · Spotlight · 主赛道** — [MoSE3: Learning World-Space SE(3) at Every Pixel](https://neurips.cc/virtual/2026/poster/155847)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P201 · Spotlight · 主赛道** — [PGGT-Loc: Primitive-Grounded Geometry Transformer for Feed-Forward Camera Localization](https://neurips.cc/virtual/2026/poster/152738)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P204 · Spotlight · 主赛道** — [Point4D: Long-range 4D Motion Reconstruction](https://neurips.cc/virtual/2026/poster/155736)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


- **P253 · Spotlight · 主赛道** — [TTB: Test-time MLP Baking for Efficient Rendering of Decoder-only View Synthesis Models](https://neurips.cc/virtual/2026/poster/154935)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。以新视角渲染加速为目标，保留在三维渲染子领域。


- **P273 · Spotlight · 主赛道** — [World Tracing: Pixel-Aligned Geometry Beyond the Visible](https://neurips.cc/virtual/2026/poster/149437)
  - 领域：计算机视觉与三维图形 → 三维重建、几何估计与渲染。核心任务是三维或四维几何恢复、运动重建、配准和渲染。


#### 图像分割与视觉表征（Oral 2／Spotlight 4）


- **P053 · Oral · 主赛道** — [Non-Colliding Biometric Identities for Digital Entities: Geometry, Capacity, and Million-Scale Virtual Identity Provisioning](https://neurips.cc/virtual/2026/poster/153119)
  - 领域：计算机视觉与三维图形 → 图像分割与视觉表征。研究分割、视觉预训练、身份表征或点云表征评测。


- **P067 · Oral · 主赛道** — [Shaping Useful Noise: Energy Distributions Predict Visual Pretraining Quality](https://neurips.cc/virtual/2026/poster/153569)
  - 领域：计算机视觉与三维图形 → 图像分割与视觉表征。研究分割、视觉预训练、身份表征或点云表征评测。


- **P097 · Spotlight · 主赛道** — [AdapToPASS: Ambiguity-aware Adaptive Spherical Transformer for Panoramic Semantic Segmentation](https://neurips.cc/virtual/2026/poster/151962)
  - 领域：计算机视觉与三维图形 → 图像分割与视觉表征。研究分割、视觉预训练、身份表征或点云表征评测。


- **P192 · Spotlight · 主赛道** — [On the Relaxation of Conditional Independence Assumption for Image Segmentation](https://neurips.cc/virtual/2026/poster/154387)
  - 领域：计算机视觉与三维图形 → 图像分割与视觉表征。研究分割、视觉预训练、身份表征或点云表征评测。


- **P220 · Spotlight · 主赛道** — [Representation Rigidity in Face Embeddings: Orthogonal Identifiability and Backfill-Free Compatibility](https://neurips.cc/virtual/2026/poster/151431)
  - 领域：计算机视觉与三维图形 → 图像分割与视觉表征。研究分割、视觉预训练、身份表征或点云表征评测。


- **P292 · Spotlight · 评测与数据集** — [Beyond Downstream Scores: Controlled Diagnostics for Point-Cloud Self-Supervised Learning Evaluation](https://neurips.cc/virtual/2026/poster/139098)
  - 领域：计算机视觉与三维图形 → 图像分割与视觉表征。研究分割、视觉预训练、身份表征或点云表征评测。


#### 图像视频取证与伪造检测（Oral 3／Spotlight 2）


- **P010 · Oral · 主赛道** — [Can We Model the Artifacts Explicitly? Disentangle Artifacts via Pairwise Edit Relations for Image Manipulation Localization](https://neurips.cc/virtual/2026/oral/155639)
  - 领域：计算机视觉与三维图形 → 图像视频取证与伪造检测。目标是发现、定位或评价合成与篡改视觉内容。


- **P090 · Oral · 主赛道** — [Video Forensic Self-Descriptions: Leveraging Temporally Distributed Forensic Microstructures for Zero-Shot Detection of AI-Generated Videos](https://neurips.cc/virtual/2026/poster/149484)
  - 领域：计算机视觉与三维图形 → 图像视频取证与伪造检测。目标是发现、定位或评价合成与篡改视觉内容。


- **P175 · Spotlight · 主赛道** — [MAMQ-Net: A Robust Framework Leveraging Multi-level Tamper-aware Queries and Complementary Representations of Tampering Features for Progressive Image Forgery Localization](https://neurips.cc/virtual/2026/poster/152510)
  - 领域：计算机视觉与三维图形 → 图像视频取证与伪造检测。目标是发现、定位或评价合成与篡改视觉内容。


- **P231 · Spotlight · 主赛道** — [SIGMA: Semantic-Difference Instruction-Grounding Mask Annotator for Text-Driven Image Manipulation Localization](https://neurips.cc/virtual/2026/poster/151764)
  - 领域：计算机视觉与三维图形 → 图像视频取证与伪造检测。目标是发现、定位或评价合成与篡改视觉内容。


- **P288 · Oral · 评测与数据集** — [SALART-VQA: Diagnosing Whether VLMs Understand Salient Artifacts in Generated Images](https://neurips.cc/virtual/2026/poster/139139)
  - 领域：计算机视觉与三维图形 → 图像视频取证与伪造检测。目标是发现、定位或评价合成与篡改视觉内容。


### 通用表征与结构化学习


#### 图学习与图结构建模（Oral 1／Spotlight 7）


- **P036 · Oral · 主赛道** — [Graph Cascades: Contagion-Based Mesoscopic Rewiring for Structure-Aware Graph Machine Learning](https://neurips.cc/virtual/2026/poster/155097)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


- **P111 · Spotlight · 主赛道** — [Boosting Graph Contrastive Learning via Manifold-Guided Representation Disentanglement](https://neurips.cc/virtual/2026/poster/151362)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


- **P117 · Spotlight · 主赛道** — [CLEAR: Complementary Tripartite Play with Bayesian Calibration for Semi-Supervised Edge Classification](https://neurips.cc/virtual/2026/poster/153511)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


- **P125 · Spotlight · 主赛道** — [Cross-order Consensus Graph Matching](https://neurips.cc/virtual/2026/poster/153663)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


- **P179 · Spotlight · 主赛道** — [Mitigating Over-squashing without Rewiring: A Sheaf Effective Resistance Perspective](https://neurips.cc/virtual/2026/poster/150297)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


- **P214 · Spotlight · 主赛道** — [RAMA: Resistance-Aware Multi-Hop Aggregation Graph Representation Learning for Robust Ethereum Account Classification](https://neurips.cc/virtual/2026/poster/154374)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。以图表示学习为核心，并在以太坊账户分类中验证。


- **P235 · Spotlight · 主赛道** — [Spectral Reversal: Counteracting Singular Value Bias for Graph Prompting](https://neurips.cc/virtual/2026/poster/152228)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


- **P264 · Spotlight · 主赛道** — [Weisfeiler-Leman Is Incomplete on Simple Spectrum Graphs, so Canonicalize Them](https://neurips.cc/virtual/2026/poster/150655)
  - 领域：通用表征与结构化学习 → 图学习与图结构建模。研究图表示、消息传递、图匹配和图神经网络表达能力。


#### 迁移、少样本与模型融合（Oral 1／Spotlight 4）


- **P049 · Oral · 主赛道** — [Mitigating Confidence Miscalibration in Open-World Semi-Supervised Learning](https://neurips.cc/virtual/2026/poster/153397)
  - 领域：通用表征与结构化学习 → 迁移、少样本与模型融合。研究半监督、少样本、跨模型迁移和分布外泛化。


- **P128 · Spotlight · 主赛道** — [DDGE: Disentangled Dirichlet Geodesic Evaluation for Robust Few-Shot Learning](https://neurips.cc/virtual/2026/poster/151036)
  - 领域：通用表征与结构化学习 → 迁移、少样本与模型融合。研究半监督、少样本、跨模型迁移和分布外泛化。


- **P143 · Spotlight · 主赛道** — [FeatCal: Feature Calibration for Post-Merging Models](https://neurips.cc/virtual/2026/poster/152364)
  - 领域：通用表征与结构化学习 → 迁移、少样本与模型融合。研究半监督、少样本、跨模型迁移和分布外泛化。


- **P224 · Spotlight · 主赛道** — [Robust Satisficing Ensemble: Scalable Model Aggregation Under Distribution Shifts](https://neurips.cc/virtual/2026/poster/149478)
  - 领域：通用表征与结构化学习 → 迁移、少样本与模型融合。研究半监督、少样本、跨模型迁移和分布外泛化。


- **P245 · Spotlight · 主赛道** — [The Master Key Hypothesis: Unlocking Cross-Model Capability Transfer via Linear Subspace Alignment](https://neurips.cc/virtual/2026/poster/152307)
  - 领域：通用表征与结构化学习 → 迁移、少样本与模型融合。研究跨模型能力迁移，兼具激活干预和语言模型推理属性。


#### 表征几何、聚类与神经符号（Oral 2／Spotlight 4）


- **P035 · Oral · 主赛道** — [Geometry-Aware Similarity Metrics for Neural Representations on Riemannian and Statistical Manifolds](https://neurips.cc/virtual/2026/oral/150841)
  - 领域：通用表征与结构化学习 → 表征几何、聚类与神经符号。研究通用表征几何、聚类、规则约束或模式发现。


- **P062 · Oral · 主赛道** — [Releasing Anchors from Cross-View Correspondence: Probabilistic Multi-View Anchor Graph Clustering](https://neurips.cc/virtual/2026/oral/154594)
  - 领域：通用表征与结构化学习 → 表征几何、聚类与神经符号。研究通用表征几何、聚类、规则约束或模式发现。


- **P115 · Spotlight · 主赛道** — [Casper: A Projection-Based Neurosymbolic Layer for Scalable & Guaranteed Constraint Satisfaction](https://neurips.cc/virtual/2026/poster/149782)
  - 领域：通用表征与结构化学习 → 表征几何、聚类与神经符号。研究通用表征几何、聚类、规则约束或模式发现。


- **P197 · Spotlight · 主赛道** — [Optimal Subgroup Discovery at Every Support Threshold](https://neurips.cc/virtual/2026/poster/149258)
  - 领域：通用表征与结构化学习 → 表征几何、聚类与神经符号。研究通用表征几何、聚类、规则约束或模式发现。


- **P203 · Spotlight · 主赛道** — [Point-to-Manifold Geometry: Flexibly Overcoming the Curse of Dimensionality in Neural Computational Units](https://neurips.cc/virtual/2026/poster/152082)
  - 领域：通用表征与结构化学习 → 表征几何、聚类与神经符号。研究通用表征几何、聚类、规则约束或模式发现。


- **P259 · Spotlight · 主赛道** — [Uncertainty-Aware Probabilistic Constrained Clustering from Entangled Pairwise Supervision](https://neurips.cc/virtual/2026/poster/154307)
  - 领域：通用表征与结构化学习 → 表征几何、聚类与神经符号。研究通用表征几何、聚类、规则约束或模式发现。


#### 序列与新型神经架构（Oral 1／Spotlight 2）


- **P032 · Oral · 主赛道** — [Fractional State Space Transition for Long Sequence Modeling](https://neurips.cc/virtual/2026/poster/150427)
  - 领域：通用表征与结构化学习 → 序列与新型神经架构。研究状态空间、连续时间网络和振荡神经架构。


- **P211 · Spotlight · 主赛道** — [Prospective Coding Improves Learning in Deep Continuous-Time Recurrent Networks](https://neurips.cc/virtual/2026/poster/153925)
  - 领域：通用表征与结构化学习 → 序列与新型神经架构。研究状态空间、连续时间网络和振荡神经架构。


- **P271 · Spotlight · 主赛道** — [Winfree Oscillatory Neural Network](https://neurips.cc/virtual/2026/poster/150411)
  - 领域：通用表征与结构化学习 → 序列与新型神经架构。研究状态空间、连续时间网络和振荡神经架构。


### 多模态学习与推理


#### 跨模态表征、对齐与融合（Oral 1／Spotlight 8）


- **P006 · Oral · 主赛道** — [Binding Multiple Modalities via Multimodal Wasserstein Barycenter](https://neurips.cc/virtual/2026/poster/149098)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P132 · Spotlight · 主赛道** — [DeltaPrompts: Escaping the Zero-Delta Trap in Multimodal Distillation](https://neurips.cc/virtual/2026/poster/153494)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P200 · Spotlight · 主赛道** — [Permute-then-Adapt: Weak-to-Strong Contrastive Image--Text Adaptation](https://neurips.cc/virtual/2026/poster/150368)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P227 · Spotlight · 主赛道** — [Scaling Laws for Multimodal Data Mixtures](https://neurips.cc/virtual/2026/poster/148475)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。核心是原生多模态联合训练的数据配比与扩展规律。


- **P228 · Spotlight · 主赛道** — [SceneBind: Binding What and Where Across Vision, Audio, and Language](https://neurips.cc/virtual/2026/poster/153396)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P241 · Spotlight · 主赛道** — [Text as Partial Constraint: Core–Residual Alignment for Robust Vision–Language Learning](https://neurips.cc/virtual/2026/poster/148465)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P254 · Spotlight · 主赛道** — [Tune-Up Open-Weight CLIP: Optimization Framework for Self-Supervised Fine-tuning of CLIP](https://neurips.cc/virtual/2026/poster/154261)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P258 · Spotlight · 主赛道** — [UGGRH: Unsupervised Generative Completion and Graph-attention Refinement for Incomplete Cross-modal Hashing](https://neurips.cc/virtual/2026/poster/154876)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


- **P303 · Spotlight · 评测与数据集** — [MulTaBench: Benchmarking Multimodal Tabular Learning with Text and Image](https://neurips.cc/virtual/2026/poster/138893)
  - 领域：多模态学习与推理 → 跨模态表征、对齐与融合。研究不同模态间的表征对齐、融合或联合训练。


#### 视觉语言推理（Oral 3／Spotlight 2）


- **P014 · Oral · 主赛道** — [Clarification as Supervision: Reinforcement Learning for Vision-Language Interfaces](https://neurips.cc/virtual/2026/oral/152088)
  - 领域：多模态学习与推理 → 视觉语言推理。虽然采用强化学习，核心问题是视觉到语言推理的接口。


- **P038 · Oral · 主赛道** — [LatentUM: Unleashing the Potential of Interleaved Cross-Modal Reasoning via a Latent-Space Unified Model](https://neurips.cc/virtual/2026/poster/151424)
  - 领域：多模态学习与推理 → 视觉语言推理。研究视觉信息与语言推理的交互和推理能力评测。


- **P082 · Oral · 主赛道** — [They Can See It but not Say It: Iterative Self Knowledge Re-expression in Visual Reasoning Relative Pose Identification](https://neurips.cc/virtual/2026/poster/151372)
  - 领域：多模态学习与推理 → 视觉语言推理。研究视觉信息与语言推理的交互和推理能力评测。


- **P248 · Spotlight · 主赛道** — [Thinking with Visual Primitives](https://neurips.cc/virtual/2026/poster/154630)
  - 领域：多模态学习与推理 → 视觉语言推理。研究视觉信息与语言推理的交互和推理能力评测。


- **P291 · Spotlight · 评测与数据集** — [Before Words, Beyond Speech: Evaluating Nonverbal Social Reasoning in Early Childhood](https://neurips.cc/virtual/2026/poster/139741)
  - 领域：多模态学习与推理 → 视觉语言推理。研究视觉信息与语言推理的交互和推理能力评测。


#### 三维理解与空间语言定位（Oral 0／Spotlight 6）


- **P119 · Spotlight · 主赛道** — [ClusterSplat: Semantic Cluster Selection for 3D Visual Grounding in Gaussian Splatting](https://neurips.cc/virtual/2026/poster/152567)
  - 领域：多模态学习与推理 → 三维理解与空间语言定位。研究结合语言的三维场景理解、定位和空间表征。


- **P181 · Spotlight · 主赛道** — [MolmoMotion: Forecasting Point Trajectories in 3D with Language Instruction](https://neurips.cc/virtual/2026/poster/149894)
  - 领域：多模态学习与推理 → 三维理解与空间语言定位。研究结合语言的三维场景理解、定位和空间表征。


- **P194 · Spotlight · 主赛道** — [OneCanvas: 3D Scene Understanding via Panoramic Reprojection](https://neurips.cc/virtual/2026/poster/148266)
  - 领域：多模态学习与推理 → 三维理解与空间语言定位。研究结合语言的三维场景理解、定位和空间表征。


- **P199 · Spotlight · 主赛道** — [P$^3$-VLM: A Point-based Alternative for Grounded 3D Vision-Language Models](https://neurips.cc/virtual/2026/poster/151816)
  - 领域：多模态学习与推理 → 三维理解与空间语言定位。研究结合语言的三维场景理解、定位和空间表征。


- **P260 · Spotlight · 主赛道** — [Uncovering and Shaping the Latent Representation of 3D Scene Topology in Vision-Language Models](https://neurips.cc/virtual/2026/poster/148612)
  - 领域：多模态学习与推理 → 三维理解与空间语言定位。研究结合语言的三维场景理解、定位和空间表征。


- **P262 · Spotlight · 主赛道** — [VLSplat: Vision-Language Guided Object-Centric 3D Gaussian Splatting via Scene Graph](https://neurips.cc/virtual/2026/poster/148647)
  - 领域：多模态学习与推理 → 三维理解与空间语言定位。研究结合语言的三维场景理解、定位和空间表征。


### 强化学习与序贯决策


#### 探索、内在动机与技能学习（Oral 4／Spotlight 0）


- **P009 · Oral · 主赛道** — [Can In-Context Learning Support Intrinsic Curiosity?](https://neurips.cc/virtual/2026/poster/151481)
  - 领域：强化学习与序贯决策 → 探索、内在动机与技能学习。研究探索奖励、内在动机和无监督技能学习。


- **P013 · Oral · 主赛道** — [CIG: Exploration via Conditional Information Gain](https://neurips.cc/virtual/2026/poster/149190)
  - 领域：强化学习与序贯决策 → 探索、内在动机与技能学习。研究探索奖励、内在动机和无监督技能学习。


- **P023 · Oral · 主赛道** — [Emergence of Physical Intelligence via Controllable Information Production](https://neurips.cc/virtual/2026/poster/152582)
  - 领域：强化学习与序贯决策 → 探索、内在动机与技能学习。研究探索奖励、内在动机和无监督技能学习。


- **P088 · Oral · 主赛道** — [Unifying Goal-Conditioned RL and Unsupervised Skill Learning via Control-Maximization](https://neurips.cc/virtual/2026/oral/153301)
  - 领域：强化学习与序贯决策 → 探索、内在动机与技能学习。研究探索奖励、内在动机和无监督技能学习。


#### 策略优化与强化学习基础（Oral 0／Spotlight 5）


- **P096 · Spotlight · 主赛道** — [Adaptive Stepsizes for Eligibility Traces in Deep Reinforcement Learning](https://neurips.cc/virtual/2026/poster/153394)
  - 领域：强化学习与序贯决策 → 策略优化与强化学习基础。研究策略优化、学习步长、经验回放和长期奖励准则。


- **P173 · Spotlight · 主赛道** — [Local Guidance, Global Impact: Gaussian-Reshaped Trust Region Unlocks Behavior Transitions](https://neurips.cc/virtual/2026/poster/155658)
  - 领域：强化学习与序贯决策 → 策略优化与强化学习基础。研究策略优化、学习步长、经验回放和长期奖励准则。


- **P250 · Spotlight · 主赛道** — [Towards Convergence of PPO: An Approximate Descent Approach](https://neurips.cc/virtual/2026/poster/155526)
  - 领域：强化学习与序贯决策 → 策略优化与强化学习基础。研究策略优化、学习步长、经验回放和长期奖励准则。


- **P268 · Spotlight · 主赛道** — [When Does Non-Uniform Replay Matter in Reinforcement Learning?](https://neurips.cc/virtual/2026/poster/153281)
  - 领域：强化学习与序贯决策 → 策略优化与强化学习基础。研究策略优化、学习步长、经验回放和长期奖励准则。


- **P326 · Spotlight · 立场论文** — [Reinforcement Learning Agents Are Swimmers](https://neurips.cc/virtual/2026/poster/140046)
  - 领域：强化学习与序贯决策 → 策略优化与强化学习基础。主张重视平均奖励与稳态表现，标题的“游泳者”是类比。


#### 离线、模仿与安全鲁棒强化学习（Oral 0／Spotlight 5）


- **P105 · Spotlight · 主赛道** — [Behavior Cloning is Not All You Need: The Optimality of On-Policy Distillation for Noisy Expert Feedback](https://neurips.cc/virtual/2026/poster/150673)
  - 领域：强化学习与序贯决策 → 离线、模仿与安全鲁棒强化学习。研究离线迁移、模仿学习、鲁棒MDP和安全保证。


- **P135 · Spotlight · 主赛道** — [Distributionally Robust Domain Randomization with Learned Risk-Sensitive Dynamics Samplers](https://neurips.cc/virtual/2026/poster/150440)
  - 领域：强化学习与序贯决策 → 离线、模仿与安全鲁棒强化学习。研究离线迁移、模仿学习、鲁棒MDP和安全保证。


- **P174 · Spotlight · 主赛道** — [Localized Dynamics-Aware Domain Adaption for Off-Dynamics Offline Reinforcement Learning](https://neurips.cc/virtual/2026/poster/151978)
  - 领域：强化学习与序贯决策 → 离线、模仿与安全鲁棒强化学习。研究离线迁移、模仿学习、鲁棒MDP和安全保证。


- **P190 · Spotlight · 主赛道** — [On the Complexity of Discounted Robust MDPs with $L_p$ Uncertainty Sets](https://neurips.cc/virtual/2026/poster/149658)
  - 领域：强化学习与序贯决策 → 离线、模仿与安全鲁棒强化学习。研究离线迁移、模仿学习、鲁棒MDP和安全保证。


- **P212 · Spotlight · 主赛道** — [Provably Safe, Yet Performant Reinforcement Learning](https://neurips.cc/virtual/2026/poster/152935)
  - 领域：强化学习与序贯决策 → 离线、模仿与安全鲁棒强化学习。研究离线迁移、模仿学习、鲁棒MDP和安全保证。


#### 多智能体强化学习（Oral 2／Spotlight 1）


- **P068 · Oral · 主赛道** — [SMART: Scalable Multi-Agent Role-conditioned  Teaming via LLM-free Tree Search](https://neurips.cc/virtual/2026/poster/149874)
  - 领域：强化学习与序贯决策 → 多智能体强化学习。研究多智能体协作、角色分工和对未见伙伴的泛化。


- **P084 · Oral · 主赛道** — [Training Generalizable Collaborative Agents via Strategic Risk Aversion](https://neurips.cc/virtual/2026/oral/151686)
  - 领域：强化学习与序贯决策 → 多智能体强化学习。研究对未见合作伙伴的泛化，按多智能体学习归类。


- **P098 · Spotlight · 主赛道** — [Addressing Exogenous Variability in Cooperative Multi-Agent Reinforcement Learning](https://neurips.cc/virtual/2026/poster/149019)
  - 领域：强化学习与序贯决策 → 多智能体强化学习。研究多智能体协作、角色分工和对未见伙伴的泛化。


#### 上下文赌博机与贝叶斯优化（Oral 0／Spotlight 2）


- **P141 · Spotlight · 主赛道** — [Fast Rates for Offline Contextual Bandits with Forward-KL Regularization under Single-Policy Concentrability](https://neurips.cc/virtual/2026/poster/149055)
  - 领域：强化学习与序贯决策 → 上下文赌博机与贝叶斯优化。研究赌博机遗憾界与顺序试验设计。


- **P165 · Spotlight · 主赛道** — [Improved Regret Analysis For Parallel Gaussian Process Bandit Optimization](https://neurips.cc/virtual/2026/poster/153555)
  - 领域：强化学习与序贯决策 → 上下文赌博机与贝叶斯优化。研究赌博机遗憾界与顺序试验设计。


### 神经科学、认知与脑机接口


#### 计算神经科学与脑动力学（Oral 5／Spotlight 1）


- **P003 · Oral · 主赛道** — [BEAST3D: animal behavioral analysis and neural encoding from multi-view video via Gaussian splatting](https://neurips.cc/virtual/2026/poster/149762)
  - 领域：神经科学、认知与脑机接口 → 计算神经科学与脑动力学。研究脑网络、神经群体动力学及神经计算机制。


- **P007 · Oral · 主赛道** — [BrainWorld: A Structural-Prior-Conditioned Generative Model for Whole-Brain 4D fMRI Dynamics](https://neurips.cc/virtual/2026/poster/155412)
  - 领域：神经科学、认知与脑机接口 → 计算神经科学与脑动力学。研究脑网络、神经群体动力学及神经计算机制。


- **P040 · Oral · 主赛道** — [Learning interpretable Schur forms of recurrent weight matrices](https://neurips.cc/virtual/2026/poster/155071)
  - 领域：神经科学、认知与脑机接口 → 计算神经科学与脑动力学。研究脑网络、神经群体动力学及神经计算机制。


- **P041 · Oral · 主赛道** — [Learning Reveals Invisible Structure in Low-Rank RNNs](https://neurips.cc/virtual/2026/poster/152289)
  - 领域：神经科学、认知与脑机接口 → 计算神经科学与脑动力学。研究脑网络、神经群体动力学及神经计算机制。


- **P052 · Oral · 主赛道** — [Neural population tuning statistics as priors for multitask generalization](https://neurips.cc/virtual/2026/oral/153195)
  - 领域：神经科学、认知与脑机接口 → 计算神经科学与脑动力学。研究脑网络、神经群体动力学及神经计算机制。


- **P202 · Spotlight · 主赛道** — [Planning as Dynamics Relaxation: Hippocampal Recurrent Network Realizes Optimal Goal-Directed Navigation](https://neurips.cc/virtual/2026/poster/150211)
  - 领域：神经科学、认知与脑机接口 → 计算神经科学与脑动力学。研究脑网络、神经群体动力学及神经计算机制。


#### 脑信号编码、解码与脑机接口（Oral 3／Spotlight 2）


- **P042 · Oral · 主赛道** — [Learning Sparse Semantic-Cortical Atoms for Multisubject Naturalistic fMRI Encoding](https://neurips.cc/virtual/2026/poster/151712)
  - 领域：神经科学、认知与脑机接口 → 脑信号编码、解码与脑机接口。研究fMRI、EEG、ECoG等神经信号的编码与解码。


- **P048 · Oral · 主赛道** — [MindAlign: Bridging EEG, Vision, and Language for Zero-Shot Visual Decoding](https://neurips.cc/virtual/2026/poster/149255)
  - 领域：神经科学、认知与脑机接口 → 脑信号编码、解码与脑机接口。研究fMRI、EEG、ECoG等神经信号的编码与解码。


- **P089 · Oral · 主赛道** — [Unlocking Volition: Proactive Intention Decoding via Interpretable Graph Learning of Multi-Region ECoG](https://neurips.cc/virtual/2026/poster/153824)
  - 领域：神经科学、认知与脑机接口 → 脑信号编码、解码与脑机接口。研究fMRI、EEG、ECoG等神经信号的编码与解码。


- **P145 · Spotlight · 主赛道** — [FETTUCCINE: Fast and efficient brain-to-text decoding on mobile devices](https://neurips.cc/virtual/2026/poster/150728)
  - 领域：神经科学、认知与脑机接口 → 脑信号编码、解码与脑机接口。研究fMRI、EEG、ECoG等神经信号的编码与解码。


- **P186 · Spotlight · 主赛道** — [Neural‑Visual Decoding via Cognitive‑guided Adaptive Blurring and Information‑Constrained Alignment](https://neurips.cc/virtual/2026/poster/154463)
  - 领域：神经科学、认知与脑机接口 → 脑信号编码、解码与脑机接口。研究fMRI、EEG、ECoG等神经信号的编码与解码。


#### 认知、行为与神经启发计算（Oral 1／Spotlight 5）


- **P004 · Oral · 主赛道** — [Behavioral Geometric Supervision Aligns Video Foundation Models with Human Social Perception](https://neurips.cc/virtual/2026/poster/149277)
  - 领域：神经科学、认知与脑机接口 → 认知、行为与神经启发计算。研究人或动物的知觉、行为、决策以及神经启发模型。


- **P147 · Spotlight · 主赛道** — [FiTS: Interpretable Spiking Neurons via Frequency Selectivity and Temporal Shaping](https://neurips.cc/virtual/2026/poster/148427)
  - 领域：神经科学、认知与脑机接口 → 认知、行为与神经启发计算。研究人或动物的知觉、行为、决策以及神经启发模型。


- **P158 · Spotlight · 主赛道** — [GramStatTexNet: Efficient, Interpretable, and Neuro-Inspired Texture Analysis-by-Synthesis](https://neurips.cc/virtual/2026/poster/155778)
  - 领域：神经科学、认知与脑机接口 → 认知、行为与神经启发计算。研究人或动物的知觉、行为、决策以及神经启发模型。


- **P178 · Spotlight · 主赛道** — [MICE: Multi-animal Interaction Context Encoder — A Hierarchical Foundation Model for Mouse Behavior](https://neurips.cc/virtual/2026/poster/150591)
  - 领域：神经科学、认知与脑机接口 → 认知、行为与神经启发计算。研究人或动物的知觉、行为、决策以及神经启发模型。


- **P180 · Spotlight · 主赛道** — [Modeling the Vividness of Imagined Natural Scenes Reveals a Model-Common Image-Level Component in Vision Models](https://neurips.cc/virtual/2026/poster/151888)
  - 领域：神经科学、认知与脑机接口 → 认知、行为与神经启发计算。研究人或动物的知觉、行为、决策以及神经启发模型。


- **P246 · Spotlight · 主赛道** — [The Neural Race Model](https://neurips.cc/virtual/2026/poster/152312)
  - 领域：神经科学、认知与脑机接口 → 认知、行为与神经启发计算。研究人或动物的知觉、行为、决策以及神经启发模型。


### 高效机器学习与计算系统


#### 模型压缩与高效适配（Oral 2／Spotlight 5）


- **P058 · Oral · 主赛道** — [Pruning and Distilling Mixture-of-Experts into Dense Language Models](https://neurips.cc/virtual/2026/poster/150472)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。研究蒸馏、量化、稀疏训练和参数或视觉token压缩。


- **P059 · Oral · 主赛道** — [Quantized Reasoning Models Think They Need to Think Longer, but They Do Not](https://neurips.cc/virtual/2026/poster/151668)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。研究蒸馏、量化、稀疏训练和参数或视觉token压缩。


- **P104 · Spotlight · 主赛道** — [Basis-Mediated Bilinear Attention: A New Method for Greatly Reducing Query--Key Pathway Parameters](https://neurips.cc/virtual/2026/poster/154941)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。研究蒸馏、量化、稀疏训练和参数或视觉token压缩。


- **P107 · Spotlight · 主赛道** — [Beyond Selection: Token Parameterization for Extreme Visual Token Compression](https://neurips.cc/virtual/2026/poster/151663)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。核心贡献是极端视觉token压缩，按效率问题归类。


- **P112 · Spotlight · 主赛道** — [Breaking Information Islands in Sparse Tuning via Small-World Connectivity](https://neurips.cc/virtual/2026/poster/155451)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。研究蒸馏、量化、稀疏训练和参数或视觉token压缩。


- **P122 · Spotlight · 主赛道** — [Complexity-Aware LoRA Aggregation for Modality-Heterogeneous Federated Person Re-identification](https://neurips.cc/virtual/2026/poster/151019)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。研究蒸馏、量化、稀疏训练和参数或视觉token压缩。


- **P159 · Spotlight · 主赛道** — [Grid Games: The Power Of Multiple Grids for Quantizing Large Language Models](https://neurips.cc/virtual/2026/poster/153337)
  - 领域：高效机器学习与计算系统 → 模型压缩与高效适配。研究蒸馏、量化、稀疏训练和参数或视觉token压缩。


#### 推理加速与资源调度（Oral 0／Spotlight 4）


- **P121 · Spotlight · 主赛道** — [CompactAttention: Accelerating Chunked Prefill with Block-Union KV Selection](https://neurips.cc/virtual/2026/poster/153990)
  - 领域：高效机器学习与计算系统 → 推理加速与资源调度。研究KV选择、推测解码及智能体端云资源调度。


- **P127 · Spotlight · 主赛道** — [D-PACE: Dynamic Position-Aware Cross-Entropy for Parallel Speculative Drafting](https://neurips.cc/virtual/2026/poster/152718)
  - 领域：高效机器学习与计算系统 → 推理加速与资源调度。研究KV选择、推测解码及智能体端云资源调度。


- **P215 · Spotlight · 主赛道** — [RAOP: Step-Level Resource Orchestration for LLM Agents across Edge and Cloud](https://neurips.cc/virtual/2026/poster/152497)
  - 领域：高效机器学习与计算系统 → 推理加速与资源调度。研究KV选择、推测解码及智能体端云资源调度。


- **P251 · Spotlight · 主赛道** — [TreeGraft: Adaptive Multi-Drafter Grafting for Tree-Based Speculative Decoding](https://neurips.cc/virtual/2026/poster/151038)
  - 领域：高效机器学习与计算系统 → 推理加速与资源调度。研究KV选择、推测解码及智能体端云资源调度。


#### 训练系统与生成架构效率（Oral 0／Spotlight 2）


- **P187 · Spotlight · 主赛道** — [nnTrace: Detecting and Localizing Silent Bugs in Distributed Training](https://neurips.cc/virtual/2026/poster/154832)
  - 领域：高效机器学习与计算系统 → 训练系统与生成架构效率。研究分布式训练可靠性和生成模型计算效率。


- **P257 · Spotlight · 主赛道** — [UDT: Reconciling U-Nets and Diffusion Transformers with Data-Adaptive Token Reduction](https://neurips.cc/virtual/2026/poster/155440)
  - 领域：高效机器学习与计算系统 → 训练系统与生成架构效率。研究分布式训练可靠性和生成模型计算效率。


### 机器人与具身智能


#### 导航、建图与运动控制（Oral 2／Spotlight 2）


- **P037 · Oral · 主赛道** — [Language-Conditioned World Modeling for Visual Navigation](https://neurips.cc/virtual/2026/poster/154464)
  - 领域：机器人与具身智能 → 导航、建图与运动控制。研究机器人物理环境中的导航、主动建图和控制。


- **P057 · Oral · 主赛道** — [Proactive Instance Navigation with Comparative Judgment for Ambiguous User Queries](https://neurips.cc/virtual/2026/poster/153423)
  - 领域：机器人与具身智能 → 导航、建图与运动控制。研究机器人物理环境中的导航、主动建图和控制。


- **P099 · Spotlight · 主赛道** — [All Roads Lead to Rome: Flow-driven Multi-Anchor Exploration for Open-Environment Active 3D Mapping](https://neurips.cc/virtual/2026/poster/151339)
  - 领域：机器人与具身智能 → 导航、建图与运动控制。研究机器人物理环境中的导航、主动建图和控制。


- **P270 · Spotlight · 主赛道** — [Whole-Body Compliant Control via Learned Force-Regulation Modules](https://neurips.cc/virtual/2026/poster/154032)
  - 领域：机器人与具身智能 → 导航、建图与运动控制。研究机器人物理环境中的导航、主动建图和控制。


#### 世界模型与物理场景建模（Oral 1／Spotlight 4）


- **P073 · Oral · 主赛道** — [SyncWorld: Visual Calibration Enables World Models as Zero-Shot Simulators](https://neurips.cc/virtual/2026/poster/149981)
  - 领域：机器人与具身智能 → 世界模型与物理场景建模。研究具身仿真、视频世界模型、物理动态和世界记忆。


- **P234 · Spotlight · 主赛道** — [Solaris: Building a Multiplayer Video World Model in Minecraft](https://neurips.cc/virtual/2026/poster/148491)
  - 领域：机器人与具身智能 → 世界模型与物理场景建模。研究具身仿真、视频世界模型、物理动态和世界记忆。


- **P243 · Spotlight · 主赛道** — [The Invisible Hand of Physics: When Video Diffusion Models Know More Than They Show](https://neurips.cc/virtual/2026/poster/149891)
  - 领域：机器人与具身智能 → 世界模型与物理场景建模。研究视频模型中的物理表征，兼具可解释性与视频生成属性。


- **P272 · Spotlight · 主赛道** — [World Motion Models: Flexible Sequence Modeling of SE(3) Trajectories](https://neurips.cc/virtual/2026/poster/149768)
  - 领域：机器人与具身智能 → 世界模型与物理场景建模。研究具身仿真、视频世界模型、物理动态和世界记忆。


- **P293 · Spotlight · 评测与数据集** — [Can 4D Foundation Models Remember?](https://neurips.cc/virtual/2026/poster/139573)
  - 领域：机器人与具身智能 → 世界模型与物理场景建模。研究具身仿真、视频世界模型、物理动态和世界记忆。


#### 具身系统、数据与触觉评测（Oral 2／Spotlight 2）


- **P064 · Oral · 主赛道** — [Resilience Matters for Embodied Agents System: New Metrics, Systematic Evaluation, and Optimization](https://neurips.cc/virtual/2026/poster/148940)
  - 领域：机器人与具身智能 → 具身系统、数据与触觉评测。研究具身系统可靠性、操作数据及主动触觉或感觉运动评测。


- **P282 · Oral · 评测与数据集** — [HABIT: Human-Aware Behavior and Interaction Training Dataset for Robot Manipulation](https://neurips.cc/virtual/2026/poster/139828)
  - 领域：机器人与具身智能 → 具身系统、数据与触觉评测。研究具身系统可靠性、操作数据及主动触觉或感觉运动评测。


- **P308 · Spotlight · 评测与数据集** — [PULSE: A Synchronized Five-Modality Dataset for Sensorimotor Coordination in Long-Horizon Daily Activities](https://neurips.cc/virtual/2026/poster/139681)
  - 领域：机器人与具身智能 → 具身系统、数据与触觉评测。多传感器感觉运动数据，兼具多模态活动理解属性。


- **P313 · Spotlight · 评测与数据集** — [Tactile MNIST: Benchmarking Active Tactile Perception](https://neurips.cc/virtual/2026/poster/139796)
  - 领域：机器人与具身智能 → 具身系统、数据与触觉评测。研究具身系统可靠性、操作数据及主动触觉或感觉运动评测。


### 统计推断、概率与因果


#### 不确定性、校准与统计推断（Oral 3／Spotlight 5）


- **P026 · Oral · 主赛道** — [Exact Gaussian Moment Matching for Residual Networks: a Second-Order Method](https://neurips.cc/virtual/2026/poster/155943)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。传播高斯均值与协方差，用于神经网络概率推断；不是常规二阶训练优化器。


- **P114 · Spotlight · 主赛道** — [Calibration without Ground Truth](https://neurips.cc/virtual/2026/poster/152525)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


- **P149 · Spotlight · 主赛道** — [FMMI: Flow Matching Mutual Information Estimation](https://neurips.cc/virtual/2026/poster/148155)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


- **P185 · Spotlight · 主赛道** — [Nearly Optimal Robust Covariance and Scatter Matrix Estimation Beyond Gaussians](https://neurips.cc/virtual/2026/poster/149150)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


- **P193 · Spotlight · 主赛道** — [On the Tightness and Computational Tractability of Higher-Dimensional Confidence Sequences](https://neurips.cc/virtual/2026/poster/154185)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


- **P208 · Spotlight · 主赛道** — [Post-ADC Inference: Valid Inference After Active Data Collection](https://neurips.cc/virtual/2026/poster/151721)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


- **P287 · Oral · 评测与数据集** — [probly: Uncertainty-Aware Machine Learning](https://neurips.cc/virtual/2026/poster/139766)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


- **P317 · Oral · 立场论文** — [The Aleatoric-Epistemic Dichotomy of Uncertainty is Meaningful and Indispensable for Machine Learning](https://neurips.cc/virtual/2026/oral/176364)
  - 领域：统计推断、概率与因果 → 不确定性、校准与统计推断。研究不确定性量化、统计估计、置信序列和校准。


#### 贝叶斯与仿真推断（Oral 0／Spotlight 2）


- **P171 · Spotlight · 主赛道** — [Learning Gaussian Conditional Distributions using Neural Ratio Estimation is Hard](https://neurips.cc/virtual/2026/poster/149465)
  - 领域：统计推断、概率与因果 → 贝叶斯与仿真推断。研究条件分布学习、贝叶斯后验和仿真推断。


- **P255 · Spotlight · 主赛道** — [Two Phase Rapid Simulation Based Inference with Differentiable Simulators](https://neurips.cc/virtual/2026/poster/153417)
  - 领域：统计推断、概率与因果 → 贝叶斯与仿真推断。研究条件分布学习、贝叶斯后验和仿真推断。


#### 因果建模与发现（Oral 0／Spotlight 1）


- **P218 · Spotlight · 主赛道** — [Reconciling Causality and Non-Equilibrium Thermodynamics with Hamiltonian Causal Models](https://neurips.cc/virtual/2026/poster/150701)
  - 领域：统计推断、概率与因果 → 因果建模与发现。因果框架结合物理热力学，因此另有AI for Science交叉属性。


### 时间序列与音频


#### 时间序列预测、适配与质量（Oral 3／Spotlight 4）


- **P029 · Oral · 主赛道** — [Filtered Conformal Ellipsoids for Graph-Native Time Series](https://neurips.cc/virtual/2026/poster/155800)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。研究时间序列预测、分词、质量评价、迁移及预测不确定性。


- **P070 · Oral · 主赛道** — [Spectral Energy Allocation Enables Source-Free Domain Adaptation in Time Series Forecasting](https://neurips.cc/virtual/2026/poster/154914)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。研究时间序列预测、分词、质量评价、迁移及预测不确定性。


- **P083 · Oral · 主赛道** — [TiRex-2: Generalizing TiRex to Multivariate Data and Streaming](https://neurips.cc/virtual/2026/poster/151700)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。研究时间序列预测、分词、质量评价、迁移及预测不确定性。


- **P138 · Spotlight · 主赛道** — [Dynamic Tokenization via Reinforcement Patching: End-to-end Training and Zero-shot Transfer](https://neurips.cc/virtual/2026/poster/148692)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。摘要主要关注连续序列和时间序列的自适应分块，不归入文本tokenizer。


- **P252 · Spotlight · 主赛道** — [TSQAgent: Rating Time Series Data Quality via Dedicated Agentic Reasoning](https://neurips.cc/virtual/2026/poster/150288)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。研究时间序列预测、分词、质量评价、迁移及预测不确定性。


- **P263 · Spotlight · 主赛道** — [Volatility-Whitened Probabilistic Residual Modeling for Long-Term Time Series Forecasting](https://neurips.cc/virtual/2026/poster/155322)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。研究时间序列预测、分词、质量评价、迁移及预测不确定性。


- **P309 · Spotlight · 评测与数据集** — [Realism VS Accuracy: Event Sequence Forecasting from a Generative Modeling Perspective](https://neurips.cc/virtual/2026/poster/139504)
  - 领域：时间序列与音频 → 时间序列预测、适配与质量。研究时间序列预测、分词、质量评价、迁移及预测不确定性。


#### 音频、音乐与声音数据（Oral 0／Spotlight 2）


- **P225 · Spotlight · 主赛道** — [Rubato: Transcribing Piano Music with Timestamps](https://neurips.cc/virtual/2026/poster/149838)
  - 领域：时间序列与音频 → 音频、音乐与声音数据。研究音乐转录、声学信号或声音数据集。


- **P305 · Spotlight · 评测与数据集** — [OpenWhistle: A Large-Scale Longitudinal Dataset and Benchmark of Bottlenose Dolphin Vocalizations](https://neurips.cc/virtual/2026/poster/139275)
  - 领域：时间序列与音频 → 音频、音乐与声音数据。研究音乐转录、声学信号或声音数据集。


### 数据与评测方法


#### 通用评测与模型选择（Oral 2／Spotlight 1）


- **P039 · Oral · 主赛道** — [Leaderboard Hacking: Preference-Based Model Evaluations are Vulnerable to Manipulation](https://neurips.cc/virtual/2026/oral/152086)
  - 领域：数据与评测方法 → 通用评测与模型选择。研究评价方法本身的有效性、稳健性和成本。


- **P278 · Oral · 评测与数据集** — [Benchmark Health Index: A Systematic Framework for Benchmarking the Benchmarks of LLMs](https://neurips.cc/virtual/2026/oral/138961)
  - 领域：数据与评测方法 → 通用评测与模型选择。研究评价方法本身的有效性、稳健性和成本。


- **P300 · Spotlight · 评测与数据集** — [Large Language Model Selection with Limited Annotations](https://neurips.cc/virtual/2026/poster/139074)
  - 领域：数据与评测方法 → 通用评测与模型选择。研究评价方法本身的有效性、稳健性和成本。


#### 数据质量、蒸馏与标注（Oral 1／Spotlight 4）


- **P153 · Spotlight · 主赛道** — [FrontierSmith: Synthesizing Open-Ended Coding Problems at Scale](https://neurips.cc/virtual/2026/poster/151843)
  - 领域：数据与评测方法 → 数据质量、蒸馏与标注。面向代码任务的合成训练数据，兼具语言模型代码能力属性。


- **P213 · Spotlight · 主赛道** — [Quantile Benchmarking Heterogeneous Web Corpora in Open LLM Pretraining](https://neurips.cc/virtual/2026/poster/149953)
  - 领域：数据与评测方法 → 数据质量、蒸馏与标注。研究数据语料质量、合成数据、数据蒸馏和标注误差。


- **P280 · Oral · 评测与数据集** — [DD-Ranking: Rethinking the Evaluation of Dataset Distillation](https://neurips.cc/virtual/2026/poster/139355)
  - 领域：数据与评测方法 → 数据质量、蒸馏与标注。研究数据语料质量、合成数据、数据蒸馏和标注误差。


- **P294 · Spotlight · 评测与数据集** — [Doomed to Re-Annotate, Forever: The ImageNet Story](https://neurips.cc/virtual/2026/poster/139569)
  - 领域：数据与评测方法 → 数据质量、蒸馏与标注。研究数据语料质量、合成数据、数据蒸馏和标注误差。


- **P304 · Spotlight · 评测与数据集** — [Object Detection Benchmarks are Incomplete: The Role of Label Errors and Annotation Uncertainty](https://neurips.cc/virtual/2026/poster/139282)
  - 领域：数据与评测方法 → 数据质量、蒸馏与标注。研究数据语料质量、合成数据、数据蒸馏和标注误差。


## 来源与待核验范围



1. [NeurIPS 2026 官方程序数据](https://neurips.cc/static/virtual/data/neurips-2026-orals-posters.json)：录用展示标签、赛道、部分官方主题与论文链接。
2. [NeurIPS 2026 官方下载页](https://neurips.cc/Downloads/2026)：补齐标题和摘要。
3. [官方摘要数据](https://neurips.cc/static/virtual/data/neurips-2026-abstracts.json)：摘要补充。
4. [NeurIPS Explorer](https://github.com/flecomet/neurips-explorer)：仅用于发现待核验条目，未作为329篇的录用标签依据。



`pending_verification.csv`保存86篇第三方快照独有条目，其标签未获本次官方decision数据确认，不能作为本报告全量统计的一部分。


数据文件：`papers_classified.csv`（逐篇表）、`primary_summary.csv`（一级汇总）、`secondary_summary.csv`（二级汇总）、`manifest.json`（范围与来源）。
