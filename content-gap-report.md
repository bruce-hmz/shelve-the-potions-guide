# Content Gap Report — shelvethepotions.wiki

Research Date: 2026-08-28
Game Version: v1.0.11（2026-08-24 发售 V1.0；Day-1 补丁 v1.0.8–v1.0.10；v1.0.11 约于 08-26/27 上线）
Previous Report: `research/community-discussion-report.md`（2026-08-27）
Site: https://shelvethepotions.wiki（Next.js 静态站，10 个路由）
Steam AppID: 4928820 · 开发商 Knight Owl Games · 类型：cozy organizing / 轻逻辑解谜（"Librarian: Tidy Up the Arcane" 同类）

> 执行说明：本报告按"项目扫描 → 社区调研 → 需求比对 → 评分 → 动作"流程生成。上一轮报告（08-27）中的建议大部分已落地（greek-letters / moon / flower / chess 页面、abilities & hints、achievements、Steam Deck workaround），本报告只标注其剩余未完成项，不重复推荐已完成工作。

> **执行进度（2026-08-28）**：P0 四项已全部完成并通过 `npm run check`——① abilities 页（v1.0.11 开关 + Assemble + 冷却修正 + Steam Deck 改写）；② achievements 页（Hooman 真实条件 + 错失警告 + no-abilities 补丁后打法）；③ 新增 `/walkthrough/first-room/`；④ 新增 `/walkthrough/all-puzzle-solutions/`。同步更新：`lib/site.ts` 版本字段 v1.0.11、`article-trust` 组件版本显示、sitemap、首页/枢纽卡片与内链。

> **执行进度二（2026-08-28，P1 第一批）**：⑤ **REWRITE `/puzzles/greek-letters/`**——Steam 帖核实（OP 原话 "That's runes, not greek"）证实旧页面把符文谜题（四本故事书）错当希腊字母解法；现改为真实答案：线索在桌面小瓶的瓶塞上，两组瓶，顺序 γ ε α η β ζ θ δ；⑥ 新增 `/puzzles/solitaire-cards/`（v1.0.9 可读性修复是核心可执行答案；无验证序列，如实标注）；⑦ 新增 `/help/missing-potions/`（暂停菜单重生 + 躲藏点 + 持药水问猫）；⑧ EXPAND `/puzzles/clock-puzzle/`（第二根长针：开发者提示"持时间药水让猫标出"+ 柱子旁的玩家回忆，均已标注）。旧报告的 "greek letters solitaire" 关联经核实为错误映射，帖内无卡牌内容。

> **执行进度四（2026-08-28，P2 批次）**：⑬ 新增 `/puzzles/weather-forecast/`（图案复制板；完整图标序列因无法验证**刻意不发布**，仅注明社区指南以龙卷风开头）；⑭ 新增 `/puzzles/scales-numbers/`（天平/竖琴/烛台三板家族页："先揭示隐藏读数、后升序排列"的方法论，无固定序列可发）；⑮ 新增 `/puzzles/number-of-corners/`（数角排序法，引官方 feedback 帖"多边形难数"实证）；⑯ 首页新增 FAQ 块 + FAQPage 结构化数据（co-op=无 / 云存档=有 / AI=无 / 规模 25+ 谜题 2000+ 药水 / 时长约 3.5-4h 标注为估算 / 更新=有 QOL 无新关卡，全部官方出处）。站点现 **19 路由 / 25 静态页**。**剩余事项**：① orbiting-crystals、cork-size、bottle-size、potion-petals、price-documents、basket-symbols、elements-poster、deities-pamphlet 八个 Not yet covered 谜题页（同样薄内容模式，需求信号最弱，建议放缓等待社区提问出现再建）；② greek/runes/clock/compass 等页的**实机核对**（需拥有游戏，社区标注无法替代）；③ 提交 git 推送触发 Vercel 部署。

---

## 1. Executive Summary

- **网站现状**：10 页。谜题解谜深度（Hint→Rule→Solution 阶梯 + 证据状态标注）是差异化优势，但**覆盖广度已落后**：竞品 ninewiki 有约 29 个谜题条目、同名竞品站 `shelve-the-potions.wiki` 有 26 页（含 first room 攻略、15 个谜题页、no-abilities 专页），本站只有 6 个谜题页。
- **玩家最大需求**：游戏发售仅 4 天，需求集中在三处——① 新手在教程后"被扔进房间不知道干什么"（Steam 12 回复 + 评测退款理由）；② 成就狩猎者对 "No magical abilities"（4.5% 解锁率）和 "Hooman needs help :)" 的真实解锁条件（**官方文本与实际机制不一致，真实条件目前只存在于一条 Steam 评论里**）；③ 剩余约 20 个谜题没有本站页面。
- **最大 Content Gap**：`/walkthrough/first-room/`（新手卡关第一房间）+ 全谜题答案总表页（"all puzzle solutions" 是最典型的头部搜索意图，三家竞品都已做）。
- **最大旧内容问题（时效性）**：**补丁 v1.0.11（08-26/27）加入了"禁用魔法能力"开关**，官方明确说"为了轻松拿到最后一个成就"。本站 abilities 页的 Steam Deck 段落和 achievements 页的 no-abilities 段落都写于补丁之前（"开发者表示无法加锁、只能改键"），现已过时——这是本周必须抢的排名窗口。
- **最大 SEO Opportunity**："Hooman needs help :)" 成就真实条件（30 层货架 + 带未解谜题的药水找猫 + 谜题全解后错失）。SERP 上只有 TrueSteamAchievements 的官方描述文本，无人覆盖真实条件，而 Steam 帖里两名玩家卡关（"Same here"）。答案存在、网页不存在 —— Phase 23 的教科书案例。
- **最值得做的事**：① 按 v1.0.11 更新 abilities + achievements 两页（当天可完成）；② 用 Steam 帖已验证的条件补 Hooman 成就段落；③ 新建 first-room 新手页与 all-solutions 总表页。

---

## 2. Current Site Overview

