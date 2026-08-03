# Error-Handling UX — Prevention, Empty States, Recovery

# Error Handling UX

Design error experiences that prevent problems before they occur, communicate clearly when they do, and help users recover without frustration.

## The Error Handling Hierarchy

Work top-down — prevention is always better than recovery.

### 1. Prevention (eliminate errors before they happen)
- **Inline validation before submission** — show field errors as the user types or on blur, not after submit
- **Smart defaults and suggestions** — pre-fill known values, suggest recent entries, autocomplete
- **Constraint-based inputs** — date pickers over free text, dropdowns over open fields, character counters on limits
- **Confirmation dialogs for destructive actions** — delete, archive, disconnect, cancel subscription
- **Auto-save** — prevent data loss by saving in the background; never let a navigation event destroy work

### 2. Detection (catch errors quickly)
- Real-time field validation (on blur or keystroke, depending on field type)
- Form-level validation on submit (catches cross-field dependencies)
- Network error detection with appropriate retry logic
- Timeout handling — don't let users wait indefinitely
- Permission and authentication checks — fail early, not mid-flow

### 3. Communication (tell users what happened and what to do)
This is where most error UX fails. The error message is the most important part.

**Error message formula**: What happened + Why (if helpful) + What to do next
- ✓ "Your session expired. Sign in again to continue."
- ✓ "This email is already registered. Sign in or reset your password."
- ✗ "Error 401" (no context, no action)
- ✗ "Something went wrong" (vague, unhelpful)
- ✗ "Invalid input" (doesn't say what or why)

**Tone rules**:
- Never blame the user ("you entered an invalid email" → "this email address doesn't look right")
- Be specific, not generic ("Please check your connection" → "We couldn't save your changes. Check your connection and try again.")
- Use plain language — no error codes, no technical jargon in user-facing messages
- Match the severity to the language (critical error ≠ casual tone; minor warning ≠ alarm language)

**Placement rules**:
- Field errors: inline, directly below the field that caused them
- Form errors: summary at top of form + inline per field for long forms
- Page-level errors: banner or dedicated error state, not a modal
- Transient errors (network, timeouts): toast or snackbar, dismissible, with retry action

### 4. Recovery (help users get unstuck)
- **Preserve user input** — never clear a form on error; the user shouldn't have to retype
- **Offer retry** — one-click retry for transient failures (network errors, timeouts)
- **Provide alternatives** — if action A fails, can they accomplish the goal via action B?
- **Auto-retry with backoff** — for background sync failures, retry silently with exponential backoff
- **Undo** for accidental destructive actions — a toast with "Undo" is better than a confirmation dialog

## Error Patterns by Context

### Form validation
```
Field error: show inline below field on blur
Multiple errors: show field-level + summary at top
Submit blocked: primary button shows disabled state with tooltip explaining why
Cross-field error: show near the second field with clear reference to both
```

### Page-level errors
```
404 Not Found: friendly message, search bar, links to popular content, not a dead end
Permission denied: explain what access is needed and how to get it (don't just say "403")
Server error: apologize, retry option, status page link if applicable, support contact
Maintenance: estimated return time, status updates, alternative contact
```

### Network / connectivity
```
Offline: persistent banner (not toast), queue actions for when back online
Slow connection: skeleton screens, optimistic UI, don't block on every request
Request timeout: retry with clear feedback ("Still trying... or cancel")
Partial failure: show what succeeded, explain what failed, offer retry for failed parts
```

### Empty states
Empty states are error-adjacent — the user expected content, found none. They deserve the same design attention.
```
Zero data (fresh): explain what will appear here + primary CTA to create first item
Zero results (search/filter): show search terms, suggest modifications, offer to clear filters
Connection problem (data expected): retry button + explanation
Permission limitation (data hidden): explain why + how to get access
```

### Authentication errors
```
Wrong credentials: tell them which field is wrong (if known), offer password reset
Session expired: save their current work/URL, redirect to login, restore after auth
Account locked: explain why, tell them how to unlock, offer support contact
MFA failure: retry option, backup code option, don't expose which factor failed
```

## Severity Levels

Use visual weight to communicate urgency:

| Severity | Visual | When to use |
|----------|--------|-------------|
| Info | Blue banner or inline | FYI, no action needed |
| Warning | Yellow/amber | Something needs attention but isn't blocking |
| Error | Red | Action failed, user intervention required |
| Critical | Red, persistent | Data loss risk, security issue, unrecoverable state |

Don't cry wolf — if everything is red, nothing is urgent.

## Accessibility Requirements

- Never use color alone to indicate an error (add an icon and text)
- Error messages must be associated with their fields (`aria-describedby`)
- Focus should move to the first error field or error summary on failed submit
- Screen reader announcement of errors (`role="alert"` or `aria-live="assertive"`)
- Error state must be visible without relying on placeholder text (which disappears on focus)

## Testing Error Paths

Error paths deserve the same testing rigor as the happy path:
- Test with network throttled or offline (browser DevTools)
- Test with invalid data, edge cases, and empty inputs
- Test auth failures, permission errors, and session expiry
- Test recovery flows — does retry actually work? does undo restore correctly?
- Read every error message aloud — if it sounds robotic or blaming, rewrite it
