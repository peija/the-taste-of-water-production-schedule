const timeline = {
  start: { year: 2026, month: 7 },
  end: { year: 2027, month: 9 },
};

const scheduleItems = [
  {
    id: "documentary-edit",
    title: "Documentary Edit",
    shortTitle: "EDIT",
    kind: "Production",
    type: "production",
    start: "2026-07",
    end: "2026-08",
    detail:
      "Build the documentary portion of the film, then refine the cut in August while the animation scene script is developed.",
    output: "Edited documentary cut",
  },
  {
    id: "anime-script",
    title: "Animation Scene Script",
    shortTitle: "SC",
    kind: "Production",
    type: "production",
    start: "2026-08",
    end: "2026-08",
    detail:
      "Define the scenes to animate and turn them into a script and direction notes that can feed shooting and AI animation work.",
    output: "Animation scene script",
  },
  {
    id: "documentary-additional-shoot",
    title: "Documentary Additional Shoot",
    shortTitle: "DOC",
    kind: "Production",
    type: "production",
    start: "2026-08",
    end: "2026-09",
    updated: true,
    detail:
      "Capture additional documentary material across August and September so the documentary portion has the needed pickups before the final edit.",
    output: "Additional documentary footage",
  },
  {
    id: "shooting",
    title: "AI Rotoscoping Shooting",
    shortTitle: "SH",
    kind: "Production",
    type: "production",
    start: "2026-09",
    end: "2026-09",
    detail:
      "Shoot the animation reference scenes needed for AI rotoscoping so the October animation production can begin with usable motion material.",
    output: "AI rotoscoping reference footage",
  },
  {
    id: "ai-animation",
    title: "AI Animation",
    shortTitle: "AI",
    kind: "Production",
    type: "production",
    start: "2026-10",
    end: "2026-12",
    detail:
      "Focus on rotoscoping in October, then continue the main AI animation production through November and December.",
    output: "AI animation footage",
  },
  {
    id: "voice-recording",
    title: "Voice Recording",
    shortTitle: "VO",
    kind: "Production",
    type: "production",
    start: "2026-12",
    end: "2026-12",
    detail:
      "Record voices during the final month of AI animation production so the material is ready for the January sound mix.",
    output: "Recorded voice tracks",
  },
  {
    id: "finishing",
    title: "Final Finishing",
    shortTitle: "FN",
    kind: "Production",
    type: "production",
    start: "2027-01",
    end: "2027-01",
    detail:
      "Complete sound mixing, color grading, and English subtitles to prepare the final festival submission master.",
    output: "Festival submission master",
  },
  {
    id: "film-complete",
    title: "Film Complete",
    shortTitle: "DONE",
    kind: "Milestone",
    type: "milestone",
    start: "2027-01",
    end: "2027-01",
    symbol: "★",
    detail:
      "The film is completed at the end of January 2027. After this point, the focus shifts to festival submissions and festival dates.",
    output: "Completed film",
  },
  {
    id: "annecy-submit",
    title: "Annecy Submission",
    shortTitle: "AN",
    kind: "Festival Submission",
    type: "submission",
    start: "2027-02",
    end: "2027-02",
    symbol: "●",
    detail: "Submit the film to the Annecy International Animation Film Festival.",
    output: "Submission complete",
  },
  {
    id: "cannes-submit",
    title: "Cannes Submission",
    shortTitle: "CA",
    kind: "Festival Submission",
    type: "submission",
    start: "2027-03",
    end: "2027-03",
    symbol: "●",
    detail: "Submit the film to the Cannes Film Festival.",
    output: "Submission complete",
  },
  {
    id: "san-sebastian-submit",
    title: "San Sebastian Submission",
    shortTitle: "SS",
    kind: "Festival Submission",
    type: "submission",
    start: "2027-06",
    end: "2027-06",
    symbol: "●",
    detail: "Submit the film to the San Sebastian International Film Festival.",
    output: "Submission complete",
  },
  {
    id: "berlin-festival",
    title: "Berlin Film Festival",
    shortTitle: "BE",
    kind: "Festival Date",
    type: "festival",
    start: "2027-02",
    end: "2027-02",
    symbol: "★",
    updated: true,
    detail: "The Berlin Film Festival takes place this month.",
    output: "Festival date",
  },
  {
    id: "cannes-festival",
    title: "Cannes Festival",
    shortTitle: "CA",
    kind: "Festival Date",
    type: "festival",
    start: "2027-05",
    end: "2027-05",
    symbol: "★",
    detail: "The Cannes Film Festival takes place this month.",
    output: "Festival date",
  },
  {
    id: "annecy-festival",
    title: "Annecy Festival",
    shortTitle: "AN",
    kind: "Festival Date",
    type: "festival",
    start: "2027-06",
    end: "2027-06",
    symbol: "★",
    detail: "The Annecy International Animation Film Festival takes place this month.",
    output: "Festival date",
  },
  {
    id: "san-sebastian-festival",
    title: "San Sebastian Festival",
    shortTitle: "SS",
    kind: "Festival Date",
    type: "festival",
    start: "2027-09",
    end: "2027-09",
    symbol: "★",
    detail: "The San Sebastian International Film Festival takes place this month.",
    output: "Festival date",
  },
];

const typeColors = {
  production: "#187c6d",
  submission: "#8f98a3",
  festival: "#7c4db2",
  milestone: "#d43d57",
};

const keyCardIds = ["film-complete", "annecy-submit", "cannes-submit", "san-sebastian-submit"];

