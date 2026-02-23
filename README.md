# Buttondown Themes

This repository is a mirror of the archive themes from the [Buttondown](https://buttondown.com) monorepo. It's updated automatically when the main app is deployed — use it to inspect or contribute to how newsletter archives are styled.

## Organization

- **`base/`** — Shared foundations: CSS variables (`variables.css`), component styles, and design tokens used by all themes.
- **`themes/`** — Individual themes (classic, modern, lovelace, arbus). Each has a `theme.json` config, `assets/styles.css`, and optional templates. Themes without templates fall back to modern's. See `theme.schema.json` for the config spec.
