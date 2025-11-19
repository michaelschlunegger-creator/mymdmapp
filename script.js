const personas = [
  {
    id: "cfo-energy",
    name: "Mara Velasquez",
    role: "Chief Financial Officer",
    industry: "Integrated Oil & Gas",
    storyline:
      "Mara is under pressure to release cash while keeping refineries supplied. Duplicate materials and inconsistent plant data keep hundreds of millions locked in warehouses.",
    strategy:
      "Lead with working-capital stakes, then narrow to measurable data quality targets and conclude with a PoC request tied to cash unlock milestones.",
    valueFocus: [
      "Reduce duplicate spare parts by double digits",
      "Create trustable plant-to-SAP material views",
      "Sponsor a PoC that proves cash release within 6 weeks",
    ],
    questionThemes: [
      "Working capital leakage",
      "Baseline inventory accuracy",
      "Executive sponsorship for PoC",
    ],
    scenarios: [
      {
        id: "working-capital",
        title: "Working Capital Leak Intro",
        description:
          "Open with dramatic cost pressure, probe for accuracy gaps, then secure Mara's PoC sponsorship.",
        stages: [
          {
            question:
              "Recently I was talking to a CEO in Oil & Gas who said $400 spare parts are duplicated all over his warehouses. A 10% reduction freed millions in cash. How close is that to what you see across your refineries?",
            stageType: "Open hook",
            answers: [
              {
                quality: "Optimal",
                statement:
                  "You're not wrong. We estimate nearly $280M is frozen in materials that have either twins or haven't moved in two years.",
                context:
                  "She admits the scale of the leak and is emotionally engaged, which opens the door to quantify the red path.",
                nextStep: "Confirm how she measures duplicates today so you can anchor the PoC KPIs.",
              },
              {
                quality: "Medium",
                statement:
                  "We manage duplicates as best we can. Finance reviews stock every quarter, but I don't think it's millions on the line.",
                context:
                  "She acknowledges the issue but downplays it. You need to tighten the numbers quickly before interest fades.",
                nextStep:
                  "Use a closed question about her latest audit to surface hard metrics and reframe the risk.",
              },
              {
                quality: "Unfavorable",
                statement:
                  "Inventory isn't my top headache. Production uptime matters more than some extra bolts on a shelf.",
                context:
                  "She pushes the topic away, so you must respectfully tie uptime back to clean data and cash discipline.",
                nextStep:
                  "Ask how inaccurate material masters impact turnaround speed to keep the hook alive.",
              },
            ],
          },
          {
            question:
              "If we zoom into your top three refineries, what percentage of the SAP material master would you actually trust today?",
            stageType: "Closed probe",
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
                  "Accuracy is fine when we don't touch the records. The issues come from vendors changing specs.",
                context:
                  "She shifts blame externally, so the red path risks derailing unless you bring the conversation back to her decision power.",
                nextStep: "Ask who owns the data standards and whether Finance can enforce a single source of truth.",
              },
            ],
          },
          {
            question:
              "If CODA could prove a 12% duplicate reduction in six weeks, would you sponsor a PoC so we can free that cash this quarter?",
            stageType: "PoC ask",
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
                  "Conditional interest. You must orchestrate the cross-functional buy-in fast so momentum is not lost.",
                nextStep: "List the two directors you will invite and propose a joint value session.",
              },
              {
                quality: "Unfavorable",
                statement:
                  "Not right now. We're juggling another ERP project and I can't absorb more change.",
                context:
                  "Flat rejection. You need to reframe the PoC as low lift and directly accretive to the ERP success criteria.",
                nextStep: "Offer a scoped, finance-led pilot that runs parallel without stressing IT. Revisit objections immediately.",
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
    ],
  },
  {
    id: "plant-automotive",
    name: "Darius Holt",
    role: "Plant Operations Director",
    industry: "Heavy Equipment Manufacturing",
    storyline:
      "Darius runs a multi-plant network that bleeds uptime because planners cannot trust spare-part alternates or maintenance history.",
    strategy:
      "Hook him with the cost of idle lines, then move into closed questions around maintenance planning accuracy before asking for a reliability PoC.",
    valueFocus: [
      "Increase first-time fix rate",
      "Shorten maintenance planning cycles",
      "Expose duplicate parts to release storage space",
    ],
    questionThemes: [
      "Line downtime costs",
      "Planner confidence",
      "Maintenance PoC scope",
    ],
    scenarios: [
      {
        id: "uptime",
        title: "Reliability Rescue",
        description:
          "Use a dramatic downtime example, confirm planner gaps with closed questions, and secure a maintenance analytics PoC.",
        stages: [
          {
            question:
              "A construction OEM told me one stalled assembly line costs them $90k every hour. With duplicate parts and missing alternates, they lost three days last quarter. How exposed are your dozer lines to that kind of hit?",
            stageType: "Open hook",
            answers: [
              {
                quality: "Optimal",
                statement:
                  "Too exposed. When the Peoria line stopped last month, maintenance chased three different part numbers for the same valve.",
                context:
                  "He shares a vivid failure that validates the hook and invites you to help fix it.",
                nextStep: "Quantify how planners decide alternates today.",
              },
              {
                quality: "Medium",
                statement:
                  "We had one scare, but the team improvised. I can't say it's millions, yet it keeps me up at night.",
                context:
                  "There's concern but no data. You need to introduce structure fast.",
                nextStep: "Move into a closed question about first-time fix rate or planning accuracy.",
              },
              {
                quality: "Unfavorable",
                statement:
                  "Downtime isn't from data—it's suppliers missing shipments. Parts records aren't the issue.",
                context:
                  "He diverts blame. Tie supplier reliability back to the accuracy of the master data he controls.",
                nextStep: "Ask how he validates alternates when the primary vendor slips.",
              },
            ],
          },
          {
            question:
              "When planners release a job, what percentage of the spare parts list is validated as accurate the first time?",
            stageType: "Closed probe",
            answers: [
              {
                quality: "Optimal",
                statement:
                  "Honestly around 60%. We double-handle work orders because maintenance keeps finding surprises.",
                context:
                  "A numerical gap plus rework cost clears the way to offer CODA's deterministic catalog.",
                nextStep: "Translate 40% rework into wasted hours and propose measuring it in the PoC.",
              },
              {
                quality: "Medium",
                statement:
                  "Depends on the crew. Some hit 80%, others won't log the checks at all.",
                context:
                  "Inconsistent process opens a coaching moment but needs structure to become urgent.",
                nextStep: "Suggest a shared governance playbook delivered through the pilot.",
              },
              {
                quality: "Unfavorable",
                statement:
                  "We don't track that number, and I'm not sure it matters as long as the job gets done.",
                context:
                  "He dismisses measurement, so highlight the labor cost and spare parts waste tied to not knowing.",
                nextStep: "Ask what downtime cost he would accept to baseline the metric.",
              },
            ],
          },
          {
            question:
              "If CODA can show a 15% lift in first-time-fix accuracy within eight weeks, will you host a maintenance PoC on the Peoria line?",
            stageType: "PoC ask",
            answers: [
              {
                quality: "Optimal",
                statement:
                  "Yes. Give me a clear scope and I'll assign my reliability lead to partner with you.",
                context:
                  "He greenlights the pilot and even names a resource—capture next steps now.",
                nextStep: "Send the PoC charter and lock calendar time with the reliability lead.",
              },
              {
                quality: "Medium",
                statement:
                  "Maybe. I'd want proof the data collection won't overwhelm my planners first.",
                context:
                  "He is interested but nervous about effort. You must reassure him that CODA handles the heavy lift.",
                nextStep: "Outline the exact data extracts and show how CODA automates cleansing.",
              },
              {
                quality: "Unfavorable",
                statement:
                  "No. We're rolling out a CMMS update and I can't distract the team.",
                context:
                  "A hard no tied to competing initiatives. Recast the PoC as supporting the CMMS rollout.",
                nextStep: "Offer to align CODA outputs with the CMMS cutover milestones.",
              },
            ],
          },
        ],
        evaluation: {
          summary:
            "Success looks like Darius committing the Peoria line for an eight-week PoC focused on first-time-fix accuracy.",
          strengths: [
            "Connect downtime dollars to duplicate data",
            "Use closed probes to expose planner confidence gaps",
            "Ask for a named PoC resource",
          ],
          improvements: [
            "Quantify rework hours faster",
            "Show how CODA lightens planner workload",
            "Link PoC outputs to CMMS investments",
          ],
        },
      },
    ],
  },
];

const personaListEl = document.getElementById("personaList");
const scenarioListEl = document.getElementById("scenarioList");
const personaDetailsEl = document.getElementById("personaDetails");
const scenarioTitleEl = document.getElementById("scenarioTitle");
const scenarioDescriptionEl = document.getElementById("scenarioDescription");
const currentPromptEl = document.getElementById("currentPrompt");
const answerOptionsEl = document.getElementById("answerOptions");
const conversationLogEl = document.getElementById("conversationLog");
const feedbackContentEl = document.getElementById("feedbackContent");
const restartButton = document.getElementById("restartScenario");

let currentPersona = null;
let currentScenario = null;
let stageIndex = 0;

function init() {
  renderPersonas();
  restartButton.addEventListener("click", () => {
    if (currentScenario) {
      startScenario(currentScenario);
    }
  });
}

function renderPersonas() {
  personaListEl.innerHTML = "";
  personas.forEach((persona) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = `${persona.name} · ${persona.role}`;
    button.dataset.id = persona.id;
    button.addEventListener("click", () => selectPersona(persona.id));
    li.appendChild(button);
    personaListEl.appendChild(li);
  });
}