| 字段 | 值 |
|---|---|
| Game | Shelve the Potions!（Steam，2026-08-24 V1.0，2000+ 药水 / 25+ 谜题货架 / 24 成就 / 无 timer） |
| Website | shelvethepotions.wiki（英文，spoiler-controlled 攻略站） |
| Total Important Pages | 10（首页、walkthrough 枢纽、6 谜题页、2 help 页） |
| Main Categories | Puzzle Solutions / Help (Mechanics + Achievements) |
| Strong Areas | 希腊字母、月亮、花序、国际象棋四个谜题页的"社区验证线索"深度；提示系统说明；成就全表含解锁率 |
| Weak Areas | 谜题广度（29 个谜题只覆盖 6）；新手/教程内容为零；补丁响应机制缺失（v1.0.11 未反映）；无 FAQ 页 |
| Missing Areas | First room 攻略、丢失药水找回、all-solutions 总表、无障碍配色、性能问题、竞品对比（vs Librarian） |
| Tools | 无 |
| Programmatic Content | 无显式 programmatic 路由，但 puzzles/[slug] 模板本身就是可扩展的 programmatic 模板 |

---

## 3. Current Content Coverage

| Category | Existing Pages | Coverage | Quality | Missing Topics |
|---|---|---|---|---|
| Puzzle Solutions | 6/25+ | WEAK（24%） | 中高（含证据标注） | cards/solitaire、test tube rack、compass、weather、scales、harp、candelabra、orbiting crystals、cork size、bottle size、number of corners（shapes）、potion petals、price documents、elements poster、deities pamphlet、rainbow、four books（独立页） |
| Beginner / Onboarding | 0 | EMPTY | — | first room escape、教程清单机制、开局做什么 |
| Mechanics (Hints/Abilities) | 1 | MEDIUM | 中（缺 Assemble、缺 v1.0.11 开关） | Assemble 用法、能力解锁等级、药水重生、升级购买 |
| Achievements | 1 | STRONG 结构 / 需更新 | 中（Hooman 条目不完整） | Hooman 真实条件、no-abilities 补丁后打法、错失警告 |
| Items & Clues | 0 | EMPTY | — | clue stations 汇总（竞品已有 2 页） |
| FAQ | 0 | EMPTY | — | 丢失药水、鼠标卡顿、co-op、云存档、游戏时长、demo 差异 |
| Tools | 0 | EMPTY | — | （机会弱，见 §13） |
| Comparison | 0 | EMPTY | — | vs The Librarian（低优先） |

---

## 4. Existing Content Quality（核心页评分 0–100）

| URL | Score | Problem | Missing User Needs | Action |
|---|---|---|---|---|
| /help/abilities-and-hints/ | 58 | 写于 v1.0.11 之前；"开发者无法加锁"表述已失效；完全未提 Assemble 能力与能力升级系统（冷却 40s 为 v1.0.10 新增） | 禁用魔法开关在哪、Assemble 怎么用、误触后回滚 | **UPDATE + EXPAND（P0）** |
| /help/achievements/ | 60 | "Hooman needs help :)" 只写官方文本（真实条件复杂且错失型）；no-abilities 段落未提 v1.0.11 开关 | Hooman 真实步骤、补丁后最简拿法、错失警告 | **UPDATE（P0）** |
| /puzzles/greek-letters/ | 50 | 疑似把两个谜题混在一起：页面讲 four books（F/FF/FFF…），但"希腊字母"搜索意图更可能指向 test tube rack（γ ε α η β ζ θ δ）。INFERRED，需游戏内核对 | 试管架谜题独立答案；两谜题的关系澄清 | **VERIFY → SPLIT（P1）** |
| /puzzles/clock-puzzle/ | 65 | 缺 08-26 新帖"Can't find the clock hand"的答案（开发者官方提示 + 玩家回忆的柱子位置）；未链到 "Proud Grandfather" 成就 | 第二根长针位置；持时间药水让猫高亮 | **EXPAND（P1）** |
| /puzzles/color-puzzle/ | 60 | 未回应评测反复抱怨的"粉/红、白/米色难以区分"（官方 FAQ 确认有色盲辅助选项） | 色弱情况下的辨色技巧、官方辅助选项指路 | **EXPAND（P2）** |
| /puzzles/moon-orientation/ | 62 | 缺"月相图片过于相似"的评测痛点回应（手机拍照法已写，可加放大/辅助选项提示） | — | **EXPAND（P2）** |
| /puzzles/flower-ordering/ | 55 | 只有规则无序列（如实标注，可保留）；可补"猫检查重置"细节 | — | **EXPAND（P2）** |
| /puzzles/chess-pieces/ | 58 | 无终局答案（如实标注）；竞品已有完整解图 | 最终摆放（需游戏内复现后补） | **EXPAND（P2）** |
| /walkthrough/ | 75 | 枢纽结构好；缺 all-solutions 直达入口、缺新手路径入口 | — | **EXPAND（P1）** |
| / （首页） | 78 | 结构好；可补"游戏共 25+ 谜题 / 2000 药水 / 约 3.5-4 小时"的快速事实与 FAQ 入口 | 基础事实问答 | **EXPAND（P2）** |

注：`lib/site.ts` 的 `gameVersion: "Release build · numeric version not published"` 已可更新为 v1.0.11 口径（OBSERVED，Steam News API）；sitemap `lastModified` 随下次部署刷新。

---

## 5. Community Coverage

