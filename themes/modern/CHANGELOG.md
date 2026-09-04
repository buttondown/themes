# Modern Theme Changelog

## 2026-08-12

- Stopped the theme's generic button styling from overriding the subscriber portal's own buttons

## 2026-08-11

- Post navigation now keeps the newer and older links on one line when both titles fit, and wraps to two lines only when they do not

## 2026-07-06

- Removed unused legacy button styles (`.buttondown-button`, `.buttondown-custom-button`, `.subscribe_button`)

## 2026-06-30

- Added previous/next post navigation at the foot of each archived post, with a `post_navigation` setting to toggle it

## 2026-06-19

- Added an opt-in one-click "read the latest edition" link to the subscribe page (Latest issue link setting, off by default)

## 2026-06-18

- Removed the `is_publicly_archived` template variable; custom templates should use `archival_mode == "enabled"` instead
- Removed the unused `has_bluesky_embeds` template variable

## 2026-06-16

- Added an opt-in two-column archive index layout (Archive layout setting)

## 2026-06-13

- Fixed default font name so Source Serif 4 loads on archives

## 2026-05-28

- Gated archive premium label on active paid subscriptions

## 2026-03-19

- Derived social sharing buttons from social links

## 2026-03-18

- Fixed precedence on bar-style blockquotes

## 2026-03-17

- Changed blockquote option from sizes to styles
- Combined dark-mode color variants into a single tabbed UI

## 2026-03-14

- Added configurable background colors

## 2026-02-09

- Added blockquote font size option (Small, Medium, Large) to theme settings

## 2026-02-06

- Changed newsletter name from `h1` to `h2` on subscribe page to fix duplicate `h1` tags (the header already contains an `h1`)