const oldProductionBudget = {
  source: "1Taste_budget_0217_mixed_JapanSide_EN.xlsx",
  note:
    "AI Know-how Provision is included under Co-production Potential. India Side Storyboard is excluded because pricing is TBD.",
  summary: {
    subtotal: 359779.36,
    tax: 35977.94,
    grandTotal: 395757.29,
  },
  categories: [
    {
      name: "Live Action Documentary Filming",
      subtotal: 42953.05,
      items: [
        ["Camera man", 255.17, 20, 5103.33],
        ["Line Producer", 170.11, 20, 3402.22],
        ["Assistant Director", 255.17, 30, 7655],
        ["Car Rental", 170.11, 20, 3402.22],
        ["Misc. Expenses (5 ppl)", 127.58, 20, 2551.67],
        ["Highway Tolls (Round Trip)", 255.17, 15, 3827.5],
        ["Equipment Rental [Outsource]", 255.17, 20, 5103.33],
        ["Accommodation (5 ppl)", 425.28, 20, 8505.56],
        ["Camera Assistant / Sound", 170.11, 20, 3402.22],
      ],
    },
    {
      name: "Live Action Overseas Filming",
      subtotal: 19988.05,
      items: [
        ["Overseas Camera Asst. / Sound", 680.44, 5, 3402.22],
        ["Overseas Coordination Fee", 4252.78, 1, 4252.78],
        ["Overseas Line Producer", 680.44, 5, 3402.22],
        ["Overseas Cameraman", 680.44, 5, 3402.22],
        ["Overseas Hotel (7 nights)", 2126.39, 1, 2126.39],
        ["Airfare (Round Trip, Director)", 2126.39, 1, 2126.39],
        ["Overseas Meals (10 days)", 255.17, 5, 1275.83],
      ],
    },
    {
      name: "Live Action AI Animation Studio Shoot for 14 days",
      subtotal: 44058.86,
      items: [
        ["Lighting", 255.17, 14, 3572.35],
        ["Assistant Director", 255.17, 14, 3572.35],
        ["Line Producer / PM", 170.11, 14, 2381.56],
        ["Camera man", 255.17, 14, 3572.35],
        ["Studio Operator", 425.28, 14, 5953.89],
        ["Studio Rental", 255.17, 14, 3572.35],
        ["Cast (Approx. 5 people)", 1701.11, 5, 8505.56],
        ["Costumes / Props / Wigs", 3402.21, 1, 3402.21],
        ["Equipment Rental", 255.17, 14, 3572.35],
        ["Misc. Expenses (Food for 15)", 425.28, 14, 5953.89],
      ],
    },
    {
      name: "Post-Production Japan Side",
      subtotal: 24000.02,
      items: [
        ["Offline Editing (Japan Side)", 6666.67, 1, 6666.67],
        ["English Subtitles (Japan Side)", 2666.67, 1, 2666.67],
        ["DCP with English Subtitles (Japan Side)", 2666.67, 1, 2666.67],
        ["Sound Design (Japan Side)", 2666.67, 1, 2666.67],
        ["Music (Japan Side)", 2666.67, 1, 2666.67],
        ["Compositing (Japan Side)", 6666.67, 1, 6666.67],
      ],
    },
    {
      name: "AI Rotoscoping Japan Side",
      subtotal: 58987.79,
      emphasis: true,
      items: [
        ["AI Background (Japan Side)", 127.58, 120, 15310],
        ["AI Technical Director (Japan Side)", 8505.56, 1, 8505.56],
        ["Animation Director (Japan Side)", 8505.56, 1, 8505.56],
        ["Art Director", 6666.67, 1, 6666.67],
        ["AIAI Agent / Rotoscoping Tool Development", 20000, 1, 20000],
      ],
    },
    {
      name: "General Production",
      subtotal: 82527.8,
      items: [
        ["Lead Actor", 4252.78, 1, 4252.78],
        ["Director", 12758.34, 1, 12758.34],
        ["Producer", 17011.12, 1, 17011.12],
        ["Production Producer", 4252.78, 1, 4252.78],
        ["KOBO Voice Actor", 4252.78, 1, 4252.78],
        ["Management Fee", 20000, 1, 20000],
        ["MIFA Exhibition PR / Investment Activity (Past Two Editions)", 20000, 1, 20000],
      ],
    },
    {
      name: "Pre-production",
      subtotal: 21263.9,
      items: [
        ["Scripts", 4252.78, 1, 4252.78],
        ["Concept Art", 8505.56, 1, 8505.56],
        ["Planning", 4252.78, 1, 4252.78],
        ["Character Design", 4252.78, 1, 4252.78],
      ],
    },
    {
      name: "India Side Storyboard",
      subtotal: 0,
      items: [["Storyboard (India Side)", null, "TBD", null, "Price TBD; excluded from total"]],
    },
    {
      name: "Co-production Potential",
      subtotal: 65999.99,
      emphasis: true,
      items: [
        ["MA Studio (Potential Co-Production)", 2000, 1, 2000],
        ["Color Grading (Potential Co-Production)", 3333.33, 1, 3333.33],
        ["AI Rotoscoping (Characters) (Potential Co-Production)", 100, 120, 12000],
        ["AI Effect (Potential Co-Production)", 100, 120, 12000],
        ["AI Animation Retouching (Potential Co-Production)", 3333.33, 1, 3333.33],
        [
          "AI Know-how Provision / Consulting",
          33333.33,
          1,
          33333.33,
          "JPY 5,000,000 reference",
        ],
      ],
    },
  ],
};

const productionBudget = {
  source: "Updated July 18, 2026",
  note:
    "Live Action Overseas Filming is reduced to JPY 500,000. AI Know-how Provision / Consulting is moved to AI Rotoscoping Japan Side. Co-production scope is updated as requested.",
  summary: {
    subtotal: 343124.64,
    tax: 34312.46,
    grandTotal: 377437.1,
    oldGrandTotal: oldProductionBudget.summary.grandTotal,
    deltaGrandTotal: -18320.19,
  },
  categories: [
    oldProductionBudget.categories[0],
    {
      name: "Live Action Overseas Filming",
      subtotal: 3333.33,
      updated: true,
      changeNote: "Reduced to JPY 500,000 from the previous overseas filming scope.",
      items: [
        [
          "Live Action Overseas Filming (reduced scope)",
          3333.33,
          1,
          3333.33,
          "Updated: JPY 500,000 cap / reduced scope",
        ],
      ],
    },
    oldProductionBudget.categories[2],
    {
      name: "Post-Production Japan Side",
      subtotal: 17333.35,
      updated: true,
      changeNote: "Compositing moved to Co-production.",
      items: [
        ["Offline Editing (Japan Side)", 6666.67, 1, 6666.67],
        ["English Subtitles (Japan Side)", 2666.67, 1, 2666.67],
        ["DCP with English Subtitles (Japan Side)", 2666.67, 1, 2666.67],
        ["Sound Design (Japan Side)", 2666.67, 1, 2666.67],
        ["Music (Japan Side)", 2666.67, 1, 2666.67],
        ["Compositing (Co-production)", 0, "Moved", 0, "Moved to Co-production"],
      ],
    },
    {
      name: "AI Rotoscoping Japan Side",
      subtotal: 92321.12,
      emphasis: true,
      updated: true,
      changeNote: "AI Know-how Provision / Consulting moved here from Co-production.",
      items: [
        ["AI Background (Japan Side)", 127.58, 120, 15310],
        ["AI Technical Director (Japan Side)", 8505.56, 1, 8505.56],
        ["Animation Director (Japan Side)", 8505.56, 1, 8505.56],
        ["Art Director", 6666.67, 1, 6666.67],
        ["AIAI Agent / Rotoscoping Tool Development", 20000, 1, 20000],
        [
          "AI Know-how Provision / Consulting",
          33333.33,
          1,
          33333.33,
          "Moved from Co-production / JPY 5,000,000 reference",
        ],
      ],
    },
    oldProductionBudget.categories[5],
    oldProductionBudget.categories[6],
    oldProductionBudget.categories[7],
    {
      name: "Co-production",
      subtotal: 39333.33,
      emphasis: true,
      updated: true,
      changeNote: "Supersub LLC will visit India and produce together with the Toonz team.",
      items: [
        ["MA Studio (Co-production)", 2000, 1, 2000, "Updated co-production scope"],
        ["Color Grading (Co-production)", 3333.33, 1, 3333.33, "Updated co-production scope"],
        [
          "AI Rotoscoping (Characters) (Co-production)",
          100,
          120,
          12000,
          "Updated co-production scope",
        ],
        ["AI Effect (Co-production)", 100, 120, 12000, "Updated co-production scope"],
        [
          "AI Animation Retouching (Co-production)",
          3333.33,
          1,
          3333.33,
          "Updated co-production scope",
        ],
        ["Compositing (Co-production)", 6666.67, 1, 6666.67, "Moved from Post-Production Japan Side"],
      ],
    },
  ],
};