| Platform | Access Status | Sample Size | Main Topics | Confidence |
|---|---|---|---|---|
| Steam Discussions | ✅ 直接读取（48 个主题，6 帖全文精读） | 15 页一主题 + 6 帖全文 | Hooman、Assemble、ability lock(16回复)、clock hand、greek clue、chess、moon/flower、first room、性能 | HIGH |
| Steam Reviews | ✅ 通过 appreviews API 读取 | ~112 条近期评测（103 好评） | 重复感、弹窗太小、配色难分、新手迷茫、误触毁成就（开发者已修） | HIGH |
| Steam News/官方FAQ | ✅ News API + 置顶 FAQ 帖 | 4 条公告 + FAQ 全文 | v1.0.11 开关、Day-1 补丁、发售公告、devlog | HIGH |
| Reddit | ⚠️ 仅搜索引擎索引（Level 1-3 降级） | 7 个帖子（快照级） | playtest 评价、"Is anyone playing"、WIP 攻略帖、Theclashify 转载攻略 | MEDIUM-LOW |
| YouTube | ⚠️ 仅标题/描述级信号（无 API key，未做渲染浏览器评论抓取） | 7 个视频 | 全流程 3h42m 无解说、demo 实况、教学视频 | LOW（内容需求信号，非评论信号） |
| Discord | ❌ 不可访问（私密）；仅二手引用 | 2 处转述（dev 对 ability lock 的回复、keybind 建议） | — | MEDIUM-LOW |
| Google SERP | ✅ 多查询验证 | 6 组查询 | ninewiki 占位、TSA 成就页、卡牌/罗盘等谜题查询零结果 | HIGH |

REDDIT_ACCESS_STATUS: blocked（页面返回 JS 壳，未暴力重试）→ Fallback: site:reddit.com 索引快照。
YOUTUBE_COMMENT_ACCESS_STATUS: not attempted via rendered browser（无 API key；Steam 信号已足够密集，投入产出不成立）。下文凡涉及 YouTube 一律写"内容需求暗示"，不写"评论玩家在问"。
DISCORD_DATA_CONFIDENCE: LOW-MEDIUM（仅二手转述）。

---

## 6. Top Player Needs（按 Demand Evidence Score 排序，满分 100）

| Rank | Player Need | Category | Cross-platform Evidence | Pain | Site Coverage | Score |
|---|---|---|---|---|---|---|
| 1 | 如何防止误触魔法能力毁掉 no-abilities 成就（**v1.0.11 已加官方开关**） | Patch Changes / Achievements | Steam 16 回复帖+评测多人+Discord 转述+官方补丁 | 5 | 部分（过时） | 84 |
| 2 | "Hooman needs help :)" 成就真实解锁条件 | Achievements | Steam 帖 2 人卡关（OBSERVED）；SERP 无覆盖 | 5 | 错误/不完整 | 79 |
| 3 | 出了教程/第一房间后该干什么（新手迷茫） | Beginner | Steam 12 回复+评测退款理由+竞品建页 | 4 | 无 | 82 |
| 4 | "How do you use Assemble ability" | Mechanics | Steam 帖（dev 亲答 OBSERVED） | 3 | 无 | 67 |
| 5 | 第二根时钟长针在哪 | Locations | Steam 新帖（dev 亲答 OBSERVED） | 4 | 页面缺此节 | 67 |
| 6 | 卡牌/Solitaire 谜题解法（v1.0.9 官方"提升可读性"证明困惑普遍） | Puzzles | 补丁说明+ninewiki+竞品站+上轮报告 | 3 | 无 | 68 |
| 7 | 全谜题答案总表（"all puzzle solutions"） | Database | Reddit 转载帖+ninewiki+竞品站 | 3 | 无 | 76 |
| 8 | 丢失/掉落的药水怎么找回 | Mechanics | 官方 FAQ 专门收录（证明高频）+竞品建页 | 4 | 无 | 68 |
| 9 | 希腊字母谜题到底看哪里（试管 vs 故事书混淆） | Puzzles | Steam 8 回复+ninewiki 双答案并存 | 4 | 可能错位 | 52 |
| 10 | 鼠标卡顿（Mouse Stuttering） | Performance | Steam 3 回复 | 3 | 无 | 45 |
| 11 | co-op / 多人 | Multiplayer | Steam 帖+官方 FAQ 否定 | 2 | 无 | 40 |
| 12 | 游戏多长 / 多少谜题（内容深度疑虑，评测最高频负面） | Endgame | 评测多条+YouTube 3h42m 全流程 | 3 | 无 | 55 |
| 13 | 罗盘/天气/天平/竖琴/水晶/软木塞/瓶身/角数等剩余谜题 | Puzzles | ninewiki+竞品站覆盖 | 2-3 | 无 | 50-62/个 |
| 14 | 粉/红、白/米色药水难区分（无障碍） | Accessibility | 评测+Steam 两帖+官方 FAQ 确认有辅助选项 | 3 | 无 | 52 |
| 15 | 解谜弹窗太小看不清 | Settings | 评测（大屏电视仍小） | 3 | 无 | 42 |
| 16 | BGM 更换诉求 | Settings | Steam 帖 | 2 | 无（不建议做） | 30 |
| 17 | demo 与正式版差异 | Patch | 官方公告 | 1 | 无 | 35 |
| 18 | 是否 AI 制作（口碑） | Reputation | 官方 FAQ+devlog+评测正面提及 | 1 | 无 | 28 |
| 19 | Steam Deck d-pad 双绑定 | Settings | 已覆盖，保留 | 3 | 已覆盖 | — |
| 20 | 通关后还玩什么（后期重复） | Endgame | 评测最高频负面+Steam "Only negative feedback" 帖 | 3 | 无 | 45 |

---

## 7. Player Voice Examples（真实玩家语言，OBSERVED）

- “How do you unlock Hooman need help?” — amazisan, Steam, 08-26（跟帖 “Same here.”）
- “You have to bring a potion to a cat that you have not figured out the puzzle to… minimum of 30 shelves filled before the first option unlocks.” — JackCrak（被采纳答案）
- “I wish there to be a lock for abilities… accidently used one and now have to start all over again.” — Loki, Steam（16 回复，获 Award）
- “I lost a three-hour run twice to slips.” — Poppin（控制器误触）
- “I can't find the 2nd long clock hand. Where is it located?” — SeniorSquash, Steam 08-26
- “How to use Assemble ability? …I feel like I'm missing something obvious.” — ellie, Steam 08-27
- 评测：“after the tutorial you're left totally to your own devices… overwhelming, not relaxing.”（退款玩家）
- 评测：“the solution pop-up is incredibly tiny, even on a large TV.”
- 评测：“the moon phase puzzle, images being too similar to each other.”
- Steam：管理员置顶 FAQ 专门收录“Lost a potion? → pause menu respawn”，侧面证明该问题高频。

