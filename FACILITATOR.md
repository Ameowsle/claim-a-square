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

(Emojis and color are their own choice. Amelia facilitates, reviews and merges;
any order works. The CI check runs green on each PR. After each merge, reload
the live site: cards on team.html, color and grid on the app page.)

## Round 2: the merge conflict — adding Amelia (slot 7)

Emely and Jan both add **Amelia's card in SLOT 7**, each their own version.
Same line, two different changes: a guaranteed, on-purpose conflict.

1. **Both create their branches first**, before either PR is merged (this
   matters, otherwise there is no conflict): `Create a branch called <name>-amelia`
2. Both: `In team.html, replace the SLOT 7 comment with a card for Amelia:
   emoji <own choice>, name Amelia, role <own wording>`
3. Emely: commit, push, PR. Amelia merges it.
4. Jan: commit, push, PR. GitHub now blocks it: "This branch has conflicts
   that must be resolved."
5. Resolve together on the beamer: click **Resolve conflicts** on the PR, look
   at the `<<<<<<<` `=======` `>>>>>>>` markers, agree as a team which card
   (or a mix) Amelia gets, delete the markers, mark as resolved, merge.

Message: a conflict is git asking "which version wins", not a failure.
Nice ending: all five of you are on the wall.

## Before the workshop

- Invite the 4 participants as collaborators (Settings -> Collaborators).
- Keep merged branches (do not delete) so Insights -> Network stays readable.
