const personas = [
  {
    id: "cfo-carla",
    name: "Carla Mason",
    role: "Chief Financial Officer",
    company: "Horizon Plastics",
    summary:
      "Carla is a finance-first CFO balancing aggressive EBITDA targets with a fragile legacy data estate. She wants proof that CODA MDM protects margins and derisks audits.",
    personaPack: {
      storyline:
        "Horizon Plastics is rolling up three acquisitions. The finance team is reconciling conflicting SKU hierarchies and supplier records every quarter, burning overtime and exposing material weaknesses.",
      painPoints: [
        "Audit risk created by inconsistent product and supplier masters",
        "Finance analysts spending 30% of their week cleansing spreadsheets",
        "Strained cash conversion cycle because inventory truth is unclear",
      ],
      questions: [
        "How quickly will CODA prove ROI?",
        "What controls guarantee that governance rules stick?",
        "How hard is this to deploy alongside our ERP modernization?",
      ],
      strategy:
        "Lead with quantified cost takeout, then paint how governed data underpins cash, close, and compliance metrics.",
      redLine:
        "She will not sponsor open-ended pilots or anything that risks delaying the ERP consolidation close.",
    },
    scenarios: [
      {
        id: "cfo-intro",
        name: "Intro Meeting — Establish Financial Value",
        description:
          "Prove that CODA's MDM platform creates measurable finance outcomes within the first quarter.",
        startStep: "opening",
        steps: {
          opening: {
            personaLine:
              "We already invested millions in ERP upgrades. Why should I fund another data project now?",
            responses: [
              {
                id: "opening-good",
                label: "Tie to ERP ROI",
                text:
                  "Your ERP modernization needs governed masters to keep close cycles tight. CODA gives finance a clean layer so the ERP investment pays off in the very next close.",
                quality: "good",
                scoreImpact: 1,
                nextStep: "controls",
                feedback: {
                  why: "Links MDM to a sunk ERP investment and protects Carla's KPIs.",
                  meaning: "Shows you understand her financial lens and timing pressure.",
                  personaPerspective:
                    "Carla hears that CODA safeguards the board-level project she already approved.",
                  dealDirection:
                    "Trust increases and she is willing to keep exploring the business case.",
                  nextQuestion: "She now wants to know how governance stays enforced.",
                },
              },
              {
                id: "opening-weak",
                label: "Talk about technology",
                text:
                  "CODA's platform is cloud-native and fast to deploy, so the IT team barely has to touch it.",
                quality: "weak",
                scoreImpact: 0.4,
                nextStep: "controls",
                feedback: {
                  why: "Talks features before business value.",
                  meaning: "She hears vendor-speak and only a partial answer.",
                  personaPerspective:
                    "Carla doubts you can translate technology into EBIT impact.",
                  dealDirection:
                    "Curiosity drops but she lets the meeting continue.",
                  nextQuestion: "She presses on controls to test credibility.",
                },
              },
              {
                id: "opening-wrong",
                label: "Discredit ERP choice",
                text:
                  "Legacy ERPs never work. CODA replaces them with a cleaner experience across plants.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: "controls",
                feedback: {
                  why: "Insulting her flagship program undermines trust immediately.",
                  meaning: "Signals you don't understand sunk cost politics.",
                  personaPerspective: "Carla will defend her ERP decision and question your maturity.",
                  dealDirection: "Deal momentum stalls.",
                  nextQuestion: "She goes cold and asks for governance proof.",
                },
              },
            ],
          },
          controls: {
            personaLine:
              "Finance needs ironclad controls. How do you ensure people don't revert to rogue spreadsheets?",
            responses: [
              {
                id: "controls-good",
                label: "Explain policy automation",
                text:
                  "CODA codifies ownership, approval chains, and automated validations so policy lives inside the data model. Every change request is auditable and routed to the right finance steward.",
                quality: "good",
                scoreImpact: 1,
                nextStep: null,
                feedback: {
                  why: "Connects CODA to compliance and internal controls.",
                  meaning: "Gives Carla language she can repeat to Audit.",
                  personaPerspective:
                    "She imagines handing auditors a digital trail instead of binders.",
                  dealDirection: "Momentum accelerates toward a pilot.",
                  nextQuestion: "She asks for cost and deployment next meeting.",
                },
              },
              {
                id: "controls-weak",
                label: "Offer manual governance",
                text:
                  "We can train users quarterly so they remember which spreadsheet to use.",
                quality: "weak",
                scoreImpact: 0.4,
                nextStep: null,
                feedback: {
                  why: "Manual training doesn't scale and ignores auditability.",
                  meaning: "Makes Carla feel the burden still sits with finance.",
                  personaPerspective:
                    "She worries the team will slip back into old habits.",
                  dealDirection: "Deal pauses until you show automation.",
                  nextQuestion: "She asks for proof points before re-engaging.",
                },
              },
              {
                id: "controls-wrong",
                label: "Defer to IT",
                text:
                  "IT can lock down spreadsheets for you. CODA focuses on the API layer only.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: null,
                feedback: {
                  why: "Deflects ownership and ignores finance governance needs.",
                  meaning: "Carla thinks you'll dump work on her CIO.",
                  personaPerspective:
                    "She mentally checks out and ends the conversation.",
                  dealDirection: "Loss — she won't invite you back.",
                  nextQuestion: "No further questions; meeting ends.",
                },
              },
            ],
          },
        },
        evaluation: {
          success:
            "You linked CODA to ERP ROI and automated controls, which is the language Carla uses with the board.",
          caution:
            "You earned interest but never fully proved control automation. Tie governance to audit metrics next time.",
          poor:
            "Finance never heard a compelling reason to change. Re-center on cost takeout and risk mitigation.",
          strengths: [
            "Quantify finance labor reclaimed by governed masters",
            "Reference prior ERP investment to show stewardship",
          ],
          improvements: [
            "Name the finance steward model and approval routing",
            "Share a manufacturing customer proof point",
          ],
          recommendations: [
            "Budget Objection Handling",
            "Technical Deep Dive with Operations",
          ],
        },
      },
      {
        id: "cfo-objection",
        name: "Objection Handling — Budget Freeze",
        description:
          "Carla freezes discretionary spend mid-quarter. Defend the business case without sounding desperate.",
        startStep: "objection",
        steps: {
          objection: {
            personaLine:
              "Finance just issued a hiring and software freeze. Convince me why this can't wait until next year.",
            responses: [
              {
                id: "obj-good",
                label: "Quantify risk now",
                text:
                  "Deferral keeps 8% of your working capital trapped in ghost inventory. CODA releases that cash this quarter by reconciling product masters across the roll-up.",
                quality: "good",
                scoreImpact: 1,
                nextStep: "proof",
                feedback: {
                  why: "Translates MDM into immediate cash unlock.",
                  meaning: "Shows empathy for her freeze while reframing it as a risk.",
                  personaPerspective:
                    "Carla recognizes the freeze is already costing her money.",
                  dealDirection: "She reopens the door for a funded pilot.",
                  nextQuestion: "She now wants reference proof.",
                },
              },
              {
                id: "obj-weak",
                label: "Offer discount",
                text:
                  "We can cut license pricing by 30% if you sign before quarter end.",
                quality: "weak",
                scoreImpact: 0.3,
                nextStep: "proof",
                feedback: {
                  why: "Price pressure without value smells like desperation.",
                  meaning: "Carla questions CODA's financial stability.",
                  personaPerspective:
                    "She now expects more discounts later.",
                  dealDirection: "Deal value erodes and timing pressure increases.",
                  nextQuestion: "She still asks for proof because price alone is not enough.",
                },
              },
              {
                id: "obj-wrong",
                label: "Blame IT",
                text:
                  "Your CIO asked for this. I'm surprised you would block their roadmap.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: "proof",
                feedback: {
                  why: "Triangulating internal politics is manipulative.",
                  meaning: "Carla will protect her peers and remove you from consideration.",
                  personaPerspective: "She now views you as high risk.",
                  dealDirection: "Relationship damaged.",
                  nextQuestion: "She forces you to provide proof or exit.",
                },
              },
            ],
          },
          proof: {
            personaLine:
              "Do you have evidence CODA delivered cash impact during a freeze like this?",
            responses: [
              {
                id: "proof-good",
                label: "Share manufacturing case",
                text:
                  "Northwind Steel freed $18M in working capital in 90 days by governing plant, supplier, and SKU masters through CODA. Their CFO issued the same freeze and still funded the initiative because of the cash unlock.",
                quality: "good",
                scoreImpact: 1,
                nextStep: null,
                feedback: {
                  why: "Proof mirrors her industry and situation.",
                  meaning: "She can retell the story to her CEO.",
                  personaPerspective:
                    "Carla believes the investment is defensive, not discretionary.",
                  dealDirection: "Pilot approved pending paperwork.",
                  nextQuestion: "She sets up next steps with procurement.",
                },
              },
              {
                id: "proof-weak",
                label: "Offer analyst report",
                text:
                  "Industry analysts rate CODA as a visionary. I can send you their latest quadrant.",
                quality: "weak",
                scoreImpact: 0.4,
                nextStep: null,
                feedback: {
                  why: "Analyst praise is generic and not tied to her freeze.",
                  meaning: "Feels like marketing collateral.",
                  personaPerspective:
                    "She still doubts the short-term value.",
                  dealDirection: "Momentum slows until finance proof arrives.",
                  nextQuestion: "She delays until Q1 budget cycle.",
                },
              },
              {
                id: "proof-wrong",
                label: "Dodge question",
                text:
                  "Every customer is different. You'll just have to trust us.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: null,
                feedback: {
                  why: "Avoiding proof destroys credibility.",
                  meaning: "Carla assumes CODA lacks wins.",
                  personaPerspective:
                    "She walks away from the deal.",
                  dealDirection: "Closed-lost.",
                  nextQuestion: "Conversation ends.",
                },
              },
            ],
          },
        },
        evaluation: {
          success:
            "You reframed the freeze as a risk and backed it up with proof, so the CFO can defend the spend.",
          caution:
            "Value landed but proof felt generic. Bring a quantified peer story next time.",
          poor:
            "You never moved beyond discounting, so the freeze stayed in place.",
          strengths: [
            "Translate objections into risk language",
            "Use quantified peer stories",
          ],
          improvements: [
            "Practice the Northwind case study",
            "Stack-rank the cash metrics most important to Carla",
          ],
          recommendations: ["Intro Meeting", "Operations Technical Alignment"],
        },
      },
    ],
  },
  {
    id: "ops-dante",
    name: "Dante Ruiz",
    role: "Vice President of Operations",
    company: "Verdant Drinks",
    summary:
      "Dante runs six beverage plants with razor-thin downtime tolerances. He needs accurate recipes and asset masters to keep throughput and quality stable.",
    personaPack: {
      storyline:
        "Verdant is launching three clean-label products while retrofitting two plants. Engineering, quality, and procurement systems disagree on BOMs and maintenance history.",
      painPoints: [
        "Unplanned downtime from conflicting asset and maintenance masters",
        "Slow product introduction because specs change per department",
        "Quality excursions caused by version confusion",
      ],
      questions: [
        "Can CODA connect maintenance, MES, and PLM data?",
        "How fast can plants self-serve accurate masters?",
        "What happens during an outage?",
      ],
      strategy:
        "Paint the control tower view for plant teams and emphasize how CODA protects throughput and safety.",
      redLine: "He will not accept solutions that add approval latency on the shop floor.",
    },
    scenarios: [
      {
        id: "ops-intro",
        name: "Intro Meeting — Plant Reliability",
        description:
          "Show Dante that CODA accelerates plant readiness and reduces downtime.",
        startStep: "pressure",
        steps: {
          pressure: {
            personaLine:
              "Every plant team already complains about new systems. Why would I add another layer?",
            responses: [
              {
                id: "pressure-good",
                label: "Focus on operators",
                text:
                  "Operators only see curated masters in CODA. Instead of digging for the right BOM, they scan the asset tag and CODA feeds MES with the approved recipe in seconds.",
                quality: "good",
                scoreImpact: 1,
                nextStep: "proof",
                feedback: {
                  why: "Centers operator experience and speed.",
                  meaning: "Shows empathy for his latency concern.",
                  personaPerspective:
                    "Dante imagines one source of truth per asset.",
                  dealDirection: "He leans in to learn more.",
                  nextQuestion: "He asks for proof of downtime reduction.",
                },
              },
              {
                id: "pressure-weak",
                label: "Talk about AI",
                text:
                  "CODA's AI auto-builds digital twins for every plant.",
                quality: "weak",
                scoreImpact: 0.3,
                nextStep: "proof",
                feedback: {
                  why: "Buzzwords without plant value.",
                  meaning: "Sounds like marketing hype.",
                  personaPerspective:
                    "Dante doubts CODA understands factory life.",
                  dealDirection: "Interest drops.",
                  nextQuestion: "He still asks for proof but is skeptical.",
                },
              },
              {
                id: "pressure-wrong",
                label: "Blame IT",
                text:
                  "Your IT team already approved CODA, so resistance is futile.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: "proof",
                feedback: {
                  why: "Dismisses his authority on plant operations.",
                  meaning: "He will shut down the meeting.",
                  personaPerspective:
                    "Dante feels steamrolled.",
                  dealDirection: "Conversation derails.",
                  nextQuestion: "He grudgingly asks for proof before ending the call.",
                },
              },
            ],
          },
          proof: {
            personaLine:
              "Fine, show me where this actually cut downtime.",
            responses: [
              {
                id: "proof-good",
                label: "Share Verdant peer",
                text:
                  "At Alpine Beverages, CODA synchronized maintenance and quality masters so line changeovers dropped from 6 hours to 3. Operators trust the data because CODA injects governance into MES without slowing them down.",
                quality: "good",
                scoreImpact: 1,
                nextStep: null,
                feedback: {
                  why: "Directly addresses throughput and latency.",
                  meaning: "Provides relatable proof.",
                  personaPerspective:
                    "Dante imagines replicating the success.",
                  dealDirection: "He wants a plant walkthrough.",
                  nextQuestion: "He schedules a technical workshop.",
                },
              },
              {
                id: "proof-weak",
                label: "Offer webinar",
                text:
                  "I'll invite you to a webinar with our CTO next month.",
                quality: "weak",
                scoreImpact: 0.4,
                nextStep: null,
                feedback: {
                  why: "Delayed value and not plant-specific.",
                  meaning: "Sounds like homework.",
                  personaPerspective:
                    "He doubts urgency.",
                  dealDirection: "Meeting fizzles.",
                  nextQuestion: "He defers decision.",
                },
              },
              {
                id: "proof-wrong",
                label: "Change subject",
                text:
                  "Let me show you our mobile UI instead.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: null,
                feedback: {
                  why: "Ignores his proof request.",
                  meaning: "Signals CODA lacks results.",
                  personaPerspective:
                    "Dante ends the conversation.",
                  dealDirection: "No deal.",
                  nextQuestion: "Meeting ends abruptly.",
                },
              },
            ],
          },
        },
        evaluation: {
          success:
            "You championed operators and backed it up with plant-proof, so Dante trusts CODA won't slow lines.",
          caution:
            "Messaging resonated but proof felt generic. Use plant metrics like OEE or MTTR next call.",
          poor:
            "The plant team never heard a reason to change. Focus on downtime math.",
          strengths: [
            "Speak in plant-ready language",
            "Use peer changeover statistics",
          ],
          improvements: [
            "Map CODA governance to existing MES workflow",
            "Quantify approval latency impact",
          ],
          recommendations: ["Reliability Objection", "Finance Alignment"],
        },
      },
    ],
  },
  {
    id: "plant-shea",
    name: "Shea Patel",
    role: "Plant Manager",
    company: "NexiChem",
    summary:
      "Shea balances throughput, safety, and labor morale. She needs practical coaching on how CODA guides daily huddles and corrective actions.",
    personaPack: {
      storyline:
        "NexiChem is onboarding two new contract manufacturers while retiring a paper-based logbook. Shea's team is flooded with conflicting specs and deviation data.",
      painPoints: [
        "Paper travelers conflict with ERP masters",
        "Corrective actions stall because owners are unclear",
        "Supervisors can't see which version of a spec is approved",
      ],
      questions: [
        "How does CODA show me the next best action?",
        "Who owns data fixes when shifts change?",
        "What do operators see on the floor?",
      ],
      strategy:
        "Keep it tactile: show how CODA supports huddles, assigns owners, and closes the loop in minutes.",
      redLine:
        "If it adds another tablet workflow with no coaching context, she'll reject it.",
    },
    scenarios: [
      {
        id: "plant-objection",
        name: "Objection — Operators Hate New Tools",
        description:
          "Coach Shea on how CODA reduces clicks and clarifies accountability during shift changes.",
        startStep: "concern",
        steps: {
          concern: {
            personaLine:
              "Operators already juggle MES, LIMS, and paper binders. Why would they trust CODA?",
            responses: [
              {
                id: "concern-good",
                label: "Show guided workflow",
                text:
                  "CODA sits behind the scenes. Operators just scan the lot number and CODA pushes the approved spec plus the next action into the MES screen they already live in.",
                quality: "good",
                scoreImpact: 1,
                nextStep: "handoff",
                feedback: {
                  why: "Explains low-friction adoption.",
                  meaning: "Shea sees fewer systems on the floor.",
                  personaPerspective:
                    "She imagines operators guided without extra tablets.",
                  dealDirection: "Objection softens.",
                  nextQuestion: "She asks about accountability on handoffs.",
                },
              },
              {
                id: "concern-weak",
                label: "Promise training",
                text:
                  "We'll run extra training sessions so everyone memorizes CODA.",
                quality: "weak",
                scoreImpact: 0.4,
                nextStep: "handoff",
                feedback: {
                  why: "Training fatigue doesn't solve workflow friction.",
                  meaning: "Shea expects more overtime.",
                  personaPerspective:
                    "She doubts adoption will stick.",
                  dealDirection: "Momentum slows.",
                  nextQuestion: "She still pushes on handoffs.",
                },
              },
              {
                id: "concern-wrong",
                label: "Dismiss worry",
                text:
                  "Operators will adapt. This is how modern plants run.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: "handoff",
                feedback: {
                  why: "Minimizes her frontline expertise.",
                  meaning: "Shea disengages.",
                  personaPerspective:
                    "She feels unheard.",
                  dealDirection: "Conversation deteriorates.",
                  nextQuestion: "She grills you on accountability with a cold tone.",
                },
              },
            ],
          },
          handoff: {
            personaLine:
              "Fine. When a batch deviates overnight, who owns the fix by morning huddle?",
            responses: [
              {
                id: "handoff-good",
                label: "Describe accountability graph",
                text:
                  "CODA tags every spec and asset to an accountable owner. Deviations auto-route with timers, so by morning huddle Shea sees who accepted, what action was taken, and what risk remains.",
                quality: "good",
                scoreImpact: 1,
                nextStep: null,
                feedback: {
                  why: "Makes ownership visible and time-bound.",
                  meaning: "Shea gains confidence in shift handoffs.",
                  personaPerspective:
                    "She can coach based on system alerts, not gut feel.",
                  dealDirection: "She schedules a floor trial.",
                  nextQuestion: "She wants recommended next scenarios.",
                },
              },
              {
                id: "handoff-weak",
                label: "Send spreadsheet",
                text:
                  "We'll email a responsibility matrix each week.",
                quality: "weak",
                scoreImpact: 0.3,
                nextStep: null,
                feedback: {
                  why: "Static spreadsheets age instantly.",
                  meaning: "Doesn't solve overnight gaps.",
                  personaPerspective:
                    "Shea sees more admin work.",
                  dealDirection: "No pilot yet.",
                  nextQuestion: "She postpones decisions.",
                },
              },
              {
                id: "handoff-wrong",
                label: "Blame QA",
                text:
                  "Quality should already handle deviations. Ask them.",
                quality: "wrong",
                scoreImpact: 0,
                nextStep: null,
                feedback: {
                  why: "Deflects accountability and fuels silos.",
                  meaning: "Shea loses trust.",
                  personaPerspective:
                    "She sees CODA as finger-pointing software.",
                  dealDirection: "Deal dies.",
                  nextQuestion: "Conversation ends.",
                },
              },
            ],
          },
        },
        evaluation: {
          success:
            "You showed how CODA augments existing MES screens and enforces ownership, so Shea envisions real relief.",
          caution:
            "Workflow concepts resonated but accountability was vague. Bring the routing diagram next time.",
          poor:
            "You never connected CODA to shift reality. Ground the story in huddles and owners.",
          strengths: [
            "Translate CODA into operator actions",
            "Address shift handoff anxiety",
          ],
          improvements: [
            "Demonstrate deviation routing timers",
            "Share adoption coaching tips",
          ],
          recommendations: ["Plant Startup Scenario", "Finance Alignment"],
        },
      },
    ],
  },
];

