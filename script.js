const verticals = [
  {
    id: "oilGas",
    name: "Oil & Gas",
    description: "Asset-intensive upstream and downstream operations.",
    personas: [
      {
        id: "ceoCfo",
        name: "CEO / CFO",
        role: "Owns profitable growth and capital allocation.",
        shortDescription:
          "Needs confidence that plant data is trustworthy so cash isn't frozen in duplicate or misclassified materials.",
        questions: [
          {
            id: "ceo-cfo-1",
            text: "How do you currently measure the cash tied up in spare parts and project materials?",
            options: [
              "Finance teams reconcile stock quarterly and adjust reserves if counts feel high.",
              "We have a live dashboard that flags duplicates, so working capital is always visible.",
              "Controllers guess based on historical spend because material masters are inconsistent.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "A live view means we can plug CODA into existing controls and prove incremental cash unlocks quickly.",
              weak:
                "Quarterly reconciliation is slow; tie the lag to cash risk and propose a PoC that validates live data feeds.",
              bad:
                "Guesswork highlights the data gap. Position CODA as the fastest path to measurable, audit-ready visibility.",
            },
          },
          {
            id: "ceo-cfo-2",
            text: "When duplicate materials slip in, what downstream impact hurts you the most?",
            options: [
              "Higher carrying costs and missed savings targets on procurement programs.",
              "It only slows maintenance because techs can't find the right part description.",
              "No real impact; we simply store more inventory to be safe.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Connect CODA's deduplication to working-capital targets and procurement savings the C-suite tracks.",
              weak:
                "Maintenance friction is real, but link it back to financial KPIs so the CFO sees the value path.",
              bad:
                "Storing more inventory signals wasted cash. Use this to highlight how clean masters reduce buffers.",
            },
          },
          {
            id: "ceo-cfo-3",
            text: "What would you need to see in a 4-week pilot to greenlight funding?",
            options: [
              "A quantified forecast of cash released plus a plan to scale across refineries.",
              "A few nice-to-have reports that show data quality trends over time.",
              "Proof that engineering and maintenance teams can tolerate another tool in their stack.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Align the pilot on cash release and scale, then map CODA outputs directly to her investment criteria.",
              weak:
                "Reports without financial linkage won't unlock budget. Reframe toward measurable KPIs.",
              bad:
                "Tool tolerance misses the CFO's lens. Pivot to business outcomes and risk reduction.",
            },
          },
        ],
      },
      {
        id: "operationsMgr",
        name: "Operations Manager",
        role: "Keeps production reliable across plants and turnarounds.",
        shortDescription:
          "Needs accurate materials and vendor data so crews can execute safely without delays or excess buffers.",
        questions: [
          {
            id: "ops-1",
            text: "How do you keep maintenance teams confident the part they pick matches the work order?",
            options: [
              "Supervisors rely on tribal knowledge and photos in chat groups to confirm parts.",
              "We run a standardized catalog that enforces descriptions before anything is issued.",
              "Techs swap parts if they look close enough and deal with issues later.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Standardized catalogs pair perfectly with CODA's governed descriptions to keep jobs first-time-right.",
              weak:
                "Tribal knowledge is fragile. CODA can capture that detail and standardize it across shifts.",
              bad:
                "Swapping parts risks safety and downtime. Position CODA as the guardrail that prevents mismatches.",
            },
          },
          {
            id: "ops-2",
            text: "What happens when a bill of materials includes a material ID that doesn't exist anymore?",
            options: [
              "Work stops while planners scramble to find an alternative.",
              "We have an automated cross-reference process that points to the right replacement.",
              "It rarely happens, so we ignore it unless a shutdown is near.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Great baseline. CODA can enrich replacements faster and keep BOMs aligned as vendors change.",
              weak:
                "Scramble time is the pain. Quantify delays and show how CODA keeps BOMs synchronized.",
              bad:
                "Ignoring broken IDs risks outage delays. Use this to stress proactive data quality before turnarounds.",
            },
          },
          {
            id: "ops-3",
            text: "How do you decide the right safety stock when specs differ slightly across plants?",
            options: [
              "We set conservative levels because we don't trust the descriptions.",
              "We normalize specs and share one source of truth, so buffers are lean.",
              "Each plant picks its own policy, and we revisit it every few years.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Lean buffers with shared specs aligns with CODA's normalization. Build on this to tighten turnarounds.",
              weak:
                "Conservative stock is costly. CODA's deduplication can cut buffers without risking uptime.",
              bad:
                "Infrequent reviews hide risk. Offer CODA as a continuous guardrail for spec drift.",
            },
          },
        ],
      },
      {
        id: "maintenanceMgr",
        name: "Maintenance Manager",
        role: "Delivers safe, on-time maintenance and turnaround execution.",
        shortDescription:
          "Needs clean material masters to avoid rework, wrong picks, and extended downtime during critical windows.",
        questions: [
          {
            id: "maint-1",
            text: "When a technician requests a part and sees multiple similar items, what do they do?",
            options: [
              "They escalate to a planner who checks drawings and vendor catalogs.",
              "They pick the first option and hope it's correct to keep work moving.",
              "Our system clearly flags the right part with standardized specs.",
            ],
            bestOptionIndex: 2,
            feedback: {
              best: "Standardized specs reduce rework. CODA can keep that clarity even as vendors change nomenclature.",
              weak:
                "Escalations slow the craft. Show how CODA surfaces the right part instantly with clean attributes.",
              bad:
                "Guessing invites rework and downtime. Use this to highlight CODA's role in first-time-fix rates.",
            },
          },
          {
            id: "maint-2",
            text: "How do you capture lessons learned when a material description was wrong?",
            options: [
              "We log it in the CMMS and hope procurement updates the record eventually.",
              "We send a note to engineering and move on to the next job.",
              "We push the correction through a governed workflow so future work orders are accurate.",
            ],
            bestOptionIndex: 2,
            feedback: {
              best:
                "Governed workflows match CODA's strengths. Emphasize quick validations and approvals for field feedback.",
              weak:
                "Emails vanish. CODA can route fixes to the right owners and track completion automatically.",
              bad:
                "Delaying updates repeats mistakes. Frame CODA as the loop that turns field insight into better masters.",
            },
          },
          {
            id: "maint-3",
            text: "What is the biggest consequence when spare parts data is inaccurate during a turnaround?",
            options: [
              "Extended downtime because planners scramble for substitutes.",
              "Slight annoyance, but we usually improvise.",
              "We lose track of what was installed versus what was issued.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Downtime is the headline. Tie CODA to minimizing outage duration with ready-to-use, accurate materials.",
              weak:
                "Annoyance understates risk. Press on schedule and safety impacts to build urgency.",
              bad:
                "Traceability gaps are risky. CODA can enforce accurate issuance and closeout records.",
            },
          },
        ],
      },
      {
        id: "warehouseMgr",
        name: "Warehouse / Inventory Manager",
        role: "Manages inventory accuracy, space, and issuing discipline.",
        shortDescription:
          "Needs clean, deduplicated stock data so bins are trusted, slow movers shrink, and audits stay clean.",
        questions: [
          {
            id: "wh-1",
            text: "How often do you discover duplicate materials across bins or sites?",
            options: [
              "Monthly cycle counts expose duplicates we then merge manually.",
              "Rarely, because our master data and barcodes are consistent.",
              "We only catch duplicates when auditors or planners complain.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Consistency is a strength. CODA can keep it that way as new vendors and parts enter the catalog.",
              weak:
                "Manual merges cost time. CODA can automate deduping so counts stay trustworthy.",
              bad:
                "Reactive discovery is risky. Position CODA as the proactive net that catches issues before audits.",
            },
          },
          {
            id: "wh-2",
            text: "What drives excess stock in your warehouses?",
            options: [
              "Unclear descriptions lead buyers to order items we already own.",
              "We intentionally overbuy to avoid stockouts during outages.",
              "Suppliers ship alternates we didn't approve and we shelve them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Great opening. CODA's standardized descriptions can prevent reorders and shrink slow movers quickly.",
              weak:
                "Overbuying is understandable. Show how CODA lowers risk so buffers can safely shrink.",
              bad:
                "Unapproved alternates highlight control gaps. CODA's governance can block bad receipts.",
            },
          },
          {
            id: "wh-3",
            text: "How do you keep auditors confident your on-hand balances are real?",
            options: [
              "We reconcile weekly and correct mismatches by hand.",
              "Our system prevents mismatches because every item is validated at receipt.",
              "We rely on the annual audit to true-up records.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Preventive controls pair well with CODA's validations to keep records clean without heavy effort.",
              weak:
                "Manual corrections are expensive. CODA can automate validation and surface mismatches sooner.",
              bad:
                "Annual cleanups hide problems. CODA brings continuous accuracy so audits are boring.",
            },
          },
        ],
      },
      {
        id: "procurementMgr",
        name: "Procurement Manager",
        role: "Secures materials at the right cost, quality, and speed.",
        shortDescription:
          "Needs standardized specs to negotiate confidently, avoid maverick spend, and enable supplier consolidation.",
        questions: [
          {
            id: "proc-1",
            text: "How do you avoid buying the same part under multiple descriptions or vendors?",
            options: [
              "We rely on buyer experience to spot duplicates during PO creation.",
              "We have a governed catalog that blocks duplicates before requisitions are approved.",
              "We don't worry much—vendors usually correct us if we order wrong.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Governed catalogs align with CODA's strengths. Position rapid onboarding of vendor data to keep it current.",
              weak:
                "Human checks miss patterns. CODA can surface duplicates instantly so savings aren't left on the table.",
              bad:
                "Relying on vendors risks price creep. CODA gives procurement control and leverage.",
            },
          },
          {
            id: "proc-2",
            text: "What slows down sourcing when engineering requests a new material?",
            options: [
              "Specs are unclear, so we email back and forth before going to market.",
              "We already have a template that requires standard attributes up front.",
              "We place a quick order with the usual vendor to save time.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best:
                "Templates are a solid base. CODA can prefill attributes and validate against existing items to go faster.",
              weak:
                "Email loops are costly. Show how CODA structures the intake and proposes matches automatically.",
              bad:
                "Defaulting to the usual vendor hides options. Use CODA to encourage competitive sourcing with clean data.",
            },
          },
          {
            id: "proc-3",
            text: "How do you decide which suppliers to consolidate or negotiate with first?",
            options: [
              "We analyze normalized spend by category and spec to find overlap.",
              "We pick the highest spend vendors regardless of category.",
              "We negotiate when contracts come up, without deep analysis.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Normalized spend is ideal. CODA's standardized specs give you the confidence to consolidate aggressively.",
              weak:
                "High spend is a start, but CODA can reveal hidden overlaps that make negotiations stronger.",
              bad:
                "Waiting for renewals leaves value on the table. CODA enables proactive category strategies.",
            },
          },
        ],
      },
    ],
  },
];

