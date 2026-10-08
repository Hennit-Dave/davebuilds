# Group A review — 2026-10-08

Scope: positioning, identity, AI attribution and the approved static build/lint setup.
No deployment or Lighthouse run was performed.

## Command evidence

See `group-a-checks.txt` for actual final command output and exit codes.
Build, lint and `git diff --check` each exited 0.

The first lint run exited 1 with three `no-redeclare` errors: `initReveal`,
`PROJECTS` and `SITE` were declared both as shared globals in the ESLint config
and in their defining files. The config now excludes each shared global from
its defining file. No lint rules were disabled to resolve those errors.

The npm download initially failed with `ENOTFOUND registry.npmjs.org` inside
the sandbox; the approved network retry installed 87 packages successfully.
The preview server also required permission to bind localhost.

## Browser observations

Inspected the built site at `http://127.0.0.1:4173/` in desktop Chrome using the
native accessibility tree and screenshots. This was a content/visual spot check,
not the final viewport, contrast, keyboard, or Lighthouse audit.

- Hero retains `Dave Hennit_`, with the new role subtitle and AI-agent tagline.
- About shows `David Enitan, known online as Dave Hennit.` and four workflow steps.
- Tools line contains exactly the seven requested linked tools.
- The `whoami.sh` block retains its existing appearance and contains the single
  `Open to remote roles` line, supplied by `site.js`.
- Contact contains the roles/freelance sentence and the supplied email.
- Footer displays `© 2026 Dave Hennit.` using the existing runtime year code.
- Browser title displays `Dave Hennit — Design Engineer & UI/UX Designer`.
  Could not reproduce literal `&amp;` locally; retained valid HTML escaping.

## Identity and scope notes

All five HTML pages use David Enitan as the real name. The supplied LinkedIn
URL retains its existing `oluwaseun-enitan` account slug; this is a link target,
not display-name copy, and no replacement profile URL has been supplied.

Original portfolio screenshots contain the old name/availability in their pixels.
Their page/card references were removed and the static build excludes those
original assets. Originals remain in the repository.

TaskFlow and the original portfolio are labeled AI-assisted in their stories
and data-driven cards. Direct implementation claims were revised to describe
the implementation without implying hand-written code.

The older cards still appear on the homepage in this intermediate Group A build.
Group B will replace them with the requested projects while preserving the older
stories on the DaveBuilds index. New project screenshots and case-study TODOs
belong to Group B. Mobile-menu resize handling and final evidence belong to C.
