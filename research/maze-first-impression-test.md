# Thejands — Maze First Impression Test Script

> **Tool**: Maze (maze.co) or UsabilityHub (Five Second Test)
> **Format**: Unmoderated, async
> **Duration**: ~5 minutes per participant
> **Target**: 8–12 participants from screener pool

---

## Test Structure

### Task 0 — Introduction (shown to participant)

> "This is a short 5-minute test. You'll see a website briefly, then answer a few questions. There are no right or wrong answers — we're testing the website, not you.
>
> Please answer based on your genuine first reaction. Don't overthink it."

---

### Task 1 — Five-second exposure

**Instruction shown to participant:**

> "You'll see a website for 5 seconds. Look at it naturally — don't try to read everything. When it disappears, answer the questions below."

**Show**: Homepage screenshot (full viewport, above the fold only — hero section)
**Duration**: 5 seconds
**Then hide image**

**Questions (free text):**

1. What does this company do?
2. Who do you think this company works with?
3. What's one word that describes your first reaction to this website?

---

### Task 2 — Full page scroll (30 seconds)

**Instruction:**

> "Now you'll see the full page. Take 30 seconds to scroll through it naturally, as if you found it through a Google search."

**Show**: Full homepage screenshot (scrollable or stitched)
**Duration**: 30 seconds

**Questions after:**

1. _(Multiple choice)_ Which of these best describes what this company offers?
   - [ ] Web design and branding
   - [ ] Software and product development ✓
   - [ ] Marketing and growth services
   - [ ] IT consulting and support
   - [ ] I'm not sure

2. _(Scale 1–7)_ How credible does this company seem?
   `1 = Not at all credible` → `7 = Extremely credible`

3. _(Scale 1–7)_ How clearly did the site communicate what they do?
   `1 = Very unclear` → `7 = Crystal clear`

4. _(Free text)_ What, if anything, made you trust this company more?

5. _(Free text)_ What, if anything, created doubt or confusion?

---

### Task 3 — Navigation intention

**Instruction:**

> "Imagine you're a founder or business owner evaluating this company as a potential partner. Where on this site would you click first to learn more?"

**Show**: Full homepage (interactive click map or static with labels)

**Heatmap / click target question:**
_Where would you click first?_

Expected hot zones:

- "Start your project" button (primary CTA)
- "See what we build" button (secondary CTA)
- "Services" nav link
- "Process" nav link
- Email address

---

### Task 4 — CTA intent

**Instruction:**

> "After browsing this site, how likely would you be to reach out to this company?"

_(Scale 1–7)_
`1 = Definitely not` → `7 = Definitely yes`

**Follow-up (conditional — shown if score ≤ 4):**

> "What would need to change for you to be more likely to reach out?"
> _(Free text)_

**Follow-up (conditional — shown if score ≥ 5):**

> "What was the main thing that made you want to reach out?"
> _(Free text)_

---

### Task 5 — Positioning check

**Instruction:**

> "The website uses the phrase 'founders in the room.' What does that phrase mean to you?"

_(Free text)_

**Follow-up:**

> "Does that phrase make this company seem more trustworthy, less trustworthy, or does it not affect your opinion?"

- [ ] More trustworthy
- [ ] Less trustworthy
- [ ] No effect
- [ ] I'm not sure what it means

---

## Maze Setup Notes

- Use **Maze Prototype** or **Image Click** blocks for Task 3
- Use **Open Question** blocks for free text
- Use **Rating Scale** blocks for 1–7 questions
- Set **test time limit** to 8 minutes (with 3-minute buffer)
- Enable **think-aloud recording** if using moderated variant
- Share link via screener confirmation email

## Metrics to Watch

| Metric                   | Good signal                                  | Red flag                        |
| ------------------------ | -------------------------------------------- | ------------------------------- |
| Task 1 Q1 accuracy       | "software", "apps", "product studio"         | "marketing", "agency", "design" |
| Task 2 Q1 correct option | >70% select correct answer                   | <50% correct                    |
| Credibility score        | Median ≥ 5/7                                 | Median < 4/7                    |
| Clarity score            | Median ≥ 5/7                                 | Median < 4/7                    |
| CTA intent               | Median ≥ 5/7                                 | Median < 4/7                    |
| "Founders in the room"   | "real people", "accessible", "direct access" | "jargon", "don't understand"    |