---

## 8. Content Gap（主表）

| Priority | Player Need | SEO Query | Current Site Coverage | Existing URL | Gap Type | Recommended Action | Opp. Score |
|---|---|---|---|---|---|---|---|
| P0 | 补丁后如何禁用魔法能力 | shelve the potions disable magic abilities / no magical abilities achievement | abilities 页有过时 workaround；achievements 页旧打法 | /help/abilities-and-hints/ /help/achievements/ | E — UPDATE_REQUIRED | UPDATE 两页：写入 v1.0.11 开关（Options → disable magic abilities）、更新 Steam Deck 段措辞 | 84 |
| P0 | 第一房间/教程后迷路 | shelve the potions first room / walkthrough tutorial | 无 | — | D — NEW_CONTENT_GAP | CREATE /walkthrough/first-room/ | 82 |
| P1 | Hooman 成就真实条件 | shelve the potions hooman needs help achievement | achievements 页仅官方文本（不完整） | /help/achievements/ | B — EXPAND | UPDATE + 新增专节：30 货架→带未解谜题药水→猫菜单第一项；谜题全解=错失警告 | 79 |
| P1 | 全谜题答案总表 | shelve the potions all puzzle solutions | walkthrough 枢纽无答案聚合 | /walkthrough/ | C — SEARCH_INTENT_GAP | CREATE /walkthrough/all-puzzle-solutions/（答案折叠+证据状态） | 76 |
| P1 | Assemble 能力用法 | shelve the potions assemble ability | abilities 页缺失 | /help/abilities-and-hints/ | B — EXPAND | EXPAND：dev 原话机制（同组药水收集至手部，需手位空+未上架） | 67 |
| P1 | 时钟长针位置 | shelve the potions clock hand location | clock 页缺 | /puzzles/clock-puzzle/ | B — EXPAND | EXPAND：dev 提示（持时间药水问猫）+ 玩家回忆（柱子旁，标注未复现） | 67 |
| P1 | 卡牌 Solitaire 谜题 | shelve the potions cards puzzle / solitaire | 无 | — | D — NEW_CONTENT_GAP | CREATE /puzzles/cards-solitaire/（注明 v1.0.9 已提升可读性） | 68 |
| P1 | 丢失药水找回 | shelve the potions lost potion / missing potion respawn | 无 | — | D — NEW_CONTENT_GAP | CREATE /help/missing-potions/（官方 FAQ 背书） | 68 |
| P2 | 试管架希腊字母谜题 | shelve the potions test tube greek letters | greek-letters 页可能错位 | /puzzles/greek-letters/ | C + SPLIT | 先 VERIFY，再拆分试管架页 / 修正现页指向 | 52 |
| P2 | 罗盘谜题 | shelve the potions compass puzzle | 无 | — | D | CREATE（社区序列 E–W–NE–SE–N–NW–SW–S，标注来源） | 58 |
| P2 | 天气预报谜题 | shelve the potions weather forecast puzzle | 无 | — | D | CREATE | 55 |
| P2 | 天平/竖琴/烛台读数谜题 | shelve the potions scales puzzle 等 | 无 | — | D | CREATE（可 1 页总览+后续拆分） | 55 |
| P2 | 角数/形状谜题 | shelve the potions shapes puzzle corners | 无（上轮报告已列） | — | D | CREATE | 55 |
| P2 | 软木塞/瓶身大小、水晶轨道、花瓣 | shelve the potions cork size 等 | 无 | — | D | CREATE（随验证进度排产） | 50-55 |
| P2 | 无障碍配色 | shelve the potions colorblind | 无 | — | F — FAQ_EXPANSION | 在 color/moon 页加无障碍小节+官方辅助选项说明 | 52 |
| P2 | 游戏时长/内容量 | how long is shelve the potions / how many puzzles | 无 | — | F — FAQ_EXPANSION | 首页或 FAQ：25+ 谜题、2000 药水、约 3.5–4h（YouTube 全流程 3h42m，ESTIMATED） | 55 |
| P3 | 鼠标卡顿 | shelve the potions mouse stutter | 无 | — | F | FAQ 行 | 45 |
| P3 | 通关后重复感 | shelve the potions after finishing | 无 | — | F | FAQ 行（官方：无更多关卡计划） | 45 |
| P3 | co-op | shelve the potions co op | 无 | — | F | FAQ 行（官方否定，直接回答） | 40 |
| P3 | 弹窗太小 | shelve the potions solution popup small | 无 | — | F | FAQ 行 | 42 |

---

## 9. CREATE — New Pages（只列确实该建的）

