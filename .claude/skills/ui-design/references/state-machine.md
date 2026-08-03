# State Machine Modeling — Eliminate Impossible UI States

# State Machine — UI Behavior Modeling

Model complex UI behavior as finite state machines to eliminate impossible states, surface edge cases, and create a shared language between design and engineering.

## Why State Machines for UI

Without explicit state modeling, components accumulate boolean flags that create impossible combinations: `isLoading && isError`, `isEmpty && hasData`, `isSubmitting && isSuccess`. State machines make these impossible by definition — the component is always in exactly one state.

They also make the design work visible as a spec, not just a sketch.

## State Machine Components

- **States**: The distinct modes a UI can be in (idle, loading, success, error, editing)
- **Events**: What causes a transition (user click, API response, timeout, validation result)
- **Transitions**: Rules for moving between states — "on event X in state A, move to state B"
- **Actions**: Side effects during transitions (fire analytics, clear a field, show a toast)
- **Guards**: Conditions that must be true for a transition to proceed (isValid, hasPermission)

## How to Model a Component

1. **List every state** — brainstorm exhaustively before pruning. Ask "what modes can this be in?"
2. **List every event** — user actions, system events, async responses, timeouts
3. **Define transitions** — for each state, which events are valid? Where do they lead?
4. **Identify impossible states** — what combinations of conditions should never exist?
5. **Add guards** — conditional logic that gates transitions
6. **Define actions** — side effects per transition (not per state)
7. **Map each state to a UI representation** — what does the user see in each state?

## Common UI State Machines

### Form Submission
```
idle
  → [user types] → editing
editing
  → [user submits] → validating
  → [user clears] → idle
validating
  → [valid] → submitting
  → [invalid] → editing (with errors shown)
submitting
  → [success] → success
  → [error] → error
success
  → [user clicks "submit another"] → idle
error
  → [user retries] → submitting
  → [user edits] → editing
```

### Data Fetching
```
idle
  → [fetch triggered] → loading
loading
  → [response received, data present] → success
  → [response received, empty] → empty
  → [request failed] → error
  → [timeout] → error
success
  → [user refreshes] → loading (while showing stale data)
empty
  → [user creates first item] → loading
error
  → [user retries] → loading
```

### Multi-Step Wizard
```
step_1
  → [next, guard: step1Valid] → step_2
step_2
  → [next, guard: step2Valid] → step_3
  → [back] → step_1
step_3
  → [submit] → submitting
  → [back] → step_2
submitting
  → [success] → complete
  → [error] → step_3 (with error shown)
complete
  (terminal state — no valid transitions)
```

### Authentication
```
logged_out
  → [user clicks login] → authenticating
authenticating
  → [credentials valid] → logged_in
  → [credentials invalid] → login_error
  → [network error] → network_error
login_error
  → [user retries] → authenticating
  → [user resets password] → password_reset_flow
network_error
  → [user retries] → authenticating
logged_in
  → [user logs out] → logging_out
logging_out
  → [complete] → logged_out
```

## Specification Format

For each component, produce:

**States table**
| State | Description | UI representation |
|-------|-------------|------------------|
| idle | No interaction yet | Empty form, placeholder text |
| editing | User is entering data | Active fields, no errors shown yet |
| ... | ... | ... |

**Transitions table**
| From state | Event | Guard | To state | Actions |
|-----------|-------|-------|----------|---------|
| idle | focus | — | editing | — |
| editing | submit | isValid | submitting | clearErrors() |
| editing | submit | !isValid | editing | showErrors() |
| ... | ... | ... | ... | ... |

**Impossible states** — explicitly list what cannot exist:
- Loading AND error simultaneously
- Success AND empty simultaneously
- Submitting AND editing simultaneously

## Design Implications

Each state needs a complete visual design:
- **Loading state**: what does the UI show while waiting? (skeleton, spinner, disabled controls)
- **Error state**: what error message? can the user recover? how?
- **Empty state**: what does zero-data look like? is there a CTA?
- **Success state**: confirmation, next steps, auto-dismiss timer?
- **Partial states**: can the user interact while stale data is shown?

Don't design only the happy path. Every state in the machine needs a corresponding design.

## Engineering Handoff

State machines translate directly to implementation. In JavaScript:
- XState for complex machines with hierarchy and parallel states
- useReducer for simpler machines in React
- Enum + switch statement for minimal implementations

The state machine spec IS the implementation contract. If the design uses the same state names as the code, there's no translation layer and no ambiguity.

## Best Practices

- Start with the happy path states, then add error and edge case states
- Every state must have at least one way out (no dead ends except intentional terminal states)
- Keep machines focused — one machine per logical concern, not one machine for the whole app
- Name states as nouns (idle, loading) not verbs (isLoading, wasSuccessful)
- Name events as past-tense verbs from the user/system perspective (SUBMITTED, RESPONSE_RECEIVED)
- Test the machine before building the UI — walk through every path manually