const septemberBudget = {
  source: "2Taste_budget_0217_mixed_JapanSide_EN.xlsx",
  note: "These three categories are required by September in order to proceed with the next production phase.",
  summary: {
    totalRequired: 106379.98,
  },
  categories: [
    {
      name: "Live Action Overseas Filming",
      subtotal: 3333.33,
      updated: true,
      changeNote: "Matched to the updated production budget: JPY 500,000 / $3,333.",
      items: [
        [
          "Live Action Overseas Filming (reduced scope)",
          3333.33,
          1,
          3333.33,
          "Updated: aligned with production budget / JPY 500,000",
        ],
      ],
    },
    {
      name: "Live Action AI Animation Studio Shoot for 14 days",
      subtotal: 44058.86,
      items: [
        ["Lighting", 255.17, 14, 3572.35],
        ["Assistant Director", 255.17, 14, 3572.35],
        ["Line Producer / PM", 170.11, 14, 2381.56],
        ["Camera man", 255.17, 14, 3572.35],
        ["Studio Operator", 425.28, 14, 5953.89],
        ["Studio Rental", 255.17, 14, 3572.35],
        ["Cast (Approx. 5 people)", 1701.11, 5, 8505.56],
        ["Costumes / Props / Wigs", 3402.21, 1, 3402.21],
        ["Equipment Rental", 255.17, 14, 3572.35],
        ["Misc. Expenses (Food for 15)", 425.28, 14, 5953.89],
      ],
    },
    {
      name: "AI Rotoscoping Japan Side",
      subtotal: 58987.79,
      emphasis: true,
      items: [
        ["AI Background (Japan Side)", 127.58, 120, 15310],
        ["AI Technical Director (Japan Side)", 8505.56, 1, 8505.56],
        ["Animation Director (Japan Side)", 8505.56, 1, 8505.56],
        ["Art Director", 6666.67, 1, 6666.67],
        ["AIAgent / Rotoscoping Tool Development", 20000, 1, 20000],
      ],
    },
  ],
};

const yenPerDollar = 160;
const languageStorageKey = "taste-of-water-language";

const monthNamesByLanguage = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  ja: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
};

const monthShortNamesByLanguage = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ja: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
};

