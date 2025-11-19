const personas = [
  {
    id: "sofia-benali",
    name: "Sofia Benali",
    role: "Chief Executive Officer",
    industry: "Oil & Gas (Upstream)",
    summary:
      "Sofia runs TitanOil's offshore platforms and the board is pressuring her to free up cash tied in spare parts while keeping rigs productive.",
    storyline:
      "She inherited crowded yards with duplicate spare parts across Angola and Brazil. Finance is blocking new wells until Sofia proves she can release at least $20M from inventory.",
    direction:
      "The discussion should steer toward a CFO-ready plan to quantify duplicates, remove slow movers, and reinvest the freed cash into higher-yield projects.",
    strategy:
      "Lead with dramatic working-capital math, then lock Sofia into closed commitments: quantify top parts, align finance, and co-sponsor a CODA PoC.",
    redPath:
      "Hook her on cash release → agree on measurable inventory scope → run a 6-week CODA PoC that proves an 8–10% reduction.",
    valueFocus: "Cash release & rig reliability",
    recommendedQuestions: [
      {
        stage: "Hook",
        prompt:
          "Recently I was talking to a CEO in Oil and Gas who freed millions by removing 10% duplicates—how much capital is frozen in your spare parts today?",
      },
      {
        stage: "Probe",
        prompt:
          "Which basins or rigs carry the highest duplicate risk and how are you validating that data each month?",
      },
      {
        stage: "Close",
        prompt:
          "If CODA proves an 8% reduction in six weeks, will you and finance co-sponsor a PoC?",
      },
    ],
    scenarios: [
      {
        id: "sofia-working-capital",
        name: "Board-level Working Capital Shock",
        description:
          "Convince Sofia to co-sponsor a CODA PoC that proves duplicate spare-part reduction and frees board-level cash.",
        startStage: "hook",
        stageOrder: ["hook", "quantify", "poc"],
        stages: {
          hook: {
            type: "open",
            question:
              "Recently I was talking to a CEO in Oil and Gas and he told me that one of his problems is the amount of working capital he has tied up in his warehouse—the amount of duplicate spare parts averages $400 each. If he reduces only 10%, he frees millions. How much capital do you believe is frozen the same way in your offshore yards, Sofia?",
            personaResponses: [
              {
                id: "sofia-hook-opt",
                text:
                  "You're describing our yards exactly. We counted 12% duplicates across the Angola rigs—roughly $18M sitting idle. If you can show me a precise plan to cut even 8%, I'm listening.",
                category: "Optimal",
                context:
                  "Sofia admits the pain and frames a clear win number. This is the perfect moment to quantify which parts to attack first.",
                guidance:
                  "Acknowledge the $18M figure and move into a closed question about auditing the highest-value parts.",
                personaThoughts:
                  "Finally, someone is talking my board's language instead of platform features.",
                redPathCue: "Secure her agreement to inventory the top 200 parts immediately.",
                scoreImpact: 1,
                nextStage: "quantify",
              },
              {
                id: "sofia-hook-med",
                text:
                  "Operations claims duplicates are manageable, but no one has shown me a clean report this quarter. If you have proof, maybe it's worth another look.",
                category: "Medium",
                context:
                  "She is curious but unconvinced. You need to supply confidence fast before the meeting drifts.",
                guidance:
                  "Offer a closed, low-effort audit to generate that missing report and convert her curiosity into a commitment.",
                personaThoughts:
                  "I don't want another guessing exercise—I need facts for the board.",
                redPathCue: "Suggest CODA leads a joint review of a single rig to remove opinion from the discussion.",
                scoreImpact: 0.6,
                nextStage: "quantify",
              },
              {
                id: "sofia-hook-unf",
                text:
                  "Working capital isn't my top issue today. My ops lead says the yards are full for a reason, and I'd rather focus on new wells.",
                category: "Unfavorable",
                context:
                  "She is pushing you off the topic, which means you must tie working capital back to drilling speed or risk losing her attention.",
                guidance:
                  "Politely show that without releasing this cash, new wells stay unfunded. Then still move into a targeted closed question to regain control.",
                personaThoughts:
                  "Unless you connect this to growth, it's just housekeeping work.",
                redPathCue: "Link duplicate removal to the next well she wants to greenlight.",
                scoreImpact: 0.2,
                nextStage: "quantify",
              },
            ],
          },
          quantify: {
            type: "closed",
            question:
              "To get precise, can we lock in a two-week sprint where CODA and your finance analyst inventory the top 200 critical spare parts so we can confirm where the 8–10% reduction really sits?",
            personaResponses: [
              {
                id: "sofia-quantify-opt",
                text:
                  "Yes. If you bring the structure, I'll assign my finance chief of staff and the Brazil warehouse lead for the sprint.",
                category: "Optimal",
                context:
                  "You just secured time and people—this is a concrete commitment toward the PoC.",
                guidance:
                  "Confirm the calendar, recap the deliverables, and prepare the PoC ask while momentum is high.",
                personaThoughts:
                  "Finally, someone owns the heavy lift so my team doesn't drown in spreadsheets.",
                redPathCue: "Summarize the sprint output and bridge to how the PoC validates savings.",
                scoreImpact: 1,
                nextStage: "poc",
              },
              {
                id: "sofia-quantify-med",
                text:
                  "Maybe. I need to see the sprint outline first, and finance is slammed until the month closes.",
                category: "Medium",
                context:
                  "She is hesitant because of bandwidth. You must de-risk the effort without losing the closed commitment.",
                guidance:
                  "Offer CODA analysts to do the heavy lifting and keep the sprint within a fixed calendar window.",
                personaThoughts:
                  "If this becomes another endless workshop, I'm out.",
                redPathCue: "Show that CODA handles data prep so her team only validates findings.",
                scoreImpact: 0.6,
                nextStage: "poc",
              },
              {
                id: "sofia-quantify-unf",
                text:
                  "No. Not until the ERP consolidation is stable. I can't add another sprint.",
                category: "Unfavorable",
                context:
                  "She is blocking progress, so you must highlight how CODA reduces ERP pressure instead of adding to it.",
                guidance:
                  "Ask for a narrower checkpoint—perhaps reviewing one platform remotely—to keep the door open.",
                personaThoughts:
                  "Protect my big ERP bet first, then talk pilots.",
                redPathCue: "Frame CODA as protecting ERP ROI so a mini-scope still happens.",
                scoreImpact: 0.2,
                nextStage: "poc",
              },
            ],
          },
          poc: {
            type: "closed",
            question:
              "If CODA delivers a six-week PoC that proves at least an $8M release from duplicates and shows every approval trail, will you co-sponsor the PoC with finance so we can move to deployment?",
            personaResponses: [
              {
                id: "sofia-poc-opt",
                text:
                  "Yes. Give me the projected cash-release dashboard and I'll sign the PoC charter with our CFO next week.",
                category: "Optimal",
                context:
                  "She is ready to buy as long as the PoC visuals support a board update.",
                guidance:
                  "Confirm the PoC scope, list executive checkpoints, and outline how CODA proves the $8M release.",
                personaThoughts:
                  "This PoC could unlock my next drilling program.",
                redPathCue: "Send the PoC plan within 24 hours while excitement is high.",
                scoreImpact: 1,
                nextStage: null,
              },
              {
                id: "sofia-poc-med",
                text:
                  "I can support a 4-week PoC if you bring two customer references and keep my team time under 10 hours.",
                category: "Medium",
                context:
                  "She still needs proof, but she is granting access with conditions.",
                guidance:
                  "Provide references immediately and show how CODA shoulders most of the work.",
                personaThoughts:
                  "I can't burn my crew's time unless you're nearly turnkey.",
                redPathCue: "Agree to her guardrails and keep the PoC focused on that duplicate metric.",
                scoreImpact: 0.6,
                nextStage: null,
              },
              {
                id: "sofia-poc-unf",
                text:
                  "Not yet. Solve this in a spreadsheet and come back after we finish ERP cutover.",
                category: "Unfavorable",
                context:
                  "She is shutting the door. Without reframing CODA as faster than spreadsheets, the deal stalls.",
                guidance:
                  "Offer to show how CODA plugs into the ERP cutover instead of competing with it.",
                personaThoughts:
                  "Another tool during ERP chaos sounds risky.",
                redPathCue: "Share a micro-PoC that protects ERP timelines to re-open the conversation.",
                scoreImpact: 0.2,
                nextStage: null,
              },
            ],
          },
        },
        evaluation: {
          success:
            "You quantified Sofia's duplicate problem, secured resources for the sprint, and aligned on a PoC that frees board-level cash.",
          caution:
            "You kept Sofia curious but never fully secured the CFO co-sponsorship. Tighten your closed questions and anchor on the $8M outcome.",
          poor:
            "The conversation drifted away from working capital, so Sofia never saw a reason to change. Re-center on cash release and ERP protection.",
          strengths: [
            "Translate duplicate removal into drilling budgets",
            "Offer CODA-led sprints that minimize executive time",
            "Map PoC success to a measurable cash release",
          ],
          improvements: [
            "Confirm commitments in writing before ending the meeting",
            "Bring customer evidence earlier when Sofia hesitates",
          ],
        },
      },
    ],
  },
  {
    id: "julian-chen",
    name: "Dr. Julian Chen",
    role: "Chief Technology Officer",
    industry: "Mining & Metals",
    summary:
      "Julian modernizes Obsidian Minerals' mining tech stack and loses credibility whenever dirty BOMs cause equipment downtime.",
    storyline:
      "Haul trucks and shovels across Chile and Australia share parts, but engineering, maintenance, and procurement maintain separate BOMs. Unplanned stoppages cost six figures per hour.",
    direction:
      "Guide him toward a PoC that unifies BOM data between engineering and maintenance so uptime KPI hits board targets.",
    strategy:
      "Start with a dramatic downtime story, then drive him through closed inspections of the highest-failure assemblies, ending with a PoC that simulates governance in CODA.",
    redPath:
      "Downtime hook → agree to joint failure review → sponsor a CODA PoC on the top 40 assemblies.",
    valueFocus: "Asset uptime & OT/IT trust",
    recommendedQuestions: [
      {
        stage: "Hook",
        prompt:
          "Last week a mining CTO told me every hour of shovel downtime costs $150k because duplicate BOMs hide actual spares. How often does that happen in your pits, Julian?",
      },
      {
        stage: "Probe",
        prompt:
          "Which assemblies cause the most emergency stops, and who owns the source of truth?",
      },
      {
        stage: "Close",
        prompt:
          "If CODA proves governance on the top 40 assemblies, will you greenlight a PoC with maintenance and engineering?",
      },
    ],
    scenarios: [
      {
        id: "julian-uptime",
        name: "Eliminate Shutdowns from Dirty BOMs",
        description:
          "Convince Julian to let CODA align engineering, maintenance, and procurement masters through a PoC focused on high-failure assemblies.",
        startStage: "hook",
        stageOrder: ["hook", "inspection", "poc"],
        stages: {
          hook: {
            type: "open",
            question:
              "Last week a mining CTO told me every hour of shovel downtime costs $150k because duplicate BOMs hide the real spare parts list. How often does bad master data park your shovels, Julian?",
            personaResponses: [
              {
                id: "julian-hook-opt",
                text:
                  "Too often. At Escondida we lost 9 hours last month chasing a sensor that existed in one BOM but not the maintenance list.",
                category: "Optimal",
                context:
                  "Julian is emotionally hooked and already shared a data point you can reuse later.",
                guidance:
                  "Repeat the $150k figure and pivot into a closed inspection request covering the assets he just named.",
                personaThoughts:
                  "If you can stop that chaos, I'll listen to any pilot.",
                redPathCue: "Focus the next question on those exact sensors and sites.",
                scoreImpact: 1,
                nextStage: "inspection",
              },
              {
                id: "julian-hook-med",
                text:
                  "We have downtime, but I'm not sure dirty BOMs are the root cause. My teams argue about it constantly.",
                category: "Medium",
                context:
                  "He senses the issue but lacks clarity. Use the next closed question to promise evidence, not opinions.",
                guidance:
                  "Offer to reconcile one shared assembly list within a fixed time window.",
                personaThoughts:
                  "Give me facts so I can silence the arguing teams.",
                redPathCue: "Frame CODA as the neutral system everyone can trust.",
                scoreImpact: 0.6,
                nextStage: "inspection",
              },
              {
                id: "julian-hook-unf",
                text:
                  "Our problem is component lead time, not BOM accuracy. Downtime is a procurement issue.",
                category: "Unfavorable",
                context:
                  "He is deflecting, so you must connect BOM accuracy to the procurement delays he mentioned.",
                guidance:
                  "Show how dirty masters cause wrong purchase orders and extend downtime, then still push for an inspection.",
                personaThoughts:
                  "Don't blame my data unless you prove the link to lead time.",
                redPathCue: "Use CODA benchmarks to tie BOM errors directly to parts shortages.",
                scoreImpact: 0.2,
                nextStage: "inspection",
              },
            ],
          },
          inspection: {
            type: "closed",
            question:
              "Can we sit down next Tuesday with maintenance and engineering to review failure logs from Escondida and list the 40 assemblies causing 70% of stoppages?",
            personaResponses: [
              {
                id: "julian-inspect-opt",
                text:
                  "Yes, I'll pull my maintenance superintendent and the engineering data steward. Bring the template so it's efficient.",
                category: "Optimal",
                context:
                  "He just gave you the people you need. Treat this like a formal commitment.",
                guidance:
                  "Send the agenda immediately and explain how CODA captures each assembly into governed masters.",
                personaThoughts:
                  "If this meeting is crisp, I can finally align these teams.",
                redPathCue: "Outline deliverables that flow straight into the PoC.",
                scoreImpact: 1,
                nextStage: "poc",
              },
              {
                id: "julian-inspect-med",
                text:
                  "Maybe. If you can do it virtually and keep it under 60 minutes, I'm open to it.",
                category: "Medium",
                context:
                  "He is cautious about time. Reduce friction so he can't back out.",
                guidance:
                  "Share a pre-read with CODA screenshots so the meeting feels turnkey.",
                personaThoughts:
                  "Don't drag my engineers into another marathon workshop.",
                redPathCue: "Promise a concise, recorded session that outputs a ranked list for PoC scope.",
                scoreImpact: 0.6,
                nextStage: "poc",
              },
              {
                id: "julian-inspect-unf",
                text:
                  "No. Maintenance is traveling and we already have a reliability task force tackling this.",
                category: "Unfavorable",
                context:
                  "He is replacing you with an internal task force. You must show how CODA accelerates that work instead of duplicating it.",
                guidance:
                  "Offer to plug CODA outputs into the task force so they get answers faster.",
                personaThoughts:
                  "Don't slow down the task force I already staffed.",
                redPathCue: "Suggest sharing CODA findings asynchronously so the task force still benefits.",
                scoreImpact: 0.2,
                nextStage: "poc",
              },
            ],
          },
          poc: {
            type: "closed",
            question:
              "If CODA models those assemblies and simulates approvals between engineering and maintenance over a four-week PoC, will you greenlight it so we prove uptime gains before rainy season?",
            personaResponses: [
              {
                id: "julian-poc-opt",
                text:
                  "Do it. I want the PoC finished before August so we can bake it into the rainy-season maintenance plan.",
                category: "Optimal",
                context:
                  "Julian is prioritizing your timeline—capitalize on it.",
                guidance:
                  "Share a PoC calendar with weekly demos tied to uptime metrics.",
                personaThoughts:
                  "If this works, I can brag about uptime to the board.",
                redPathCue: "Show how CODA hands the task force ready-made governance.",
                scoreImpact: 1,
                nextStage: null,
              },
              {
                id: "julian-poc-med",
                text:
                  "I'll consider it if you include procurement so we can see the supply impact, not just engineering.",
                category: "Medium",
                context:
                  "He wants broader scope. Agree, but keep the PoC bounded.",
                guidance:
                  "Explain how CODA shares governed masters across maintenance and procurement without bloating the PoC.",
                personaThoughts:
                  "Show me the full OT/IT story, not a siloed pilot.",
                redPathCue: "Add a procurement check-in without extending the timeline.",
                scoreImpact: 0.6,
                nextStage: null,
              },
              {
                id: "julian-poc-unf",
                text:
                  "Not now. We already have two pilots running, so come back next year.",
                category: "Unfavorable",
                context:
                  "He is saturated with pilots. You must show why CODA is the fast path to supporting those existing pilots.",
                guidance:
                  "Propose a micro-PoC that plugs into the current pilots instead of adding a new stream.",
                personaThoughts:
                  "No more experiments unless they accelerate what's already live.",
                redPathCue: "Offer a scoped data cleanse feeding the active pilots to stay relevant.",
                scoreImpact: 0.2,
                nextStage: null,
              },
            ],
          },
        },
        evaluation: {
          success:
            "You tied downtime cost to CODA governance, aligned teams for the inspection, and secured Julian's green light for a PoC.",
          caution:
            "You surfaced interest but never reduced time anxiety. Tighten your closed asks and keep meetings under 60 minutes.",
          poor:
            "Without connecting BOM accuracy to uptime, Julian deprioritized you. Reopen with a quantified downtime story.",
          strengths: [
            "Quantify downtime in dollars per hour",
            "Mirror Julian's engineering vocabulary",
            "Keep joint sessions structured and recorded",
          ],
          improvements: [
            "Bring procurement earlier when he hints at supply chain ties",
            "Attach PoC milestones to seasonal maintenance plans",
          ],
        },
      },
    ],
  },
  {
    id: "priya-natarajan",
    name: "Priya Natarajan",
    role: "Head of Supply Chain",
    industry: "Aerospace Electronics",
    summary:
      "Priya manages a high-mix aerospace electronics network where wrong supplier masters trigger expensive expedite flights and compliance risk.",
    storyline:
      "Her aftermarket program ships thousands of part numbers to defense customers. Duplicate vendor records lead to wrong country-of-origin tags and $3M per quarter in expedite fees.",
    direction:
      "Aim the discussion toward a PoC that cleans supplier masters for the aftermarket program, reducing expedite cost and compliance exposure.",
    strategy:
      "Hook Priya with the dramatic expedite spend, then use closed questions to align on which program and compliance metrics to fix, culminating in a PoC that feeds her control tower.",
    redPath:
      "Expedite cost hook → agree on a frozen program scope → prove CODA compliance dashboards in a PoC.",
    valueFocus: "Expedite savings & compliance",
    recommendedQuestions: [
      {
        stage: "Hook",
        prompt:
          "A supply chain head told me duplicate suppliers forced $3M in expedite flights last quarter. How much did bad masters cost your aftermarket program, Priya?",
      },
      {
        stage: "Probe",
        prompt:
          "Which program or depot sees the most rework because vendor data is wrong?",
      },
      {
        stage: "Close",
        prompt:
          "If CODA proves compliant vendor masters for that program, will you greenlight a PoC with your control tower team?",
      },
    ],
    scenarios: [
      {
        id: "priya-expedite",
        name: "Stop Expedite Spending from Vendor Chaos",
        description:
          "Help Priya commit to a CODA PoC that cleanses supplier masters for the aftermarket program and removes expedite waste.",
        startStage: "hook",
        stageOrder: ["hook", "scope", "poc"],
        stages: {
          hook: {
            type: "open",
            question:
              "Recently I was talking to a COO in aerospace who burned $3M in a quarter on expedite flights because duplicate supplier records sent parts to the wrong depot. How often does that scenario hit your aftermarket network, Priya?",
            personaResponses: [
              {
                id: "priya-hook-opt",
                text:
                  "Weekly. We shipped avionics to the wrong export hub twice last month because two vendor IDs looked identical.",
                category: "Optimal",
                context:
                  "Priya is feeling the pain and naming specific incidents—use them.",
                guidance:
                  "Repeat the export hub issue and ask a closed question about freezing scope on that aftermarket program.",
                personaThoughts:
                  "If you can stop that embarrassment, I'm ready to try something new.",
                redPathCue: "Keep the conversation on the aftermarket program rather than generic MDM.",
                scoreImpact: 1,
                nextStage: "scope",
              },
              {
                id: "priya-hook-med",
                text:
                  "We see expedite fees, but finance blames demand swings more than vendor data.",
                category: "Medium",
                context:
                  "She is unsure of the root cause. You must tie vendor masters to finance pain.",
                guidance:
                  "Share benchmarks that show how duplicates create false demand signals, then propose a focused scope.",
                personaThoughts:
                  "Don't just blame data—prove it links to my budget.",
                redPathCue: "Translate vendor errors into the finance KPIs she owns.",
                scoreImpact: 0.6,
                nextStage: "scope",
              },
              {
                id: "priya-hook-unf",
                text:
                  "Our compliance office already owns vendor quality. I can't take on another initiative.",
                category: "Unfavorable",
                context:
                  "She is trying to pass ownership. Show how CODA helps compliance deliver faster.",
                guidance:
                  "Position CODA as the system that feeds compliance with governed data so Priya still hits her KPIs.",
                personaThoughts:
                  "Unless this helps compliance move faster, it's not my fight.",
                redPathCue: "Offer to co-create the scope with her compliance director.",
                scoreImpact: 0.2,
                nextStage: "scope",
              },
            ],
          },
          scope: {
            type: "closed",
            question:
              "Can we freeze the aftermarket avionics program as our first test so CODA can align supplier masters, export tags, and approved substitutions within four weeks?",
            personaResponses: [
              {
                id: "priya-scope-opt",
                text:
                  "Yes. That program is bleeding cash. Loop in my control tower lead so we can plug your cleansed data into the dashboards.",
                category: "Optimal",
                context:
                  "She just gave you access to the control tower team, which is exactly where CODA should land.",
                guidance:
                  "Confirm roles, milestones, and share how CODA keeps the scope frozen.",
                personaThoughts:
                  "If this program calms down, finance will finally back me.",
                redPathCue: "Tie every deliverable to the control tower view she cares about.",
                scoreImpact: 1,
                nextStage: "poc",
              },
              {
                id: "priya-scope-med",
                text:
                  "Maybe. I need the compliance director aligned before we freeze anything.",
                category: "Medium",
                context:
                  "She is cautious about governance. Bring compliance into the plan without slowing progress.",
                guidance:
                  "Offer a joint workshop that maps CODA validations to compliance checkpoints.",
                personaThoughts:
                  "Don't expose me to a compliance surprise.",
                redPathCue: "Show compliance how CODA automates their checklist.",
                scoreImpact: 0.6,
                nextStage: "poc",
              },
              {
                id: "priya-scope-unf",
                text:
                  "No. We already have a Lean project on that program and I won't overlap efforts.",
                category: "Unfavorable",
                context:
                  "She thinks CODA would duplicate Lean. Show that CODA fuels Lean with cleaner data.",
                guidance:
                  "Offer to plug CODA cleansing outputs directly into the Lean dashboards so she sees leverage.",
                personaThoughts:
                  "Unless you help my Lean team move faster, you're noise.",
                redPathCue: "Position CODA as the digital backbone of her Lean project.",
                scoreImpact: 0.2,
                nextStage: "poc",
              },
            ],
          },
          poc: {
            type: "closed",
            question:
              "If CODA proves compliant vendor masters for that program and shows a live view of expedite savings within six weeks, will you greenlight a PoC with your control tower team?",
            personaResponses: [
              {
                id: "priya-poc-opt",
                text:
                  "Yes. Give me a before-and-after expedite dashboard and I'll fund the PoC from our productivity budget.",
                category: "Optimal",
                context:
                  "She is ready to move as long as you visualize savings.",
                guidance:
                  "Share the PoC storyboard, including compliance checks, so she can defend the spend.",
                personaThoughts:
                  "If I can show finance a chart, they'll finally stop the blame game.",
                redPathCue: "Commit to weekly savings updates so she feels momentum.",
                scoreImpact: 1,
                nextStage: null,
              },
              {
                id: "priya-poc-med",
                text:
                  "I'll consider it if we can keep the PoC remote and limit it to two sprints. My teams are global."
                ,
                category: "Medium",
                context:
                  "She accepts the idea but wants minimal travel.",
                guidance:
                  "Present a remote PoC plan with async checkpoints.",
                personaThoughts:
                  "Don't fly people around unless we already see value.",
                redPathCue: "Use CODA's shared workspace to prove remote governance.",
                scoreImpact: 0.6,
                nextStage: null,
              },
              {
                id: "priya-poc-unf",
                text:
                  "No. Show me results from another customer first, then we can talk pilots.",
                category: "Unfavorable",
                context:
                  "She lacks external proof. Bring references fast.",
                guidance:
                  "Offer a reference call and share anonymized dashboards to keep hope alive.",
                personaThoughts:
                  "I won't risk my team's time without outside evidence.",
                redPathCue: "Treat reference sharing as part of the red path so the PoC ask stays alive.",
                scoreImpact: 0.2,
                nextStage: null,
              },
            ],
          },
        },
        evaluation: {
          success:
            "You linked expedite spend to dirty masters, froze the right program scope, and secured Priya's funding for a PoC tied to her control tower dashboards.",
          caution:
            "Priya stayed curious but never saw compliance in the plan. Add her compliance director sooner and clarify remote execution.",
          poor:
            "You never proved that data, not demand swings, causes the expedite spend. Bring clearer benchmarks and a frozen scope next time.",
          strengths: [
            "Show expedite dollars lost per program",
            "Tie CODA outputs to control tower visuals",
            "Align compliance and supply chain metrics",
          ],
          improvements: [
            "Share customer references earlier",
            "Offer remote-friendly PoC cadences upfront",
          ],
        },
      },
    ],
  },
  {
    id: "victor-hale",
    name: "Victor Hale",
    role: "Chief Financial Officer",
    industry: "Defense Manufacturing",
    summary:
      "Victor guards margin on classified aerospace programs and hates surprise inventory write-downs caused by mismatched valuations and rogue spreadsheets.",
    storyline:
      "Multiple plants report valuation adjustments every quarter because finance, engineering, and depot teams use different SKU hierarchies. Audit has already issued two warnings.",
    direction:
      "Keep the conversation laser-focused on audit readiness and cash conversion so Victor agrees to a CODA PoC proving a single source of truth.",
    strategy:
      "Start with a dramatic audit adjustment story, then use closed questions that force Victor to assign finance stewards to a CODA-driven reconciliation, ending with a PoC tied to auditor evidence.",
    redPath:
      "Audit risk hook → agree on sample reconciliation → run PoC that produces auditor-ready evidence.",
    valueFocus: "Audit readiness & cash flow",
    recommendedQuestions: [
      {
        stage: "Hook",
        prompt:
          "A CFO I met last week wrote off $4M because three plants valued the same SKU differently. How confident are you that every site reports one valuation, Victor?",
      },
      {
        stage: "Probe",
        prompt:
          "Which sites or programs trigger the most audit adjustments and who owns the data there?",
      },
      {
        stage: "Close",
        prompt:
          "If CODA shows auditor-ready trails for those SKUs, will you fund a PoC before next quarter close?",
      },
    ],
    scenarios: [
      {
        id: "victor-audit",
        name: "Audit-proof Inventory Valuations",
        description:
          "Move Victor from concern about write-downs to sponsoring a CODA PoC that unifies SKU valuations before the next audit.",
        startStage: "hook",
        stageOrder: ["hook", "reconcile", "poc"],
        stages: {
          hook: {
            type: "open",
            question:
              "Recently I was talking to a CFO in defense who had to write off $4M because three plants valued the same flight-control SKU differently. How aligned are your sites on valuation data today, Victor?",
            personaResponses: [
              {
                id: "victor-hook-opt",
                text:
                  "Alignment is shaky. Last quarter we spent two weeks reconciling rotor assemblies because depot spreadsheets didn't match SAP.",
                category: "Optimal",
                context:
                  "Victor admits the problem and names the impacted assemblies. Use that to direct the next question.",
                guidance:
                  "Move immediately into a closed question that forces a sample reconciliation with CODA.",
                personaThoughts:
                  "If you take this off my close calendar, I'm in.",
                redPathCue: "Keep naming rotor assemblies so he sees your focus.",
                scoreImpact: 1,
                nextStage: "reconcile",
              },
              {
                id: "victor-hook-med",
                text:
                  "We haven't had a write-off yet, but Audit keeps asking why valuation rules differ by plant.",
                category: "Medium",
                context:
                  "He's concerned but not panicked. Turn that into urgency by highlighting the near-miss.",
                guidance:
                  "Offer to bring CODA's policy automation so he can show Audit real controls.",
                personaThoughts:
                  "I need proof before Audit escalates this to the board.",
                redPathCue: "Show how CODA records approvals plant by plant.",
                scoreImpact: 0.6,
                nextStage: "reconcile",
              },
              {
                id: "victor-hook-unf",
                text:
                  "We're fine. SAP is our system of record and I'm not funding another tool.",
                category: "Unfavorable",
                context:
                  "He is dismissing you. Tie CODA to SAP governance rather than replacement.",
                guidance:
                  "Explain how CODA feeds SAP with clean data and keeps valuations consistent without extra headcount.",
                personaThoughts:
                  "Unless this protects SAP, it's noise.",
                redPathCue: "Show CODA as the control layer above SAP.",
                scoreImpact: 0.2,
                nextStage: "reconcile",
              },
            ],
          },
          reconcile: {
            type: "closed",
            question:
              "Will you let CODA walk through last quarter's rotor assemblies with your plant controllers so we can reconcile valuations within one governed workbook next week?",
            personaResponses: [
              {
                id: "victor-reconcile-opt",
                text:
                  "Yes. I'll assign the Everett and Wichita controllers plus my audit manager. Bring the template.",
                category: "Optimal",
                context:
                  "He is giving you the exact people you need—lock it in.",
                guidance:
                  "Send calendar holds and explain how CODA captures every approval step.",
                personaThoughts:
                  "If this saves my team two weeks, it's worth it.",
                redPathCue: "Connect the workbook output directly to the PoC story.",
                scoreImpact: 1,
                nextStage: "poc",
              },
              {
                id: "victor-reconcile-med",
                text:
                  "Maybe. I need to see how intrusive the workbook is before committing controllers.",
                category: "Medium",
                context:
                  "He needs reassurance about workload.",
                guidance:
                  "Show a sample CODA view and emphasize automation so controllers only review exceptions.",
                personaThoughts:
                  "Don't add manual work during close.",
                redPathCue: "Promise exception-based reviews.",
                scoreImpact: 0.6,
                nextStage: "poc",
              },
              {
                id: "victor-reconcile-unf",
                text:
                  "No. Controllers are maxed out and Audit is already on-site.",
                category: "Unfavorable",
                context:
                  "He is stonewalling. Offer an even smaller slice to keep momentum.",
                guidance:
                  "Propose CODA doing the prep work with digital twins so controllers only validate.",
                personaThoughts:
                  "Protect my team time above all.",
                redPathCue: "Share how CODA can preload the workbook from SAP.",
                scoreImpact: 0.2,
                nextStage: "poc",
              },
            ],
          },
          poc: {
            type: "closed",
            question:
              "If CODA shows auditor-ready evidence that those valuations reconcile within four weeks, will you fund a PoC before the next quarter close?",
            personaResponses: [
              {
                id: "victor-poc-opt",
                text:
                  "Yes. I'll release budget from the audit remediation fund if you include weekly progress notes I can forward to the audit committee.",
                category: "Optimal",
                context:
                  "He is funding you and defining the reporting cadence.",
                guidance:
                  "Agree to the cadence and show the first report template now.",
                personaThoughts:
                  "If I can show the committee progress, they'll stop escalating.",
                redPathCue: "Tie every PoC milestone to the audit calendar.",
                scoreImpact: 1,
                nextStage: null,
              },
              {
                id: "victor-poc-med",
                text:
                  "I'll back a PoC if finance only spends 5 hours a week on it.",
                category: "Medium",
                context:
                  "He is conditional. Show how CODA automates tasks.",
                guidance:
                  "Provide a RACI that limits finance effort and leverages CODA stewards.",
                personaThoughts:
                  "I'll invest if it doesn't wreck close.",
                redPathCue: "Highlight CODA-managed workflows.",
                scoreImpact: 0.6,
                nextStage: null,
              },
              {
                id: "victor-poc-unf",
                text:
                  "Not this quarter. Close is already under review.",
                category: "Unfavorable",
                context:
                  "He is pausing due to timing. Keep a foothold.",
                guidance:
                  "Offer a micro-proof that runs in parallel with the review so he stays engaged.",
                personaThoughts:
                  "I can't distract the team mid-review.",
                redPathCue: "Share asynchronous CODA evidence so he sees momentum without meetings.",
                scoreImpact: 0.2,
                nextStage: null,
              },
            ],
          },
        },
        evaluation: {
          success:
            "You turned audit anxiety into a structured CODA plan, secured controller time, and earned Victor's PoC funding tied to the audit calendar.",
          caution:
            "Victor listened but still fears workload. Prove how CODA automates reconciliation and limit finance effort upfront.",
          poor:
            "He never saw CODA as an SAP ally, so the conversation stalled. Reframe CODA as the control layer protecting his ERP investment.",
          strengths: [
            "Translate audit risk into board language",
            "Bring templates that limit finance effort",
            "Tie PoC milestones to quarter close",
          ],
          improvements: [
            "Show exception-based workflows earlier",
            "Share sample audit committee updates so he sees the finish line",
          ],
        },
      },
    ],
  },
  {
    id: "elena-kowalski",
    name: "Elena Kowalski",
    role: "Warehouse & Fulfillment Director",
    industry: "Heavy Equipment Manufacturing",
    summary:
      "Elena runs three regional distribution centers feeding dealers. Pickers waste hours hunting for the right bin because bin locations and material IDs constantly drift.",
    storyline:
      "Multiple ERP instances feed her WMS, and tribal knowledge lives on laminated sheets. Forklifts sit idle while supervisors reconcile bin locations manually, delaying shipments.",
    direction:
      "Drive the conversation toward a PoC that synchronizes bin, part, and kit masters between ERP and WMS so Elena can prove faster picks and happier dealers.",
    strategy:
      "Open with a dramatic warehouse cost story, then guide Elena through closed questions about scan accuracy and kit readiness before asking her to back a CODA PoC.",
    redPath:
      "Warehouse chaos hook → agree on scan accuracy baseline → commit to a CODA PoC in the busiest DC.",
    valueFocus: "Pick accuracy & dealer satisfaction",
    recommendedQuestions: [
      {
        stage: "Hook",
        prompt:
          "A warehouse head told me forklifts sat idle 15% of the day because duplicate bin locations forced manual searches. How many hours are your pickers losing to bad data, Elena?",
      },
      {
        stage: "Probe",
        prompt:
          "Which kits or parts create the most mis-picks and how are you measuring scan accuracy?",
      },
      {
        stage: "Close",
        prompt:
          "If CODA proves 99% scan accuracy in your busiest DC, will you fund a PoC with operations and IT?",
      },
    ],
    scenarios: [
      {
        id: "elena-warehouse",
        name: "Stabilize Warehouse Masters",
        description:
          "Help Elena move from firefighting to a governed CODA PoC that synchronizes ERP and WMS masters for her busiest distribution center.",
        startStage: "hook",
        stageOrder: ["hook", "baseline", "poc"],
        stages: {
          hook: {
            type: "open",
            question:
              "Recently I was talking to a warehouse chief who had forklifts idle 15% of the day because duplicate bin locations forced people to search manually. How much time is your team wasting on the same problem, Elena?",
            personaResponses: [
              {
                id: "elena-hook-opt",
                text:
                  "At Denver we lose an hour per shift just reconciling bins before we can pick kits.",
                category: "Optimal",
                context:
                  "She gave you a concrete site and metric—perfect for the next question.",
                guidance:
                  "Lock onto Denver and move into a closed question about measuring scan accuracy there.",
                personaThoughts:
                  "If you fix Denver, my dealers will notice instantly.",
                redPathCue: "Keep repeating her Denver example to show you're listening.",
                scoreImpact: 1,
                nextStage: "baseline",
              },
              {
                id: "elena-hook-med",
                text:
                  "We have delays, but the team blames staffing more than data.",
                category: "Medium",
                context:
                  "She is unsure of the root cause. Tie the staffing pain to data chaos.",
                guidance:
                  "Show how governed masters cut wasted motion so staffing pressure eases.",
                personaThoughts:
                  "Unless this saves labor hours, it's just another system.",
                redPathCue: "Connect CODA to labor productivity KPIs.",
                scoreImpact: 0.6,
                nextStage: "baseline",
              },
              {
                id: "elena-hook-unf",
                text:
                  "IT already promised the ERP upgrade will solve bin accuracy, so I'm waiting it out.",
                category: "Unfavorable",
                context:
                  "She believes ERP will fix everything. You must show why CODA accelerates that upgrade.",
                guidance:
                  "Explain that CODA synchronizes masters now so the ERP upgrade lands clean.",
                personaThoughts:
                  "Don't pile on another project while I'm waiting for ERP.",
                redPathCue: "Position CODA as the safety net for the upgrade.",
                scoreImpact: 0.2,
                nextStage: "baseline",
              },
            ],
          },
          baseline: {
            type: "closed",
            question:
              "Can we lock in a one-week baseline where CODA captures scan accuracy and bin changes at the Denver DC so we know exactly how many errors exist today?",
            personaResponses: [
              {
                id: "elena-baseline-opt",
                text:
                  "Yes. I'll assign the Denver inventory control lead and give you API access to WMS logs.",
                category: "Optimal",
                context:
                  "She is opening the data gates—acknowledge it.",
                guidance:
                  "Share the baseline plan and clarify roles so she trusts the process.",
                personaThoughts:
                  "If you keep it tight, I can defend the time investment.",
                redPathCue: "Tie the baseline outputs directly to the PoC value metric.",
                scoreImpact: 1,
                nextStage: "poc",
              },
              {
                id: "elena-baseline-med",
                text:
                  "Maybe. Show me how you collect the data without slowing picks and I'll consider it.",
                category: "Medium",
                context:
                  "She wants proof the baseline won't disrupt operations.",
                guidance:
                  "Explain the passive data capture CODA uses and commit to after-shift reviews.",
                personaThoughts:
                  "Don't touch my throughput during peak hours.",
                redPathCue: "Offer to run the baseline at night or on a small lane.",
                scoreImpact: 0.6,
                nextStage: "poc",
              },
              {
                id: "elena-baseline-unf",
                text:
                  "No. We're in peak season and I can't afford any experiments.",
                category: "Unfavorable",
                context:
                  "She is in defensive mode. Show how CODA requires almost zero floor time.",
                guidance:
                  "Offer a remote log analysis so floor teams aren't interrupted.",
                personaThoughts:
                  "Protect peak season at all costs.",
                redPathCue: "Suggest a desk-based baseline while peak season runs.",
                scoreImpact: 0.2,
                nextStage: "poc",
              },
            ],
          },
          poc: {
            type: "closed",
            question:
              "If CODA proves 99% scan accuracy and a 30-minute faster kit release in Denver within five weeks, will you fund a PoC with operations and IT?",
            personaResponses: [
              {
                id: "elena-poc-opt",
                text:
                  "Yes. I'll co-fund it with IT as long as we document the throughput gains for our dealer council.",
                category: "Optimal",
                context:
                  "She is ready to go if you show dealer-facing impact.",
                guidance:
                  "Share the PoC scorecard with throughput and dealer SLA metrics.",
                personaThoughts:
                  "If my dealers see improvement, they'll stop escalating.",
                redPathCue: "Include dealer feedback checkpoints inside the PoC plan.",
                scoreImpact: 1,
                nextStage: null,
              },
              {
                id: "elena-poc-med",
                text:
                  "I'll sponsor it after I brief the IT lead—he hates surprises.",
                category: "Medium",
                context:
                  "She wants internal alignment first.",
                guidance:
                  "Offer to brief IT with her and show integration steps so there are no surprises.",
                personaThoughts:
                  "Don't blindside my IT partner.",
                redPathCue: "Send integration notes before she talks to IT.",
                scoreImpact: 0.6,
                nextStage: null,
              },
              {
                id: "elena-poc-unf",
                text:
                  "Not until the ERP upgrade is complete. I can't run two change programs at once.",
                category: "Unfavorable",
                context:
                  "She still hides behind the ERP project.",
                guidance:
                  "Explain that CODA de-risks the upgrade by cleansing masters beforehand.",
                personaThoughts:
                  "Too many change projects burn my crew out.",
                redPathCue: "Propose a micro-PoC that feeds ERP cutover scripts.",
                scoreImpact: 0.2,
                nextStage: null,
              },
            ],
          },
        },
        evaluation: {
          success:
            "You focused on Denver's bin chaos, secured a scan-accuracy baseline, and earned Elena's buy-in for a CODA PoC tied to dealer outcomes.",
          caution:
            "Elena engaged but still fears disruption. Show how CODA runs baselines off-shift and integrate IT earlier.",
          poor:
            "You never convinced her that data—not headcount—is the problem. Return with time studies and CODA baselines to regain trust.",
          strengths: [
            "Quantify wasted pick time in hours",
            "Tie CODA metrics to dealer satisfaction",
            "Share integration steps that calm IT",
          ],
          improvements: [
            "Prove baselines won't disrupt peak operations",
            "Bring ERP-alignment slides when she raises upgrade concerns",
          ],
        },
      },
    ],
  },
];