const industryListEl = document.getElementById("industryList");
const personaListEl = document.getElementById("personaList");
const industryDetailsEl = document.getElementById("industryDetails");
const personaDetailsEl = document.getElementById("personaDetails");
const redPathCardEl = document.getElementById("redPathCard");
const scenarioTitleEl = document.getElementById("scenarioTitle");
const scenarioDescriptionEl = document.getElementById("scenarioDescription");
const conversationLogEl = document.getElementById("conversationLog");
const currentPromptEl = document.getElementById("currentPrompt");
const answerOptionsEl = document.getElementById("answerOptions");
const feedbackContentEl = document.getElementById("feedbackContent");
const restartButton = document.getElementById("restartScenario");
const progressLabelEl = document.getElementById("progressLabel");
const progressFillEl = document.getElementById("progressFill");
const startTrainingButton = document.getElementById("startTraining");
const startInstructionsEl = document.getElementById("startInstructions");

let currentIndustry = null;
let currentPersona = null;
let currentQuestionIndex = 0;
let totalQuestions = 0;

function init() {
  renderIndustryList();
  restartButton.addEventListener("click", () => {
    if (currentPersona) {
      startRoleplay();
    }
  });
  startTrainingButton.addEventListener("click", startRoleplay);
}

function renderIndustryList() {
  industryListEl.innerHTML = "";
  verticals.forEach((industry) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = industry.name;
    button.dataset.id = industry.id;
    button.addEventListener("click", () => selectIndustry(industry.id));
    li.appendChild(button);
    industryListEl.appendChild(li);
  });
}