const copyByLanguage = {
  en: {
    pageTitle: "The Taste of Water Production Schedule",
    locale: "en-US",
    staticText: {
      headerEyebrow: "Film Schedule",
      headerTitle: "The Taste of Water Production Schedule",
      headerPeriod: "July 2026 - September 2027",
      headerUpdated: "Last updated: July 18, 2026",
      legendProduction: "Production",
      legendSubmission: "Festival Submission",
      legendFestival: "Festival Date",
      legendMilestone: "Milestone",
      currentLineLabel: "Today",
      keyCardsTitle: "Key Cards",
      productionBudgetEyebrow: "Production Budget",
      productionBudgetTitle: "The Taste of Water Production Budget",
      productionBudgetDescription:
        "Updated production budget with revised co-production scope, reduced overseas filming, and AI know-how moved into the AI Japan side budget.",
      productionBudgetDetailTitle: "Budget Detail",
      productionBudgetDetailDescription: "Category subtotals and line items from the Excel estimate.",
      productionBudgetUpdated: "Updated: July 18, 2026",
      oldBudgetSummaryTitle: "Old Budget (before update)",
      oldBudgetDetailTitle: "Old Budget Detail",
      oldBudgetDetailDescription: "Original estimate kept for reference.",
      oldBudgetSource: "Source: 1Taste_budget_0217_mixed_JapanSide_EN.xlsx",
      septemberBudgetEyebrow: "September Request",
      septemberBudgetTitle: "Production Budget Required for AI Animation Filming",
      septemberBudgetDescription:
        "These three categories are required by September in order to proceed with the next production phase.",
      septemberBudgetDetailTitle: "Budget Required by September",
      septemberBudgetDetailDescription:
        "Live action overseas filming, AI animation studio shoot, and AI rotoscoping.",
      septemberBudgetSource: "Source: 2Taste_budget_0217_mixed_JapanSide_EN.xlsx",
    },
    aria: {
      language: "Language",
      legend: "Legend",
      schedule: "Production and festival Gantt chart",
      sidePanel: "Selected detail and key schedule cards",
      summaryPanel: "Key schedule cards",
      budget: "The Taste of Water production budget",
      septemberBudget: "Production budget required by September",
    },
    labels: {
      task: "Task",
      updated: "Updated",
      updatedShort: "UPD",
      type: "Type",
      deliverable: "Deliverable",
      old: "Old",
      beforeTax: "Before tax",
      source: "Source",
      tbd: "TBD",
    },
    budgetSummary: {
      updatedGrandTotal: "Updated Grand Total",
      subtotal: "Subtotal",
      overseasFilming: "Overseas Filming",
      aiKnowHowMoved: "AI Know-how Moved",
      oldDetail: (oldTotal, delta) => `Old: ${oldTotal} / ${delta}`,
      beforeTax: "Before tax",
      reducedToJpy: "Reduced to JPY 500,000",
      nowUnderAi: "Now under AI Rotoscoping Japan Side",
      oldGrandTotal: "Old Grand Total",
      oldSubtotal: "Old Subtotal",
      oldTax: "Old Tax",
      oldAiKnowHow: "Old AI Know-how",
      includingTax: "Including 10% tax",
      taxEstimate: "10% estimate",
      previouslyUnderCoProduction: "Previously under Co-production",
      totalRequired: "Total Required by September",
      threeCategories: "Three production categories",
      liveActionOverseasShoot: "Live action overseas shoot",
      aiAnimationShoot: "AI Animation Shoot",
      studioShoot14Days: "Studio shoot for 14 days",
      aiRotoscoping: "AI Rotoscoping",
      japanSideProduction: "Japan side production",
    },
    tableHeaders: ["Item", "Unit Price", "Qty / Days", "Total", "Note"],
  },
  ja: {
    pageTitle: "The Taste of Water 制作スケジュール",
    locale: "ja-JP",
    staticText: {
      headerEyebrow: "映画制作スケジュール",
      headerTitle: "The Taste of Water 制作スケジュール",
      headerPeriod: "2026年7月 - 2027年9月",
      headerUpdated: "更新日: 2026年7月18日",
      legendProduction: "制作工程",
      legendSubmission: "映画祭応募",
      legendFestival: "映画祭開催",
      legendMilestone: "マイルストーン",
      currentLineLabel: "現在",
      keyCardsTitle: "重要カード",
      productionBudgetEyebrow: "制作予算",
      productionBudgetTitle: "The Taste of Water 制作予算",
      productionBudgetDescription:
        "コープロダクション範囲、海外撮影の縮小、AIノウハウ提供/コンサルティングの移動を反映した更新版の制作予算です。日本語表示では1ドル160円で円換算しています。",
      productionBudgetDetailTitle: "予算詳細",
      productionBudgetDetailDescription: "Excel見積もりをもとに、カテゴリー小計と明細を表示しています。",
      productionBudgetUpdated: "更新日: 2026年7月18日",
      oldBudgetSummaryTitle: "旧予算（更新前）",
      oldBudgetDetailTitle: "旧予算詳細",
      oldBudgetDetailDescription: "参照用に元の見積もりを折りたたんで保存しています。",
      oldBudgetSource: "出典: 1Taste_budget_0217_mixed_JapanSide_EN.xlsx",
      septemberBudgetEyebrow: "9月までの必要予算",
      septemberBudgetTitle: "AIアニメーション撮影に必要な制作予算",
      septemberBudgetDescription:
        "次の制作フェーズへ進むために、9月までに必要な3カテゴリーの予算です。日本語表示では1ドル160円で円換算しています。",
      septemberBudgetDetailTitle: "9月までに必要な予算",
      septemberBudgetDetailDescription: "海外実写撮影、AIアニメーション用スタジオ撮影、AIロトスコーピング。",
      septemberBudgetSource: "出典: 2Taste_budget_0217_mixed_JapanSide_EN.xlsx",
    },
    aria: {
      language: "言語",
      legend: "凡例",
      schedule: "制作と映画祭のガントチャート",
      sidePanel: "選択した詳細と重要スケジュールカード",
      summaryPanel: "重要スケジュールカード",
      budget: "The Taste of Water 制作予算",
      septemberBudget: "9月までに必要な制作予算",
    },
    labels: {
      task: "工程",
      updated: "更新",
      updatedShort: "更新",
      type: "種別",
      deliverable: "成果物",
      old: "旧",
      beforeTax: "税抜",
      source: "出典",
      tbd: "未定",
    },
    budgetSummary: {
      updatedGrandTotal: "更新後総額",
      subtotal: "小計",
      overseasFilming: "海外撮影",
      aiKnowHowMoved: "AIノウハウ移動",
      oldDetail: (oldTotal, delta) => `旧: ${oldTotal} / 差額: ${delta}`,
      beforeTax: "税抜",
      reducedToJpy: "50万円目安に縮小",
      nowUnderAi: "AIロトスコーピング日本側へ移動",
      oldGrandTotal: "旧総額",
      oldSubtotal: "旧小計",
      oldTax: "旧消費税",
      oldAiKnowHow: "旧AIノウハウ",
      includingTax: "10%税込",
      taxEstimate: "10%見積もり",
      previouslyUnderCoProduction: "以前はコープロダクション内",
      totalRequired: "9月までに必要な総額",
      threeCategories: "3つの制作カテゴリー",
      liveActionOverseasShoot: "海外実写撮影",
      aiAnimationShoot: "AIアニメーション撮影",
      studioShoot14Days: "14日間のスタジオ撮影",
      aiRotoscoping: "AIロトスコーピング",
      japanSideProduction: "日本側制作",
    },
    tableHeaders: ["項目", "単価", "数量/日数", "合計", "メモ"],
  },
};

