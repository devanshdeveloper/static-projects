# Brain Concentrator

A lightweight Stroop-style focus trainer with two modes:

- **Word Grid mode** for visual scanning and concentration.
- **Challenge mode** for rapid match vs mismatch decisions with score, streak, and timer.

## Running locally

Open `index.html` in a browser.

## Feature: Challenge Mode

1. Set challenge duration in seconds.
2. Click **Start Challenge**.
3. Decide whether the shown word text matches the rendered color.
   - Click **MATCH** (or press `M`) when they match.
   - Click **MISMATCH** (or press `N`) when they differ.
4. Earn points for correct answers, build streak multipliers, and avoid penalties for wrong answers.

## Rollback

To remove Challenge mode, revert this commit:

```bash
git revert <commit_sha>
```
Tiny browser app that renders a configurable set of random color words to support focus/concentration exercises.

## Run locally

Open `index.html` in a browser.

## Test

```bash
npm test
```

## Improvement highlights

- Added safer input sanitization and clamping for generated item count.
- Improved rendering efficiency using `DocumentFragment` and `replaceChildren`.
- Added simple unit tests for utility logic.
- Improved HTML validity/accessibility and cleaned styling consistency.