function selectIndustry(industryId) {
  currentIndustry = verticals.find((ind) => ind.id === industryId) || null;
  currentPersona = null;
  currentQuestionIndex = 0;
  totalQuestions = 0;
  updateActiveButtons(industryListEl, industryId);
  renderIndustryDetails();
  renderPersonaList();
  startTrainingButton.disabled = true;
  startInstructionsEl.textContent = "Select a persona to unlock the roleplay.";
  resetConversation();
  personaDetailsEl.innerHTML =
    '<p>Select a persona to view the storyline, value focus, and the best probing path.</p>';
  redPathCardEl.innerHTML =
    '<h2>Red-path Strategy</h2><p>Persona-specific cues will appear after you select someone.</p>';
}

function renderIndustryDetails() {
  if (!currentIndustry) {
    industryDetailsEl.innerHTML =
      '<p>Select an industry to see the story and hooks that land.</p>';
    return;
  }

  industryDetailsEl.innerHTML = `
    <h3>${currentIndustry.name}</h3>
    <p>${currentIndustry.description}</p>
  `;
}

function renderPersonaList() {
  personaListEl.innerHTML = "";

  if (!currentIndustry) {
    personaListEl.innerHTML =
      '<li class="placeholder">Pick an industry to unlock personas.</li>';
    return;
  }

  currentIndustry.personas.forEach((persona) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = `${persona.name} · ${persona.role}`;
    button.dataset.id = persona.id;
    button.addEventListener("click", () => selectPersona(persona.id));
    li.appendChild(button);
    personaListEl.appendChild(li);
  });

  updateActiveButtons(personaListEl, "");
}