const jaTranslations = {
  "Production": "制作工程",
  "Festival Submission": "映画祭応募",
  "Festival Date": "映画祭開催",
  "Milestone": "マイルストーン",
  "TBD": "未定",
  "Documentary Edit": "ドキュメンタリー編集",
  "Animation Scene Script": "アニメーションシーン脚本",
  "Documentary Additional Shoot": "ドキュメンタリー追加撮影",
  "AI Rotoscoping Shooting": "AIロトスコーピング撮影",
  "AI Animation": "AIアニメ制作",
  "Voice Recording": "アフレコ",
  "Final Finishing": "最終仕上げ",
  "Film Complete": "作品完成",
  "Annecy Submission": "アヌシー応募",
  "Cannes Submission": "カンヌ応募",
  "San Sebastian Submission": "サン・セバスチャン応募",
  "Berlin Film Festival": "ベルリン映画祭",
  "Cannes Festival": "カンヌ国際映画祭",
  "Annecy Festival": "アヌシー国際アニメーション映画祭",
  "San Sebastian Festival": "サン・セバスチャン国際映画祭",
  "EDIT": "編",
  "SC": "脚",
  "DOC": "追撮",
  "SH": "撮",
  "AI": "AI",
  "VO": "声",
  "FN": "仕上",
  "DONE": "完",
  "AN": "アヌ",
  "CA": "カン",
  "SS": "サン",
  "BE": "ベル",
  "Build the documentary portion of the film, then refine the cut in August while the animation scene script is developed.":
    "作品のドキュメンタリーパートを編集し、8月はアニメーションシーン脚本の制作と並行してカットを詰めます。",
  "Define the scenes to animate and turn them into a script and direction notes that can feed shooting and AI animation work.":
    "アニメ化する場面を整理し、撮影とAIアニメ制作に渡せる脚本と演出メモに落とし込みます。",
  "Capture additional documentary material across August and September so the documentary portion has the needed pickups before the final edit.":
    "8月から9月にかけてドキュメンタリーの追加素材を撮影し、最終編集に必要な補足素材を揃えます。",
  "Shoot the animation reference scenes needed for AI rotoscoping so the October animation production can begin with usable motion material.":
    "10月からのAIロトスコーピング制作に使うため、アニメーション参照用の動き素材を撮影します。",
  "Focus on rotoscoping in October, then continue the main AI animation production through November and December.":
    "10月はロトスコーピングを中心に進め、11月から12月までAIアニメ制作を継続します。",
  "Record voices during the final month of AI animation production so the material is ready for the January sound mix.":
    "AIアニメ制作の最終月に声の収録を行い、1月の音声ミックスに備えます。",
  "Complete sound mixing, color grading, and English subtitles to prepare the final festival submission master.":
    "音声ミックス、カラーグレーディング、英語字幕を仕上げ、映画祭応募用の最終マスターを準備します。",
  "The film is completed at the end of January 2027. After this point, the focus shifts to festival submissions and festival dates.":
    "2027年1月末に作品完成。その後は映画祭応募と映画祭開催に軸足を移します。",
  "Submit the film to the Annecy International Animation Film Festival.":
    "アヌシー国際アニメーション映画祭へ応募します。",
  "Submit the film to the Cannes Film Festival.": "カンヌ国際映画祭へ応募します。",
  "Submit the film to the San Sebastian International Film Festival.":
    "サン・セバスチャン国際映画祭へ応募します。",
  "The Berlin Film Festival takes place this month.": "この月にベルリン映画祭が開催されます。",
  "The Cannes Film Festival takes place this month.": "この月にカンヌ国際映画祭が開催されます。",
  "The Annecy International Animation Film Festival takes place this month.":
    "この月にアヌシー国際アニメーション映画祭が開催されます。",
  "The San Sebastian International Film Festival takes place this month.":
    "この月にサン・セバスチャン国際映画祭が開催されます。",
  "Edited documentary cut": "ドキュメンタリー編集版",
  "Animation scene script": "アニメーションシーン脚本",
  "Additional documentary footage": "追加ドキュメンタリー素材",
  "AI rotoscoping reference footage": "AIロトスコーピング参照映像",
  "AI animation footage": "AIアニメーション映像",
  "Recorded voice tracks": "収録済み音声",
  "Festival submission master": "映画祭応募用マスター",
  "Completed film": "完成作品",
  "Submission complete": "応募完了",
  "Festival date": "映画祭開催月",
  "Live Action Documentary Filming": "実写ドキュメンタリー撮影",
  "Live Action Overseas Filming": "海外実写撮影",
  "Live Action AI Animation Studio Shoot for 14 days": "AIアニメーション用スタジオ撮影（14日間）",
  "Post-Production Japan Side": "ポストプロダクション（日本側）",
  "AI Rotoscoping Japan Side": "AIロトスコーピング（日本側）",
  "General Production": "制作全般",
  "Pre-production": "プリプロダクション",
  "India Side Storyboard": "インド側ストーリーボード",
  "Co-production Potential": "コープロダクション候補",
  "Co-production": "コープロダクション",
  "Camera man": "カメラマン",
  "Line Producer": "ラインプロデューサー",
  "Assistant Director": "助監督",
  "Car Rental": "車両レンタル",
  "Misc. Expenses (5 ppl)": "雑費（5名）",
  "Highway Tolls (Round Trip)": "高速料金（往復）",
  "Equipment Rental [Outsource]": "機材レンタル（外注）",
  "Accommodation (5 ppl)": "宿泊費（5名）",
  "Camera Assistant / Sound": "カメラアシスタント/録音",
  "Overseas Camera Asst. / Sound": "海外カメラアシスタント/録音",
  "Overseas Coordination Fee": "海外コーディネーション費",
  "Overseas Line Producer": "海外ラインプロデューサー",
  "Overseas Cameraman": "海外カメラマン",
  "Overseas Hotel (7 nights)": "海外ホテル（7泊）",
  "Airfare (Round Trip, Director)": "航空券（往復、監督）",
  "Overseas Meals (10 days)": "海外食費（10日間）",
  "Lighting": "照明",
  "Line Producer / PM": "ラインプロデューサー/PM",
  "Studio Operator": "スタジオオペレーター",
  "Studio Rental": "スタジオレンタル",
  "Cast (Approx. 5 people)": "出演者（約5名）",
  "Costumes / Props / Wigs": "衣装/小道具/ウィッグ",
  "Equipment Rental": "機材レンタル",
  "Misc. Expenses (Food for 15)": "雑費（15名分の食事）",
  "Offline Editing (Japan Side)": "オフライン編集（日本側）",
  "English Subtitles (Japan Side)": "英語字幕（日本側）",
  "DCP with English Subtitles (Japan Side)": "英語字幕付きDCP（日本側）",
  "Sound Design (Japan Side)": "サウンドデザイン（日本側）",
  "Music (Japan Side)": "音楽（日本側）",
  "Compositing (Japan Side)": "コンポジット（日本側）",
  "Compositing (Co-production)": "コンポジット（コープロダクション）",
  "AI Background (Japan Side)": "AI背景（日本側）",
  "AI Technical Director (Japan Side)": "AIテクニカルディレクター（日本側）",
  "Animation Director (Japan Side)": "アニメーション監督（日本側）",
  "Art Director": "アートディレクター",
  "AIAI Agent / Rotoscoping Tool Development": "AIAIエージェント/ロトスコーピングツール開発",
  "AIAgent / Rotoscoping Tool Development": "AIエージェント/ロトスコーピングツール開発",
  "Lead Actor": "主演俳優",
  "Director": "監督",
  "Producer": "プロデューサー",
  "Production Producer": "制作プロデューサー",
  "KOBO Voice Actor": "KOBO声優",
  "Management Fee": "管理費",
  "MIFA Exhibition PR / Investment Activity (Past Two Editions)": "MIFA出展PR/投資活動（過去2回分）",
  "Scripts": "脚本",
  "Concept Art": "コンセプトアート",
  "Planning": "企画",
  "Character Design": "キャラクターデザイン",
  "Storyboard (India Side)": "ストーリーボード（インド側）",
  "MA Studio (Potential Co-Production)": "MAスタジオ（コープロダクション候補）",
  "Color Grading (Potential Co-Production)": "カラーグレーディング（コープロダクション候補）",
  "AI Rotoscoping (Characters) (Potential Co-Production)":
    "AIロトスコーピング（キャラクター、コープロダクション候補）",
  "AI Effect (Potential Co-Production)": "AIエフェクト（コープロダクション候補）",
  "AI Animation Retouching (Potential Co-Production)": "AIアニメーションレタッチ（コープロダクション候補）",
  "AI Know-how Provision / Consulting": "AIノウハウ提供/コンサルティング",
  "Live Action Overseas Filming (reduced scope)": "海外実写撮影（縮小範囲）",
  "MA Studio (Co-production)": "MAスタジオ（コープロダクション）",
  "Color Grading (Co-production)": "カラーグレーディング（コープロダクション）",
  "AI Rotoscoping (Characters) (Co-production)": "AIロトスコーピング（キャラクター、コープロダクション）",
  "AI Effect (Co-production)": "AIエフェクト（コープロダクション）",
  "AI Animation Retouching (Co-production)": "AIアニメーションレタッチ（コープロダクション）",
  "Live Action Overseas Filming is reduced to JPY 500,000. AI Know-how Provision / Consulting is moved to AI Rotoscoping Japan Side. Co-production scope is updated as requested.":
    "海外実写撮影を50万円目安に縮小し、AIノウハウ提供/コンサルティングをAIロトスコーピング日本側へ移動。コープロダクション範囲も更新しています。",
  "Reduced to JPY 500,000 from the previous overseas filming scope.":
    "以前の海外撮影範囲から50万円目安へ縮小しました。",
  "Compositing moved to Co-production.": "コンポジットをコープロダクションへ移動しました。",
  "AI Know-how Provision / Consulting moved here from Co-production.":
    "AIノウハウ提供/コンサルティングをコープロダクションからここへ移動しました。",
  "Supersub LLC will visit India and produce together with the Toonz team.":
    "Supersub LLCがインドを訪問し、Toonzチームと共同で制作します。",
  "Matched to the updated production budget: JPY 500,000 / $3,333.":
    "更新後の制作予算に合わせました: 50万円目安 / $3,333。",
  "Updated: JPY 500,000 cap / reduced scope": "更新: 50万円目安 / 範囲縮小",
  "Moved to Co-production": "コープロダクションへ移動",
  "Moved from Co-production / JPY 5,000,000 reference": "コープロダクションから移動 / 500万円目安",
  "Updated co-production scope": "更新後のコープロダクション範囲",
  "Moved from Post-Production Japan Side": "ポストプロダクション日本側から移動",
  "Updated: aligned with production budget / JPY 500,000": "更新: 制作予算に合わせて50万円目安",
  "Price TBD; excluded from total": "金額未定のため合計から除外",
  "JPY 5,000,000 reference": "500万円目安",
  "Moved": "移動",
};