const state = {
  persona: null,
  scenario: null,
  currentStageId: null,
  score: 0,
  stepsCompleted: 0,
  totalStages: 0,
};

const elements = {
  personaList: document.getElementById("personaList"),
  scenarioList: document.getElementById("scenarioList"),
  scenarioSection: document.getElementById("scenarioSection"),
  personaDetails: document.getElementById("personaDetails"),
  scenarioTitle: document.getElementById("scenarioTitle"),
  scenarioDescription: document.getElementById("scenarioDescription"),
  conversationLog: document.getElementById("conversationLog"),
  currentPrompt: document.getElementById("currentPrompt"),
  answerOptions: document.getElementById("answerOptions"),
  feedbackContent: document.getElementById("feedbackContent"),
  restartBtn: document.getElementById("restartScenario"),
};

document.addEventListener("DOMContentLoaded", () => {
  buildPersonaList();
  elements.scenarioSection.style.display = "none";
  elements.restartBtn.addEventListener("click", () => {
    if (state.scenario) {
      startScenario(state.scenario);
    }
  });
});

function buildPersonaList() {
  personas.forEach((persona) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "persona-btn";
    button.textContent = `${persona.name} — ${persona.role}`;
    button.addEventListener("click", () => selectPersona(persona.id));
    li.appendChild(button);
    elements.personaList.appendChild(li);
  });
}