const state = {
  persona: null,
  scenario: null,
  currentStepId: null,
  score: 0,
  stepsAnswered: 0,
  history: [],
  finished: false,
};

const personaListEl = document.getElementById("personaList");
const scenarioListEl = document.getElementById("scenarioList");
const personaDetailsEl = document.getElementById("personaDetails");
const scenarioTitleEl = document.getElementById("scenarioTitle");
const scenarioDescriptionEl = document.getElementById("scenarioDescription");
const conversationLogEl = document.getElementById("conversationLog");
const currentPromptEl = document.getElementById("currentPrompt");
const answerOptionsEl = document.getElementById("answerOptions");
const feedbackContentEl = document.getElementById("feedbackContent");
const restartButton = document.getElementById("restartScenario");

restartButton.addEventListener("click", () => {
  if (state.persona && state.scenario) {
    startScenario(state.scenario);
  }
});

function renderPersonas() {
  personaListEl.innerHTML = "";
  personas.forEach((persona) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = `${persona.name} — ${persona.role}`;
    button.addEventListener("click", () => selectPersona(persona.id));
    button.dataset.personaId = persona.id;
    li.appendChild(button);
    personaListEl.appendChild(li);
  });
}

function selectPersona(personaId) {
  const persona = personas.find((p) => p.id === personaId);
  state.persona = persona;
  state.scenario = null;
  state.currentStepId = null;
  state.history = [];
  state.score = 0;
  state.stepsAnswered = 0;
  state.finished = false;
  restartButton.disabled = true;

  document
    .querySelectorAll(".persona-list button")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.personaId === personaId));

  renderPersonaDetails(persona);
  renderScenarios(persona);
  resetConversation();
}

