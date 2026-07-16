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
    id: "shooting",
    title: "Shooting",
    shortTitle: "SH",
    kind: "Production",
    type: "production",
    start: "2026-09",
    end: "2026-09",
    detail:
      "Shoot the animation reference scenes and additional documentary material in the same month to prepare assets for October onward.",
    output: "Production footage",
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

const productionBudget = {
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

const monthNames = [
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
];

const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthHeader = document.querySelector("#monthHeader");
const ganttBody = document.querySelector("#ganttBody");
const ganttInner = document.querySelector("#ganttInner");
const currentLine = document.querySelector("#currentLine");
const detailPanel = document.querySelector("#detailPanel");
const summaryCards = document.querySelector("#summaryCards");
const budgetSummary = document.querySelector("#budgetSummary");
const budgetDetails = document.querySelector("#budgetDetails");

const months = buildMonths(timeline.start, timeline.end);
let selectedId = "film-complete";

document.documentElement.style.setProperty("--month-count", months.length);
renderHeader();
renderRows();
renderSummaryCards();
renderBudget();
selectItem(selectedId);
updateCurrentLine();

window.addEventListener("resize", updateCurrentLine);

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
  monthHeader.innerHTML = "";

  const corner = document.createElement("div");
  corner.className = "header-corner";
  corner.textContent = "Task";
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
  ganttBody.innerHTML = "";

  scheduleItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "gantt-row";
    row.dataset.itemId = item.id;

    const label = document.createElement("div");
    label.className = "row-label";

    const title = document.createElement("span");
    title.className = "row-title";
    title.textContent = item.title;

    const kind = document.createElement("span");
    kind.className = "row-kind";
    kind.textContent = item.kind;

    label.append(title, kind);
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

    const card = document.createElement("button");
    card.type = "button";
    card.className = `summary-card ${item.type}`;
    card.dataset.itemId = item.id;
    card.setAttribute("aria-label", `${item.title}: ${formatPeriod(item.start, item.end)}`);

    const marker = document.createElement("span");
    marker.className = "summary-marker";
    marker.textContent = item.symbol || "";

    const content = document.createElement("span");
    content.className = "summary-card-content";

    const kind = document.createElement("span");
    kind.className = "summary-card-kind";
    kind.textContent = item.kind;

    const title = document.createElement("strong");
    title.textContent = item.title;

    const period = document.createElement("span");
    period.className = "summary-card-period";
    period.textContent = formatPeriod(item.start, item.end);

    content.append(kind, title, period);
    card.append(marker, content);
    card.addEventListener("click", () => selectItem(item.id));
    summaryCards.append(card);
  });
}

function renderBudget() {
  renderBudgetSummary();
  renderBudgetDetails();
}

function renderBudgetSummary() {
  const knowHow = findBudgetItem("AI Know-how Provision / Consulting");
  const cards = [
    {
      label: "Grand Total",
      value: formatUsd(productionBudget.summary.grandTotal),
      detail: "Including 10% tax",
      featured: true,
    },
    {
      label: "Subtotal",
      value: formatUsd(productionBudget.summary.subtotal),
      detail: "Before tax",
    },
    {
      label: "Tax",
      value: formatUsd(productionBudget.summary.tax),
      detail: "10% estimate",
    },
    {
      label: "AI Know-how / Consulting",
      value: formatUsd(knowHow?.total),
      detail: "JPY 5,000,000 reference",
      accent: true,
    },
  ];

  budgetSummary.innerHTML = "";
  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "budget-summary-card";
    if (card.featured) article.classList.add("is-featured");
    if (card.accent) article.classList.add("is-accent");

    const label = document.createElement("span");
    label.textContent = card.label;

    const value = document.createElement("strong");
    value.textContent = card.value;

    const detail = document.createElement("small");
    detail.textContent = card.detail;

    article.append(label, value, detail);
    budgetSummary.append(article);
  });
}

function renderBudgetDetails() {
  budgetDetails.innerHTML = "";

  productionBudget.categories.forEach((category) => {
    const section = document.createElement("details");
    section.className = "budget-detail";
    if (category.emphasis) section.open = true;

    const summary = document.createElement("summary");
    const name = document.createElement("span");
    name.textContent = category.name;
    const total = document.createElement("strong");
    total.textContent = formatUsd(category.subtotal);
    summary.append(name, total);

    const tableWrap = document.createElement("div");
    tableWrap.className = "budget-table-scroll";
    const table = document.createElement("table");
    table.className = "budget-table";

    const thead = document.createElement("thead");
    thead.innerHTML = "<tr><th>Item</th><th>Unit Price</th><th>Qty / Days</th><th>Total</th><th>Note</th></tr>";
    table.append(thead);

    const tbody = document.createElement("tbody");
    category.items.forEach(([item, unit, quantity, totalValue, note]) => {
      const row = document.createElement("tr");
      if (item.includes("AI Know-how")) row.classList.add("is-highlight");
      [item, formatUsd(unit), quantity, formatUsd(totalValue), note || ""].forEach((value, index) => {
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
    budgetDetails.append(section);
  });
}

function buildItemButton(item) {
  const startIndex = monthIndex(item.start);
  const endIndex = monthIndex(item.end);
  const isSingleMonth = startIndex === endIndex;
  const isPointEvent = item.symbol && isSingleMonth && item.type !== "production";

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Item "${item.id}" is outside the timeline.`);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = `task-button ${item.type}`;
  if (isSingleMonth && !isPointEvent && item.type !== "milestone") {
    button.classList.add("short-event");
  }
  button.dataset.itemId = item.id;
  button.style.gridColumn = `${startIndex + 2} / ${endIndex + 3}`;
  button.setAttribute("aria-label", `${item.title}: ${formatPeriod(item.start, item.end)}`);
  button.title = `${item.title} / ${formatPeriod(item.start, item.end)}`;

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
    text.textContent = item.shortTitle || item.title;
    button.append(text);
  }

  button.addEventListener("click", () => selectItem(item.id));

  return button;
}

function selectItem(itemId) {
  selectedId = itemId;
  const item = scheduleItems.find((entry) => entry.id === itemId);
  if (!item) return;

  document.querySelectorAll(".gantt-row, .task-button, .summary-card").forEach((element) => {
    element.classList.toggle("is-selected", element.dataset.itemId === itemId);
  });

  document.querySelectorAll("button[data-item-id]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.itemId === itemId ? "true" : "false");
  });

  detailPanel.style.setProperty("--detail-color", typeColors[item.type]);
  detailPanel.innerHTML = `
    <p class="detail-kind">${item.kind}</p>
    <h2>${item.title}</h2>
    <p class="detail-period">${formatPeriod(item.start, item.end)}</p>
    <p class="detail-body">${item.detail}</p>
    <div class="detail-meta">
      <div class="meta-row"><span>Type</span><strong>${item.kind}</strong></div>
      <div class="meta-row"><span>Deliverable</span><strong>${item.output}</strong></div>
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

function findBudgetItem(itemName) {
  for (const category of productionBudget.categories) {
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
    return "TBD";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
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
  const startText = `${monthNames[startMonth.month - 1]} ${startMonth.year}`;
  const endText = `${monthNames[endMonth.month - 1]} ${endMonth.year}`;

  return start === end ? startText : `${startText} - ${endText}`;
}

function parseMonthKey(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return { year, month };
}

function isCurrentMonth(month) {
  const today = new Date();
  return month.year === today.getFullYear() && month.month === today.getMonth() + 1;
}