function selectPersona(personaId) {
  const persona = personas.find((item) => item.id === personaId);
  if (!persona) return;

  state.persona = persona;
  state.scenario = null;
  state.currentStageId = null;
  state.score = 0;
  state.stepsCompleted = 0;
  elements.restartBtn.disabled = true;

  document
    .querySelectorAll(".persona-btn")
    .forEach((btn) => btn.classList.remove("is-active"));
  const activeBtn = Array.from(document.querySelectorAll(".persona-btn")).find(
    (btn) => btn.textContent.startsWith(persona.name)
  );
  if (activeBtn) {
    activeBtn.classList.add("is-active");
  }

  renderPersonaDetails(persona);
  renderScenarioList(persona);
  resetConversation();
}

function renderPersonaDetails(persona) {
  elements.personaDetails.innerHTML = `
    <div class="persona-header">
      <div>
        <h2>${persona.name}</h2>
        <p>${persona.role} · ${persona.industry}</p>
      </div>
      <span class="value-pill">${persona.valueFocus}</span>
    </div>
    <p class="persona-summary">${persona.summary}</p>
    <div class="detail-grid">
      <article class="detail-card">
        <h3>Storyline</h3>
        <p>${persona.storyline}</p>
      </article>
      <article class="detail-card">
        <h3>Where the discussion should go</h3>
        <p>${persona.direction}</p>
      </article>
      <article class="detail-card">
        <h3>Ideal strategy</h3>
        <p>${persona.strategy}</p>
      </article>
      <article class="detail-card">
        <h3>Red path</h3>
        <p>${persona.redPath}</p>
      </article>
    </div>
    <div class="recommended-questions">
      <h3>Ideal question flow</h3>
      <ul>
        ${persona.recommendedQuestions
          .map((item) => `<li><strong>${item.stage}:</strong> ${item.prompt}</li>`)
          .join("")}
      </ul>
    </div>
  `;
}