function renderPersonaDetails(persona) {
  const painPoints = persona.personaPack.painPoints
    .map((point) => `<li>${point}</li>`)
    .join("");
  const questions = persona.personaPack.questions
    .map((q) => `<li>${q}</li>`)
    .join("");

  personaDetailsEl.innerHTML = `
    <h2>${persona.name}</h2>
    <p class="persona-summary"><strong>${persona.role}</strong> · ${persona.company}</p>
    <p>${persona.summary}</p>
    <div class="persona-meta">
      <div>
        <strong>Storyline</strong>
        <p>${persona.personaPack.storyline}</p>
      </div>
      <div>
        <strong>Strategy</strong>
        <p>${persona.personaPack.strategy}</p>
      </div>
      <div>
        <strong>Red-line</strong>
        <p>${persona.personaPack.redLine}</p>
      </div>
    </div>
    <div class="persona-meta">
      <div>
        <strong>Top Pain Points</strong>
        <ul>${painPoints}</ul>
      </div>
      <div>
        <strong>Questions They Ask</strong>
        <ul>${questions}</ul>
      </div>
    </div>
  `;
}

function renderScenarios(persona) {
  scenarioListEl.innerHTML = "";
  persona.scenarios.forEach((scenario) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = scenario.name;
    button.dataset.scenarioId = scenario.id;
    button.addEventListener("click", () => selectScenario(scenario.id));
    li.appendChild(button);
    scenarioListEl.appendChild(li);
  });
}

