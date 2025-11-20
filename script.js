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
        focusAreas: [
          "Working capital locked in redundant stock",
          "Visibility across sites and systems",
          "Confidence to fund rapid pilots",
        ],
        redPath:
          "Link duplicates to cash release, quantify the pilot impact, and secure an executive sponsor for the PoC.",
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
              best:
                "A live view means we can plug CODA into existing controls and prove incremental cash unlocks quickly.",
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
              best:
                "Connect CODA's deduplication to working-capital targets and procurement savings the C-suite tracks.",
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
              best:
                "Align the pilot on cash release and scale, then map CODA outputs directly to her investment criteria.",
              weak:
                "Reports without financial linkage won't unlock budget. Reframe toward measurable KPIs.",
              bad:
                "Tool tolerance misses the CFO's lens. Pivot to business outcomes and risk reduction.",
            },
          },
        ],
      },
      {
        id: "financeCfo",
        name: "Finance / CFO",
        role: "Safeguards liquidity, reporting accuracy, and governance.",
        shortDescription:
          "Focuses on working-capital release and auditable data that keeps reconciliations clean across subsidiaries.",
        focusAreas: [
          "Consolidated visibility across ERPs",
          "Working-capital unlocks tied to data quality",
          "Governance that stands up to audit",
        ],
        redPath:
          "Quantify leakage from misclassified spend, model the cash unlocked by cleansing, and propose a governance-led pilot.",
        questions: [
          {
            id: "fin-cfo-1",
            text: "Do you have consolidated visibility of material stock and vendor spend across all sites?",
            options: [
              "Yes, we consolidate and trust the numbers.",
              "Partially—we reconcile across a few ERPs but it takes effort.",
              "Each site runs its own data, so consolidation is painful.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Great. CODA can validate that trusted view and surface hidden duplicates without disrupting reporting.",
              weak:
                "Partial visibility is costly time. Offer CODA to standardize attributes and automate roll-ups.",
              bad:
                "Fragmentation screams risk. Use CODA to create a single, auditable baseline before the next close.",
            },
          },
          {
            id: "fin-cfo-2",
            text: "How do you calculate the working capital you could release by cleansing duplicate or obsolete stock?",
            options: [
              "We model scenarios by category to see the cash impact quickly.",
              "We have a rough estimate based on historical write-offs.",
              "We don't calculate it—operations just carries the stock.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Perfect fit. CODA can feed that model with real duplication rates to validate the release.",
              weak:
                "A rough estimate is a starting point. Offer a data-backed assessment to sharpen the forecast.",
              bad:
                "No calculation means hidden cash. Frame CODA as the fastest way to prove and capture the upside.",
            },
          },
          {
            id: "fin-cfo-3",
            text: "When auditors challenge material balances, what evidence do you rely on?",
            options: [
              "Governed master data with traceable approvals and history.",
              "Manual reconciliations and email trails from the last cycle.",
              "We defer to operations to explain any mismatches.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Traceability pairs perfectly with CODA's governance. It keeps approvals and lineage audit-ready.",
              weak:
                "Manual trails consume time. CODA can centralize approvals and make evidence collection trivial.",
              bad:
                "Deferring to operations risks findings. Position CODA as the defensible system of record.",
            },
          },
        ],
      },
      {
        id: "cioHeadIt",
        name: "CIO / Head of IT",
        role: "Owns the application landscape and integration standards.",
        shortDescription:
          "Balances SAP/Maximo governance with scalable integrations that prevent duplicate masters across systems.",
        focusAreas: [
          "Cross-system master data flow",
          "Governance ownership and approval paths",
          "Proof that data quality improves reliability",
        ],
        redPath:
          "Map the system landscape, agree on ownership, and show how CODA deduplicates across SAP, Maximo, and CMMS feeds.",
        questions: [
          {
            id: "cio-1",
            text: "How do you manage your material master across SAP, Maximo, and any CMMS instances?",
            options: [
              "Everything is governed centrally through SAP.",
              "We coordinate between SAP and Maximo but rely on people to sync.",
              "Each site handles its own masters with little coordination.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Central governance is strong. CODA can plug in to enforce standards and block duplicates before they spread.",
              weak:
                "Human syncing creates drift. Offer CODA to automate cross-system checks and keep catalogs aligned.",
              bad:
                "Decentralization breeds duplication. Use this to justify a controlled hub powered by CODA.",
            },
          },
          {
            id: "cio-2",
            text: "Who approves new master data and ensures attributes are consistent?",
            options: [
              "Clear RACI with IT owning standards and business validating content.",
              "Shared, but it depends on who is available that week.",
              "No defined owner; it just happens during projects.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Great. CODA can codify that RACI and provide the workflow evidence leadership expects.",
              weak:
                "Ad-hoc ownership risks drift. Position CODA to standardize approvals and SLA tracking.",
              bad:
                "No ownership means chaos. CODA brings a governed flow that won't slow delivery.",
            },
          },
          {
            id: "cio-3",
            text: "How do you detect and resolve duplicates before they hit downstream systems?",
            options: [
              "Automated validations at creation with clear exception handling.",
              "We rely on periodic cleanups or user reports to find duplicates.",
              "We rarely detect them—it's not a priority.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "CODA can amplify that automation and give IT confidence that integrations stay clean.",
              weak:
                "Periodic cleanups leave leakage. CODA adds continuous checks with low effort.",
              bad:
                "Lack of priority equals hidden risk. Use CODA to show quick wins without heavy lift.",
            },
          },
        ],
      },
      {
        id: "opsMaintenanceHead",
        name: "Operations / Maintenance Head",
        role: "Keeps production reliable across plants and turnarounds.",
        shortDescription:
          "Needs accurate materials and vendor data so crews can execute safely without delays or excess buffers.",
        focusAreas: [
          "First-time-right job execution",
          "BOM integrity across sites",
          "Safety stock calibrated to real specs",
        ],
        redPath:
          "Connect misaligned descriptions to downtime risk, then show CODA keeping BOMs synchronized and buffers lean.",
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
        id: "plantManager",
        name: "Plant Manager / Site Manager",
        role: "Delivers uptime targets across production lines and shifts.",
        shortDescription:
          "Wants trusted data so outages aren't extended by wrong picks, missing parts, or reliance on one expert.",
        focusAreas: [
          "Uptime and schedule adherence",
          "Reducing reliance on tribal knowledge",
          "Confidence in stock availability",
        ],
        redPath:
          "Tie master-data reliability to downtime avoidance, then show CODA reducing dependency on a few veterans.",
        questions: [
          {
            id: "plant-1",
            text: "When you plan maintenance, does the team rely more on system data or experienced individuals?",
            options: [
              "The system is trusted for planning and picking.",
              "We mix system data with tribal knowledge depending on the shift.",
              "Mostly experience—system data isn't reliable enough.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Great. CODA can keep that trust high by preventing spec drift across sites.",
              weak:
                "Mixing signals risk. CODA can capture expert nuance and standardize it for everyone.",
              bad:
                "Experience-only is fragile. Position CODA as the way to protect uptime when key people are out.",
            },
          },
          {
            id: "plant-2",
            text: "How often does missing or unclear material data extend a planned outage?",
            options: [
              "Rarely—we validate BOMs ahead of time.",
              "Occasionally, we scramble for substitutes during the window.",
              "It happens a lot; we improvise on the fly.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Proactive validation is strong. CODA can automate those checks and keep outages on track.",
              weak:
                "Scrambling is costly. Use CODA to pre-approve alternates and cut outage risk.",
              bad:
                "Frequent improvisation screams risk. CODA enforces clarity so windows stay on schedule.",
            },
          },
          {
            id: "plant-3",
            text: "What backup do you have when key planners or storeroom leads are unavailable?",
            options: [
              "Standard playbooks and clean masters so anyone can step in.",
              "Some guides exist, but we depend on a few people for tricky parts.",
              "No backup—we wait for them to return.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Playbooks plus CODA keep operations resilient and reduce single points of failure.",
              weak:
                "Partial coverage is risky. CODA can encode those tricky details into standards everyone follows.",
              bad:
                "Waiting stalls production. Position CODA as the safety net for continuity.",
            },
          },
        ],
      },
      {
        id: "engineeringHead",
        name: "Engineering / Asset Integrity Head",
        role: "Protects asset reliability and compliance across the fleet.",
        shortDescription:
          "Needs BOMs and asset registers to stay synchronized so failures aren't caused by wrong specs or missing lineage.",
        focusAreas: [
          "Centralized and consistent asset data",
          "BOM accuracy and revision control",
          "Reducing failure risk from spec mismatch",
        ],
        redPath:
          "Start with data standardization across sites, then offer a focused validation on a critical asset class.",
        questions: [
          {
            id: "eng-1",
            text: "Do you maintain one centralized asset register or does each site manage its own version?",
            options: [
              "Centralized with clear standards and approvals.",
              "Partly centralized—sites have some autonomy.",
              "Each site runs its own register without alignment.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Centralization is a strong base. CODA can keep specs synchronized and audit-ready.",
              weak:
                "Partial control invites drift. CODA aligns site data with engineering standards automatically.",
              bad:
                "Site-by-site control risks failures. Use CODA to harmonize and enforce standards quickly.",
            },
          },
          {
            id: "eng-2",
            text: "How do you verify that BOMs match the actual installed equipment?",
            options: [
              "Regular reconciliations and governed change control.",
              "Periodic reviews when time allows.",
              "We assume BOMs are right unless there's a problem.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Governed change control pairs well with CODA to keep BOMs validated as vendors change.",
              weak:
                "Ad-hoc reviews miss issues. CODA provides continuous checks and recommendations.",
              bad:
                "Assumptions hide risk. CODA can surface mismatches before they cause downtime.",
            },
          },
          {
            id: "eng-3",
            text: "When specs differ across sites, how do you decide which standard wins?",
            options: [
              "We harmonize to a corporate standard and document the rationale.",
              "We debate case by case depending on who leads the project.",
              "We let each site run their own specs if it works for them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Harmonization is ideal. CODA keeps that decision visible and prevents drift.",
              weak:
                "Case-by-case decisions slow you down. CODA gives data to accelerate consensus.",
              bad:
                "Site autonomy dilutes integrity. CODA enforces the chosen standard across the fleet.",
            },
          },
        ],
      },
      {
        id: "inventoryController",
        name: "Inventory Controller / Warehouse Manager",
        role: "Manages inventory accuracy, space, and issuing discipline.",
        shortDescription:
          "Needs clean, deduplicated stock data so bins are trusted, slow movers shrink, and audits stay clean.",
        focusAreas: [
          "Cycle-count accuracy and audit readiness",
          "Duplicate detection across bins and sites",
          "Reducing slow movers and excess stock",
        ],
        redPath:
          "Quantify duplicate and non-moving stock, then prove CODA keeps receipts, barcodes, and descriptions aligned.",
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
        id: "procurementHead",
        name: "Procurement / Supply Chain Head",
        role: "Secures materials at the right cost, quality, and speed.",
        shortDescription:
          "Needs standardized specs to negotiate confidently, avoid maverick spend, and enable supplier consolidation.",
        focusAreas: [
          "Duplicate prevention during sourcing",
          "Speed to RFQ with complete specs",
          "Supplier consolidation based on normalized spend",
        ],
        redPath:
          "Anchor on savings leakage from duplicates, then show CODA accelerating intake and enabling supplier rationalization.",
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
      {
        id: "categoryManager",
        name: "Category Manager / Strategic Sourcing",
        role: "Owns category strategy, supplier rationalization, and savings targets.",
        shortDescription:
          "Wants harmonized supplier and material data so price comparisons are fair and savings are defensible.",
        focusAreas: [
          "Price variance across sites for identical items",
          "Centralized supplier and material standards",
          "Proof points for savings and negotiations",
        ],
        redPath:
          "Uncover fragmented supplier pricing, then use CODA to normalize specs and expose consolidation opportunities.",
        questions: [
          {
            id: "cat-1",
            text: "Do you maintain centralized supplier and material data for your category?",
            options: [
              "Yes—one governed catalog across sites.",
              "Partly—we centralize top spend but some sites keep local lists.",
              "No, each site manages its own suppliers and item data.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Centralization gives leverage. CODA can keep it clean and highlight overlap for faster negotiations.",
              weak:
                "Partial control hides leakage. CODA will normalize remaining items to reveal savings.",
              bad:
                "Decentralized data hurts strategy. Position CODA as the hub that creates a single sourcing view.",
            },
          },
          {
            id: "cat-2",
            text: "How do you check if suppliers offer different prices for the same item across sites?",
            options: [
              "We compare normalized specs and price files regularly.",
              "We review a few key items manually when renewing contracts.",
              "We rely on sites to negotiate locally and assume it's optimized.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Excellent. CODA can automate those comparisons and surface hidden variances instantly.",
              weak:
                "Manual spot checks miss value. CODA scales the analysis across the catalog.",
              bad:
                "Assuming optimization leaves savings on the table. Use CODA to prove the gap quickly.",
            },
          },
          {
            id: "cat-3",
            text: "When you build a negotiation pack, how confident are you in the underlying specs?",
            options: [
              "Very confident—attributes are standardized and audited.",
              "Somewhat—we clean them before major events.",
              "Not confident—we rely on supplier quotes to figure it out.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Great. CODA keeps specs audit-ready so negotiation packs stay credible.",
              weak:
                "Pre-event cleanup is slow. CODA keeps specs clean continuously so you negotiate faster.",
              bad:
                "Relying on suppliers erodes leverage. Position CODA as the data backbone for tough negotiations.",
            },
          },
        ],
      },
      {
        id: "digitalLead",
        name: "Digital Transformation Lead",
        role: "Drives automation, IoT, and analytics programs that rely on clean data.",
        shortDescription:
          "Links digital success to standardized master data so initiatives don't stall from inconsistent records.",
        focusAreas: [
          "Data readiness for digital and automation use cases",
          "Cross-site standards that enable scaling",
          "Governed corrections when gaps appear",
        ],
        redPath:
          "Connect failed digital projects to data quality, then propose a readiness check on a high-visibility use case.",
        questions: [
          {
            id: "dig-1",
            text: "How do you ensure digital and automation initiatives are backed by clean, standardized data?",
            options: [
              "We embed data quality checks into every initiative.",
              "We try, but standards vary by site.",
              "We assume IT handles it behind the scenes.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Strong discipline. CODA can accelerate those checks and keep standards enforced as you scale.",
              weak:
                "Variation by site is common. CODA harmonizes standards so use cases scale consistently.",
              bad:
                "Assumptions stall programs. Position CODA as the data readiness layer for your roadmap.",
            },
          },
          {
            id: "dig-2",
            text: "Do differences in naming or classification slow down rolling a use case across multiple plants?",
            options: [
              "No—we maintain consistent taxonomies everywhere.",
              "Sometimes—we adjust mappings when we find issues.",
              "Yes—each rollout needs custom work to map the data.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Consistency is gold. CODA keeps that taxonomy synchronized as new data arrives.",
              weak:
                "Manual mapping wastes time. CODA automates harmonization so rollouts stay fast.",
              bad:
                "Custom work per site kills scale. CODA standardizes the data fabric to unblock deployments.",
            },
          },
          {
            id: "dig-3",
            text: "What signal tells you a use case is at risk because of data quality?",
            options: [
              "Leading indicators like rising exceptions or model drift.",
              "We notice when users complain about bad suggestions.",
              "We don't track it—the team just fixes issues as they appear.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best:
                "Great. CODA can feed those indicators with real-time quality metrics tied to the use case.",
              weak:
                "User complaints are lagging. CODA surfaces quality risk before adoption drops.",
              bad:
                "No signal equals surprises. CODA establishes the monitoring layer you need to scale.",
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
const metricIndustriesEl = document.getElementById("metricIndustries");
const metricPersonasEl = document.getElementById("metricPersonas");
const metricQuestionsEl = document.getElementById("metricQuestions");
const contextBadgesEl = document.getElementById("contextBadges");

let currentIndustry = null;
let currentPersona = null;
let currentQuestionIndex = 0;
let totalQuestions = 0;

function init() {
  renderLibraryMetrics();
  renderContextBadges();
  renderIndustryList();
  restartButton.addEventListener("click", () => {
    if (currentPersona) {
      startRoleplay();
    }
  });
  startTrainingButton.addEventListener("click", startRoleplay);
}

function renderLibraryMetrics() {
  if (!metricIndustriesEl || !metricPersonasEl || !metricQuestionsEl) return;

  const industryCount = verticals.length;
  const personaCount = verticals.reduce(
    (sum, industry) => sum + (industry.personas ? industry.personas.length : 0),
    0
  );
  const questionCount = verticals.reduce((sum, industry) => {
    const personaQuestions = (industry.personas || []).reduce(
      (personaSum, persona) => personaSum + (persona.questions ? persona.questions.length : 0),
      0
    );
    return sum + personaQuestions;
  }, 0);

  metricIndustriesEl.textContent = industryCount;
  metricPersonasEl.textContent = personaCount;
  metricQuestionsEl.textContent = questionCount;
}

function renderContextBadges() {
  if (!contextBadgesEl) return;

  if (!currentIndustry || !currentPersona) {
    contextBadgesEl.innerHTML = '<span class="badge">No persona selected yet.</span>';
    return;
  }

  const focusSummary = (currentPersona.focusAreas || []).slice(0, 2).join(" · ") ||
    "Reliable data and disciplined cash";
  const redPathSummary = ensureSentence(
    currentPersona.redPath || "Guide the dialogue toward an evidence-backed PoC"
  );

  contextBadgesEl.innerHTML = `
    <span class="badge"><strong>Industry</strong> ${currentIndustry.name}</span>
    <span class="badge"><strong>Persona</strong> ${currentPersona.name}</span>
    <span class="badge"><strong>Focus</strong> ${focusSummary}</span>
    <span class="badge"><strong>Red-path</strong> ${redPathSummary}</span>
  `;
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
  renderContextBadges();
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
  renderContextBadges();
}

function renderPersonaDetails() {
  if (!currentPersona) {
    personaDetailsEl.innerHTML =
      '<h2>Persona briefing</h2><p>Select a persona to view their storyline, values, and question strategy.</p>';
    return;
  }

  const badgeList = (currentPersona.focusAreas || [])
    .slice(0, 3)
    .map((item) => `<li class="pill">${item}</li>`)
    .join("");

  const focusList = (currentPersona.focusAreas || [])
    .map((item) => `<li>${item}</li>`)
    .join("");

  const focusBlock = focusList
    ? `<div class="focus-areas"><p><strong>Focus the roleplay on:</strong></p><ul>${focusList}</ul></div>`
    : '<p><strong>Focus the roleplay on:</strong> reliable data, cash discipline, and confident decisions.</p>';

  personaDetailsEl.innerHTML = `
    <div class="persona-header">
      <div>
        <h2>Persona briefing</h2>
        <p class="persona-name">${currentPersona.name}</p>
        <p class="persona-role">${currentPersona.role}</p>
      </div>
      ${badgeList ? `<ul class="pill-list">${badgeList}</ul>` : ""}
    </div>
    <p>${currentPersona.shortDescription}</p>
    ${focusBlock}
  `;
}

function renderRedPathCard() {
  if (!currentPersona) {
    redPathCardEl.innerHTML =
      '<h2>Red-path Strategy</h2><p>Choose a persona to see their coaching plan.</p>';
    return;
  }

  const redPathText = ensureSentence(
    currentPersona.redPath ||
      "Guide the dialogue to expose data risk, connect it to this persona's goals, and co-design a fast CODA proof."
  );

  redPathCardEl.innerHTML = `
    <h2>Red-path Strategy</h2>
    <p>${redPathText}</p>
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
  const weakIndex =
    typeof question.weakOptionIndex === "number"
      ? question.weakOptionIndex
      : question.options
          .map((_, idx) => idx)
          .filter((idx) => idx !== bestIndex)[0];
  const badIndex =
    typeof question.unfavorableOptionIndex === "number"
      ? question.unfavorableOptionIndex
      : question.options.findIndex((_, idx) => idx !== bestIndex && idx !== weakIndex);
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