function selectPersona(personaId) {
  if (!currentIndustry) return;
  currentPersona = currentIndustry.personas.find((p) => p.id === personaId) || null;
  currentQuestionIndex = 0;
  totalQuestions = currentPersona ? currentPersona.questions.length : 0;
  updateActiveButtons(personaListEl, personaId);
  renderPersonaDetails();
  renderRedPathCard();
  resetConversation();
  startTrainingButton.disabled = !currentPersona;
  if (currentPersona) {
    startInstructionsEl.textContent = "Ready when you are. Start the roleplay.";
  }
}

function renderPersonaDetails() {
  if (!currentPersona) {
    personaDetailsEl.innerHTML =
      '<p>Select a persona to view their storyline, values, and question strategy.</p>';
    return;
  }

  personaDetailsEl.innerHTML = `
    <h2>${currentPersona.name}</h2>
    <p class="persona-role">${currentPersona.role}</p>
    <p>${currentPersona.shortDescription}</p>
    <p><strong>Focus the roleplay on:</strong> reliable data, cash discipline, and confident decisions.</p>
  `;
}

function renderRedPathCard() {
  if (!currentPersona) {
    redPathCardEl.innerHTML =
      '<h2>Red-path Strategy</h2><p>Choose a persona to see their coaching plan.</p>';
    return;
  }

  redPathCardEl.innerHTML = `
    <h2>Red-path Strategy</h2>
    <p>Guide the dialogue to expose data risk, connect it to this persona's goals, and co-design a fast CODA proof.</p>
    <p><strong>Reminder:</strong> Keep answers crisp, tie back to MDM-enabled outcomes, and secure next steps.</p>
  `;
}

function startRoleplay() {
  if (!currentPersona) return;
  currentQuestionIndex = 0;
  totalQuestions = currentPersona.questions.length;
  scenarioTitleEl.textContent = `${currentPersona.name} Roleplay`;
  scenarioDescriptionEl.textContent = currentPersona.shortDescription;
  restartButton.disabled = false;
  conversationLogEl.innerHTML = "";
  feedbackContentEl.innerHTML =
    '<p>Answer quality, context, and the recommended red path will appear here.</p>';
  refreshProgress(0, totalQuestions);
  renderCurrentQuestion();
}

function resetConversation() {
  conversationLogEl.innerHTML =
    '<p class="empty-state">No dialogue yet. Select a persona and start the roleplay.</p>';
  currentPromptEl.innerHTML = "<strong>Question:</strong> —";
  answerOptionsEl.innerHTML = "";
  feedbackContentEl.innerHTML =
    '<p>Answer quality, context, and the recommended red path will appear here.</p>';
  restartButton.disabled = true;
  refreshProgress(0, 0);
}

