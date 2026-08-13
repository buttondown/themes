# Classic Theme Changelog

## 2026-08-11

- Post navigation now keeps the newer and older links on one line when both titles fit, and wraps to two lines only when they do not (#10898)

## 2026-06-30

- Added previous/next post navigation at the foot of each archived post, with a `post_navigation` setting to toggle it (#9432)

## 2026-06-18

- Removed the `is_publicly_archived` template variable; custom templates should use `archival_mode == "enabled"` instead
- Removed the unused `has_bluesky_embeds` template variable

## 2026-06-13

- Fixed default font name so Source Serif 4 loads on archives (#9538)

## 2026-04-23

- Moved accent color from general to email settings (#8388)

## 2026-03-18

- Fixed precedence on bar-style blockquotes (#7746)

## 2026-03-17

- Changed blockquote option from sizes to styles (#7725)
- Combined dark-mode color variants into a single tabbed UI (#7726)

## 2026-03-14

- Added configurable background colors token (#7668)

## 2026-02-09

- Added blockquote font size option (Small, Medium, Large) to theme settings

## 2026-02-06

- Changed newsletter name from `h1` to `h2` on subscribe page to fix duplicate `h1` tags (the header already contains an `h1`)