let currentLanguage = getInitialLanguage();

const monthHeader = document.querySelector("#monthHeader");
const ganttBody = document.querySelector("#ganttBody");
const ganttInner = document.querySelector("#ganttInner");
const currentLine = document.querySelector("#currentLine");
const detailPanel = document.querySelector("#detailPanel");
const summaryCards = document.querySelector("#summaryCards");
const budgetSummary = document.querySelector("#budgetSummary");
const budgetDetails = document.querySelector("#budgetDetails");
const oldBudgetSummary = document.querySelector("#oldBudgetSummary");
const oldBudgetDetails = document.querySelector("#oldBudgetDetails");
const septemberBudgetSummary = document.querySelector("#septemberBudgetSummary");
const septemberBudgetDetails = document.querySelector("#septemberBudgetDetails");
const languageButtons = document.querySelectorAll("[data-language]");

const months = buildMonths(timeline.start, timeline.end);
let selectedId = "film-complete";

document.documentElement.style.setProperty("--month-count", months.length);
initLanguageControls();
renderApp();

window.addEventListener("resize", updateCurrentLine);

function initLanguageControls() {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });
}

function renderApp() {
  applyStaticCopy();
  renderHeader();
  renderRows();
  renderSummaryCards();
  renderBudget();
  renderSeptemberBudget();
  selectItem(selectedId);
  updateCurrentLine();
}

function setLanguage(language) {
  if (!copyByLanguage[language] || language === currentLanguage) return;
  currentLanguage = language;
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    // The language toggle still works when storage is unavailable.
  }
  renderApp();
}

function getInitialLanguage() {
  try {
    const storedLanguage = localStorage.getItem(languageStorageKey);
    if (copyByLanguage[storedLanguage]) return storedLanguage;
  } catch {
    // File previews can restrict storage in some browsers.
  }
  return "en";
}

function getCopy() {
  return copyByLanguage[currentLanguage];
}

function applyStaticCopy() {
  const copy = getCopy();
  document.documentElement.lang = currentLanguage;
  document.title = copy.pageTitle;

  Object.entries(copy.staticText).forEach(([id, text]) => {
    const element = document.querySelector(`#${id}`);
    if (element) element.textContent = text;
  });

  document.querySelector("#legend")?.setAttribute("aria-label", copy.aria.legend);
  document.querySelector("#scheduleSection")?.setAttribute("aria-label", copy.aria.schedule);
  document.querySelector("#sidePanel")?.setAttribute("aria-label", copy.aria.sidePanel);
  document.querySelector("#summaryPanel")?.setAttribute("aria-label", copy.aria.summaryPanel);
  document.querySelector("#budget")?.setAttribute("aria-label", copy.aria.budget);
  document.querySelector("#septemberBudget")?.setAttribute("aria-label", copy.aria.septemberBudget);
  document.querySelector(".language-tabs")?.setAttribute("aria-label", copy.aria.language);
  document.querySelector("#oldBudgetGrandTotal").textContent = formatUsd(oldProductionBudget.summary.grandTotal);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function buildMonths(start, end) {
  const result = [];
  let year = start.year;
  let month = start.month;

  while (year < end.year || (year === end.year && month <= end.month)) {
    result.push({
      year,
      month,
      key: toMonthKey(year, month),
    });

    month += 1;
    if (month === 13) {
      month = 1;
      year += 1;
    }
  }

  return result;
}

function renderHeader() {
  const copy = getCopy();
  const monthShortNames = monthShortNamesByLanguage[currentLanguage];
  monthHeader.innerHTML = "";

  const corner = document.createElement("div");
  corner.className = "header-corner";
  corner.textContent = copy.labels.task;
  monthHeader.append(corner);

  months.forEach((month, index) => {
    const cell = document.createElement("div");
    cell.className = "month-cell";
    cell.dataset.monthIndex = index;
    cell.dataset.monthKey = month.key;

    if (month.year >= 2027) {
      cell.classList.add("is-future-year");
    }

    if (isCurrentMonth(month)) {
      cell.classList.add("is-current-month");
    }

    const label = document.createElement("div");
    label.className = "month-label";

    const yearLabel = document.createElement("small");
    yearLabel.textContent = index === 0 || month.month === 1 ? `${month.year}` : "";

    const monthLabel = document.createElement("span");
    monthLabel.textContent = monthShortNames[month.month - 1];

    label.append(yearLabel, monthLabel);
    cell.append(label);
    monthHeader.append(cell);
  });
}

function renderRows() {
  const copy = getCopy();
  ganttBody.innerHTML = "";

  scheduleItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "gantt-row";
    if (item.updated) row.classList.add("is-updated");
    row.dataset.itemId = item.id;

    const label = document.createElement("div");
    label.className = "row-label";

    const title = document.createElement("span");
    title.className = "row-title";
    title.textContent = translateText(item.title);

    const updateBadge = document.createElement("span");
    updateBadge.className = "row-update-badge";
    updateBadge.textContent = copy.labels.updated;

    const kind = document.createElement("span");
    kind.className = "row-kind";
    kind.textContent = translateText(item.kind);

    label.append(title);
    if (item.updated) label.append(updateBadge);
    label.append(kind);
    row.append(label);

    months.forEach((month, index) => {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.style.gridColumn = `${index + 2}`;
      cell.dataset.monthKey = month.key;
      if (month.year >= 2027) {
        cell.classList.add("is-future-year");
      }
      if (isCurrentMonth(month)) {
        cell.classList.add("is-current-month");
      }
      row.append(cell);
    });

    const itemButton = buildItemButton(item);
    row.append(itemButton);
    ganttBody.append(row);
  });
}

