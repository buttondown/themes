# Buttondown Themes

This repository contains the official themes for [Buttondown](https://buttondown.com) newsletter archives. You can use these themes as-is, customize them, or create your own from scratch.

## Available Themes

| Theme | Description |
|-------|-------------|
| **Classic** | A traditional, clean theme with a simple list layout perfect for text-focused newsletters. |
| **Modern** | A contemporary theme featuring large images and a card-based layout ideal for visual newsletters. |
| **Lovelace** | A brutalist, nearly no-CSS theme that embraces browser defaults for maximum speed and simplicity. |
| **Arbus** | An Instagram-inspired grid theme displaying posts in a three-column layout, perfect for image-heavy newsletters. |

## Repository Structure

```
├── base/                      # Shared base styles
│   ├── variables.css          # CSS custom properties (tokens)
│   ├── manage-subscription.css
│   └── components/            # Reusable component styles
│       ├── attachments.css
│       ├── base.css
│       ├── codehilite.css
│       ├── comments.css
│       ├── embeds.css
│       ├── featured.css
│       ├── nav.css
│       ├── pagination.css
│       ├── related-emails.css
│       ├── share.css
│       ├── subscribe-form.css
│       └── youtube.css
└── themes/                    # Individual themes
    └── {theme-name}/
        ├── theme.json         # Theme metadata and configuration
        ├── assets/
        │   └── styles.css     # Theme-specific styles
        └── templates/         # HTML templates (Django/Jinja2)
            ├── index.html           # Subscribe/landing page
            └── archive/
                ├── index.html       # Archive listing page
                └── [slug].html      # Individual email page
```

## Theme Anatomy

### theme.json

Each theme requires a `theme.json` file that defines metadata and configurable options:

```json
{
  "name": "Theme Name",
  "description": "A brief description of the theme.",
  "version": "1.0.0",
  "configuration": {
    "posts_per_page": {
      "type": "number",
      "default": 20,
      "header": "Posts per page",
      "description": "Number of posts to display per page"
    },
    "color-accent": {
      "type": "color",
      "default": "#0069FF",
      "header": "Accent color",
      "description": "Primary accent color for light mode"
    },
    "font-body": {
      "type": "font",
      "default": "Georgia, serif",
      "header": "Body font",
      "description": "Font family for body text"
    }
  }
}
```

#### Configuration Types

| Type | Description |
|------|-------------|
| `number` | Numeric values (e.g., posts per page) |
| `color` | Color picker, outputs hex/rgb values |
| `font` | Font family selector |

### Templates

Templates use Django/Jinja2 syntax and have access to context variables. The three main templates are:

- **`index.html`** - The subscribe/landing page
- **`archive/index.html`** - The paginated archive listing
- **`archive/[slug].html`** - Individual email detail view

### Styles

Theme styles typically import the base components:

```css
@import "../../../base/components/base.css";

/* Your theme-specific overrides */
:root {
  --header-navigation-display: none;
  --text-header-alignment: left;
}
```

## CSS Variables Reference

### Layout

| Variable | Default | Description |
|----------|---------|-------------|
| `--width-content` | `600px` | Maximum content width |
| `--space` | `20px` | Base spacing unit |

### Typography

| Variable | Default | Description |
|----------|---------|-------------|
| `--font-brand` | `"Hex Franklin"` | Headings and UI elements |
| `--font-prose` | `"Source Serif 4", Georgia, serif` | Body text |
| `--font-mono` | `"IBM Plex Mono", monospace` | Code blocks |
| `--font-size-extra-small` | `12px` | |
| `--font-size-small` | `14px` | |
| `--font-size-base` | `16px` | |
| `--font-size-large` | `20px` | |
| `--font-size-large-2` | `24px` | |
| `--font-size-large-3` | `32px` | |

### Colors (Light Mode)

| Variable | Description |
|----------|-------------|
| `--color-background` | Page background |
| `--color-background-card` | Card/container background |
| `--color-background-offset` | Borders, dividers |
| `--color-foreground` | Primary text |
| `--color-foreground-offset` | Secondary text |
| `--color-foreground-offset-2` | Tertiary/muted text |
| `--color-action` | Buttons, links (uses `--color-accent`) |

### Colors (Dark Mode)

Dark mode variants are automatically applied when the user's system preference is dark. Each light mode color has a `-dark` suffix variant:

- `--color-background-dark`
- `--color-background-card-dark`
- `--color-foreground-dark`
- etc.

### Configurable Variables

These variables can be set via `theme.json` configuration:

| Variable | Description |
|----------|-------------|
| `--color-accent` | Primary accent color (light mode) |
| `--color-accent-dark` | Primary accent color (dark mode) |
| `--font-body` | Custom body font |
| `--font-accent` | Custom heading/accent font |

### Display Options

| Variable | Default | Description |
|----------|---------|-------------|
| `--header-navigation-display` | `flex` | Show/hide navigation (`flex` or `none`) |
| `--text-header-alignment` | `center` | Header text alignment |
| `--email-image-display` | `none` | Show/hide email featured image |
| `--newsletter-icon-size` | `24px` | Newsletter icon dimensions |
| `--corner-shape` | `round` | Border radius style |

## Template Context Variables

### Newsletter Object

Available on all pages:

| Variable | Description |
|----------|-------------|
| `newsletter.name` | Newsletter name |
| `newsletter.description` | Newsletter description |
| `newsletter.username` | Newsletter username/slug |
| `newsletter.icon` | Whether the newsletter has an icon |
| `newsletter.icon_url` | URL to the newsletter icon |
| `newsletter.locale` | Locale for translations |
| `newsletter.timezone` | Newsletter timezone |
| `newsletter.domain` | Custom domain (if set) |
| `newsletter.paid_subscriptions_status` | `"active"` if paid subscriptions enabled |
| `newsletter.should_hide_issue_numbers` | Hide issue numbers |
| `newsletter.should_expose_rss` | Show RSS link |
| `newsletter.should_hide_social_embeds` | Hide social embeds |
| `newsletter.enabled_features` | List of enabled features |

### Archive Listing (`archive/index.html`)

| Variable | Description |
|----------|-------------|
| `public_emails` | Paginated list of emails |
| `subscriber_id` | Current subscriber ID (if logged in) |

### Email Object (in loops and detail pages)

| Variable | Description |
|----------|-------------|
| `email.subject` | Email subject line |
| `email.slug` | URL slug |
| `email.publish_date` | Publication date |
| `email.secondary_id` | Issue number |
| `email.is_premium` | Whether it's a paid-only email |
| `email.featured` | Whether the email is featured |
| `email.status` | Email status (`draft`, `sent`, `suppressed`) |
| `email.rendered_html_for_teaser` | Teaser HTML content |
| `email.get_absolute_url` | Full URL to the email |
| `email.show_teaser` | Whether to show paywall teaser |

### Email Detail Page (`archive/[slug].html`)

Additional variables:

| Variable | Description |
|----------|-------------|
| `subscriber` | Current subscriber object (if logged in) |

## Creating a Custom Theme

1. **Copy an existing theme** as a starting point:
   ```bash
   cp -r themes/classic themes/my-theme
   ```

2. **Update `theme.json`** with your theme's name and configuration options.

3. **Customize `assets/styles.css`**:
   - Import the base styles you need
   - Override CSS variables
   - Add your custom styles

4. **Modify templates** (optional):
   - Customize the HTML structure
   - Add or remove components

### Minimal Theme Example

For a minimal theme like Lovelace, you can omit most configuration and let browser defaults shine:

```json
{
  "name": "Minimal",
  "description": "A minimal theme with almost no styling.",
  "version": "1.0.0",
  "configuration": {
    "posts_per_page": {
      "type": "number",
      "default": 20,
      "header": "Posts per page",
      "description": "Number of posts to display per page"
    }
  }
}
```

## Base Components

The `base/components/` directory contains reusable styles:

| Component | Description |
|-----------|-------------|
| `base.css` | Core layout, typography, and common elements |
| `nav.css` | Header navigation styles |
| `subscribe-form.css` | Email subscription form |
| `pagination.css` | Archive pagination |
| `comments.css` | Comment section styling |
| `share.css` | Social sharing buttons |
| `attachments.css` | File attachment display |
| `embeds.css` | Embedded content (tweets, etc.) |
| `youtube.css` | YouTube embed styling |
| `codehilite.css` | Syntax highlighting for code blocks |
| `featured.css` | Featured post styling |
| `related-emails.css` | Related posts section |

## Contributing

If you have questions, concerns, or bugs to report about the markup, feel free to [file an issue](https://github.com/buttondown/themes/issues)!