| Priority | Suggested URL | Suggested Title | Primary Intent | Community Evidence | SERP | Why Existing Content Can't Cover | Score |
|---|---|---|---|---|---|---|---|
| P0 | /walkthrough/first-room/ | Shelve the Potions! First Room Walkthrough — What to Do After the Tutorial | 出教程后不知道干什么 | Steam 12 回复 + 评测退款理由（OBSERVED） | 竞品 hyphen-wiki 有此页但站小；ninewiki 无 | 现站无任何新手内容；意图（顺序型 walk）与谜题页（单点解谜）不同 | 82 |
| P1 | /walkthrough/all-puzzle-solutions/ | All Shelve the Potions! Puzzle Solutions (25+ Boards, Spoiler-Controlled) | 一次找齐全部答案 | r/Theclashify 转载帖 + ninewiki all-answers + 竞品 all-answers 页 | ninewiki 居首但图片依赖重、两节为空 | walkthrough 是导航枢纽，不含答案本体；意图不同（聚合 vs 单解） | 76 |
| P1 | /puzzles/cards-solitaire/ | Shelve the Potions! Cards (Solitaire) Puzzle Solution | 卡牌谜题怎么排 | v1.0.9 官方"提升可读性"补丁 + 上轮报告 | 零结果 | 无对应页 | 68 |
| P1 | /help/missing-potions/ | Lost a Potion in Shelve the Potions? How to Respawn Missing Bottles | 药水丢了/找不到 | 官方 FAQ 专条 + 竞品建页 | 零结果 | abilities 页主题是提示系统，不覆盖 | 68 |
| P2 | /puzzles/compass/ | Compass Puzzle Solution | 罗盘顺序 | ninewiki 序列（标注 community-sourced） | 零结果 | 无 | 58 |
| P2 | /puzzles/test-tube-rack/ | Test Tube Rack (Greek Letters) Puzzle Solution | 试管 γ α β… 排序 | ninewiki 答案 + greek-letters Steam 帖 | 零结果 | 现希腊字母页讲的是故事书谜题 | 55 |
| P2 | /puzzles/weather-forecast/ | Weather Forecast Puzzle Solution | 天气图标顺序 | ninewiki | 零结果 | 无 | 55 |
| P2 | /puzzles/scales-numbers/ | Scales, Harp & Candelabra — "Reveal the Numbers" Puzzles | 三兄弟谜题合集 | ninewiki 分类 | 零结果 | 无 | 55 |
| P2 | /puzzles/number-of-corners/ | Number of Corners (Shapes) Puzzle Solution | 数边排序 | 上轮报告 + ninewiki | 零结果 | 无 | 55 |
| P2 | /help/no-abilities-run/ | "No Magical Abilities for Me, Thanks" — Patched 1.0.11 Guide | 单成就深度攻略 | 16 回复帖 + 评测 + 4.5% 稀有度 | TSA 仅官方文本 | achievements 页是全表，意图不同（单成就深挖）；需防蚕食：以"禁用开关+路线"为主，全表页只留摘要 | 65 |

（首批 10 页之外排队：orbiting-crystals、cork-size、bottle-size、potion-petals、price-documents、elements-poster、deities-pamphlet、rainbow-colors、four-books。）

---

## 10. EXPAND — Existing Pages

| Existing URL | Current Problem | Player Need | Missing Sections | Recommended Expansion | Priority |
|---|---|---|---|---|---|
| /help/abilities-and-hints/ | v1.0.11 前写成"开发者不加锁，只能改键" | 一键禁用能力保成就 | 官方开关位置与行为（"点击会提示已禁用"）；Assemble 能力机制；能力升级（v1.0.10 冷却降至 40s） | 新增 "Disable abilities toggle (v1.0.11)" 与 "The Assemble ability" 两节；Steam Deck 段改为"开关已解决大部分痛点，Deck 上建议仍改键" | P0 |
| /help/achievements/ | Hooman 条目=官方文本；no-abilities 段无补丁信息 | 真实解锁条件 | Hooman 三步真实条件 + 错失警告；no-abilities 段加"现在可先开开关再开档" | 更新两节 + 交叉链接 abilities 页 | P0 |
| /puzzles/clock-puzzle/ | 缺长针位置 | 第二根长针 | "Can't find the clock hand?" 节 | dev 官方提示 + 柱子位置（标注 unverified）+ 链 Proud Grandfather 成就 | P1 |
| /walkthrough/ | 无聚合入口 | 一次看全 | all-solutions 卡片、新手路径卡片 | 上线新页后加两张卡 | P1 |
| /puzzles/greek-letters/ | 疑似谜题错位 | γ 字母 vs 故事书 | 顶部"两种字母谜题"澄清框 | 核对后拆分或互链 | P1 |
| /puzzles/color-puzzle/ | 无障碍缺位 | 色弱玩家 | 辨色替代线索 + 官方 colorblind 选项 | 小节即可 | P2 |
| /puzzles/moon-orientation/ | 月相相似 | 看不清差异 | 辅助选项/缩放提示 | 小节 | P2 |
| / | 缺快速事实 | 多长/多少 | "Game at a glance" 数据行 + FAQ 入口 | 小节 | P2 |

---

## 11. UPDATE — Outdated Content（补丁驱动）

| URL | Game Version | What Changed | Current Problem | Recommended Update | Priority |
|---|---|---|---|---|---|
| /help/abilities-and-hints/ | v1.0.11（08-26/27） | 官方加入 disable magic abilities 开关，明说"为轻松拿最后一个成就" | "开发者无法加锁"表述失效；Steam Deck workaround 变成次优解 | 重写相关两段，引用官方补丁说明 | P0 |
| /help/achievements/ | v1.0.11 | 同上 | no-abilities 段仍描述"纯手工防误触" | 更新为"开开关 → 正常玩 →（如需）回滚理解"打法；保留原理解供旧版本存档玩家 | P0 |
| /help/achievements/（Hooman 行） | 无版本变化，但社区实测与官方文本不一致 | — | "Use a cat hint for the first time" 会让玩家以为随时能用 | 增补 OBSERVED 条件（30 货架 / 未解谜题 / 全解=错失）并标注来源 | P0 |
| lib/site.ts gameVersion | v1.0.11 | 版本号现已公开（补丁编号） | "numeric version not published" | 更新字段与 researchedAt | P1 |
| sitemap lastModified | — | — | 全站固定 2026-08-27 | 随内容更新刷新 | P2 |

---

## 12. FAQ Opportunities

| Existing Page | FAQ Question | Player Intent | Evidence | Why Not a Separate Page |
|---|---|---|---|---|
| /help/abilities-and-hints/ | "Can I turn the abilities off?" | 防误触 | 16 回复帖 + v1.0.11 | 已在 UPDATE 内解决；FAQ 行兜底 |
| /help/abilities-and-hints/ | "Do hints cost anything?" | 代价疑虑 | 官方 FAQ + 本页已有数据 | 页内已有 Cost 节 |
| / | "Does Shelve the Potions have co-op / multiplayer?" | 多人 | 官方 FAQ 明确否定 | 一句话可答 |
| / | "How long is the game?" | 时长 | 评测 + YouTube 3h42m（ESTIMATED） | 一段可答 |
| / | "Does it have Steam Cloud saves?" | 存档 | 官方 FAQ（2 分钟自动存档） | 一句话 |
| / | "Was AI used to make the game?" | 口碑 | 官方 FAQ | 一句话，提升信任 |
| /help/achievements/ | "Can I get Hooman needs help after solving every puzzle?" | 错失 | Steam 帖采纳答案 | 并入 Hooman 专节 |
| /puzzles/moon-orientation/ | "The moon images look identical — any help?" | 无障碍 | 评测 | 并入无障碍小节 |
| /puzzles/color-puzzle/ | "I can't tell pink from red / white from beige" | 无障碍 | 评测 + Steam 两帖 | 并入无障碍小节 |
| /help/missing-potions/（新页） | "My potion fell / disappeared" | 找回 | 官方 FAQ | 该新页主体即答案 |