function renderScenarioList(persona) {
  elements.scenarioList.innerHTML = "";
  elements.scenarioSection.style.display = "block";
  persona.scenarios.forEach((scenario) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "scenario-btn";
    button.innerHTML = `<strong>${scenario.name}</strong><span>${scenario.description}</span>`;
    button.addEventListener("click", () => selectScenario(persona, scenario.id));
    li.appendChild(button);
    elements.scenarioList.appendChild(li);
  });
}

function selectScenario(persona, scenarioId) {
  const scenario = persona.scenarios.find((item) => item.id === scenarioId);
  if (!scenario) return;

  document
    .querySelectorAll(".scenario-btn")
    .forEach((btn) => btn.classList.remove("is-active"));
  const activeBtn = Array.from(document.querySelectorAll(".scenario-btn")).find((btn) =>
    btn.innerText.includes(scenario.name)
  );
  if (activeBtn) {
    activeBtn.classList.add("is-active");
  }

  startScenario(scenario);
}

function startScenario(scenario) {
  state.scenario = scenario;
  state.currentStageId = scenario.startStage;
  state.score = 0;
  state.stepsCompleted = 0;
  state.totalStages = scenario.stageOrder.length;
  elements.restartBtn.disabled = false;

  elements.scenarioTitle.textContent = scenario.name;
  elements.scenarioDescription.textContent = scenario.description;
  resetConversation();
  renderStage();
}

