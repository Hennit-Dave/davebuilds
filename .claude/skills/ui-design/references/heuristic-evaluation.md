# Heuristic Evaluation — Expert Usability Audit

# Heuristic Evaluation

Systematically evaluate interfaces against established usability principles to find problems before users do.

## When to Use

- Before user testing (to clear obvious issues first)
- After design is "done" but before development
- Auditing an existing product for UX debt
- Second opinion on a design before sign-off
- Fast expert review when time doesn't allow full user testing

Heuristic evaluation finds about 75% of usability problems at a fraction of the cost of user testing. It doesn't replace user testing — it makes user testing more efficient by removing the obvious issues first.

## Nielsen's 10 Usability Heuristics

Evaluate the interface against each of these:

**1. Visibility of system status**
The system keeps users informed about what's happening through appropriate feedback in reasonable time.
- Is there feedback for every user action?
- Do long operations show progress?
- Is the current state always clear (which step, which mode, what's selected)?

**2. Match between system and the real world**
The system speaks the user's language — words, phrases, and concepts familiar to the user, not system-oriented jargon.
- Are labels in plain language, not internal/technical terms?
- Do icons use universally understood metaphors?
- Does the flow match how users think about this task (not how the system processes it)?

**3. User control and freedom**
Users often choose system functions by mistake and need a clearly marked "emergency exit."
- Is there an undo for every destructive action?
- Can users exit any flow without losing work?
- Are modal dialogs easy to dismiss?

**4. Consistency and standards**
Users shouldn't have to wonder whether different words, situations, or actions mean the same thing.
- Are the same terms used for the same things everywhere?
- Do interactive patterns behave consistently (all cards are clickable, or none)?
- Does the UI follow platform conventions (keyboard shortcuts, button placement)?

**5. Error prevention**
Better than good error messages is a careful design that prevents problems from occurring.
- Are destructive actions gated with confirmation?
- Does the UI constrain impossible inputs (date pickers, dropdowns)?
- Are there clear warnings before irreversible actions?

**6. Recognition over recall**
Minimize the user's memory load — make options, actions, and information visible.
- Are relevant options visible, not hidden in menus?
- Is context preserved when navigating between views?
- Are form fields labeled (not just relying on placeholder text)?

**7. Flexibility and efficiency of use**
Accelerators — unseen by novice users — allow experts to interact faster.
- Are there keyboard shortcuts for frequent actions?
- Can power users bypass confirmation dialogs for repeated actions?
- Are recent/frequent items surfaced for quick access?

**8. Aesthetic and minimalist design**
Dialogues should not contain irrelevant or rarely needed information. Every extra unit of information competes with relevant information.
- Is there content that isn't helping the user accomplish their goal?
- Are there decorative elements that add visual noise without meaning?
- Does the page try to do too many things at once?

**9. Help users recognize, diagnose, and recover from errors**
Error messages should be expressed in plain language, precisely indicate the problem, and constructively suggest a solution.
- Are error messages specific? (Not "Something went wrong")
- Do they explain what happened AND what to do?
- Are they placed close to the source of the error?

**10. Help and documentation**
Even if the system can be used without documentation, it may be necessary to provide help.
- Is help available in context (not just a separate "help center")?
- Are complex features explained with tooltips or inline guidance?
- Is documentation searchable and task-oriented?

## Evaluation Process

**Step 1: Define scope**
- Which flows or screens are being evaluated?
- What user tasks are in scope?
- What user type are you evaluating for (novice, expert, specific persona)?

**Step 2: Walk through as a new user**
Complete each task as if you've never used the product. What's confusing? What's hidden? What would you miss?

**Step 3: Walk through as an experienced user**
Same tasks, but now look for efficiency gaps. What takes too many steps? What lacks shortcuts?

**Step 4: Evaluate by heuristic**
Systematically check each of the 10 heuristics. Don't rely on memory — walk the flow while explicitly looking for each one.

**Step 5: Document findings**
For each issue found:
- Which heuristic it violates
- Where specifically it occurs (screen name, component, step)
- Severity rating (see below)
- A specific recommendation (not just "fix this")

**Step 6: Prioritize and report**
Sort by severity. Group related issues. Write an executive summary with issue counts by severity.

## Severity Scale

| Rating | Label | Meaning | Urgency |
|--------|-------|---------|---------|
| 0 | Not a problem | Potential issue, but doesn't actually affect usability | Log it, don't fix it |
| 1 | Cosmetic | Minor annoyance, users can work around easily | Fix if time allows |
| 2 | Minor | Causes some friction, slows users down | Fix in next release |
| 3 | Major | Significantly impairs task completion for many users | Fix before launch |
| 4 | Catastrophe | Prevents task completion or causes data loss | Block launch |

When in doubt, rate higher. It's easier to deprioritize a false 3 than to miss a real 4.

## Issue Documentation Template

```
Issue #[N]
Heuristic: [Which of the 10]
Location: [Screen/component/flow step]
Severity: [0–4]
Description: [What the problem is — be specific, not vague]
Impact: [Who is affected and how badly]
Recommendation: [Specific fix, not just "improve this"]
Screenshot/Reference: [Link or description]
```

## Report Structure

1. **Executive summary**: Total issues by severity, top 3 most critical findings, overall usability assessment
2. **Scope**: What was evaluated, what was not, which user types
3. **Critical issues (severity 4)**: Full detail with screenshots and specific recommendations
4. **Major issues (severity 3)**: Full detail
5. **Minor issues (severity 1–2)**: Summarized list with brief recommendations
6. **Positive findings**: What's working well (often omitted, always useful)
7. **Recommended next steps**: User testing to validate assumptions, quick wins to implement first

## Best Practices

- Multiple evaluators find significantly more issues than one (3–5 is the sweet spot for coverage vs. cost)
- Evaluate independently before comparing notes — discussion creates anchoring bias
- Focus on real user tasks, not edge cases or admin flows
- Always suggest a fix — "this is broken" without "here's how to fix it" isn't useful
- Separate heuristic evaluation from personal preference — heuristics have evidence behind them; taste does not
- Combine with at least a small user test to validate the most severe findings