function selectScenario(scenarioId) {
  if (!state.persona) return;
  const scenario = state.persona.scenarios.find((s) => s.id === scenarioId);
  state.scenario = scenario;
  startScenario(scenario);

  document
    .querySelectorAll(".scenario-list button")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.scenarioId === scenarioId));
}

function startScenario(scenario) {
  state.currentStepId = scenario.startStep;
  state.history = [];
  state.score = 0;
  state.stepsAnswered = 0;
  state.finished = false;
  restartButton.disabled = false;

  scenarioTitleEl.textContent = scenario.name;
  scenarioDescriptionEl.textContent = scenario.description;
  conversationLogEl.innerHTML = "";
  renderCurrentStep();
  updateFeedbackPanel();
}

function renderCurrentStep() {
  if (!state.scenario || !state.currentStepId) {
    currentPromptEl.textContent = "Scenario complete";
    answerOptionsEl.innerHTML = "";
    return;
  }

  const step = state.scenario.steps[state.currentStepId];
  currentPromptEl.textContent = step.personaLine;
  answerOptionsEl.innerHTML = "";

  step.responses.forEach((response) => {
    const card = document.createElement("button");
    card.className = `answer-card ${response.quality}`;
    card.innerHTML = `
      <div class="label">${response.label}</div>
      <p>${response.text}</p>
    `;
    card.addEventListener("click", () => handleAnswer(step, response));
    answerOptionsEl.appendChild(card);
  });
}

