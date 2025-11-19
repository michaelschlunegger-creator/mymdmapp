const industries = getIndustries();

const industryListEl = document.getElementById("industryList");
const personaListEl = document.getElementById("personaList");
const scenarioListEl = document.getElementById("scenarioList");
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

let currentIndustry = null;
let currentPersona = null;
let currentScenario = null;
let stageIndex = 0;

function init() {
  renderIndustryList();
  restartButton.addEventListener("click", () => {
    if (currentScenario) {
      startScenario(currentScenario);
    }
  });
}

function renderIndustryList() {
  industryListEl.innerHTML = "";
  industries.forEach((industry) => {
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
  currentIndustry = industries.find((ind) => ind.id === industryId) || null;
  currentPersona = null;
  currentScenario = null;
  stageIndex = 0;
  updateActiveButtons(industryListEl, industryId);
  renderIndustryDetails();
  renderPersonaList();
  scenarioListEl.innerHTML =
    '<li class="placeholder">Select a persona to unlock scenarios.</li>';
  resetConversation();
  redPathCardEl.innerHTML =
    '<h2>Red-path Strategy</h2><p>Choose a persona to see their coaching plan.</p>';
}

function renderIndustryDetails() {
  if (!currentIndustry) {
    industryDetailsEl.innerHTML =
      '<p>Select an industry to see the overall story, red-path focus, and suggested hooks.</p>';
    return;
  }

  const ideas = currentIndustry.questionIdeas
    .map((idea) => `<li>${idea}</li>`)
    .join("");

  industryDetailsEl.innerHTML = `
    <h3>${currentIndustry.name}</h3>
    <p>${currentIndustry.summary}</p>
    <p><strong>Red-path focus:</strong> ${currentIndustry.hookFocus}</p>
    <h4>Hooks that resonate</h4>
    <ul>${ideas}</ul>
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
  currentScenario = null;
  stageIndex = 0;
  updateActiveButtons(personaListEl, personaId);
  renderPersonaDetails();
  renderRedPathCard();
  renderScenarioList();
  resetConversation();
}

function renderPersonaDetails() {
  if (!currentPersona) {
    personaDetailsEl.innerHTML =
      '<p>Select a persona to view their storyline, values, and question strategy.</p>';
    return;
  }

  const valueList = currentPersona.values.map((item) => `<li>${item}</li>`).join("");
  const benefits = currentPersona.benefits
    .map((item) => `<li>${item}</li>`)
    .join("");
  const questionThemes = currentPersona.questionThemes
    .map((item) => `<li>${item}</li>`)
    .join("");

  personaDetailsEl.innerHTML = `
    <h2>${currentPersona.name}</h2>
    <p class="persona-role">${currentPersona.role} · ${currentPersona.company}</p>
    <p>${currentPersona.storyline}</p>
    <p><strong>Ideal strategy:</strong> ${currentPersona.strategy}</p>
    <div class="grid-two">
      <div>
        <h3>What this persona values</h3>
        <ul>${valueList}</ul>
      </div>
      <div>
        <h3>Benefits CODA brings</h3>
        <ul>${benefits}</ul>
      </div>
    </div>
    <div>
      <h3>Question themes that land</h3>
      <ul>${questionThemes}</ul>
    </div>
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
    <p>${currentPersona.redPath}</p>
  `;
}

function renderScenarioList() {
  scenarioListEl.innerHTML = "";
  if (!currentPersona) {
    scenarioListEl.innerHTML =
      '<li class="placeholder">Select a persona to unlock scenarios.</li>';
    return;
  }

  currentPersona.scenarios.forEach((scenario) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = scenario.title;
    button.dataset.id = scenario.id;
    button.addEventListener("click", () => selectScenario(scenario.id));
    li.appendChild(button);
    scenarioListEl.appendChild(li);
  });

  updateActiveButtons(scenarioListEl, "");
}

function selectScenario(scenarioId) {
  if (!currentPersona) return;
  currentScenario = currentPersona.scenarios.find((s) => s.id === scenarioId) || null;
  if (!currentScenario) return;
  stageIndex = 0;
  updateActiveButtons(scenarioListEl, scenarioId);
  startScenario(currentScenario);
}

function startScenario(scenario) {
  scenarioTitleEl.textContent = scenario.title;
  scenarioDescriptionEl.textContent = scenario.description;
  restartButton.disabled = false;
  conversationLogEl.innerHTML = "";
  feedbackContentEl.innerHTML =
    '<p>Answer quality, context, and the recommended red path will appear here.</p>';
  renderStage();
}

function resetConversation() {
  conversationLogEl.innerHTML =
    '<p class="empty-state">No dialogue yet. Select a scenario to see the first dramatic question.</p>';
  currentPromptEl.textContent = "Question: —";
  answerOptionsEl.innerHTML = "";
  feedbackContentEl.innerHTML =
    '<p>Answer quality, context, and the recommended red path will appear here.</p>';
  restartButton.disabled = true;
}

function renderStage() {
  if (!currentScenario) return;
  const stage = currentScenario.stages[stageIndex];
  if (!stage) return;

  currentPromptEl.textContent = `Question: ${stage.question}`;
  answerOptionsEl.innerHTML = "";

  stage.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = `answer-button ${getQualityClass(answer.quality)}`;
    button.innerHTML = `<span class="quality">${answer.quality}</span><span class="answer-copy">Answer: ${answer.statement}</span>`;
    button.addEventListener("click", () => handleAnswer(stage, answer));
    answerOptionsEl.appendChild(button);
  });
}

function handleAnswer(stage, answer) {
  addConversationEntry(stage.stageType, stage.question, answer);
  updateFeedback(answer, stage.stageType);
  stageIndex += 1;
  if (stageIndex >= currentScenario.stages.length) {
    concludeScenario();
  } else {
    renderStage();
  }
}

function addConversationEntry(stageType, question, answer) {
  const entry = document.createElement("div");
  entry.className = "conversation-entry";

  const stageEl = document.createElement("p");
  stageEl.className = "stage-type";
  stageEl.textContent = stageType;

  const questionEl = document.createElement("p");
  questionEl.className = "question";
  questionEl.textContent = `Question: ${question}`;

  const answerEl = document.createElement("p");
  answerEl.className = `answer ${getQualityClass(answer.quality)}`;
  answerEl.textContent = `Answer (${answer.quality}): ${answer.statement}`;

  entry.appendChild(stageEl);
  entry.appendChild(questionEl);
  entry.appendChild(answerEl);
  conversationLogEl.appendChild(entry);
  conversationLogEl.scrollTop = conversationLogEl.scrollHeight;
}

function updateFeedback(answer, stageType) {
  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <p><strong>Stage:</strong> ${stageType}</p>
      <p><strong>Quality:</strong> ${answer.quality}</p>
      <p>${answer.context}</p>
      <p><strong>Next step:</strong> ${answer.nextStep}</p>
    </div>
  `;
}

function concludeScenario() {
  currentPromptEl.textContent = "Question: The persona awaits your summary and PoC next steps.";
  answerOptionsEl.innerHTML = "";
  const evaluation = currentScenario.evaluation;
  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <p><strong>Scenario complete.</strong></p>
      <p>${evaluation.summary}</p>
      <div>
        <strong>Strengths to reinforce</strong>
        <ul>${evaluation.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <strong>Improve next time</strong>
        <ul>${evaluation.improvements.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function updateActiveButtons(listEl, activeId) {
  const buttons = listEl.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.id === activeId);
  });
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

function getIndustries() {
  return [
    {
      id: "energy",
      name: "Energy & Process Manufacturing",
      summary:
        "Refineries bleed cash when duplicate spare parts sit on shelves and turnaround plans rely on stale material masters.",
      hookFocus:
        "Lead with dramatic working-capital waste, then prove CODA can clean plant-to-ERP data fast enough for the next outage.",
      questionIdeas: [
        "Working capital tied up in slow-moving spares",
        "Accuracy of SAP and engineering views",
        "Executive sponsorship for deterministic PoCs",
      ],
      personas: [
        {
          id: "cfo-energy",
          name: "Mara Velasquez",
          role: "Chief Financial Officer",
          company: "HelixPetro Energy",
          storyline:
            "Mara must fund refinery upgrades while inflation keeps parts prices high. She suspects duplicate materials and disconnected data are freezing hundreds of millions in cash.",
          strategy:
            "Hook her with dramatic cash drains, confirm the accuracy gap with closed questions, then co-design a PoC that proves CODA can free cash without starving uptime.",
          redPath:
            "Show the cash leak, narrow to one refinery, agree on validation math, and end with Mara sponsoring a finance-led PoC.",
          values: [
            "Cash visibility across plants",
            "Audit-ready data for the board",
            "Low-risk pilots that respect turnaround windows",
          ],
          benefits: [
            "CODA's catalog highlights duplicates within days",
            "Finance dashboards translate clean data into cash unlock milestones",
            "Deterministic workflows cut PoC effort for her controllers",
          ],
          questionThemes: [
            "Working capital",
            "Turnaround readiness",
            "Supplier rationalization",
            "Audit defense",
            "ERP modernization guardrails",
          ],
          scenarios: [
            {
              id: "working-capital",
              title: "Working Capital Leak Intro",
              description:
                "Open with dramatic cost pressure, tighten metrics around accuracy and governance, then secure Mara's PoC sponsorship.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "Recently I spoke with a CEO in Oil & Gas who had $400 spare parts duplicated everywhere. Cutting just 10% freed millions in cash. How close is that to what you see?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "You're not wrong. We estimate nearly $280M is frozen in materials that have twins or haven't moved in two years.",
                      context:
                        "She admits the scale of the leak and is emotionally engaged, which opens the door to quantify the red path.",
                      nextStep: "Confirm how she measures duplicates today so you can anchor the PoC KPIs.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We manage duplicates as best we can. Finance reviews stock every quarter, but I doubt it's millions.",
                      context:
                        "She acknowledges the issue but downplays it. You need to tighten the numbers quickly before interest fades.",
                      nextStep: "Use a closed question about her latest audit to surface hard metrics and reframe the risk.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Inventory isn't my top headache. Production uptime matters more than extra bolts on a shelf.",
                      context:
                        "She pushes the topic away, so you must tie uptime back to clean data and cash discipline.",
                      nextStep: "Ask how inaccurate material masters impact turnaround speed to keep the hook alive.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question:
                    "If we zoom into your top three refineries, what percentage of the SAP material master would you actually trust today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Maybe 70%. Engineering tags and finance views rarely match, so we carry safety stock just in case.",
                      context:
                        "A clear metric plus pain around cross-team misalignment—perfect material for positioning CODA's deterministic model.",
                      nextStep: "Translate that 30% gap into a PoC objective the CFO can sponsor.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We haven't measured it precisely. My controller says the data is 'usable', whatever that means.",
                      context:
                        "Lack of measurement is itself a risk. You must convert ambiguity into urgency.",
                      nextStep: "Offer to baseline master data health during the PoC discovery week.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Accuracy is fine when we don't touch the records. Issues come from vendors changing specs.",
                      context:
                        "She shifts blame externally, so the red path risks derailing unless you bring the conversation back to her decision power.",
                      nextStep: "Ask who owns the data standards and whether Finance can enforce one source of truth.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who signs the budget when duplicates are found and material masters need cleanup?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "I do. Controllers build a business case, but it takes months before the plant actually fixes the records.",
                      context:
                        "Great—she owns the spend and admits the delay. Now you can promise faster validation with CODA.",
                      nextStep: "Show how CODA proves savings week by week so she can release funds confidently.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Operations usually funds it. Finance just monitors the variance.",
                      context:
                        "She distances herself slightly. You need to pull her back in by quantifying finance's upside.",
                      nextStep: "Connect the PoC scorecard directly to her working-capital targets.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No one signs it. Plants fix issues when they have time, otherwise it stays messy.",
                      context:
                        "Lack of ownership can stall the red path. You must show how CODA keeps the lift minimal and finance-led.",
                      nextStep: "Offer CODA's managed service so her team only approves savings, not the cleanup.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA could prove a 12% duplicate reduction in six weeks, would you sponsor a PoC so we can free that cash this quarter?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—if you can show those savings in our Beaumont complex with finance-approved math, I'll back the PoC.",
                      context:
                        "Direct agreement tied to a site and validation criteria. The path to PoC is clear—lock timelines immediately.",
                      nextStep: "Schedule the executive workshop and confirm Beaumont stakeholders.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Possibly. I'd need operations and procurement on board before I put my name on it.",
                      context:
                        "Conditional interest. You must orchestrate cross-functional buy-in fast so momentum isn't lost.",
                      nextStep: "List the two directors you will invite and propose a joint value session.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Not right now. We're juggling another ERP project and I can't absorb more change.",
                      context:
                        "Flat rejection. You need to reframe the PoC as low lift and directly accretive to the ERP success criteria.",
                      nextStep: "Offer a scoped, finance-led pilot that runs parallel without stressing IT.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Great conversations end with Mara backing a Beaumont-focused PoC that quantifies duplicate reduction and cash release.",
                strengths: [
                  "Quantify working-capital leakage early",
                  "Tie data accuracy gaps to finance KPIs",
                  "Ask for explicit PoC sponsorship",
                ],
                improvements: [
                  "Name the pilot site",
                  "Outline validation math for Finance",
                  "Engage operations only after Mara commits",
                ],
              },
            },
            {
              id: "turnaround-discipline",
              title: "Turnaround Inventory Discipline",
              description:
                "Keep the hook on the cost of idle crews during outages, then narrow to buffer stock decisions before asking for a turnaround-focused PoC.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A Gulf Coast operator told me a stalled turnaround costs $1.2M per day because planners miscounted spares. How exposed are your upcoming outages to that kind of surprise?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Too exposed. We already pushed the Corpus outage once because no one trusted the valve counts.",
                      context:
                        "She admits schedule pain, which validates the red-path narrative.",
                      nextStep: "Drill into how she approves extra buffer stock today.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We add generous safety stock, so we should be fine, but it ties up cash.",
                      context:
                        "She sees the trade-off but hasn't quantified it. Help her see the waste clearly.",
                      nextStep: "Ask for the percentage of buffer beyond plan.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Turnarounds are operations' headache. Finance only signs the checks.",
                      context:
                        "She tries to hand off responsibility. Pull the red path back to her value role.",
                      nextStep: "Show how finance can enforce data quality gates before checks go out.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many days of extra buffer stock do you approve above the engineering plan?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Usually five days worth, which equals roughly $18M in tied-up parts per outage.",
                      context:
                        "She gives a concrete cost, making the PoC math tangible.",
                      nextStep: "Offer to reduce that buffer by measuring duplicates in CODA.",
                    },
                    {
                      quality: "Medium",
                      statement: "It depends on the planner. Some ask for a week, others none.",
                      context:
                        "Inconsistency signals lack of governance—use it.",
                      nextStep: "Introduce a closed question about who signs off on exceptions.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't track it. People grab what they need when the outage hits.",
                      context:
                        "Chaotic process. Stress the cost and risk of not measuring.",
                      nextStep: "Explain CODA's ability to baseline usage in week one of the PoC.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves emergency purchases when the counts don't line up?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Me, because vendors demand prepayment and I can't risk downtime.",
                      context:
                        "She feels the pain directly—perfect to secure sponsorship.",
                      nextStep: "Propose codifying approval rules inside the PoC playbook.",
                    },
                    {
                      quality: "Medium",
                      statement: "Plant controllers handle it. They loop me in only for huge spends.",
                      context:
                        "You must reconnect her to the impact using numbers.",
                      nextStep: "Share how CODA flags runaway spend before it hits her desk.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Operations deals with vendors; finance doesn't get involved.",
                      context:
                        "She removes herself again. Reframe the question around cash governance.",
                      nextStep: "Ask how she reports these surprises to the board.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can simulate next quarter's outage with 15% less buffer stock while protecting uptime, will you co-sponsor a turnaround readiness PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes. I want Corpus as the pilot site and I need daily progress notes.",
                      context:
                        "She commits and adds governance expectations—meet them quickly.",
                      nextStep: "Share the daily cadence and lock dates for Corpus stakeholders.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, but only if operations agrees to the simulation first.",
                      context:
                        "You have interest but must orchestrate alignment.",
                      nextStep: "Offer to facilitate a joint working session this week.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. Turnaround plans are set and I won't touch them.",
                      context:
                        "Hard stop. Shift to a smaller proof like validating a single material family.",
                      nextStep: "Suggest a micro-pilot on valves without changing the master plan.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Aim for Mara to co-sponsor a Corpus turnaround PoC that trims buffer stock without hurting uptime.",
                strengths: [
                  "Quantify outage cost quickly",
                  "Expose who approves emergency spend",
                  "Tie CODA outputs to daily finance checkpoints",
                ],
                improvements: [
                  "Name the site earlier",
                  "Bring operations into the plan only after finance agrees",
                  "Translate buffer stock into exact cash",
                ],
              },
            },
            {
              id: "audit-defense",
              title: "Audit Surprise Prevention",
              description:
                "Link compliance penalties to messy masters, probe how many adjustments auditors force, and finish with a PoC ask that protects the next review.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A Big Four auditor told me a refinery paid $6M in penalties because plant catalogs didn't tie to SAP. How confident are you that your next audit won't find the same gaps?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not confident at all. Last audit forced 40 manual adjustments.",
                      context:
                        "She feels exposed—perfect for reinforcing urgency.",
                      nextStep: "Ask which data sets triggered those adjustments.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We passed, but it was exhausting and we barely closed on time.",
                      context:
                        "Pain exists but needs numbers to stay urgent.",
                      nextStep: "Probe for how many hours finance spent reconciling records.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Auditors never complain about materials. They care about revenue.",
                      context:
                        "She dismisses the hook, so tie materials back to revenue recognition quickly.",
                      nextStep: "Explain how mis-valued spares distort cost of goods.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many audit adjustments hit your books last year because of material data issues?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Forty, which added ten extra days to close the books.",
                      context:
                        "Quantified pain makes the PoC math credible.",
                      nextStep: "Offer CODA's pre-audit cleanse as the pilot focus.",
                    },
                    {
                      quality: "Medium",
                      statement: "A handful, but we fixed them manually.",
                      context:
                        "She minimizes impact. Translate 'handful' into risk.",
                      nextStep: "Ask how many controllers were pulled from other projects.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "None. If there were issues, auditors would have said so.",
                      context:
                        "Denial. Bring forward data from peers to re-hook her.",
                      nextStep: "Share anonymized benchmarks to challenge complacency.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who owns tying plant catalogs to SAP before the auditors arrive?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Finance owns it, but we depend on plant spreadsheets that arrive late.",
                      context:
                        "Clear ownership plus friction—the sweet spot for CODA.",
                      nextStep: "Show how CODA automates those tie-outs weekly.",
                    },
                    {
                      quality: "Medium",
                      statement: "Internal audit tries, but they don't have the tools.",
                      context:
                        "Opportunity to position CODA as the missing system.",
                      nextStep: "Offer to include internal audit in the pilot.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Operations owns it. Finance just reviews results.",
                      context:
                        "She distances finance again, so refocus on her accountability to the board.",
                      nextStep: "Ask how she explains data-driven penalties to directors.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can cleanse the high-risk material classes before the next audit and document every adjustment, will you fund a compliance PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes, as long as we can show the audit committee the before-and-after trail.",
                      context:
                        "She commits with a reporting requirement—plan for it.",
                      nextStep: "Share the dashboard mock-up and align on committee dates.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe. I'd need internal audit to co-own it.",
                      context:
                        "Conditional approval—line up the internal audit lead.",
                      nextStep: "Set up a three-way planning session.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No budget for that this year.",
                      context:
                        "Budget barrier. Offer a micro-pilot using CODA's success fee model.",
                      nextStep: "Propose a success-fee PoC tied to avoided penalties.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Finish with Mara funding a compliance PoC that keeps the audit committee calm.",
                strengths: [
                  "Link penalties to messy masters",
                  "Count the adjustments",
                  "Offer transparent before/after reporting",
                ],
                improvements: [
                  "Involve internal audit sooner",
                  "Translate hours into dollars",
                  "Address budget pushback with creative funding",
                ],
              },
            },
            {
              id: "supplier-rationalization",
              title: "Supplier Portfolio Simplification",
              description:
                "Connect duplicate suppliers to cost leakage, investigate KPIs with closed questions, and ask for a PoC that funds sourcing savings.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "An energy major found 600 duplicate supplier codes, which kept them from negotiating discounts worth $25M. How much leakage do you suspect from supplier duplicates?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Plenty. Procurement keeps telling me we miss bundle pricing because of messy vendor masters.",
                      context:
                        "She aligns with the hook, so drive toward specifics.",
                      nextStep: "Ask how she tracks savings lost to duplicate codes.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We did a cleanup last year, so it should be okay, but I'm not betting on it.",
                      context:
                        "Doubt is there—turn it into urgency.",
                      nextStep: "Probe for the KPI she uses to confirm improvements.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Suppliers aren't my focus. That's procurement's job.",
                      context:
                        "She disconnects from value, so tie it back to finance goals.",
                      nextStep: "Explain how duplicate suppliers erode her savings targets.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What savings KPI gets hit when duplicate suppliers hide spend?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Our cost-to-serve metric jumps by 3% every time it happens.",
                      context:
                        "Specific KPI equals strong case for CODA.",
                      nextStep: "Offer to track that KPI inside the PoC dashboard.",
                    },
                    {
                      quality: "Medium",
                      statement: "Procurement just logs a variance. I don't get a clean KPI.",
                      context:
                        "Opportunity to provide structure.",
                      nextStep: "Suggest co-designing a finance-approved KPI in the pilot.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "None. If sourcing can buy cheap parts, I don't care about the code.",
                      context:
                        "Dismissive tone—tie codes to compliance and savings.",
                      nextStep: "Share a story where duplicates caused price creep.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves supplier master changes right now?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Finance and procurement jointly approve, but it's manual emails.",
                      context:
                        "Manual handoffs justify CODA automation.",
                      nextStep: "Describe CODA's shared approval workspace.",
                    },
                    {
                      quality: "Medium",
                      statement: "Procurement owns it. Finance sees it monthly.",
                      context:
                        "You need to bring finance closer to the decision.",
                      nextStep: "Offer weekly snapshots in the pilot.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors change their own records in the portal.",
                      context:
                        "Lack of control—highlight the risk immediately.",
                      nextStep: "Explain CODA's guardrails that stop rogue edits.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can expose duplicate suppliers and recover 5% in sourcing savings within eight weeks, will you fund a sourcing data PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes, but I want procurement and finance both looking at the same dashboard.",
                      context:
                        "She commits with alignment needs—plan the joint rituals.",
                      nextStep: "Book the weekly finance-procurement review.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe. I'd need proof we can act on the insights fast enough.",
                      context:
                        "She worries about execution—explain CODA's workflow.",
                      nextStep: "Demo the approval workflow before asking again.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, savings projections feel too soft.",
                      context:
                        "Skepticism—bring a case study with verified numbers.",
                      nextStep: "Share a finance-backed reference from a peer.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Mara greenlights a sourcing PoC with shared finance/procurement dashboards.",
                strengths: [
                  "Tie duplicates to cost-to-serve",
                  "Clarify approval workflows",
                  "Ask for joint dashboards",
                ],
                improvements: [
                  "Bring procurement voice early",
                  "Translate savings faster",
                  "Counter 'soft savings' objections",
                ],
              },
            },
            {
              id: "erp-guardrails",
              title: "ERP Modernization Guardrails",
              description:
                "Connect ERP risk to dirty masters, probe data readiness, and ask for a CODA PoC that de-risks the rollout.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "An energy firm lost $14M during an ERP cutover because legacy materials were wrong. How are you protecting your ERP program from the same cash drain?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "That's my nightmare. Our cutover is nine months away and data readiness is the weakest track.",
                      context:
                        "She feels urgency—perfect.",
                      nextStep: "Drill into readiness metrics.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "IT says we're on track, but I haven't seen a clean report yet.",
                      context:
                        "Doubt exists; amplify it with specifics.",
                      nextStep: "Ask for the exact readiness percentage.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "ERP is IT's problem. Finance just funds it.",
                      context:
                        "She deflects. Pull it back to cash protection.",
                      nextStep: "Explain the cost of rework hitting her P&L.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What percentage of material records has passed the new ERP validation so far?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Only 55%. Data stewards can't keep up.",
                      context:
                        "Clear gap equals PoC urgency.",
                      nextStep: "Offer CODA automation to lift the percentage in weeks.",
                    },
                    {
                      quality: "Medium",
                      statement: "IT says 80%, but I can't verify.",
                      context:
                        "Need to create transparency.",
                      nextStep: "Propose CODA as the single readiness dashboard.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't track it by percentage, only by milestones.",
                      context:
                        "No metric—introduce one fast.",
                      nextStep: "Explain how CODA gives weekly percentages automatically.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How are you testing that finance and operations read the same material view before go-live?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "We run joint mock closes, but we only did one so far.",
                      context:
                        "Testing is light—use CODA to add rigor.",
                      nextStep: "Suggest CODA-powered mock closes in the PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "Operations runs their own tests. Finance reviews reports later.",
                      context:
                        "Disconnect—highlight the risk.",
                      nextStep: "Show how CODA keeps both views synced.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Testing isn't my department.",
                      context:
                        "Again she detaches. Tie it back to go-live success.",
                      nextStep: "Explain board expectations for CFO oversight.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can cleanse and validate the riskiest materials before ERP cutover, will you sponsor a guardrail PoC with IT?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—I'll champion it if IT agrees to weekly health checks.",
                      context:
                        "Alignment requirement—plan for it.",
                      nextStep: "Schedule the triad meeting with IT.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, but only after we see CODA working on a subset.",
                      context:
                        "She wants evidence—offer a micro-pilot.",
                      nextStep: "Propose a two-week sprint on one plant.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. We're too deep into the project to change course.",
                      context:
                        "Resistance—show how CODA fits alongside the plan.",
                      nextStep: "Explain how CODA works off existing extracts without delay.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Close when Mara funds an ERP guardrail PoC to raise data readiness before cutover.",
                strengths: [
                  "Connect ERP risk to finance pain",
                  "Measure readiness percentages",
                  "Align with IT on weekly checkpoints",
                ],
                improvements: [
                  "Introduce CODA mock closes earlier",
                  "Tackle 'too late' objections head-on",
                  "Highlight cash protection with visuals",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "mobility",
      name: "Mobility & Heavy Equipment",
      summary:
        "Railcar and heavy equipment leaders juggle uptime, new service revenue, and board growth expectations across distributed plants.",
      hookFocus:
        "Link downtime dollars to messy data, then turn the conversation toward the strategic programs the CEO promises to investors.",
      questionIdeas: [
        "Fleet reliability vs. what was reported",
        "Growth milestones tied to clean data",
        "Service revenue readiness",
      ],
      personas: [
        {
          id: "ceo-mobility",
          name: "Kenji Alvarez",
          role: "Chief Executive Officer",
          company: "Northwind Mobility",
          storyline:
            "Kenji balances investor pressure to grow service revenue with the reality that his fleet uptime data is unreliable and plants operate in silos.",
          strategy:
            "Hook him with dramatic downtime dollars, use closed questions to prove the executive dashboard is wrong, then show CODA as the shortest path to a PoC that protects his board pledge.",
          redPath:
            "Make downtime tangible, isolate one corridor for proof, align KPIs with his board scorecard, and ask for CEO-level sponsorship of a fast PoC.",
          values: [
            "Confidence in public commitments",
            "Faster launches of service products",
            "Reliable metrics for investor calls",
          ],
          benefits: [
            "CODA stitches plant, fleet, and finance data so executives see one truth",
            "Analytics-ready masters unlock new service bundles",
            "Deterministic workflows shorten board updates",
          ],
          questionThemes: [
            "Fleet downtime",
            "Board growth milestones",
            "Aftermarket services",
            "Plant expansion",
            "Partner collaboration",
          ],
          scenarios: [
            {
              id: "fleet-reliability",
              title: "Fleet Reliability Crisis",
              description:
                "Show Kenji the cost of idle trains, confirm his dashboard doubts, and earn permission to run a PoC on one corridor.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A rail CEO told me each stalled corridor burns $150k per hour because parts lists are wrong. How exposed are your flagship routes to that kind of downtime?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Painfully exposed. We misread the data last month and stranded 40 locomotives.",
                      context:
                        "He feels the stakes—drive toward a closed KPI fast.",
                      nextStep: "Ask which metric proved the miss to the board.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We had a scare but bounced back. I'm not sure it's that expensive.",
                      context:
                        "He underestimates cost—quantify it with a follow-up.",
                      nextStep: "Probe for revenue per stalled hour.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Downtime is an ops detail, not a CEO topic.",
                      context:
                        "He tries to stay high level. Tie it to investor trust immediately.",
                      nextStep: "Explain how downtime derails his board guidance.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What uptime number did you report to the board last quarter?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "96%, but finance later corrected it to 92% once they found duplicate failures.",
                      context:
                        "Board-level miss—perfect for CODA's deterministic proof.",
                      nextStep: "Offer CODA's reconciliation during the PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "95%, though I can't verify if it's accurate.",
                      context:
                        "Doubt exists—turn it into a KPI goal.",
                      nextStep: "Suggest measuring accuracy variance in the pilot.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't share that level of detail with the board.",
                      context:
                        "He dodges accountability—bring it back gently.",
                      nextStep: "Show how investors punish hidden downtime.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which corridor would you trust for a focused proof that fixes the data fast?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The Great Lakes corridor. It's high profile and data-poor.",
                      context:
                        "He names the pilot—huge win.",
                      nextStep: "Outline PoC scope for that corridor.",
                    },
                    {
                      quality: "Medium",
                      statement: "Maybe the Southwest region, but I need ops to confirm.",
                      context:
                        "Conditional support—line up operations quickly.",
                      nextStep: "Offer to prep the ops lead with CODA data.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "I won't single out a corridor until I see more proof.",
                      context:
                        "He stalls the red path—provide a low-risk suggestion.",
                      nextStep: "Recommend a micro corridor with minimal disruption.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA proves a 3-point uptime lift on the Great Lakes corridor in six weeks, will you champion the PoC personally?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes. Put it on my transformation agenda and keep me updated weekly.",
                      context:
                        "CEO commitment secured—execute flawlessly.",
                      nextStep: "Share weekly cadence and name the exec sponsor group.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Possibly, but only if operations signs a resource plan.",
                      context:
                        "Need ops alignment—coordinate fast.",
                      nextStep: "Draft the resource plan for his approval.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Not unless you show me ROI first.",
                      context:
                        "He demands numbers—prepare a quick business case.",
                      nextStep: "Send ROI math before re-asking.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Kenji nominates the Great Lakes corridor and adds the PoC to his transformation agenda.",
                strengths: [
                  "Tie uptime misses to board trust",
                  "Name the corridor early",
                  "Offer executive-level reporting",
                ],
                improvements: [
                  "Quantify downtime dollars faster",
                  "Bring operations sponsors sooner",
                  "Have ROI math ready",
                ],
              },
            },
            {
              id: "board-growth",
              title: "Board Growth Pledge",
              description:
                "Connect CODA to Kenji's revenue guidance by exposing how bad data slows launches, then offer a PoC that accelerates one board milestone.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "An OEM CEO lost investor trust when a data issue delayed a $200M service launch. You promised new service revenue next quarter—how confident are you in the data behind that promise?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "I'm nervous. The launch data lives in five systems and no one agrees.",
                      context:
                        "He feels the risk—great opening for closed probes.",
                      nextStep: "Ask which metric keeps him up at night.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Confident enough, but I haven't seen a unified dashboard.",
                      context:
                        "There's room for CODA's value.",
                      nextStep: "Probe for decision cadence.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Data is marketing's job. I just set direction.",
                      context:
                        "He detaches—tie it back to board promises.",
                      nextStep: "Explain reputational risk if data fails.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What KPI proves the service launch is on track?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Subscription-ready units. We're only at 60% readiness.",
                      context:
                        "Specific KPI—use it as the PoC target.",
                      nextStep: "Offer CODA to lift that readiness.",
                    },
                    {
                      quality: "Medium",
                      statement: "Pipeline dollars, though it's mostly estimates.",
                      context:
                        "Soft KPI—firm it up.",
                      nextStep: "Suggest instrumenting CODA for hard counts.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No single KPI—we'll know when we launch.",
                      context:
                        "No metric—introduce one quickly.",
                      nextStep: "Share CODA's readiness tracker.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who owns aligning engineering, finance, and marketing data before you speak to investors?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "I do, but it's a nightmare of spreadsheets.",
                      context:
                        "He owns it—ask for support.",
                      nextStep: "Promise CODA's shared workbook in the PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "The PMO tries, though they lack authority.",
                      context:
                        "Need to elevate the conversation.",
                      nextStep: "Invite the PMO lead to the pilot with CEO backing.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Marketing controls the numbers.",
                      context:
                        "He punts accountability—bring it back gently.",
                      nextStep: "Link inaccurate marketing data to board mistrust.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can unify those launch metrics and raise readiness to 80% before your next board update, will you champion a launch-readiness PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes. I want to preview the dashboard ahead of the board call.",
                      context:
                        "Commitment plus expectation—deliver it.",
                      nextStep: "Schedule the preview with his chief of staff.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if marketing signs off on the numbers.",
                      context:
                        "Need marketing buy-in—coordinate.",
                      nextStep: "Offer a joint dry run with marketing.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. Too close to launch to experiment.",
                      context:
                        "Objection—show how CODA works alongside existing plans.",
                      nextStep: "Propose a shadow PoC that doesn't disrupt launch.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Kenji puts the launch-readiness dashboard on his board agenda.",
                strengths: [
                  "Align to investor commitments",
                  "Name a readiness KPI",
                  "Offer executive previews",
                ],
                improvements: [
                  "Secure marketing early",
                  "Quantify readiness gaps faster",
                  "Address 'too late' objections",
                ],
              },
            },
            {
              id: "service-revenue",
              title: "Aftermarket Service Monetization",
              description:
                "Connect CODA to Kenji's plan to sell uptime guarantees, probe service data gaps, and end with a PoC focused on one bundle.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A peer OEM left $40M on the table because they couldn't trust which trains qualified for uptime guarantees. How confident are you in the data behind your service bundles?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not confident. Warranty, maintenance, and finance disagree daily.",
                      context:
                        "Great entry to detail the gaps.",
                      nextStep: "Ask which bundle is most at risk.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Some bundles are solid, others questionable.",
                      context:
                        "He feels variability—tighten it with a closed probe.",
                      nextStep: "Probe for the qualifying criteria.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Service data is marketing's problem.",
                      context:
                        "He deflects—tie it back to revenue credibility.",
                      nextStep: "Explain how bad data blocks new revenue.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What proves a train qualifies for the guarantee today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "A maintenance scorecard, but it's only 65% complete.",
                      context:
                        "Clear gap for CODA to fill.",
                      nextStep: "Offer CODA to complete that scorecard inside the pilot.",
                    },
                    {
                      quality: "Medium",
                      statement: "Combination of warranty age and gut feel.",
                      context:
                        "Subjective process—show value of deterministic rules.",
                      nextStep: "Suggest codifying the rule set in CODA.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We let the sales team decide.",
                      context:
                        "No governance—highlight the risk quickly.",
                      nextStep: "Explain how CODA enforces objective qualification.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which bundle would you stake a PoC on to prove the model works?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The Platinum uptime plan for the Great Lakes corridor.",
                      context:
                        "He names the bundle—great progression.",
                      nextStep: "Draft PoC goals around that plan.",
                    },
                    {
                      quality: "Medium",
                      statement: "Maybe the Midwest plan, but ops needs to weigh in.",
                      context:
                        "Need cross-functional support.",
                      nextStep: "Offer to brief ops with real data.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No bundle is ready for that level of scrutiny.",
                      context:
                        "Objection—start smaller.",
                      nextStep: "Propose validating a single asset type first.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can validate the Platinum plan and increase qualified trains by 15% in six weeks, will you sponsor the PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes. I want revenue ops and finance watching the same tracker.",
                      context:
                        "Commitment plus stakeholder ask—deliver both.",
                      nextStep: "Schedule the weekly tracker review.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after I see a prototype of the tracker.",
                      context:
                        "Need tangible proof—demo CODA quickly.",
                      nextStep: "Share a clickable mock-up.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. Sales already has a tool for that.",
                      context:
                        "Tool fatigue—contrast CODA with existing systems.",
                      nextStep: "Show how CODA feeds their tool instead of replacing it.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Close when Kenji backs a Platinum-plan PoC with revenue ops and finance on the same tracker.",
                strengths: [
                  "Tie data gaps to missed revenue",
                  "Name the bundle early",
                  "Coordinate cross-functional reviews",
                ],
                improvements: [
                  "Share prototypes sooner",
                  "Quantify qualification gains",
                  "Address tool fatigue fast",
                ],
              },
            },
            {
              id: "plant-expansion",
              title: "Plant Expansion Control",
              description:
                "Hook Kenji on expansion cost overruns, confirm how he validates data for new plants, and finish with a PoC ask tied to one build.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A heavy equipment CEO burned $30M on a new plant because asset masters were wrong. You're adding capacity in Monterrey—how sure are you that the build plan uses accurate data?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not sure at all. Every spreadsheet says something different.",
                      context:
                        "He feels the risk—move to specifics.",
                      nextStep: "Ask who reconciles the numbers.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Engineering says it's fine, but I haven't seen proof.",
                      context:
                        "Doubt exists—quantify it.",
                      nextStep: "Probe for the variance they tolerate.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Construction is a separate track. I stay focused on go-to-market.",
                      context:
                        "He detaches—tie it back to capital spend.",
                      nextStep: "Explain board expectations for expansion oversight.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who reconciles equipment, vendor, and finance data for Monterrey today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "My strategy office tries, but it's manual.",
                      context:
                        "Manual effort—highlight CODA automation.",
                      nextStep: "Offer CODA's shared workbook in the PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "Project controls handles it monthly.",
                      context:
                        "Slow cadence—promise faster updates.",
                      nextStep: "Suggest weekly CODA snapshots.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors submit updates directly.",
                      context:
                        "No oversight—stress the risk.",
                      nextStep: "Explain how CODA validates vendor data before paying.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What variance would trigger you to pause the expansion?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Anything above 5% capex variance.",
                      context:
                        "Clear trigger—use it as PoC success criteria.",
                      nextStep: "Show CODA's variance alerts tied to that number.",
                    },
                    {
                      quality: "Medium",
                      statement: "Depends on the board mood.",
                      context:
                        "Vague trigger—make it concrete.",
                      nextStep: "Share benchmark variances to set a goal.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We rarely pause projects.",
                      context:
                        "He ignores guardrails—reframe risk.",
                      nextStep: "Describe the reputational cost of overruns.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can keep Monterrey variance under 5% by reconciling vendors weekly, will you sponsor the build-control PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—loop in strategy and project controls so we all see the same data.",
                      context:
                        "Commitment plus stakeholder ask.",
                      nextStep: "Kick off a triad cadence.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe if you show me a sample reconciliation first.",
                      context:
                        "Needs proof—prep a sample report.",
                      nextStep: "Send a mocked-up CODA reconciliation.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, the team is already overwhelmed.",
                      context:
                        "Bandwidth objection—stress CODA's managed service.",
                      nextStep: "Explain how CODA staff does the heavy lift.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Success is Kenji sponsoring a Monterrey build-control PoC with strategy and project controls onboard.",
                strengths: [
                  "Tie overruns to data gaps",
                  "Define a hard variance target",
                  "Align multi-team cadences",
                ],
                improvements: [
                  "Show vendor validation examples",
                  "Address bandwidth fears quickly",
                  "Share board-level reporting mockups",
                ],
              },
            },
            {
              id: "partner-ecosystem",
              title: "Partner Ecosystem Sync",
              description:
                "Use a dramatic partner failure, confirm how he shares data with ecosystem players, and land a PoC focused on one joint program.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A mobility CEO lost a key joint venture because partners couldn't trust shared material data. Your letter highlights two ecosystem programs—how confident are you that partners see the same truth?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not very. Each partner uploads their own spreadsheets.",
                      context:
                        "He feels misalignment—great opening.",
                      nextStep: "Ask which JV is most fragile.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We share dashboards monthly, but the data is messy.",
                      context:
                        "There's a wedge for CODA.",
                      nextStep: "Probe for the most painful dashboard metric.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Partners manage their own data; I'm not worried.",
                      context:
                        "He dismisses risk—bring it back with consequences.",
                      nextStep: "Share a story where bad data broke a JV.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which joint program would collapse first if the data stayed messy?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The battery-as-a-service JV in Canada.",
                      context:
                        "He names the program—excellent for PoC focus.",
                      nextStep: "Outline CODA's shared model for that JV.",
                    },
                    {
                      quality: "Medium",
                      statement: "Probably the aftermarket JV, but I'd need to confirm.",
                      context:
                        "Need to engage partners quickly.",
                      nextStep: "Offer to brief the JV lead.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "None. Each partner owns their lane.",
                      context:
                        "He refuses to prioritize—share risk stats.",
                      nextStep: "Highlight how misaligned data kills margins.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How do you enforce one vocabulary when partners share parts or service data?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "We don't. Legal just checks contracts.",
                      context:
                        "No enforcement—CODA can help.",
                      nextStep: "Position CODA's shared taxonomy.",
                    },
                    {
                      quality: "Medium",
                      statement: "A portal template, but partners edit it.",
                      context:
                        "Weak guardrails—tighten them.",
                      nextStep: "Offer automated validation in the PoC.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We trust partners to self-police.",
                      context:
                        "Complacency—show consequences.",
                      nextStep: "Share KPIs partners miss without shared data.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can give the Canadian JV a single shared catalog and cut disputes by 50% in six weeks, will you sponsor that PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes. I want our partner GM on the weekly readout too.",
                      context:
                        "Commitment plus partner involvement—coordinate it.",
                      nextStep: "Invite the partner GM to the cadence.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if legal signs off on data sharing.",
                      context:
                        "Need legal support—loop them in early.",
                      nextStep: "Set up a review with legal and partner teams.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, the JV is too political right now.",
                      context:
                        "He fears politics—offer a smaller shared dataset.",
                      nextStep: "Propose a micro-PoC on one component family.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Aim to have Kenji back a Canadian JV PoC with legal and partner leadership present.",
                strengths: [
                  "Identify the fragile JV",
                  "Offer shared vocabulary tools",
                  "Include partners in governance",
                ],
                improvements: [
                  "Address legal concerns early",
                  "Share JV success examples",
                  "Provide dispute metrics up front",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "pharma",
      name: "Pharma & Life Sciences",
      summary:
        "Regulated manufacturers fight batch-release delays, serialization penalties, and tech debt that slows every launch.",
      hookFocus:
        "Lead with dramatic compliance or batch-release costs, then move into closed questions about stewardship and decision cadence before asking for a validation PoC.",
      questionIdeas: [
        "Batch release delays",
        "Serialization accuracy",
        "Digital twin data quality",
      ],
      personas: [
        {
          id: "cto-pharma",
          name: "Lina Zhou",
          role: "Chief Technology Officer",
          company: "ArdentBio Labs",
          storyline:
            "Lina owns global lab systems and serialization platforms. Supply chain risk and new therapies keep exposing data gaps that slow regulatory approvals.",
          strategy:
            "Hook her with dramatic compliance costs, confirm where tech debt hides, then offer CODA as the low-risk PoC that stabilizes one launch.",
          redPath:
            "Start with batch-release impact, narrow to a single molecule or site, agree on validation metrics, and end with Lina sponsoring a joint IT-quality PoC.",
          values: [
            "Predictable regulatory submissions",
            "Modern data stack that supports digital twins",
            "Fast collaboration between IT, quality, and manufacturing",
          ],
          benefits: [
            "CODA maps lab, MES, and ERP data into one deterministic layer",
            "Regulatory evidence packs export directly from the PoC",
            "Automation trims manual reconciliation so IT can focus on innovation",
          ],
          questionThemes: [
            "Batch release",
            "Serialization",
            "Digital twin readiness",
            "Lab supply waste",
            "Tech debt governance",
          ],
          scenarios: [
            {
              id: "batch-release",
              title: "Batch Release Confidence",
              description:
                "Hook on costly delayed batches, quantify data reconciliation pain, and end with a PoC request tied to one therapy.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A biotech CTO told me every delayed batch costs $2.4M in lost margin because quality can't trust the data. How often does that happen in your oncology program?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Too often. We delayed three lots last quarter waiting for lab data fixes.",
                      context:
                        "She feels the pain and gives a number—perfect.",
                      nextStep: "Ask which system caused the delay.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "It happens a few times a year, but the team recovers.",
                      context:
                        "She underplays frequency—quantify it with a closed probe.",
                      nextStep: "Probe for hours spent reconciling records.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Quality owns that, not IT.",
                      context:
                        "She deflects. Tie IT choices back to batch flow.",
                      nextStep: "Explain how system gaps create the quality backlog.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many hours do your teams spend reconciling lab, MES, and ERP before releasing a batch?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Roughly 120 hours per batch.",
                      context:
                        "Clear baseline for PoC success.",
                      nextStep: "Offer to cut that number in half inside the PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "Depends on the molecule—maybe 60 to 100 hours.",
                      context:
                        "Range exists—lock onto one therapy.",
                      nextStep: "Pick a therapy and set a target.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't track hours, just when release happens.",
                      context:
                        "No metric—introduce one quickly.",
                      nextStep: "Explain CODA's time tracking baked into the pilot.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which therapy should we focus on to prove the fix?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The ARD-221 oncology program at our Boston site.",
                      context:
                        "She names site and therapy—perfect for a PoC scope.",
                      nextStep: "Align Boston stakeholders around CODA.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either ARD-221 or the autoimmune launch.",
                      context:
                        "Need a decision—guide her to one.",
                      nextStep: "Recommend the higher-impact therapy with data.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Let's stay hypothetical for now.",
                      context:
                        "She hesitates—bring confidence with examples.",
                      nextStep: "Share a reference PoC that picked a therapy early.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can cut ARD-221 reconciliation hours by 50% in six weeks, will you sponsor a quality-data PoC with your head of QA?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes, as long as QA co-leads and we capture evidence for regulators.",
                      context:
                        "Commitment plus governance ask.",
                      nextStep: "Set up a joint QA-IT kickoff.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if we can prove no extra burden on the lab team.",
                      context:
                        "Need to address workload.",
                      nextStep: "Show CODA automation for lab extracts.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. We're already piloting another tool.",
                      context:
                        "Competing pilot—differentiate CODA.",
                      nextStep: "Explain how CODA complements existing tools with deterministic lineage.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Lina commits ARD-221 in Boston and co-sponsors with QA to halve reconciliation time.",
                strengths: [
                  "Quantify delay cost",
                  "Name the therapy and site",
                  "Secure QA partnership",
                ],
                improvements: [
                  "Bring reference metrics sooner",
                  "Address tool fatigue",
                  "Show regulator-ready evidence early",
                ],
              },
            },
            {
              id: "serialization",
              title: "Serialization Assurance",
              description:
                "Use a dramatic penalty story, confirm her serialization metrics, and push toward a PoC that repairs one market's data.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A vaccine maker paid $12M in fines because serialized data wouldn't reconcile at customs. How safe do you feel shipping into the EU right now?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not safe. We get weekly warning letters from distributors.",
                      context:
                        "She feels the risk—move to measurement.",
                      nextStep: "Ask about their EU accuracy rate.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Mostly safe, but exceptions creep in.",
                      context:
                        "Room to quantify.",
                      nextStep: "Probe for exception volumes.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Serialization is a compliance team's worry.",
                      context:
                        "Deflection—tie it back to her platforms.",
                      nextStep: "Explain how tech choices drive compliance.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What percentage of EU serials pass the first customs scan?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Only 88% last quarter.",
                      context:
                        "Strong metric for PoC success.",
                      nextStep: "Set goal to reach 98% in the pilot.",
                    },
                    {
                      quality: "Medium",
                      statement: "Probably mid-90s, but I'm not sure.",
                      context:
                        "Need hard data.",
                      nextStep: "Offer CODA measurement week one.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't track it that way.",
                      context:
                        "Gap—introduce a metric quickly.",
                      nextStep: "Share how CODA tracks pass rates automatically.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves fixes when serials fail?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "IT and compliance jointly approve but it's manual email.",
                      context:
                        "Manual steps—highlight CODA automation.",
                      nextStep: "Offer shared workflows in the pilot.",
                    },
                    {
                      quality: "Medium",
                      statement: "Compliance owns it, IT just supplies data.",
                      context:
                        "Siloed process—bridge it.",
                      nextStep: "Suggest a joint task force for the PoC.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors fix it themselves.",
                      context:
                        "No control—stress the risk.",
                      nextStep: "Explain CODA guardrails for vendor submissions.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can lift EU pass rates to 98% and automate approvals in eight weeks, will you sponsor a serialization PoC with compliance?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—loop in the EU compliance director from day one.",
                      context:
                        "Commitment plus stakeholder ask.",
                      nextStep: "Schedule the triad kickoff.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after a workshop to map the process.",
                      context:
                        "Needs clarity—plan a workshop.",
                      nextStep: "Book a process-mapping session.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No budget this quarter.",
                      context:
                        "Budget objection—offer success-based pricing.",
                      nextStep: "Propose a savings-backed funding model.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Target: Lina co-sponsors a serialization PoC with compliance to reach 98% first-pass rates.",
                strengths: [
                  "Quote penalty stories",
                  "Measure pass rates",
                  "Bring compliance leaders in",
                ],
                improvements: [
                  "Offer process workshops earlier",
                  "Frame success-fee options",
                  "Share automation mockups",
                ],
              },
            },
            {
              id: "digital-twin",
              title: "Digital Twin Readiness",
              description:
                "Tie failed digital twin experiments to messy masters, probe data ownership, and ask for a PoC around one model.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A pharma CTO shelved a $50M digital twin because material data couldn't sync. You're piloting twins for gene therapy—how solid is your underlying data?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not solid. Engineering, quality, and IT don't match.",
                      context:
                        "She feels the risk—push toward a specific model.",
                      nextStep: "Ask which model failed last.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "The math works, but feeding it is messy.",
                      context:
                        "Great for discussing data plumbing.",
                      nextStep: "Probe for ownership of the feeds.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Digital twin is still a science project; we can wait.",
                      context:
                        "She downplays urgency—restate business impact.",
                      nextStep: "Link twins to launch speed.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which twin or model matters most to you this year?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The fill-finish twin in Singapore.",
                      context:
                        "She picks the model—focus there.",
                      nextStep: "Scope CODA data feeds for Singapore.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either Singapore or our biologics pilot.",
                      context:
                        "Need clarity—guide her to choose.",
                      nextStep: "Use impact data to pick Singapore.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Too early to pick a model.",
                      context:
                        "Hesitation—share why focus accelerates ROI.",
                      nextStep: "Bring a case study showing focus.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who owns keeping the twin's data aligned every week?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "IT owns the feeds but operations edits data.",
                      context:
                        "Shared ownership—CODA can orchestrate.",
                      nextStep: "Offer CODA governance workflows.",
                    },
                    {
                      quality: "Medium",
                      statement: "A tiger team handles it ad hoc.",
                      context:
                        "No process—opportunity to standardize.",
                      nextStep: "Suggest codifying roles in the pilot.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors feed the twin directly.",
                      context:
                        "Risky—highlight need for oversight.",
                      nextStep: "Explain CODA validation before ingest.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can keep the Singapore twin in sync and reduce manual fixes by 60% in eight weeks, will you co-sponsor the PoC with operations?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—loop in the operations VP so we're aligned.",
                      context:
                        "Commitment plus co-sponsor.",
                      nextStep: "Book a joint planning session.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, but I need to see how CODA plugs into our data lake.",
                      context:
                        "Integration concern—address it.",
                      nextStep: "Share the integration diagram.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No budget for experimentation this year.",
                      context:
                        "Budget pushback—offer to carve from innovation fund.",
                      nextStep: "Position PoC as protecting the twin investment.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Success looks like Lina co-sponsoring a Singapore twin PoC with operations and IT governance defined.",
                strengths: [
                  "Tie twin failure to dirty data",
                  "Select a single model",
                  "Bring ops leaders in",
                ],
                improvements: [
                  "Show integration diagrams earlier",
                  "Address innovation budgets",
                  "Share success stories from other twins",
                ],
              },
            },
            {
              id: "lab-supply",
              title: "Lab Supply Waste",
              description:
                "Connect lab waste to messy masters, quantify the scrap, and ask for a PoC that rightsizes one site.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A med-tech CTO told me expired reagents burned $8M because lab stock data was wrong. How much waste do you see in your R&D labs?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "At least $5M a year in expired kits.",
                      context:
                        "Strong hook—move to measurement.",
                      nextStep: "Ask which site is worst.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "There's waste, but finance hasn't quantified it.",
                      context:
                        "Quantify it quickly.",
                      nextStep: "Offer to baseline inside CODA.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Waste is inevitable; we focus on speed.",
                      context:
                        "She normalizes the problem—link it to funding.",
                      nextStep: "Explain how waste kills future budgets.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which lab wastes the most today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Cambridge R&D—inventory accuracy is 65%.",
                      context:
                        "Target identified.",
                      nextStep: "Propose CODA for Cambridge first.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either Cambridge or Basel.",
                      context:
                        "Need focus—help her pick one.",
                      nextStep: "Highlight why Cambridge matters more.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Hard to say—no single owner.",
                      context:
                        "Ownership gap—address it.",
                      nextStep: "Show how CODA assigns ownership per site.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves lab replenishment when counts look wrong?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "IT runs the system but scientists override it.",
                      context:
                        "Process issue—CODA can mediate.",
                      nextStep: "Offer shared guardrails.",
                    },
                    {
                      quality: "Medium",
                      statement: "Procurement approves monthly.",
                      context:
                        "Slow cadence—accelerate with PoC.",
                      nextStep: "Set weekly CODA reviews.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No approvals—labs order directly.",
                      context:
                        "Chaotic—stress risk.",
                      nextStep: "Explain CODA's approvals and alerts.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can raise Cambridge accuracy to 90% and cut waste by 30% in six weeks, will you fund the lab-supply PoC with R&D finance?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—loop finance in and show weekly waste trends.",
                      context:
                        "Commitment plus reporting ask.",
                      nextStep: "Design the waste dashboard.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe once finance signs off on the math.",
                      context:
                        "Need validation—prepare finance math.",
                      nextStep: "Share ROI breakdown with finance.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No bandwidth for another PoC.",
                      context:
                        "Capacity issue—offer CODA-led execution.",
                      nextStep: "Explain CODA handles work and labs just review.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Goal: Lina funds a Cambridge lab PoC with finance and scientists reviewing shared dashboards.",
                strengths: [
                  "Link waste to dollar impact",
                  "Identify the site",
                  "Bring finance into cadence",
                ],
                improvements: [
                  "Share ROI math earlier",
                  "Show CODA-led delivery",
                  "Highlight scientist-friendly workflows",
                ],
              },
            },
            {
              id: "tech-debt",
              title: "Tech Debt Guardrails",
              description:
                "Hook Lina on the cost of failed migrations, confirm governance gaps, and request a PoC that keeps data clean before the next upgrade.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A pharma CTO burned $18M redoing an MES upgrade because masters were messy. You're planning a data lake refresh—how are you preventing the same trap?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "That's my fear. Tech debt is everywhere.",
                      context:
                        "She feels urgency—push for specifics.",
                      nextStep: "Ask which upgrade is most fragile.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "We have governance but it's patchy.",
                      context:
                        "Opportunity to improve.",
                      nextStep: "Probe for who enforces governance.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "IT will handle it when the project starts.",
                      context:
                        "She delays action—highlight risk of waiting.",
                      nextStep: "Show how early cleanup saves millions.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which upgrade worries you most?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The data lake refresh feeding analytics.",
                      context:
                        "Target identified.",
                      nextStep: "Position CODA guardrails there.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either the data lake or MES patch.",
                      context:
                        "Need focus.",
                      nextStep: "Use board priorities to pick one.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Hard to pick—everything is risky.",
                      context:
                        "Overwhelm—help her prioritize.",
                      nextStep: "Share criteria for picking a pilot.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who signs off on data quality before upgrades go live?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "I do, but it's based on spreadsheets.",
                      context:
                        "Manual process—CODA can help.",
                      nextStep: "Offer automated scorecards.",
                    },
                    {
                      quality: "Medium",
                      statement: "A steering committee every month.",
                      context:
                        "Slow cadence—accelerate.",
                      nextStep: "Suggest weekly CODA snapshots.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors self-certify.",
                      context:
                        "No oversight—stress risk.",
                      nextStep: "Show CODA's vendor validation.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can score data quality weekly and keep the data lake refresh on track, will you fund a guardrail PoC with the program lead?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—include the program lead and enterprise architect.",
                      context:
                        "Commitment plus stakeholders.",
                      nextStep: "Set the cadence with both leaders.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after we see the scoring model.",
                      context:
                        "Needs proof—share model early.",
                      nextStep: "Demo CODA scoring visuals.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No time before the refresh starts.",
                      context:
                        "Timing objection—show overlap benefits.",
                      nextStep: "Explain CODA works in parallel without slowing the program.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Aim for Lina to fund a guardrail PoC around the data lake refresh with weekly CODA scoring.",
                strengths: [
                  "Tie tech debt to upgrade risk",
                  "Name the target program",
                  "Include program and architecture leaders",
                ],
                improvements: [
                  "Share scoring visuals faster",
                  "Frame overlap benefits",
                  "Provide vendor oversight stories",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "electronics",
      name: "High-Tech & Electronics Supply Chain",
      summary:
        "Chip-heavy manufacturers fight volatile demand, duplication of parts, and weak multi-tier visibility that starves capital.",
      hookFocus:
        "Lead with dramatic inventory or shortage costs, then use closed probes to nail down buffer targets before asking for a supply-chain control PoC.",
      questionIdeas: [
        "Chip buffer levels",
        "Supplier quality escalations",
        "Multi-tier visibility gaps",
      ],
      personas: [
        {
          id: "scm-electronics",
          name: "Anika Sharma",
          role: "Global Supply Chain Head",
          company: "Vertex Devices",
          storyline:
            "Anika balances new product ramps with tight working capital. Duplicate part numbers, inconsistent supplier data, and poor plant visibility make every decision harder.",
          strategy:
            "Hook her with cash or shortage math, confirm who owns the data across supply, and end with a PoC that protects one high-value product line.",
          redPath:
            "Start with cost of buffer or shortage, narrow to a product or plant, align on KPIs with finance, and secure a PoC that codifies CODA as her control tower.",
          values: [
            "Predictable component supply",
            "Shared view with finance and factories",
            "Fast path to launch PoCs without drowning teams",
          ],
          benefits: [
            "CODA unifies supplier, BOM, and inventory records",
            "Scenario planners see cash, risk, and availability in one model",
            "Red-path coaching keeps every conversation aimed at a PoC",
          ],
          questionThemes: [
            "Buffer strategy",
            "Supplier quality",
            "Visibility",
            "Ramp readiness",
            "Control tower vision",
          ],
          scenarios: [
            {
              id: "chip-buffer",
              title: "Chip Buffer Shock",
              description:
                "Hook on the cost of bloated buffers, confirm metrics, and ask for a PoC on a single product family.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "An electronics COO told me each extra week of chip buffer ties up $14M. How much cash do you have locked in safety stock today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "North of $60M because no one trusts the alternates list.",
                      context:
                        "Great urgency—move to measurement.",
                      nextStep: "Ask for the exact weeks of cover.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "A lot, but it's our insurance policy.",
                      context:
                        "She sees the trade-off—quantify it.",
                      nextStep: "Probe for weeks of cover.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Finance worries about cash; I worry about shortages.",
                      context:
                        "She splits priorities—tie them together.",
                      nextStep: "Explain how clean data protects both uptime and cash.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many weeks of cover do you carry on the flagship tablet line?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Eight weeks when the plan says four.",
                      context:
                        "Clear variance for PoC success.",
                      nextStep: "Target four weeks with CODA analytics.",
                    },
                    {
                      quality: "Medium",
                      statement: "Somewhere between six and eight.",
                      context:
                        "Need precision.",
                      nextStep: "Offer CODA measurement.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't measure by product line.",
                      context:
                        "Gap—introduce measurement.",
                      nextStep: "Explain CODA's product-specific reports.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who signs off when you build extra buffer?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "I do with finance, but it's manual emails.",
                      context:
                        "Manual process—automate it.",
                      nextStep: "Offer CODA approval workflows.",
                    },
                    {
                      quality: "Medium",
                      statement: "Regional planners decide and tell me later.",
                      context:
                        "No governance—tighten it.",
                      nextStep: "Suggest PoC governance rules.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No one approves if demand spikes.",
                      context:
                        "Risky—highlight CODA alerts.",
                      nextStep: "Explain how CODA flags rogue buffer builds.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can reset tablet buffer from eight to four weeks without hurting fill rate, will you fund a buffer-visibility PoC with finance?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—finance must see the same dashboard.",
                      context:
                        "Commitment plus stakeholder requirement.",
                      nextStep: "Plan a joint finance-supply cadence.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, once I see how CODA models demand swings.",
                      context:
                        "Needs proof—share scenario modeling.",
                      nextStep: "Demo CODA scenarios.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No—buffers are the only reason we ship on time.",
                      context:
                        "Fear-based objection—show case studies.",
                      nextStep: "Share reference where CODA cut buffer without hurting service.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Anika funds a tablet buffer PoC with finance watching the same KPIs.",
                strengths: [
                  "Tie buffer to cash",
                  "Measure weeks of cover",
                  "Require finance participation",
                ],
                improvements: [
                  "Show scenario modeling earlier",
                  "Share proof of service protection",
                  "Clarify governance roles",
                ],
              },
            },
            {
              id: "supplier-quality",
              title: "Supplier Quality Escalation",
              description:
                "Connect supplier escapes to data gaps, probe escalation metrics, and ask for a PoC targeting one vendor tier.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A handset maker spent $9M expediting parts because supplier quality data was wrong. How much do escapes cost you each quarter?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "At least $4M when tier-2 vendors slip.",
                      context:
                        "She knows the pain—quantify more.",
                      nextStep: "Ask how often it happens.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Varies a lot, but it's painful.",
                      context:
                        "Need numbers—probe deeper.",
                      nextStep: "Request last quarter's count.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Quality manages that; I focus on flow.",
                      context:
                        "She detaches—tie it to her goals.",
                      nextStep: "Explain how escapes wreck her schedules.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many supplier escapes did you log last quarter?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Twenty-two.",
                      context:
                        "Great baseline.",
                      nextStep: "Target a 50% drop in PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "Maybe a dozen, but data is messy.",
                      context:
                        "Need clarity—offer CODA measurement.",
                      nextStep: "Set measurement as first PoC deliverable.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't log escapes consistently.",
                      context:
                        "Gap—introduce logging discipline.",
                      nextStep: "Explain CODA workflow.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves corrective action when data conflicts?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Supply, quality, and finance must all sign off.",
                      context:
                        "Complex governance—CODA can simplify.",
                      nextStep: "Offer shared CODA approvals.",
                    },
                    {
                      quality: "Medium",
                      statement: "Quality lead handles it.",
                      context:
                        "Need cross-functional view.",
                      nextStep: "Invite finance to PoC cadence.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors propose fixes themselves.",
                      context:
                        "No oversight—stress risk.",
                      nextStep: "Show CODA's vendor guardrails.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can cut escapes by half with tier-2 vendors and automate approvals, will you sponsor the PoC with quality?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—quality must see the same live tracker.",
                      context:
                        "Commitment plus requirement.",
                      nextStep: "Schedule joint tracker reviews.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after we map the workflow.",
                      context:
                        "Needs clarity—plan mapping session.",
                      nextStep: "Book a half-day workshop.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, we're already swamped.",
                      context:
                        "Capacity fear—offer CODA-led effort.",
                      nextStep: "Explain CODA handles mapping and reporting.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Aim for Anika and quality to co-sponsor a tier-2 vendor PoC that halves escapes.",
                strengths: [
                  "Count escapes",
                  "Clarify governance",
                  "Insist on shared trackers",
                ],
                improvements: [
                  "Map workflows earlier",
                  "Address capacity fears",
                  "Show vendor guardrails",
                ],
              },
            },
            {
              id: "visibility",
              title: "Multi-tier Visibility",
              description:
                "Hook on the cost of blind spots, confirm what data she lacks, and ask for a PoC on one region.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A devices OEM lost $25M because tier-3 data came in late. How often are you blindsided by lower-tier suppliers?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Weekly. Southeast Asia updates arrive days late.",
                      context:
                        "Pain is clear—move to metrics.",
                      nextStep: "Ask which metrics go dark.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Every so often. It's annoying but manageable.",
                      context:
                        "Downplaying it—quantify cost.",
                      nextStep: "Probe for one recent miss.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Tier-3 is outside our control.",
                      context:
                        "She dismisses—tie it to her goals.",
                      nextStep: "Explain how blind spots stall launches.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which KPI suffers most without tier-3 data?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Commit-to-ship accuracy.",
                      context:
                        "Great KPI for the PoC.",
                      nextStep: "Target improvement for SEA region.",
                    },
                    {
                      quality: "Medium",
                      statement: "Inventory turns.",
                      context:
                        "Also viable—pick one.",
                      nextStep: "Align on KPI before PoC.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Hard to say—it varies.",
                      context:
                        "Vague—introduce structure.",
                      nextStep: "Suggest KPI options CODA tracks.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which region should pilot a shared visibility model?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Southeast Asia for tablets.",
                      context:
                        "Perfect scope.",
                      nextStep: "Define CODA feeds for SEA.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either SEA or Latin America.",
                      context:
                        "Need a decision.",
                      nextStep: "Advise SEA due to urgency.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Let's keep it global.",
                      context:
                        "Too broad—explain benefits of focus.",
                      nextStep: "Share why focused pilots succeed.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can give SEA tier-3 visibility and lift commit-to-ship accuracy by 5 points, will you fund the control-tower PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—loop in the SEA GM.",
                      context:
                        "Commitment with stakeholder.",
                      nextStep: "Book GM alignment.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if IT proves integration is light.",
                      context:
                        "Need assurance—show integration plan.",
                      nextStep: "Share CODA connector details.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. Too many pilots already.",
                      context:
                        "Pilot fatigue—show CODA's managed delivery.",
                      nextStep: "Explain minimal lift required.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Anika backs a SEA control-tower PoC with commit-to-ship KPIs.",
                strengths: [
                  "Connect blind spots to KPIs",
                  "Pick one region",
                  "Include local leadership",
                ],
                improvements: [
                  "Share integration plans early",
                  "Counter pilot fatigue",
                  "Provide KPI examples",
                ],
              },
            },
            {
              id: "ramp-readiness",
              title: "Ramp Readiness",
              description:
                "Use a dramatic ramp failure, probe readiness metrics, and close on a PoC that stabilizes one plant ramp.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A wearable maker missed $70M in launch revenue when plant data didn't match the ramp plan. You're ramping a new AR headset—how confident are you in the data behind that build?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not confident. Planning and factory numbers disagree daily.",
                      context:
                        "Great—move to specifics.",
                      nextStep: "Ask which plant is worst.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Mostly confident, but there are hiccups.",
                      context:
                        "Need metrics.",
                      nextStep: "Probe for first-pass yield or schedule adherence.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Ops owns ramps; I focus on suppliers.",
                      context:
                        "She deflects—tie ramp data to her scope.",
                      nextStep: "Explain how supplier data fuels ramps.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What first-pass yield are you seeing at the pilot plant?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Only 85%.",
                      context:
                        "Metric identified.",
                      nextStep: "Offer CODA to push 90%+.",
                    },
                    {
                      quality: "Medium",
                      statement: "Low 90s, but trending down.",
                      context:
                        "Need clarity.",
                      nextStep: "Track trend in PoC.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't track FPY during pilot.",
                      context:
                        "Gap—introduce measurement.",
                      nextStep: "Explain CODA's FPY tracker.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who reconciles planning vs. factory numbers each week?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "My team meets with operations every Friday.",
                      context:
                        "Existing cadence—CODA can enhance.",
                      nextStep: "Offer CODA dashboards for those meetings.",
                    },
                    {
                      quality: "Medium",
                      statement: "Operations emails a spreadsheet.",
                      context:
                        "Weak process—improve it.",
                      nextStep: "Propose CODA workspace.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No standing meeting.",
                      context:
                        "Chaos—set structure.",
                      nextStep: "Suggest CODA-led weekly sync.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can align planning and factory data to lift FPY by 5 points before launch, will you sponsor the ramp readiness PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—include the plant GM and finance.",
                      context:
                        "Commitment plus team alignment.",
                      nextStep: "Book joint kickoff.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after a dry run with the GM.",
                      context:
                        "Need GM buy-in—set it up.",
                      nextStep: "Schedule the dry run.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No time before launch.",
                      context:
                        "Timing fear—propose shadow PoC.",
                      nextStep: "Offer to run CODA in parallel without slowing ramp.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Success is Anika funding a ramp readiness PoC with plant GM and finance aligned.",
                strengths: [
                  "Tie ramps to dollars",
                  "Measure FPY",
                  "Include plant leadership",
                ],
                improvements: [
                  "Schedule dry runs early",
                  "Address timing fears",
                  "Show CODA meeting templates",
                ],
              },
            },
            {
              id: "control-tower",
              title: "Control Tower Vision",
              description:
                "Paint a vision of CODA as her red-path control tower, probe current tooling, and close on a PoC that unites data for one business unit.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A supply chain chief told me their control tower failed because data sources disagreed. You want a single red-path view—how aligned are your systems today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not aligned. Planning, logistics, and finance all have different truths.",
                      context:
                        "Great—move to specifics.",
                      nextStep: "Ask which BU hurts most.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Semi-aligned—we patch things manually.",
                      context:
                        "Manual work = opportunity.",
                      nextStep: "Probe for time spent patching.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Our tower works fine.",
                      context:
                        "She resists—bring peer stories.",
                      nextStep: "Share failure stories to re-open the door.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which business unit would benefit most from a clean control tower first?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Wearables.",
                      context:
                        "Scope locked.",
                      nextStep: "Center PoC on wearables.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either wearables or enterprise devices.",
                      context:
                        "Need a pick.",
                      nextStep: "Use impact data to pick wearables.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Control tower must be global.",
                      context:
                        "Too broad—explain phased success.",
                      nextStep: "Share phased rollout story.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What tools do you use today for tower decisions?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Spreadsheets plus a BI dashboard.",
                      context:
                        "Manual approach—CODA can replace.",
                      nextStep: "Show CODA's deterministic layer.",
                    },
                    {
                      quality: "Medium",
                      statement: "A vendor tower that's 60% accurate.",
                      context:
                        "Opportunity to augment vendor system.",
                      nextStep: "Explain CODA feeding that tower.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We rely on emails.",
                      context:
                        "Chaos—CODA brings order.",
                      nextStep: "Highlight workflow automation.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can become the wearables control tower with shared finance, supply, and ops metrics in six weeks, will you sponsor the PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—include finance and IT from the start.",
                      context:
                        "Commitment plus sponsor team.",
                      nextStep: "Set up finance/IT onboarding.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if CODA feeds our existing tower.",
                      context:
                        "Need integration clarity.",
                      nextStep: "Explain data feeds and pilots.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, towers always disappoint.",
                      context:
                        "Skepticism—share success proof.",
                      nextStep: "Provide testimonials showing deterministic wins.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Goal: Anika sponsors a wearables control-tower PoC with finance and IT onboard.",
                strengths: [
                  "Pick a BU",
                  "Show manual pain",
                  "Align multi-function leaders",
                ],
                improvements: [
                  "Provide phased rollout plans",
                  "Explain data feed design",
                  "Counter tower skepticism",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "aerospace",
      name: "Aerospace Depots & Defense Warehouses",
      summary:
        "Depot leaders juggle grounded aircraft, cramped hangars, and expensive expediting caused by messy part masters.",
      hookFocus:
        "Open with grounded-aircraft or space costs, then drive into closed questions about accuracy, approvals, and calibration before asking for a hangar-focused PoC.",
      questionIdeas: [
        "Grounded aircraft cost",
        "Space utilization",
        "Tool calibration",
      ],
      personas: [
        {
          id: "warehouse-aero",
          name: "Ravi Desai",
          role: "Head of Warehouse & Logistics",
          company: "SkyShield Defense",
          storyline:
            "Ravi oversees multiple depots supporting fighter jets and drones. Duplicate parts, mislabeled tooling, and manual approvals keep planes grounded longer than necessary.",
          strategy:
            "Hook him on grounded-aircraft cost, convert to closed probes about space, calibration, and approvals, then secure a PoC that protects one hangar's mission readiness.",
          redPath:
            "Start with dramatic downtime, choose a specific hangar, define accuracy metrics, and ask Ravi to sponsor a CODA PoC with maintenance leadership.",
          values: [
            "Mission readiness",
            "Safe, compliant tooling",
            "Simple workflows for crew chiefs",
          ],
          benefits: [
            "CODA surfaces duplicates and expired assets instantly",
            "Hangar dashboards show red-path progress toward PoC goals",
            "Maintenance and logistics share one vocabulary",
          ],
          questionThemes: [
            "Grounded aircraft",
            "Space optimization",
            "Tool calibration",
            "Expedite spend",
            "Depot modernization",
          ],
          scenarios: [
            {
              id: "grounded-aircraft",
              title: "Grounded Aircraft Shock",
              description:
                "Hook on the cost of grounded jets, confirm accuracy gaps, and ask for a PoC targeting one hangar.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "An air force partner told me each grounded jet costs $120k per day when parts data is wrong. How exposed is your Hangar 4 fleet to that kind of hit?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Way too exposed. We've had six birds waiting on paperwork this month.",
                      context:
                        "He feels urgency—move to accuracy metrics.",
                      nextStep: "Ask what accuracy percentage he trusts.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "It happens but maintenance scrambles and keeps us afloat.",
                      context:
                        "Downplaying it—quantify with a closed probe.",
                      nextStep: "Probe for number of delays per month.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Ops owns uptime, I just store the parts.",
                      context:
                        "He deflects—tie storage to uptime.",
                      nextStep: "Explain how his data feeds ops decisions.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What percentage of Hangar 4 inventory can you trust without double-checking?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Maybe 70%.",
                      context:
                        "Great baseline for PoC.",
                      nextStep: "Target 90%+ in the pilot.",
                    },
                    {
                      quality: "Medium",
                      statement: "Not sure—depends on the mechanic.",
                      context:
                        "Need a number.",
                      nextStep: "Offer CODA measurement.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't track accuracy percentage.",
                      context:
                        "Gap—introduce measurement.",
                      nextStep: "Explain CODA accuracy scoring.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves part swaps when the data looks wrong?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "I do with maintenance, but it's paperwork heavy.",
                      context:
                        "Manual process—CODA can speed it up.",
                      nextStep: "Offer CODA digital approvals.",
                    },
                    {
                      quality: "Medium",
                      statement: "Crew chiefs decide on the floor.",
                      context:
                        "No oversight—tie to risk.",
                      nextStep: "Suggest governance via PoC.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Nobody approves—it's a fire drill.",
                      context:
                        "Chaos—highlight CODA guardrails.",
                      nextStep: "Explain how CODA enforces rapid but safe swaps.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can raise Hangar 4 accuracy to 90% and cut grounded days in half within eight weeks, will you co-sponsor the PoC with maintenance?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—maintenance must see the same dashboard.",
                      context:
                        "Commitment plus requirement.",
                      nextStep: "Plan joint maintenance-logistics cadence.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after maintenance signs off.",
                      context:
                        "Need buy-in—coordinate quickly.",
                      nextStep: "Set up a three-way workshop.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, we already have too many initiatives.",
                      context:
                        "Bandwidth objection—show CODA's low lift.",
                      nextStep: "Explain CODA handles the data heavy lifting.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Target: Ravi co-sponsors a Hangar 4 PoC with maintenance to lift accuracy and reduce grounded days.",
                strengths: [
                  "Tie grounded jets to data",
                  "Measure accuracy",
                  "Include maintenance",
                ],
                improvements: [
                  "Share workload plan",
                  "Provide rapid governance templates",
                  "Show low-lift delivery",
                ],
              },
            },
            {
              id: "space-optimization",
              title: "Hangar Space Crunch",
              description:
                "Hook on hangar costs, probe space metrics, and ask for a PoC that frees capacity without hurting readiness.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "Another depot leader pays $40k per day for overflow hangar space when materials pile up. How often do you run out of room?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Every maintenance surge. We park pallets in safety zones.",
                      context:
                        "Painful story—move to measurement.",
                      nextStep: "Ask how many pallets crowd the floor.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Occasionally, but we manage.",
                      context:
                        "Need data—quantify it.",
                      nextStep: "Probe for days of overflow per month.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Space is ops' issue, not mine.",
                      context:
                        "He detaches—tie space back to his KPIs.",
                      nextStep: "Explain how clutter slows picks and readiness.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many overflow days did you log last month?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Seven days.",
                      context:
                        "Great metric.",
                      nextStep: "Target a 50% reduction.",
                    },
                    {
                      quality: "Medium",
                      statement: "Maybe four, but we didn't record them.",
                      context:
                        "Need tracking.",
                      nextStep: "Offer CODA logging.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We don't measure.",
                      context:
                        "Gap—introduce measurement.",
                      nextStep: "Explain CODA's space tracker.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves moving inventory offsite?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "I do with base logistics.",
                      context:
                        "Governance exists—streamline it.",
                      nextStep: "Offer CODA workflow.",
                    },
                    {
                      quality: "Medium",
                      statement: "Logistics calls the shots.",
                      context:
                        "Need shared view.",
                      nextStep: "Invite logistics to PoC cadence.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No approvals—we just move stuff.",
                      context:
                        "Risky—highlight CODA guardrails.",
                      nextStep: "Explain auditable workflows.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can cut overflow days by half while keeping readiness steady, will you fund a space-optimization PoC with base logistics?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—logistics must see the same dashboards.",
                      context:
                        "Commitment plus requirement.",
                      nextStep: "Plan shared dashboards.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after we try CODA on one aisle first.",
                      context:
                        "Wants smaller proof—offer micro-pilot.",
                      nextStep: "Define aisle-level pilot.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No budget for space projects.",
                      context:
                        "Budget pushback—tie to readiness.",
                      nextStep: "Show cost avoidance math.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Win when Ravi funds a space PoC with logistics sharing dashboards.",
                strengths: [
                  "Count overflow days",
                  "Clarify approvals",
                  "Tie to readiness",
                ],
                improvements: [
                  "Show aisle-level pilots",
                  "Share cost avoidance math",
                  "Highlight guardrails",
                ],
              },
            },
            {
              id: "tool-calibration",
              title: "Tool Calibration Risk",
              description:
                "Hook on calibration penalties, probe ownership, and ask for a PoC that tracks tool status with CODA.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A depot paid $3M in penalties because torque tools weren't calibrated on time. How confident are you that your calibration data is accurate today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not confident. We rely on stickers and spreadsheets.",
                      context:
                        "Great—move to closed probes.",
                      nextStep: "Ask who owns the calendar.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Mostly confident, but there are gaps.",
                      context:
                        "Need specifics.",
                      nextStep: "Probe for missed calibrations.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Calibration is QA's worry.",
                      context:
                        "He deflects—tie it back to logistics.",
                      nextStep: "Explain how tool data lives in his warehouse.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "How many tools missed calibration last quarter?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Twelve.",
                      context:
                        "Baseline ready.",
                      nextStep: "Aim for zero in the PoC.",
                    },
                    {
                      quality: "Medium",
                      statement: "Maybe a handful.",
                      context:
                        "Need clarity.",
                      nextStep: "Offer CODA audit logs.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "No idea.",
                      context:
                        "Gap—introduce measurement.",
                      nextStep: "Explain CODA tracking.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves tool releases after calibration?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "QA signs off but logistics updates records.",
                      context:
                        "Joint ownership—CODA can orchestrate.",
                      nextStep: "Offer shared CODA workflow.",
                    },
                    {
                      quality: "Medium",
                      statement: "Each shop chief signs manually.",
                      context:
                        "Manual process—improve it.",
                      nextStep: "Show mobile approvals inside PoC.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Whoever finds the tool handles it.",
                      context:
                        "Chaotic—stress CODA order.",
                      nextStep: "Explain digital chain of custody.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can track every torque tool and prevent missed calibrations in six weeks, will you sponsor the PoC with QA?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—QA must see live status.",
                      context:
                        "Commitment plus requirement.",
                      nextStep: "Plan QA-logistics dashboard.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if CODA works on mobile devices.",
                      context:
                        "Needs mobile—confirm capability.",
                      nextStep: "Show CODA mobile workflow.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No, QA has their own system.",
                      context:
                        "System overlap—explain integration.",
                      nextStep: "Describe how CODA feeds QA system instead of replacing it.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Success is Ravi funding a calibration PoC with QA sharing dashboards.",
                strengths: [
                  "Quote penalty stories",
                  "Count missed tools",
                  "Show QA-logistics collaboration",
                ],
                improvements: [
                  "Demonstrate mobile workflows",
                  "Highlight integration",
                  "Share compliance evidence",
                ],
              },
            },
            {
              id: "expedite-cost",
              title: "Expediting Cost Spiral",
              description:
                "Hook on emergency freight spend, probe who approves it, and ask for a PoC that reins in expediting.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A defense warehouse burned $8M on emergency freight because part data was wrong. How much did you spend on expedites last quarter?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "About $3M, mostly avoidable.",
                      context:
                        "Great number—move to approvals.",
                      nextStep: "Ask who signs off.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Probably a couple million.",
                      context:
                        "Need precision.",
                      nextStep: "Offer CODA to measure.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "We don't track expedites separately.",
                      context:
                        "Gap—introduce tracking.",
                      nextStep: "Explain CODA's expedite log.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Who approves emergency freight today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "I do, but it's a phone call.",
                      context:
                        "Manual approvals—automate.",
                      nextStep: "Offer CODA workflows.",
                    },
                    {
                      quality: "Medium",
                      statement: "Maintenance lead approves.",
                      context:
                        "Need finance visibility.",
                      nextStep: "Include finance in PoC cadence.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Anyone with a card can expedite.",
                      context:
                        "Out of control—stress guardrails.",
                      nextStep: "Explain CODA approval thresholds.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What KPI would prove expedites are under control?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "Dollar spend per flight hour.",
                      context:
                        "Great KPI.",
                      nextStep: "Make it the PoC target.",
                    },
                    {
                      quality: "Medium",
                      statement: "Number of expedite requests.",
                      context:
                        "Also viable—align on one.",
                      nextStep: "Select KPI with finance.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "We just need parts fast.",
                      context:
                        "No KPI—introduce structure.",
                      nextStep: "Show CODA KPI options.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can cut expedite spend per flight hour by 30% in six weeks, will you fund the PoC with finance?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—finance wants weekly reports.",
                      context:
                        "Commitment plus reporting.",
                      nextStep: "Design weekly finance view.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe after finance agrees on the KPI.",
                      context:
                        "Need alignment—set meeting.",
                      nextStep: "Schedule finance workshop.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No. Expedites are part of life.",
                      context:
                        "Complacent—share success story.",
                      nextStep: "Show case where CODA cut expedites.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Aim for Ravi and finance to co-sponsor an expedite-control PoC with clear KPIs.",
                strengths: [
                  "Quantify expedites",
                  "Define KPIs",
                  "Include finance",
                ],
                improvements: [
                  "Share approval workflows",
                  "Demonstrate savings math",
                  "Address complacency",
                ],
              },
            },
            {
              id: "depot-modernization",
              title: "Depot Modernization Vision",
              description:
                "Wrap up by painting CODA as the modernization layer, probe current systems, and ask for a PoC that sets the blueprint.",
              stages: [
                {
                  stageType: "Open hook",
                  question:
                    "A defense depot lost congressional funding because modernization stalled. You're pitching a new automation plan—how confident are you that your data story will land?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Not confident. Systems are stitched together.",
                      context:
                        "He sees the gap—move to details.",
                      nextStep: "Ask which system fails most.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Somewhat confident, but auditors keep asking for more proof.",
                      context:
                        "Need evidence plan.",
                      nextStep: "Probe for reporting cadence.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "Modernization is out of my hands.",
                      context:
                        "He detaches—tie it to his data ownership.",
                      nextStep: "Explain how warehouse data underpins modernization.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "Which modernization milestone is at risk?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "The automated picking pilot.",
                      context:
                        "Target found.",
                      nextStep: "Offer CODA to feed that pilot.",
                    },
                    {
                      quality: "Medium",
                      statement: "Either picking or asset tracking.",
                      context:
                        "Need priority.",
                      nextStep: "Help him choose picking.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "All of them.",
                      context:
                        "Overwhelmed—focus him.",
                      nextStep: "Explain why starting small works.",
                    },
                  ],
                },
                {
                  stageType: "Closed probe",
                  question: "What system feeds that pilot today?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement: "A legacy warehouse app.",
                      context:
                        "Integration point—CODA can sit on top.",
                      nextStep: "Show CODA connectors.",
                    },
                    {
                      quality: "Medium",
                      statement: "Spreadsheets until IT delivers.",
                      context:
                        "Manual stopgap—opportunity.",
                      nextStep: "Offer CODA as interim system.",
                    },
                    {
                      quality: "Unfavorable",
                      statement: "Vendors are figuring it out.",
                      context:
                        "No ownership—tie it back to him.",
                      nextStep: "Explain how CODA de-risks vendor work.",
                    },
                  ],
                },
                {
                  stageType: "PoC ask",
                  question:
                    "If CODA can be the data backbone for the picking pilot and give auditors clear evidence, will you sponsor the modernization PoC?",
                  answers: [
                    {
                      quality: "Optimal",
                      statement:
                        "Yes—loop in IT and the modernization PM.",
                      context:
                        "Commitment plus stakeholder ask.",
                      nextStep: "Schedule triad planning.",
                    },
                    {
                      quality: "Medium",
                      statement:
                        "Maybe, if CODA proves it won't slow IT down.",
                      context:
                        "Need reassurance.",
                      nextStep: "Show CODA runs off existing extracts.",
                    },
                    {
                      quality: "Unfavorable",
                      statement:
                        "No appetite for new tools.",
                      context:
                        "Tool fatigue—show CODA as a layer, not a tool.",
                      nextStep: "Explain CODA sits between systems without new UI for crews.",
                    },
                  ],
                },
              ],
              evaluation: {
                summary:
                  "Goal: Ravi names CODA as the data backbone for the picking pilot with IT and modernization PM onboard.",
                strengths: [
                  "Connect modernization to data",
                  "Pick a pilot",
                  "Align IT and PM",
                ],
                improvements: [
                  "Show connectors early",
                  "Address tool fatigue",
                  "Share auditor evidence packs",
                ],
              },
            },
          ],
        },
      ],
    },
  ];
}

init();