function renderSummaryCards() {
  summaryCards.innerHTML = "";

  keyCardIds.forEach((itemId) => {
    const item = scheduleItems.find((entry) => entry.id === itemId);
    if (!item) return;
    const titleText = translateText(item.title);
    const periodText = formatPeriod(item.start, item.end);

    const card = document.createElement("button");
    card.type = "button";
    card.className = `summary-card ${item.type}`;
    card.dataset.itemId = item.id;
    card.setAttribute("aria-label", `${titleText}: ${periodText}`);

    const marker = document.createElement("span");
    marker.className = "summary-marker";
    marker.textContent = item.symbol || "";

    const content = document.createElement("span");
    content.className = "summary-card-content";

    const kind = document.createElement("span");
    kind.className = "summary-card-kind";
    kind.textContent = translateText(item.kind);

    const title = document.createElement("strong");
    title.textContent = titleText;

    const period = document.createElement("span");
    period.className = "summary-card-period";
    period.textContent = periodText;

    content.append(kind, title, period);
    card.append(marker, content);
    card.addEventListener("click", () => selectItem(item.id));
    summaryCards.append(card);
  });
}

function renderBudget() {
  renderBudgetSummary();
  renderBudgetDetails();
  renderOldBudget();
}

function renderSeptemberBudget() {
  renderSeptemberBudgetSummary();
  renderBudgetDetailsList(septemberBudgetDetails, septemberBudget.categories);
}

function renderBudgetSummary() {
  const summaryCopy = getCopy().budgetSummary;
  const knowHow = findBudgetItem("AI Know-how Provision / Consulting");
  const cards = [
    {
      label: summaryCopy.updatedGrandTotal,
      value: formatUsd(productionBudget.summary.grandTotal),
      detail: summaryCopy.oldDetail(
        formatUsd(productionBudget.summary.oldGrandTotal),
        formatUsd(productionBudget.summary.deltaGrandTotal),
      ),
      featured: true,
    },
    {
      label: summaryCopy.subtotal,
      value: formatUsd(productionBudget.summary.subtotal),
      detail: summaryCopy.beforeTax,
    },
    {
      label: summaryCopy.overseasFilming,
      value: formatUsd(3333.33),
      detail: summaryCopy.reducedToJpy,
      changed: true,
    },
    {
      label: summaryCopy.aiKnowHowMoved,
      value: formatUsd(knowHow?.total),
      detail: summaryCopy.nowUnderAi,
      accent: true,
      changed: true,
    },
  ];

  budgetSummary.innerHTML = "";
  cards.forEach((card) => {
    budgetSummary.append(buildBudgetSummaryCard(card));
  });
}

function renderBudgetDetails() {
  renderBudgetDetailsList(budgetDetails, productionBudget.categories);
}

function renderOldBudget() {
  const summaryCopy = getCopy().budgetSummary;
  const oldKnowHow = findBudgetItem("AI Know-how Provision / Consulting", oldProductionBudget);
  const cards = [
    {
      label: summaryCopy.oldGrandTotal,
      value: formatUsd(oldProductionBudget.summary.grandTotal),
      detail: summaryCopy.includingTax,
    },
    {
      label: summaryCopy.oldSubtotal,
      value: formatUsd(oldProductionBudget.summary.subtotal),
      detail: summaryCopy.beforeTax,
    },
    {
      label: summaryCopy.oldTax,
      value: formatUsd(oldProductionBudget.summary.tax),
      detail: summaryCopy.taxEstimate,
    },
    {
      label: summaryCopy.oldAiKnowHow,
      value: formatUsd(oldKnowHow?.total),
      detail: summaryCopy.previouslyUnderCoProduction,
    },
  ];

  oldBudgetSummary.innerHTML = "";
  cards.forEach((card) => {
    oldBudgetSummary.append(buildBudgetSummaryCard(card));
  });
  renderBudgetDetailsList(oldBudgetDetails, oldProductionBudget.categories);
}

function renderSeptemberBudgetSummary() {
  const summaryCopy = getCopy().budgetSummary;
  const cards = [
    {
      label: summaryCopy.totalRequired,
      value: formatUsd(septemberBudget.summary.totalRequired),
      detail: summaryCopy.threeCategories,
      featured: true,
    },
    {
      label: summaryCopy.overseasFilming,
      value: formatUsd(septemberBudget.categories[0].subtotal),
      detail: summaryCopy.liveActionOverseasShoot,
    },
    {
      label: summaryCopy.aiAnimationShoot,
      value: formatUsd(septemberBudget.categories[1].subtotal),
      detail: summaryCopy.studioShoot14Days,
    },
    {
      label: summaryCopy.aiRotoscoping,
      value: formatUsd(septemberBudget.categories[2].subtotal),
      detail: summaryCopy.japanSideProduction,
      accent: true,
    },
  ];

  septemberBudgetSummary.innerHTML = "";
  cards.forEach((card) => {
    septemberBudgetSummary.append(buildBudgetSummaryCard(card));
  });
}

function renderBudgetDetailsList(container, categories) {
  const copy = getCopy();
  container.innerHTML = "";

  categories.forEach((category) => {
    const section = document.createElement("details");
    section.className = "budget-detail";
    if (category.emphasis) section.open = true;
    if (category.updated) section.classList.add("is-updated");

    const summary = document.createElement("summary");
    const labelWrap = document.createElement("span");
    labelWrap.className = "budget-detail-label";
    const name = document.createElement("span");
    name.textContent = translateText(category.name);
    labelWrap.append(name);
    if (category.updated) {
      const badge = document.createElement("em");
      badge.textContent = copy.labels.updated;
      labelWrap.append(badge);
    }
    if (category.changeNote) {
      const note = document.createElement("small");
      note.textContent = translateText(category.changeNote);
      labelWrap.append(note);
    }
    const total = document.createElement("strong");
    total.textContent = formatUsd(category.subtotal);
    summary.append(labelWrap, total);

    const tableWrap = document.createElement("div");
    tableWrap.className = "budget-table-scroll";
    const table = document.createElement("table");
    table.className = "budget-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    copy.tableHeaders.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.append(th);
    });
    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement("tbody");
    category.items.forEach(([item, unit, quantity, totalValue, note]) => {
      const row = document.createElement("tr");
      const noteText = String(note || "");
      if (item.includes("AI Know-how")) row.classList.add("is-highlight");
      if (/Updated|Moved|Reduced|JPY 500,000|co-production scope/i.test(noteText)) {
        row.classList.add("is-changed");
      }
      [
        translateText(item),
        formatUsd(unit),
        formatQuantity(quantity),
        formatUsd(totalValue),
        translateText(note || ""),
      ].forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = String(value ?? "");
        if (index > 0 && index < 4) cell.classList.add("num");
        row.append(cell);
      });
      tbody.append(row);
    });

    table.append(tbody);
    tableWrap.append(table);
    section.append(summary, tableWrap);
    container.append(section);
  });
}

