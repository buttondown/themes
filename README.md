# Buttondown Themes

This repository is a mirror of the archive themes from the [Buttondown](https://buttondown.com) monorepo. It's updated automatically when the main app is deployed — use it to inspect or contribute to how newsletter archives are styled.

## Changelog

### 2026-02-22

- Comment replies are now displayed as a flat chronological list instead of nested threads. Replies show an "In reply to [author]" indicator linking back to the parent comment.
- Avatars are now larger (36px) and circular.
- Author name and timestamp are now stacked vertically instead of side-by-side.
- Removed uppercase text transform from author names.
- Removed the `.comment__replies` CSS class. If you were targeting it in custom CSS, you can remove those rules.
- Added new `.comment__reply-to` CSS class for the reply indicator.

## Organization

- **`base/`** — Shared foundations: CSS variables (`variables.css`), component styles, and design tokens used by all themes.
- **`themes/`** — Individual themes (classic, modern, lovelace, arbus). Each has a `theme.json` config, `assets/styles.css`, and optional templates. Themes without templates fall back to modern's. See `theme.schema.json` for the config spec.