function resetConversation() {
  elements.conversationLog.innerHTML =
    '<p class="empty-state">No conversation yet. Select a scenario to see the persona speak.</p>';
  elements.currentPrompt.textContent = "Question: —";
  elements.answerOptions.innerHTML = "";
  elements.feedbackContent.innerHTML =
    "<p>Responses, deal impact, and next steps will appear here.</p>";
}

function renderStage() {
  if (!state.scenario || !state.currentStageId) {
    elements.currentPrompt.textContent = "Question: —";
    elements.answerOptions.innerHTML = "";
    return;
  }

  const stage = state.scenario.stages[state.currentStageId];
  if (!stage) return;

  elements.conversationLog.innerHTML =
    elements.conversationLog.innerHTML.replace(
      '<p class="empty-state">No conversation yet. Select a scenario to see the persona speak.</p>',
      ""
    );

  const stageLabel = stage.type === "open" ? "Open question" : "Closed question";
  elements.currentPrompt.textContent = `Question (${stageLabel}): ${stage.question}`;
  elements.answerOptions.innerHTML = "";

  stage.personaResponses.forEach((response) => {
    const button = document.createElement("button");
    const categoryClass = response.category.toLowerCase();
    button.className = `answer-button category-${categoryClass}`;
    button.innerHTML = `
      <span class="option-category">${response.category}</span>
      <span class="option-text">${response.text}</span>
    `;
    button.addEventListener("click", () => handleResponse(stage, response));
    elements.answerOptions.appendChild(button);
  });
}