---

## 13. TOOL Opportunities

| Tool Idea | Player Problem | Why Article Is Insufficient | Existing Competitors | Complexity | SEO Potential | Priority |
|---|---|---|---|---|---|---|
| No-abilities run checklist（可勾选：开关已开/成就条件逐项） | 16 回复帖显示玩家对"哪一步会毁成就"没把握 | 文字清单易漏 | 无 | 低（静态交互） | 低-中（成就词已由主文覆盖） | P3 |
| 24 成就进度追踪器 | 玩家对照 Steam 全表勾选 | 静态表可用 | TSA/Exophase 已有账号制追踪 | 中 | 低（对手强） | P3 |
| 谜题状态自查器（"我的货架为什么拒绝"排查树） | flower/chess 帖显示"照做仍拒绝"大量存在 | 排查树交互更直观 | 无 | 中 | 中（"shelf not working" 类查询） | P3 |

结论：本游戏为线性解谜，工具价值整体弱于内容广度；把资源投给谜题页面矩阵优先。仅为 P3。

---

## 14. MERGE Opportunities

| Pages | Problem | Recommended Canonical | Merge Strategy |
|---|---|---|---|
| 无现存蚕食 | — | — | — |
| 预防性：未来 /help/no-abilities-run/ 与 /help/achievements/#no-abilities | 单成就页与全表节可能互相竞争 "no magical abilities achievement" | no-abilities-run 页为 canonical | 全表页只保留 2-3 行摘要 + 链接；锚点从"完整教学"降级为"概览" |
| 预防性：/puzzles/greek-letters/ 与未来 /puzzles/test-tube-rack/ | "greek letters" 查询可能被两页瓜分 | 先 VERIFY 两谜题真实关系再定 | 若试管架才是"希腊字母"本体：现页改名 four-books 并互链；否则保持现页并给试管页加 "not the one with Greek letters on test tubes" 澄清 |

---

## 15. SERP Opportunities（P0/P1 验证）

| Query | Current SERP | Weakness | Can We Beat It? | Recommended Advantage |
|---|---|---|---|---|
| shelve the potions disable magic abilities | 无任何攻略页（仅补丁公告） | 信息只在补丁公告里 | ✅ 容易 | 唯一详述开关位置+成就联动+旧存档注意点的页面，抢新鲜窗口 |
| shelve the potions hooman needs help achievement | TrueSteamAchievements（官方文本复读） | 无真实条件 | ✅ 容易 | 全网唯一 OBSERVED 三步条件+错失警告 |
| shelve the potions all puzzle solutions | ninewiki（图片依赖、两空节）+ hyphen wiki | 无 hint 阶梯、无验证标注 | ✅ 可以 | spoiler 阶梯 + 逐条证据状态 + 文本化答案（无图也能用） |
| shelve the potions first room walkthrough | hyphen wiki（小站单页） | 站点权威低、无图解步骤链 | ✅ 可以 | 步骤化 + 截图位 + 教程清单机制解释 |
| shelve the potions cards puzzle | 零结果 | — | ✅ 极易 | 先发 |
| shelve the potions clock hand location | 零结果（仅 Steam 帖） | — | ✅ 极易 | EXPAND 现有 clock 页即可承接 |
| shelve the potions assemble ability | 零结果（仅 Steam 帖） | — | ✅ 极易 | EXPAND abilities 页承接 |

---

## 16. Internal Linking Opportunities