function buildBudgetSummaryCard(card) {
  const article = document.createElement("article");
  article.className = "budget-summary-card";
  if (card.featured) article.classList.add("is-featured");
  if (card.accent) article.classList.add("is-accent");
  if (card.changed) article.classList.add("is-changed");

  const label = document.createElement("span");
  label.textContent = card.label;

  const value = document.createElement("strong");
  value.textContent = card.value;

  const detail = document.createElement("small");
  detail.textContent = card.detail;

  article.append(label, value, detail);
  return article;
}

function buildItemButton(item) {
  const copy = getCopy();
  const startIndex = monthIndex(item.start);
  const endIndex = monthIndex(item.end);
  const isSingleMonth = startIndex === endIndex;
  const isPointEvent = item.symbol && isSingleMonth && item.type !== "production";
  const titleText = translateText(item.title);
  const periodText = formatPeriod(item.start, item.end);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Item "${item.id}" is outside the timeline.`);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = `task-button ${item.type}`;
  if (item.updated) {
    button.classList.add("is-updated");
    button.dataset.updateBadge = copy.labels.updatedShort;
  }
  if (isSingleMonth && !isPointEvent && item.type !== "milestone") {
    button.classList.add("short-event");
  }
  button.dataset.itemId = item.id;
  button.style.gridColumn = `${startIndex + 2} / ${endIndex + 3}`;
  button.setAttribute("aria-label", `${titleText}: ${periodText}`);
  button.title = `${titleText} / ${periodText}`;

  if (item.type === "milestone") {
    button.classList.add("milestone");
    button.textContent = item.symbol || "★";
  } else if (isPointEvent) {
    button.classList.add("point-event");
    button.textContent = item.symbol;
  } else {
    if (item.symbol) {
      const symbol = document.createElement("span");
      symbol.className = "task-symbol";
      symbol.textContent = item.symbol;
      button.append(symbol);
    }

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = translateText(item.shortTitle || item.title);
    button.append(text);

    if (item.updated) {
      const badge = document.createElement("span");
      badge.className = "task-update-badge";
      badge.textContent = copy.labels.updatedShort;
      button.append(badge);
    }
  }

  button.addEventListener("click", () => selectItem(item.id));

  return button;
}

function selectItem(itemId) {
  selectedId = itemId;
  const item = scheduleItems.find((entry) => entry.id === itemId);
  if (!item) return;
  const copy = getCopy();
  const kindText = translateText(item.kind);
  const updatedText = item.updated ? ` / ${copy.labels.updated}` : "";

  document.querySelectorAll(".gantt-row, .task-button, .summary-card").forEach((element) => {
    element.classList.toggle("is-selected", element.dataset.itemId === itemId);
  });

  document.querySelectorAll("button[data-item-id]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.itemId === itemId ? "true" : "false");
  });

  detailPanel.style.setProperty("--detail-color", typeColors[item.type]);
  detailPanel.innerHTML = `
    <p class="detail-kind">${kindText}${updatedText}</p>
    <h2>${translateText(item.title)}</h2>
    <p class="detail-period">${formatPeriod(item.start, item.end)}</p>
    <p class="detail-body">${translateText(item.detail)}</p>
    <div class="detail-meta">
      <div class="meta-row"><span>${copy.labels.type}</span><strong>${kindText}</strong></div>
      <div class="meta-row"><span>${copy.labels.deliverable}</span><strong>${translateText(item.output)}</strong></div>
    </div>
  `;
}

function updateCurrentLine() {
  const today = new Date();
  const currentMonthIndex = months.findIndex(
    (month) => month.year === today.getFullYear() && month.month === today.getMonth() + 1,
  );

  if (currentMonthIndex === -1) {
    currentLine.hidden = true;
    return;
  }

  const monthCell = monthHeader.querySelector(`[data-month-index="${currentMonthIndex}"]`);
  if (!monthCell) return;

  const month = months[currentMonthIndex];
  const daysInMonth = new Date(month.year, month.month, 0).getDate();
  const dayFraction = Math.min(Math.max((today.getDate() - 0.5) / daysInMonth, 0), 1);
  const innerRect = ganttInner.getBoundingClientRect();
  const cellRect = monthCell.getBoundingClientRect();
  const left = cellRect.left - innerRect.left + cellRect.width * dayFraction;

  currentLine.hidden = false;
  currentLine.style.left = `${left}px`;
}

function findBudgetItem(itemName, budget = productionBudget) {
  for (const category of budget.categories) {
    const item = category.items.find(([name]) => name === itemName);
    if (item) {
      const [name, unit, quantity, total, note] = item;
      return { name, unit, quantity, total, note, category: category.name };
    }
  }
  return undefined;
}

function formatUsd(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return getCopy().labels.tbd;
  }

  if (currentLanguage === "ja") {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(Number(value) * yenPerDollar);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatQuantity(value) {
  if (value === null || value === undefined) return "";
  return translateText(String(value));
}

function monthIndex(monthKey) {
  return months.findIndex((month) => month.key === monthKey);
}

function toMonthKey(year, month) {
  return `${year}-${String(month).padStart(2, "0")}`;
}

function formatPeriod(start, end) {
  const startMonth = parseMonthKey(start);
  const endMonth = parseMonthKey(end);
  const startText = formatMonthYear(startMonth);
  const endText = formatMonthYear(endMonth);

  return start === end ? startText : `${startText} - ${endText}`;
}

function formatMonthYear(month) {
  if (currentLanguage === "ja") {
    return `${month.year}年${month.month}月`;
  }

  return `${monthNamesByLanguage.en[month.month - 1]} ${month.year}`;
}

function translateText(value) {
  if (value === null || value === undefined) return "";
  if (currentLanguage !== "ja") return value;
  return jaTranslations[value] || value;
}

function parseMonthKey(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return { year, month };
}

function isCurrentMonth(month) {
  const today = new Date();
  return month.year === today.getFullYear() && month.month === today.getMonth() + 1;
}
