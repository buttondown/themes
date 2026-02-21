# Themes

A given theme has a few moving parts.

## Shared foundations

All themes share two important components:

1. **`../subscriber_facing/styles/variables.css`** — CSS custom properties for spacing, colors, typography, and other design tokens.
2. **`../subscriber_facing/styles/components/base.css`** — base styling that imports `variables.css` and defines shared component styles.

This means all themes share basic functionality and styling. The language for design tokens like spacing, coloring, and typography is unified across themes.

## Customization

There are two ways to customize a given theme:

### 1. Custom CSS

Custom CSS (`newsletter.web_css`) is included after the rest of the standard CSS in `base.html`. It can override anything.

### 2. CSS tokens

The `newsletter.theme_configuration` attribute (exposed under Settings > Archives) allows you to override variables defined in `variables.css`.

There is no magic here — it just means CSS variables are subject to the cascade. The `base.html` template that all themes inherit from contains this block, which transforms CSS tokens from a JSON blob into CSS variable declarations:

```html
<style>
  :root {
    --tint-color: {{ newsletter.tint_color }};
    {% for key, value in newsletter.theme_configuration.items %}
      --{{ key }}: {{ value }};
    {% endfor %}
  }
</style>
```

Two notes:

1. Setting CSS tokens via the settings UI is functionally identical to writing the equivalent custom CSS that overrides those variables. You don't need to know CSS to use tokens.
2. The spec for available tokens lives in each theme's `theme.json` file, validated against `theme.schema.json`.

## Theme structure

Each theme directory contains:

```
<theme>/
  theme.json          # Configuration spec (name, version, available tokens)
  assets/styles.css   # Theme-specific stylesheet
  templates/          # Theme-specific page templates
```

The `theme.json` configuration defines which tokens a theme exposes to users. Field types (`color`, `number`, `boolean`, `font`, `select`) are defined in `theme.schema.json`.
