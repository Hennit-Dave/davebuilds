# Design Rationale — Decision Records

# Design Rationale

Write clear design rationale that connects decisions to evidence, user needs, and principles — not to personal preference.

## Why Rationale Matters

Design decisions get questioned. In reviews, in handoffs, six months later when someone wants to "simplify" the UI. Rationale is the record that answers "why did we do it this way?" without requiring the original designer to be in the room.

Good rationale also forces clarity: if you can't articulate why you made a choice, you probably need to make it more deliberately.

## When to Write Rationale

Write rationale for:
- Major design direction decisions (why this pattern over the alternatives)
- Departures from established patterns or conventions
- Controversial or debated choices (decisions that required discussion to resolve)
- Changes from a previous design approach (why we changed, not just that we changed)
- Decisions that will be questioned later (anything that looks "weird" without context)

Don't write rationale for:
- Obvious choices that follow convention without deviation
- Implementation details (that's what code comments are for)
- Decisions that were made and immediately agreed upon without alternatives

## Rationale Structure

### 1. Decision
State clearly what was decided. Be specific about what was chosen — not "we improved the navigation" but "we moved the primary navigation from the top bar to a left sidebar."

### 2. Context
What problem or user need prompted this decision? What constraints existed (technical, business, time, brand)?

### 3. Options Considered
What alternatives were explored? Brief description of each. (If you didn't consider alternatives, say so and note that this was the obvious choice.)

### 4. Evidence
What informed the decision?
- User research (interviews, testing sessions, survey data)
- Analytics (click data, task completion rates, error rates)
- Established best practices or research (cite specific sources when possible)
- Competitive analysis (what do comparable products do?)
- Previous versions / A/B test results

### 5. Reasoning
Why this option over the alternatives? Connect explicitly to:
- User needs (what does this do for the user that the alternatives don't?)
- Business goals (how does this serve the product's objectives?)
- Design principles (which principle does this honor, and which does it trade off?)
- Technical feasibility (was an alternative ruled out for engineering reasons?)

### 6. Trade-offs
What was knowingly sacrificed? What was deprioritized and why? Acknowledging trade-offs demonstrates rigor and prevents future team members from thinking you simply missed the downside.

### 7. Validation Plan
How will you know if this decision was right?
- What metrics will indicate success or failure?
- What user feedback would prompt reconsideration?
- Is there a planned user test to validate an assumption?

## Template

```markdown
## Decision: [Short description of what was decided]

**Date**: [When]
**Decided by**: [Who]
**Status**: [Decided / Under review / Revisited on DATE]

### Context
[What problem were we solving? What constraints existed?]

### Options Considered
- **Option A (chosen)**: [Description]
- **Option B**: [Description]
- **Option C**: [Description, if applicable]

### Evidence
- [Research finding, data point, or best practice that informed this]
- [...]

### Reasoning
[Why Option A over the alternatives. Connect to user needs, goals, principles.]

### Trade-offs
[What was knowingly given up. Be honest here.]

### Validation Plan
[How we'll know if this was right. Metrics, user test, timeline.]
```

## Quality Checklist

Before finalizing rationale, check:
- [ ] The decision is described specifically enough to be unambiguous
- [ ] At least one piece of evidence is cited (not just "it felt right" or "best practice")
- [ ] Trade-offs are acknowledged (not just the upsides)
- [ ] It's written for the audience who will read it (future designer, engineer, PM — not just yourself)
- [ ] It connects to user needs, not just aesthetic preference or convention
- [ ] A validation plan exists (even if it's "we'll test this in the next usability session")

## Best Practices

**Write during the decision, not after.** Rationale written weeks later is reconstruction, not documentation. The reasoning is freshest at the moment of decision.

**Keep it concise but complete.** Rationale should fit in a Notion page or Figma comment, not a 10-page document. If it's taking more than 500 words, you're probably documenting the exploration, not the decision.

**Store it alongside the design.** Rationale in a separate document no one reads is wasted. Put it in Figma comments on the relevant frames, in the Jira ticket, or in a design decision log that the whole team knows about.

**Reference rationale in reviews.** When someone questions a decision in a critique, the answer is "here's the rationale document" — not a 10-minute improvised justification.

**Update it when decisions change.** If a decision is revisited and overturned, update the rationale to reflect why. "We changed this on DATE because..." is more useful than a stale doc that no longer reflects reality.

**Rationale is not a defense.** The goal isn't to win an argument — it's to make the reasoning transparent so the team can make a better decision if they have new information.