| New / Updated Page | Incoming Internal Links | Outgoing Internal Links | Reason |
|---|---|---|---|
| /walkthrough/first-room/ | 首页（新增 "New to the game?" 路径）、/walkthrough/ 顶部 | /help/abilities-and-hints/（猫提示）、/puzzles/chess-pieces/（白猫位置）、/help/missing-potions/ | 新手动线：迷路→提示→找物→找药水 |
| /help/missing-potions/ | /walkthrough/first-room/、/puzzles/* 各页"少一瓶"场景 | /help/abilities-and-hints/#three-levels（Point 层级）、/help/achievements/（不受影响说明） | "少一瓶"是全站高频出口意图 |
| /walkthrough/all-puzzle-solutions/ | /walkthrough/、首页 | 全部 6 个（及后续）谜题页 | 枢纽↔辐条 |
| abilities 页 UPDATE | /help/achievements/（开关联动）、/walkthrough/first-room/ | /help/achievements/、/help/no-abilities-run/ | 成就闭环 |
| achievements 页 UPDATE | /help/abilities-and-hints/ | /help/no-abilities-run/、/puzzles/clock-puzzle/（Proud Grandfather） | 交叉验证动线 |
| /puzzles/cards-solitaire/ | /walkthrough/、/puzzles/greek-letters/（同字母类）、all-solutions | /help/abilities-and-hints/ | 字母/图案类聚类 |

---

## 17. Programmatic SEO Opportunities

| Entity Type | Possible Pages | Demand | Templateability | Maintenance Cost | SEO Value | Score |
|---|---|---|---|---|---|---|
| 谜题（25-29 个） | /puzzles/[slug] 模板已就绪 | 每谜题都有 "how to solve X" 意图，当前多数零竞争 | 高（现模板含 hint/rule/solution/caveat 字段，天然适合） | 中（答案需逐一游戏内核验，补丁敏感） | 高（ninewiki 证明可收录；先发窗口在） | **78** |
| 成就（24 个） | 单成就页 | 中（TSA/SteamHunters 占位但内容浅） | 高 | 低-中 | 中 | 55 |
| Clue stations / 道具 | 未知（数据可得性未验证） | 低-中 | 中 | 中 | 低-中 | 40 |
| 货架（200+） | 不可行 | 低（walkthrough 页自己声明不为每个货架建薄页） | — | — | — | 不做 |

结论：谜题矩阵是本站唯一明确的 programmatic 主线；按"社区已有可信答案优先"排序生产，未验证的以 provisional 标注上线（现站已有此模式）。

---

## 18. Top 20 Actions（按 ROI 排序）

| Rank | Action Type | Page | Task | Reason | Score |
|---|---|---|---|---|---|
| 1 | UPDATE | /help/abilities-and-hints/ | 写入 v1.0.11 禁用开关 + Assemble 节 + 改写 Steam Deck 段 | 补丁昨日上线，全网无攻略页，排名窗口 NOW | 84 |
| 2 | UPDATE | /help/achievements/ | Hooman 真实条件节 + no-abilities 补丁后打法 + 错失警告 | 现页信息不完整/部分失效；错失型成就是强查询 | 79 |
| 3 | CREATE | /walkthrough/first-room/ | 新手第一房间图文攻略 | 12 回复卡关帖+退款评测；竞品已验证意图 | 82 |
| 4 | CREATE | /walkthrough/all-puzzle-solutions/ | 全谜题答案聚合（折叠+状态标注） | 头部查询，三家竞品已做 | 76 |
| 5 | CREATE | /puzzles/cards-solitaire/ | 卡牌谜题页 | 官方补丁证明困惑；SERP 零结果 | 68 |
| 6 | CREATE | /help/missing-potions/ | 药水找回页 | 官方 FAQ 亲自背书的真实高频问题 | 68 |
| 7 | EXPAND | /puzzles/clock-puzzle/ | 加"长针在哪"节 | dev 亲答已存在，零 SERP 竞争 | 67 |
| 8 | CREATE | /help/no-abilities-run/ | 单成就深度页（含开关流程） | 4.5% 稀有度 + 竞品已有同类页 | 65 |
| 9 | UPDATE | lib/site.ts + sitemap | 版本字段 v1.0.11、时间刷新 | 信任信号，5 分钟成本 | — |
| 10 | VERIFY→SPLIT | /puzzles/greek-letters/ | 核对试管 vs 故事书，必要时拆分 | 防止错位流量与蚕食 | 52 |
| 11 | CREATE | /puzzles/compass/ | 罗盘谜题 | 社区答案已在，低成本 | 58 |
| 12 | CREATE | /puzzles/test-tube-rack/ | 试管架谜题 | 与 #10 联动 | 55 |
| 13 | CREATE | /puzzles/weather-forecast/ | 天气谜题 | 同上 | 55 |
| 14 | CREATE | /puzzles/scales-numbers/ | 天平/竖琴/烛台合集 | 三合一控制成本 | 55 |
| 15 | CREATE | /puzzles/number-of-corners/ | 形状谜题 | 上轮报告遗留 | 55 |
| 16 | FAQ | / | 首页 FAQ 块（co-op/时长/云存档/AI/通关后） | 官方 FAQ 已给标准答案，纯搬运成本极低 | 45 |
| 17 | EXPAND | /puzzles/color-puzzle/ + /puzzles/moon-orientation/ | 无障碍小节（辨色/月相+官方辅助选项） | 评测反复抱怨，易写 | 52 |
| 18 | EXPAND | /walkthrough/ | 加新页卡片 + "start here" 路径 | 内链收口 | — |
| 19 | FAQ | /help/abilities-and-hints/ | 鼠标卡顿 workaround 行（若社区有解则写，无解写"等待补丁"并标注） | 新帖已有，页面承接成本最低 | 45 |
| 20 | EXPAND | /puzzles/chess-pieces/ / flower-ordering/ | 持续跟进 Steam 帖，答案验证后补终局 | 呼应现站"验证后发布"承诺 | 58 |

---

## 19. First 10 New Pages

1. /walkthrough/first-room/ — First Room Walkthrough（P0）
2. /walkthrough/all-puzzle-solutions/ — All Puzzle Solutions Hub（P1）
3. /puzzles/cards-solitaire/（P1）
4. /help/missing-potions/（P1）
5. /help/no-abilities-run/（P2，与 #2 成就页更新联动）
6. /puzzles/compass/（P2）
7. /puzzles/test-tube-rack/（P2，先完成 greek-letters 核对）
8. /puzzles/weather-forecast/（P2）
9. /puzzles/scales-numbers/（P2）
10. /puzzles/number-of-corners/（P2）

（均已核对本站无覆盖；#7 依赖 greek-letters 页先行核实。）

---

## 20. Top 10 Existing Pages To Improve

1. /help/abilities-and-hints/ — 补丁失效内容 + 缺 Assemble（P0）
2. /help/achievements/ — Hooman 条目 + no-abilities 段（P0）
3. /puzzles/greek-letters/ — 谜题错位核实（P1）
4. /puzzles/clock-puzzle/ — 长针位置（P1）
5. /walkthrough/ — 聚合入口 + 新手路径（P1）
6. /puzzles/color-puzzle/ — 无障碍节（P2）
7. /puzzles/moon-orientation/ — 月相相似度节（P2）
8. /puzzles/chess-pieces/ — 终局答案待验证补全（P2）
9. /puzzles/flower-ordering/ — "照做仍拒绝"排查提示（P2）
10. / — 快速事实 + FAQ 块（P2）

---

## 21. Killer Opportunities（最强 5 个）

1. **v1.0.11 禁用魔法开关**：真实痛点（16 回复+丢 3h 进度评测）× 官方刚响应 × 全网零攻略页 × 本站已有承接页。24 小时内更新即可吃到新鲜度红利。（OBSERVED）
2. **Hooman 成就真实条件**：答案只存在于一条 Steam 采纳评论；官方文本误导（"use a hint once"）；两名玩家卡关；错失型机制放大查询刚性。本站成就是唯一已建相关页的独立站。（OBSERVED）
3. **First Room 新手攻略**：本站 ZERO 新手内容，而这是 Steam 最大卡关主题之一（12 回复）+ 退款级评测痛点；竞品小站已验证意图但单薄。（OBSERVED）
4. **All-solutions 聚合页**：头部查询已被 ninewiki（弱：图片依赖+空节）占位；本站 spoiler 阶梯是现成差异化；且为后续 20+ 谜题页提供内链骨架。（OBSERVED）
5. **谜题矩阵（cards → compass → weather → scales → corners…）**：SERP 成片零结果，模板现成，官方补丁节奏（v1.0.9 改卡牌可读性）持续制造新困惑点 = 持续的内容需求供给。（OBSERVED 需求 / ESTIMATED 单页流量）

---

## 22. Quick Wins（≤1 天成本）

- abilities 页加 v1.0.11 开关段落（引用官方补丁原文）
- achievements 页加 Hooman OBSERVED 条件 callout + "错失"警告框
- clock 页加"第二根长针"FAQ 行（dev 提示 + 柱子回忆，标注 unverified）
- abilities 页加 Assemble 小节（dev 原话机制，已 OBSERVED）
- 首页 FAQ 块：co-op=否 / 云存档=是(2min 自动存) / AI=否 / 时长约 3.5-4h(ESTIMATED) / 通关后=暂无新关卡计划（官方 FAQ 五连）
- site.ts gameVersion 与 researchedAt 刷新
- 全站谜题页底部互链（同类字母/图案谜题）
- greek-letters 页顶部加"试管上的希腊字母？见 test-tube-rack（建设中）"澄清框

## 23. Strategic Bets（高成本长期资产）

- **谜题全矩阵 programmatic 生产**（29 页 × 现模板）：三周内成为覆盖最全、唯一带证据标注的英文解谜站；ninewiki 与 hyphen wiki 的图片依赖与空节是可长期压制的弱点。
- **all-puzzle-solutions 枢纽 + 逐谜题互链网**：站点级内链资产，谜题页越多权重回流越强。
- **补丁响应流程**（News API 监控 → 48h 内更新 patch-sensitive 页）：把"版本感知"做成站点品牌（现站 trust 组件已支撑该叙事）。
- （观察项）交互式 no-abilities checklist：待谜题矩阵完成后评估，避免分散产能。

## 24. Research Confidence

| Source | Confidence |
|---|---|
| Steam Discussions | HIGH（全文精读 6 帖 + 全列表） |
| Steam Reviews | HIGH（~112 条） |
| Steam News / 官方 FAQ | HIGH（官方一手） |
| Reddit | MEDIUM-LOW（仅索引快照，未读评论区） |
| YouTube | LOW（仅标题级需求信号，未读评论） |
| Discord | LOW-MEDIUM（二手转述） |
| Google SERP | HIGH |
| Site Analysis | HIGH（全仓库文件级扫描） |
| **Overall** | **MEDIUM-HIGH**（Steam 主导；该游戏社区重心确在 Steam，dev 活跃） |

## 25. Source Access Log

| Source | Status | Failure Reason | Fallback | Sample | Confidence |
|---|---|---|---|---|---|
| Steam Discussions (app 4928820) | ✅ OK | — | — | 48 topics；6 帖全文 | HIGH |
| Steam appreviews API | ✅ OK | — | — | ~112 recent reviews | HIGH |
| Steam News API | ✅ OK | — | — | 4 announcements 全文 | HIGH |
| Steam 官方 FAQ 帖 | ✅ OK | — | — | 全文 | HIGH |
| Reddit | ⚠️ PARTIAL | 直接抓取返回 JS 壳（未暴力重试） | site:reddit.com 索引快照 | 7 threads | MEDIUM-LOW |
| YouTube | ⚠️ PARTIAL | 无 API key；渲染浏览器未启用（成本/收益判断） | 搜索级标题信号 | 7 videos | LOW |
| Discord | ❌ BLOCKED | 私有服务器 | 社区转述（2 处） | — | LOW-MEDIUM |
| Google SERP | ✅ OK | — | — | 6 组查询 | HIGH |
| ninewiki.com | ✅ OK | — | — | 全文结构分析 | HIGH |
| shelve-the-potions.wiki（竞品） | ✅ OK | — | — | 站点结构分析 | HIGH |

## 26. Final Recommendation

**如果今天只能做 3 件事：**
1. UPDATE `/help/abilities-and-hints/` + `/help/achievements/`：写入 v1.0.11 禁用开关与 Hooman OBSERVED 条件（两个 P0 更新，一次提交完成，吃补丁新鲜度窗口）。
2. CREATE `/walkthrough/first-room/`：补上本站最大的新手内容空洞（卡关证据最集中）。
3. CREATE `/puzzles/cards-solitaire/`：零 SERP 竞争 + 官方补丁证明需求。

**如果本周可以做 10 件事：**
上述 3 件 + all-puzzle-solutions 聚合页、missing-potions 页、no-abilities-run 专页、clock 页长针 EXPAND、greek-letters 核对、首页 FAQ 块、site.ts 版本刷新（= Top 20 的 1-9 + 16）。

**未来 30 天内容投资分配：**
- New Content（谜题矩阵 + first room + 聚合页）：**40%**
- Existing Content Updates（补丁响应 + 现页 EXPAND）：**25%**
- FAQ / Long-tail（首页 FAQ、无障碍节、杂项问答）：**10%**
- Tools：**5%**（仅 no-abilities checklist 观察项，谜题矩阵优先）
- Programmatic SEO（谜题模板批量生产）：**20%**

> 下一轮复跑提示：先读本报告，将 §8/§18 中已完成的条目标记 DONE；重点复查（a）v1.0.11 之后的新补丁，（b）Hooman 条件是否有更多玩家复现/反驳，（c）ninewiki 与 hyphen wiki 的新增页面，（d）"Only negative feedback"帖与评测区是否出现新机制诉求（开发者明确说会出 QOL 补丁，需求会持续产生）。