function selectPersona(personaId) {
  currentPersona = personas.find((p) => p.id === personaId);
  currentScenario = null;
  stageIndex = 0;
  updateActiveButtons(personaListEl, personaId);
  personaDetailsEl.scrollIntoView({ behavior: "smooth" });
  renderPersonaDetails();
  renderScenarioList();
  resetConversation();
}

function renderPersonaDetails() {
  if (!currentPersona) {
    personaDetailsEl.innerHTML = "<h2>Select a persona to begin</h2>";
    return;
  }

  const valueList = currentPersona.valueFocus
    .map((item) => `<li>${item}</li>`)
    .join("");
  const questionList = currentPersona.questionThemes
    .map((item) => `<li>${item}</li>`)
    .join("");

  personaDetailsEl.innerHTML = `
    <h2>${currentPersona.name}</h2>
    <p><strong>Role:</strong> ${currentPersona.role} · ${currentPersona.industry}</p>
    <p>${currentPersona.storyline}</p>
    <p><strong>Ideal Strategy:</strong> ${currentPersona.strategy}</p>
    <div>
      <h3>Value focus</h3>
      <ul>${valueList}</ul>
    </div>
    <div>
      <h3>Question themes</h3>
      <ul>${questionList}</ul>
    </div>
  `;
}