function handleResponse(stage, response) {
  appendLogTurn(stage.question, response);
  updateFeedback(response);

  state.score += response.scoreImpact;
  state.stepsCompleted += 1;

  if (response.nextStage) {
    state.currentStageId = response.nextStage;
    renderStage();
  } else {
    state.currentStageId = null;
    elements.answerOptions.innerHTML = "";
    elements.currentPrompt.textContent = "Question: Scenario completed";
    finishScenario();
  }
}

function appendLogTurn(question, response) {
  const entry = document.createElement("div");
  entry.className = "log-turn";
  entry.innerHTML = `
    <p class="question-line"><strong>Question:</strong> ${question}</p>
    <p class="answer-line"><strong>Answer (${response.category}):</strong> ${response.text}</p>
  `;
  elements.conversationLog.appendChild(entry);
  elements.conversationLog.scrollTop = elements.conversationLog.scrollHeight;
}

function updateFeedback(response) {
  elements.feedbackContent.innerHTML = `
    <h4>${response.category} answer selected</h4>
    <p>${response.context}</p>
    <ul>
      <li><strong>Why it matters:</strong> ${response.guidance}</li>
      <li><strong>Persona is thinking:</strong> ${response.personaThoughts}</li>
      <li><strong>Red path cue:</strong> ${response.redPathCue}</li>
    </ul>
  `;
}

function finishScenario() {
  const ratio = state.totalStages ? state.score / state.totalStages : 0;
  let summary;
  if (ratio >= 0.8) {
    summary = state.scenario.evaluation.success;
  } else if (ratio >= 0.5) {
    summary = state.scenario.evaluation.caution;
  } else {
    summary = state.scenario.evaluation.poor;
  }

  elements.feedbackContent.innerHTML += `
    <div class="evaluation">
      <h4>Session evaluation</h4>
      <p>${summary}</p>
      <div class="evaluation-columns">
        <div>
          <h5>Strengths to repeat</h5>
          <ul>${state.scenario.evaluation.strengths
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>
        </div>
        <div>
          <h5>Improve next time</h5>
          <ul>${state.scenario.evaluation.improvements
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>
        </div>
      </div>
    </div>
  `;
}
