# Lovelace Theme Changelog

## 2026-09-14

- The theme now shares the subscribe form's stylesheet with the other themes, so its fields, option pills, switches, sign-in prompts and loading spinner are styled instead of falling back to browser defaults
- The subscribe page's "Subscribe" heading is now translated, instead of staying in English on newsletters set to another language
- The newsletter description now uses the theme's description styling, and no longer emits an empty paragraph above itself
- Removed two unmatched closing tags from the subscribe page's markup

## 2026-09-13

- Fixed archive pagination dropping the search query, so "next" now stays within the search results

## 2026-09-03

- Added click-to-zoom on archive images, which the theme had no styling for
- Portal pages now inherit Lovelace's monospace type and square corners

## 2026-09-02

- Fixed the subscription confirmation dialog appearing as floating, duplicated text

## 2026-08-12

- Stopped the theme's generic button styling from overriding the subscriber portal's own buttons

## 2026-08-11

- Post navigation now keeps the newer and older links on one line when both titles fit, and wraps to two lines only when they do not

## 2026-06-30

- Added previous/next post navigation at the foot of each archived post, with a `post_navigation` setting to toggle it

## 2026-06-18

- Removed the `is_publicly_archived` template variable; custom templates should use `archival_mode == "enabled"` instead
- Removed the unused `has_bluesky_embeds` template variable

## 2026-05-28

- Gated archive premium label on active paid subscriptions

## 2026-05-15

- Added configurable H1 placement

## 2026-04-23

- Moved accent color from general to email settings

## 2026-02-06

- Changed newsletter name from `h1` to `h2` on subscribe page to fix duplicate `h1` tags (the header already contains an `h1`)
