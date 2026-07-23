# Facilitator notes

One repo, two roles:

- **Case study (show):** the app itself. 5 merged PRs built it feature by
  feature (see Pull requests -> Closed, and Insights -> Network). CI runs on
  every PR (.github/workflows/check.yml).
- **Practice (do):** the team wall on `team.html`. Each participant adds their
  card through the full loop: branch -> change -> commit -> push -> PR.

## The 4 tasks (conflict-free by design)

Two people extend the team wall, two people change the app itself. No task
touches another task's lines, so the merges never conflict:

- The wall cards go in slot 3 and slot 7; the empty slots between them are
  buffer lines.
- The app tasks live in different files (`style.css`, `app.js`), and changes
  in different files can never conflict.

Everyone: `Create a branch called <name>` first, then their task, then
`Commit my changes` -> `Push my changes` -> `Open a pull request`.

| # | Person | Task | Say to Claude |
|---|--------|------|---------------|
| 1 | Henk | Card in **slot 3** (team.html) | `In team.html, replace the SLOT 3 comment with a card for me: emoji 🎯, name Henk, role <role>` |
| 2 | Emely | **Claimed-square color** (style.css) | `Change the color of claimed squares from green to <color>` |
| 3 | Aurelia | Card in **slot 7** (team.html) | `In team.html, replace the SLOT 7 comment with a card for me: emoji 🚀, name Aurelia, role <role>` |
| 4 | Jan | **Bigger grid** (app.js) | `Make the grid 12x12 instead of 10x10, and update the counter label to 144` |

(Emojis and color are their own choice. Amelia facilitates, reviews and merges.
After each merge, reload the live site: the wall cards appear on team.html,
the color and grid changes on the app page. If you run the conflict demo, pick
any two people for the motto line in team.html.)

You (facilitator) review and merge the 4 PRs; any order works. Bonus: the CI
check runs green on each of their PRs.

## The built-in merge conflict (optional)

The motto line in `team.html` (`<p class="motto">...</p>`) is reserved for this.

1. Pick TWO people. Both get the extra task: change the motto to something different.
2. Person A: branch, change it, commit, push, PR, you merge it.
3. Person B: change the SAME line on their branch, push, open their PR: conflict.
4. Resolve together: keep one version, delete the `<<<<<<<` `=======` `>>>>>>>`
   markers, commit.

Message: a conflict is git asking "which version wins", not a failure.

## Before the workshop

- Invite the 4 participants as collaborators (Settings -> Collaborators).
- Keep merged branches (do not delete) so Insights -> Network stays readable.
