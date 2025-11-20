# CODA MDM Sales Trainer

A fully deterministic, browser-based Master Data Management (MDM) sales training simulator. Practice pitching CODA's MDM platform across industries, learn what each persona values, and receive coaching on how to advance every conversation toward a PoC.

## Repository setup

Clone the repository and install a simple HTTP server (Python is built-in on most environments) to run the static site locally:

```bash
git clone https://github.com/your-org/mymdmapp.git
cd mymdmapp
python -m http.server 8000
```

Open `http://localhost:8000` to explore the training experience.

## Training approach

- Choose an industry first, then a persona (CFO, CEO, CTO, Supply Chain Head, Warehouse Head) to see their storyline, value lens, red-path guidance, and top question themes.
- Every scenario begins with a dramatic open question that hooks the persona on cost or risk. Subsequent stages convert into closed questions so students narrow scope before the final PoC ask.
- Each answer is clearly labeled **Optimal**, **Medium**, or **Unfavorable**, with context explaining why and how it shifts the red path.
- The right rail surfaces real-time feedback (why the answer mattered, what the persona is thinking, and the next step on the red path) plus an end-of-session evaluation.

## Project structure

```
├── index.html   # App markup and Apple-inspired layout
├── style.css    # Light, Apple-style presentation with soft shadows and chips
├── script.js    # Industry selector, persona packs, scenarios, and coaching logic
```

All persona packs, scenarios, and evaluation logic are stored inside `script.js` so the experience remains self-contained and easy to edit.

## Getting started

1. Launch a local web server (for example with Python):

   ```bash
   python -m http.server 8000
   ```

2. Open `http://localhost:8000` in your browser.
3. Choose a persona, select a scenario, and walk through the guided roleplay. Review the coaching summary at the bottom to see your score, strengths, and improvement areas.

## Editing persona packs

Each persona object inside `script.js` contains:

- Background info (storyline, pain points, questions, strategy, red-line)
- A list of scenarios
- Step-by-step dialogue trees with three predefined responses (good, weak, wrong)
- Evaluation notes for post-session coaching

Update these sections to introduce new personas, expand scenarios, or adjust coaching language.
