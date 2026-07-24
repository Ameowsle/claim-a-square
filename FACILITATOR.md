# Facilitator notes

One repo, two roles:

- **Case study (show):** the app itself. 5 merged PRs built it feature by
  feature (see Pull requests -> Closed, and Insights -> Network). CI runs on
  every PR (.github/workflows/check.yml).
- **Practice (do):** the team wall on `team.html`. Each participant adds their
  card through the full loop: branch -> change -> commit -> push -> PR.

## Round 1: the 4 tasks (conflict-free by design)

Two people extend the team wall, two people change the app itself. No task
touches another task's lines, so the merges never conflict:

- Henk's cards go in slots 3+4, Aurelia's in slots 10+11. Slots 5-9 sit
  between them as untouched buffer lines (slot 7 is reserved for round 2).
- The app tasks live in different files (`style.css`, `app.js`), and changes
  in different files can never conflict.

Everyone: `Create a branch called <name>` first, then their task, then
`Commit my changes` -> `Push my changes` -> `Open a pull request`.

| # | Person | Task | Say to Claude |
|---|--------|------|---------------|
| 1 | Henk | Cards in **slots 3+4**: himself + Emely (team.html) | `In team.html, replace the SLOT 3 comment with a card for me (emoji 🎯, name Henk, role <role>) and the SLOT 4 comment with a card for Emely (emoji 🌱, name Emely, role <role>)` |
| 2 | Emely | **Claimed-square color** (style.css) | `Change the color of claimed squares from green to <color>` |
| 3 | Aurelia | Cards in **slots 10+11**: herself + Jan (team.html) | `In team.html, replace the SLOT 10 comment with a card for me (emoji 🚀, name Aurelia, role <role>) and the SLOT 11 comment with a card for Jan (emoji 🧩, name Jan, role <role>)` |
| 4 | Jan | **Bigger grid** (app.js) | `Make the grid 12x12 instead of 10x10, and update the counter label to 144` |

(Emojis and color are their own choice. The CI check runs green on each PR.
After each merge, reload the live site: cards on team.html, color and grid on
the app page.)

### Peer review: who reviews whose PR

First, review ONE PR together on the beamer (whoever finishes first) so
everyone has seen the moves once. Then the ring takes over; everyone reviews
a type of change they didn't make themselves:

| PR by | Task | Reviewer |
|-------|------|----------|
| Henk | cards slots 3+4 | **Jan** |
| Emely | square color | **Henk** |
| Aurelia | cards slots 10+11 | **Emely** |
| Jan | 12x12 grid | **Aurelia** |

**How to review (3 steps, say them out loud):**

1. Ask Claude for a first pass, always with context on what the PR SHOULD do:
   `Review pull request #<number>. It is supposed to: <task in one sentence>.
   Tell me in plain language: what changed, does it do what it should, and
   could it break anything?`
2. Look yourself: open the PR on GitHub -> **Files changed** -> do the green
   lines match what Claude said and what the task was? Is the CI check green?
3. Verdict on GitHub: **Review changes -> Approve** (or write a comment if
   something looks off). The review is YOUR call, Claude is the assistant.

Amelia merges after approval (mirrors the real repo: reviewers approve,
merge rights stay small).

## Round 2: the merge conflicts — Amelia seeds them from main

Everyone gets a conflict, and everyone resolves one themselves. The trigger:
after all four have branched, **Amelia pushes her own version of the same
cards straight to main**. Main moves under their feet, the most realistic
conflict there is.

| Pair | Changes | Line | Say to Claude |
|------|---------|------|---------------|
| Emely + Jan | **Amelia's card** | slot 7 | `In team.html, replace the SLOT 7 comment with a card for Amelia: emoji <own choice>, name Amelia, role <own wording>` |
| Henk + Aurelia | **The team motto** | motto line | `In team.html, change the motto line to <own new motto>` |

1. **All four create their branches FIRST** (before Amelia's push, this is
   what makes the conflicts happen): `Create a branch called <name>-round2`
2. Everyone makes their change, commits, pushes, opens their PR.
3. **Amelia's move:** commit directly to main (facilitator privilege in the
   practice repo, narrate the irony) with her own versions of BOTH lines:
   her card in slot 7 AND her own new motto. One commit, push to main.
4. Everyone reloads their PR page: all four now show "This branch has
   conflicts that must be resolved." Let that sink in: nobody did anything
   wrong, main simply moved while they were working.
5. Resolve in two parallel queues (slot 7 and the motto line don't touch):
   - Slot 7: Emely resolves and merges, then Jan (his conflict is now
     against Emely's result).
   - Motto: Henk resolves and merges, then Aurelia.
   Each person clicks **Resolve conflicts** on their own PR, looks at the
   `<<<<<<<` `=======` `>>>>>>>` markers, decides which version (or mix)
   wins, deletes the markers, marks as resolved, merges.
6. Guidance for the deciders: the wall should end with one good card for
   Amelia and one motto the team actually likes, which version wins is
   the team's call.

Message: a conflict is git asking "which version wins", not a failure. And:
being "behind main" is normal, this is why you pull before you branch.

**Short on time?** Seed only slot 7 (Amelia's card) and run one queue on the
beamer with Emely + Jan; Henk + Aurelia watch and resolve next time.

## Before the workshop

- Invite the 4 participants as collaborators (Settings -> Collaborators).
- Keep merged branches (do not delete) so Insights -> Network stays readable.