function renderScenarioList() {
  scenarioListEl.innerHTML = "";
  if (!currentPersona) return;

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
  currentScenario = currentPersona.scenarios.find((s) => s.id === scenarioId);
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
    "<p>Answer quality, context, and the recommended red path will appear here.</p>";
  renderStage();
}

function resetConversation() {
  conversationLogEl.innerHTML =
    '<p class="empty-state">No dialogue yet. Select a scenario to see the first dramatic question.</p>';
  currentPromptEl.textContent = "Question: —";
  answerOptionsEl.innerHTML = "";
  feedbackContentEl.innerHTML =
    "<p>Answer quality, context, and the recommended red path will appear here.</p>";
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
    button.className = "answer-button";
    button.innerHTML = `<strong>${answer.quality}</strong><span>Answer: ${answer.statement}</span>`;
    button.addEventListener("click", () => handleAnswer(stage, answer));
    answerOptionsEl.appendChild(button);
  });
}

function handleAnswer(stage, answer) {
  addConversationEntry(stage.question, answer);
  updateFeedback(answer, stage.stageType);
  stageIndex += 1;
  if (stageIndex >= currentScenario.stages.length) {
    concludeScenario();
  } else {
    renderStage();
  }
}

function addConversationEntry(question, answer) {
  const entry = document.createElement("div");
  entry.className = "conversation-entry";

  const questionEl = document.createElement("p");
  questionEl.className = "question";
  questionEl.textContent = `Question: ${question}`;

  const answerEl = document.createElement("p");
  answerEl.className = `answer ${getQualityClass(answer.quality)}`;
  answerEl.textContent = `Answer (${answer.quality}): ${answer.statement}`;

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
      return "answer-optimal";
    case "Medium":
      return "answer-medium";
    default:
      return "answer-unfavorable";
  }
}

init();