function renderCurrentQuestion() {
  if (!currentPersona) return;
  const question = currentPersona.questions[currentQuestionIndex];
  if (!question) {
    concludeRoleplay();
    return;
  }

  currentPromptEl.innerHTML = `<strong>Question:</strong> ${question.text}`;
  answerOptionsEl.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-copy">${optionText}</span>`;
    button.addEventListener("click", () => handleAnswer(question, index));
    answerOptionsEl.appendChild(button);
  });
}

function handleAnswer(question, selectedIndex) {
  const evaluation = evaluateAnswer(question, selectedIndex);
  addConversationEntry(question.text, question.options[selectedIndex], evaluation.quality);
  updateFeedback(evaluation.feedbackMessage, evaluation.quality);
  currentQuestionIndex += 1;
  refreshProgress(currentQuestionIndex, totalQuestions);
  renderCurrentQuestion();
}

function evaluateAnswer(question, selectedIndex) {
  const bestIndex = question.bestOptionIndex;
  const alternativeIndices = question.options
    .map((_, idx) => idx)
    .filter((idx) => idx !== bestIndex);
  const weakIndex = alternativeIndices[0];
  const isBest = selectedIndex === bestIndex;
  const isWeak = selectedIndex === weakIndex;

  if (isBest) {
    return { quality: "Optimal", feedbackMessage: question.feedback.best };
  }

  if (isWeak) {
    return { quality: "Medium", feedbackMessage: question.feedback.weak };
  }

  return { quality: "Unfavorable", feedbackMessage: question.feedback.bad };
}

function addConversationEntry(question, answer, quality) {
  const entry = document.createElement("div");
  entry.className = "conversation-entry";

  const stageEl = document.createElement("p");
  stageEl.className = "stage-type";
  stageEl.textContent = `Question ${currentQuestionIndex + 1}`;

  const questionEl = document.createElement("p");
  questionEl.className = "question";
  questionEl.innerHTML = `<strong>Question:</strong> ${question}`;

  const answerEl = document.createElement("p");
  answerEl.className = `answer ${getQualityClass(quality)}`;
  answerEl.textContent = `Answer (${quality}): ${answer}`;

  entry.appendChild(stageEl);
  entry.appendChild(questionEl);
  entry.appendChild(answerEl);
  conversationLogEl.appendChild(entry);
  conversationLogEl.scrollTop = conversationLogEl.scrollHeight;
}

function updateFeedback(feedback, quality) {
  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <p><strong>Quality:</strong> ${quality}</p>
      <p>${ensureSentence(feedback)}</p>
      <p><strong>Next step:</strong> Keep probing with CODA outcomes in mind.</p>
    </div>
  `;
}

function concludeRoleplay() {
  currentPromptEl.innerHTML =
    "<strong>Question:</strong> The persona awaits your summary and PoC next steps.";
  answerOptionsEl.innerHTML = "";
  refreshProgress(totalQuestions, totalQuestions);
  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <p><strong>Roleplay complete.</strong></p>
      <p>Summarize the value you uncovered, map CODA capabilities to it, and propose the next session.</p>
    </div>
  `;
}

function updateActiveButtons(listEl, activeId) {
  const buttons = listEl.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.id === activeId);
  });
}

function refreshProgress(completedSteps, stepsTotal) {
  if (!progressFillEl || !progressLabelEl) return;
  if (!stepsTotal) {
    progressFillEl.style.width = "0%";
    progressLabelEl.textContent = "Step 0 of 0";
    return;
  }

  const clampedCompleted = Math.min(completedSteps, stepsTotal);
  const percent = (clampedCompleted / stepsTotal) * 100;
  progressFillEl.style.width = `${percent}%`;

  const displayStep = clampedCompleted >= stepsTotal ? stepsTotal : clampedCompleted + 1;
  progressLabelEl.textContent = `Step ${displayStep} of ${stepsTotal}`;
}

function getQualityClass(quality) {
  switch (quality) {
    case "Optimal":
      return "quality-optimal";
    case "Medium":
      return "quality-medium";
    default:
      return "quality-unfavorable";
  }
}

function ensureSentence(text) {
  if (typeof text !== "string") return "";
  const trimmed = text.trim();
  if (!trimmed) return "";
  const lastChar = trimmed.slice(-1);
  if ([".", "?", "!"].includes(lastChar)) {
    return trimmed;
  }
  return `${trimmed}.`;
}

init();
