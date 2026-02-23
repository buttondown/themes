# Themes

Archive themes control the look and layout of your newsletter's public-facing pages (subscribe page, archive index, individual email pages). All themes share common foundations and can be customized via tokens or custom CSS.

## Available themes

- **classic** — Minimal layout with left-aligned text, ideal for text-focused newsletters
- **modern** — Card-based layout with large images, the default theme
- **lovelace** — Similar to modern with layout variations
- **arbus** — Instagram-style grid layout for image-heavy newsletters (templates fall back to modern)

## Shared foundations

All themes inherit from:

1. **`../subscriber_facing/styles/variables.css`** — CSS custom properties for spacing, colors, typography, and other design tokens
2. **`../subscriber_facing/styles/components/base.css`** — Imports `variables.css` and defines shared component styles (navigation, subscribe form, embeds, etc.)

Each theme's `assets/styles.css` imports the base stylesheet and layers theme-specific overrides on top. Design tokens are unified across themes.

## Theme structure

```
<theme>/
  theme.json          # Configuration spec (name, version, available tokens)
  assets/styles.css   # Theme-specific stylesheet (imports base.css, adds overrides)
  templates/          # Optional — theme-specific page templates
```

**Template fallback:** If a theme doesn't define a template for a given path, it falls back to the modern theme's template. For example, arbus has no templates and uses modern's `archive/[slug].html` and `archive/index.html`.

## Customization

### 1. Theme configuration (Settings → Archives)

The `newsletter.theme_configuration` attribute exposes theme-defined tokens in the Settings → Archives UI. Each theme's `theme.json` declares which variables it supports (colors, fonts, numbers, booleans, selects). These are injected as CSS variables in the shared base template:

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

`tint_color` is set separately (Settings → General) but follows the same mechanism. Setting tokens via the UI is equivalent to writing custom CSS that overrides those variables.

### 2. Custom CSS

Custom CSS (`newsletter.web_css`) is included after the theme stylesheet in `emails/templates/subscriber_facing/base.html`. It can override anything. This requires the `css` enabled feature (plan-dependent).

## Implementation details

- **Base template:** `emails/templates/subscriber_facing/base.html` — used by all subscriber-facing pages. It loads the theme stylesheet (`themes/<archive_theme>/assets/styles.css`), injects CSS variables, and conditionally includes `web_css`.
- **Template resolution:** `emails/themes.py` — `get_template_path(archive_theme, path)` returns the theme's template path if it exists, otherwise falls back to `modern/<path>`.
- **Schema:** `theme.schema.json` defines the structure of `theme.json`. Field types: `color`, `number`, `boolean`, `font`, `select`.
