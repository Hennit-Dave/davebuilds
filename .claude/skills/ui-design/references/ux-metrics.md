# UX Metrics — Measuring Design Impact

# UX Metrics

Define metrics that connect design decisions to measurable outcomes — for users and for the business.

## Why Metrics Before Design

Metrics defined after launch tell you what happened. Metrics defined before launch tell you what success looks like. The act of defining metrics forces clarity on what the design is actually trying to accomplish.

If you can't define what success looks like before building, you probably don't have a clear enough design hypothesis.

## The HEART Framework

Google's HEART framework provides five categories for UX measurement. Use it as a lens to ensure your metric set is balanced — covering both breadth (many users) and depth (quality of experience).

### H — Happiness
How satisfied are users? Subjective attitudinal data.
- **SUS (System Usability Scale)**: 10-question standardized survey, score 0–100. Scores above 68 are above average.
- **NPS (Net Promoter Score)**: "How likely are you to recommend?" −100 to +100.
- **CSAT (Customer Satisfaction)**: Task-specific satisfaction rating (1–5 or 1–7).
- **Perceived ease of use**: "How easy was it to complete X?" (1–5 scale, task-specific)

*Good for*: Measuring perception, brand sentiment, comparing over time.
*Not good for*: Explaining why satisfaction changed (combine with qualitative).

### E — Engagement
How deeply are users interacting?
- Daily/monthly active users (DAU/MAU)
- Session duration and frequency
- Feature adoption rate (% of users who use feature X)
- Depth of use (how many features does the average user engage with?)
- Notifications or messages sent/received per user

*Good for*: Measuring whether design increases product usage.
*Not good for*: Distinguishing engaged users from confused ones (more sessions ≠ better experience).

### A — Adoption
Are users starting to use new features or signing up?
- New user registration rate
- Feature activation rate (users who trigger a feature at least once)
- Time to first key action (onboarding speed)
- Breadth of feature use across the user base

*Good for*: Measuring the success of new features and onboarding flows.
*Not good for*: Measuring ongoing value after initial adoption.

### R — Retention
Are users coming back?
- D1/D7/D30 retention (% of users who return 1, 7, 30 days after first use)
- Monthly/annual churn rate
- Reactivation rate (users who return after a period of inactivity)
- Cohort retention curves

*Good for*: Measuring whether the product delivers enough long-term value to sustain use.
*Not good for*: Explaining why users churn (again, combine with qualitative).

### T — Task Success
Can users accomplish their goals?
- **Task completion rate**: % of users who complete a defined task (from usability test or analytics funnel)
- **Time on task**: Average time to complete a task (lower is usually better, but not always)
- **Error rate**: Frequency of errors during task completion
- **Abandonment rate**: % of users who start but don't finish a flow
- **Support volume**: Number of help requests related to a specific task

*Good for*: Measuring usability directly. Most actionable metric for UX design changes.
*Not good for*: Capturing the why behind task failure (observe users, don't just count events).

## Metric Categories Beyond HEART

### Behavioral metrics (quantitative, from analytics)
- Funnel conversion rates (step by step, not just overall)
- Click-through rates on specific CTAs
- Scroll depth
- Feature discovery rate (users who find features without being prompted)
- Error frequency and type

### Attitudinal metrics (qualitative + survey)
- User interviews (not a metric, but essential context for interpreting behavioral data)
- Support ticket themes (qualitative signal from quantitative volume)
- Usability test task success + think-aloud insights

### Business impact metrics
- Revenue per user (does better UX correlate with higher spend?)
- Support cost reduction (fewer tickets = less friction)
- Time to value (how fast do users get the first "aha" moment?)
- Upgrade/expansion rate

## Defining Good Metrics

A good UX metric is:
1. **Connected to a design hypothesis** — "We believe simplifying the signup flow will increase Day 1 retention from 40% to 55%"
2. **Measurable** — you have a data source for it (analytics, survey, usability test)
3. **Sensitive** — it will actually change if the design works (don't track a metric that barely moves)
4. **Actionable** — if it goes the wrong direction, you know what to investigate

### Metric Definition Template

```
Metric: [Name]
Category: [HEART category + behavioral/attitudinal/business]
Definition: [Exactly how it's calculated]
Data source: [Where the data comes from — analytics platform, survey tool, etc.]
Baseline: [Current value before the design change]
Target: [What success looks like — with a timeframe]
Owner: [Who is responsible for tracking this]
Review cadence: [Weekly / monthly / per release]
```

## Building a Measurement Plan

**Step 1: State the design hypothesis**
"We believe [design change] will [user behavior change] because [reason], which will lead to [business outcome]."

**Step 2: Pick 3–5 primary metrics**
More than 5 primary metrics splits focus. Pick the ones most directly tied to your hypothesis. Use the HEART framework to ensure coverage across attitudinal and behavioral.

**Step 3: Establish baselines before launching**
You can't measure impact without a before. If you don't have historical data, run a baseline measurement period before the design change.

**Step 4: Pick a measurement window**
How long after launch will you collect data before declaring success or failure? Set this upfront — don't keep measuring until you get the result you want.

**Step 5: Define leading and lagging indicators**
- **Leading** (change quickly, signal direction): task completion rate, error rate, click-through
- **Lagging** (take time to move, confirm impact): retention, NPS, revenue per user

Track leading indicators weekly; lagging indicators monthly.

**Step 6: Plan qualitative companion research**
Metrics tell you what changed. Qualitative research tells you why. Pair every metrics plan with at least:
- A short usability test on the changed flow
- Review of support tickets related to the feature
- Optional: follow-up survey for users who abandoned

## Common Mistakes

- **Vanity metrics**: Tracking metrics that look good but don't reflect user value (total registered users, total page views)
- **No baseline**: Launching without measuring the current state, then having nothing to compare to
- **Too many metrics**: If everything is a KPI, nothing is. Pick 3–5 and own them.
- **Only tracking happy path**: Measure abandonment and error rates, not just completion
- **Metric without a target**: "We'll track NPS" is not a measurement plan. "We'll track NPS with a target of +10 points in 90 days" is.
- **Forgetting the user**: Metrics are means, not ends. A 5% conversion lift that worsens user satisfaction is not a success.
