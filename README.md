# CODA MDM Sales Trainer

A fully deterministic, browser-based Master Data Management (MDM) sales training simulator. Practice pitching CODA's MDM platform against realistic executive and plant personas, learn how each answer lands, and receive coaching on how to advance the deal.

## Training approach

- Every persona includes a storyline, value focus, and a recommended question flow so reps know how to approach that vertical.
- Each scenario begins with a dramatic open question from the sales rep that surfaces three likely persona answers labelled **Optimal**, **Medium**, or **Unfavorable** with contextual coaching.
- Follow-up stages convert into closed questions that narrow scope, reinforce the red path toward a PoC, and conclude with an explicit PoC commitment ask.
- The right rail surfaces real-time feedback (why the answer mattered, what the persona is thinking, and the next step on the red path) plus an end-of-session evaluation.

## Project structure

```
├── index.html   # App markup
├── style.css    # Layout and visual design
├── script.js    # Persona packs, scenarios, and interaction logic
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
