# Facilitator notes

One repo, two roles:

- **Case study (show):** the app itself. 5 merged PRs built it feature by
  feature (see Pull requests -> Closed, and Insights -> Network). CI runs on
  every PR (.github/workflows/check.yml).
- **Practice (do):** the team wall on `team.html`. Each participant adds their
  card through the full loop: branch -> change -> commit -> push -> PR.

## The 4 tasks (conflict-free by design)

Slots 4, 6 and 8 stay empty on purpose: they are buffer lines so the merges
never conflict. Slots 1 and 2 are filled (example cards to copy).

Everyone: `Create a branch called <name>` first, then their task, then
`Commit my changes` -> `Push my changes` -> `Open a pull request`.

| # | Person | Task | Say to Claude |
|---|--------|------|---------------|
| 1 | Henk | Card in **slot 3** | `In team.html, replace the SLOT 3 comment with a card for me: emoji 🎯, name Henk, role <role>` |
| 2 | Emely | Card in **slot 5** | `In team.html, replace the SLOT 5 comment with a card for me: emoji 🌱, name Emely, role <role>` |
| 3 | Aurelia | Card in **slot 7** | `In team.html, replace the SLOT 7 comment with a card for me: emoji 🚀, name Aurelia, role <role>` |
| 4 | Jan | **Footer** date | `In team.html, change the footer text to "Built together at our GitHub workshop, <date>"` |

(Emojis are just suggestions, everyone picks their own. Amelia facilitates,
reviews and merges. If you run the conflict demo, use Jan + one of the others
on the motto line, since Jan's footer task is the quickest.)

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