function handleAnswer(step, response) {
  if (state.finished) return;

  state.history.push({
    personaLine: step.personaLine,
    userAnswer: response.text,
    quality: response.quality,
    label: response.label,
  });
  state.stepsAnswered += 1;
  state.score += response.scoreImpact;

  renderHistory();
  updateFeedbackPanel(response);

  if (!response.nextStep) {
    finishScenario();
    return;
  }

  state.currentStepId = response.nextStep;
  renderCurrentStep();
}

function renderHistory() {
  if (!state.history.length) {
    conversationLogEl.innerHTML = '<p class="empty-state">No conversation yet.</p>';
    return;
  }

  conversationLogEl.innerHTML = state.history
    .map(
      (entry, index) => `
        <div class="entry">
          <strong>Persona turn ${index + 1}</strong>
          <p>${entry.personaLine}</p>
          <div class="user-answer">${entry.label}</div>
          <p>${entry.userAnswer}</p>
        </div>
      `
    )
    .join("");
}

function updateFeedbackPanel(response) {
  if (!response) {
    feedbackContentEl.innerHTML = `
      <div class="feedback-card">
        <h4>How it works</h4>
        <p>Pick a persona, choose a scenario, then select the best answer to advance the deal. Feedback will explain why each answer is good, weak, or wrong.</p>
      </div>
    `;
    return;
  }

  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <h4>Answer quality</h4>
      <p class="badge">${response.quality.toUpperCase()}</p>
      <p>${response.feedback.why}</p>
    </div>
    <div class="feedback-card">
      <h4>What it means</h4>
      <p>${response.feedback.meaning}</p>
      <p><strong>Persona reaction:</strong> ${response.feedback.personaPerspective}</p>
      <p><strong>Deal direction:</strong> ${response.feedback.dealDirection}</p>
      <p><strong>Next question:</strong> ${response.feedback.nextQuestion}</p>
    </div>
  `;
}

function finishScenario() {
  state.finished = true;
  state.currentStepId = null;
  renderCurrentStep();

  const totalPossible = state.stepsAnswered;
  const percent = Math.round((state.score / totalPossible) * 100);
  const evaluation = state.scenario.evaluation;
  const rating =
    percent >= 80 ? evaluation.success : percent >= 50 ? evaluation.caution : evaluation.poor;

  const recommendationList = evaluation.recommendations
    .map((item) => `<li>${item}</li>`)
    .join("");
  const strengths = evaluation.strengths.map((item) => `<li>${item}</li>`).join("");
  const improvements = evaluation.improvements.map((item) => `<li>${item}</li>`).join("");

  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <h4>Session Score</h4>
      <p class="badge">${percent}%</p>
      <p>${rating}</p>
    </div>
    <div class="feedback-card">
      <h4>What you did well</h4>
      <ul>${strengths}</ul>
      <h4>What to improve</h4>
      <ul>${improvements}</ul>
    </div>
    <div class="feedback-card">
      <h4>Recommended next scenarios</h4>
      <ul>${recommendationList}</ul>
    </div>
  `;

  currentPromptEl.textContent = "Scenario complete — review your coaching below.";
  answerOptionsEl.innerHTML = '<p class="empty-state">Restart the scenario or pick a new one to keep practicing.</p>';
}

function resetConversation() {
  conversationLogEl.innerHTML =
    '<p class="empty-state">No conversation yet. Select a scenario to see the persona speak.</p>';
  currentPromptEl.textContent = "—";
  answerOptionsEl.innerHTML = "";
  updateFeedbackPanel();
}

renderPersonas();
