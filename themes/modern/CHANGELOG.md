# Modern Theme Changelog

## 2026-06-18

- Removed the `is_publicly_archived` template variable; custom templates should use `archival_mode == "enabled"` instead
- Removed the unused `has_bluesky_embeds` template variable

## 2026-06-16

- Added an opt-in two-column archive index layout (Archive layout setting) (#9423)

## 2026-06-13

- Fixed default font name so Source Serif 4 loads on archives (#9538)

## 2026-05-28

- Gated archive premium label on active paid subscriptions (#9033)

## 2026-03-19

- Derived social sharing buttons from social links (#7727)

## 2026-03-18

- Fixed precedence on bar-style blockquotes (#7746)

## 2026-03-17

- Changed blockquote option from sizes to styles (#7725)
- Combined dark-mode color variants into a single tabbed UI (#7726)

## 2026-03-14

- Added configurable background colors (#7668)

## 2026-02-09

- Added blockquote font size option (Small, Medium, Large) to theme settings

## 2026-02-06

- Changed newsletter name from `h1` to `h2` on subscribe page to fix duplicate `h1` tags (the header already contains an `h1`)
