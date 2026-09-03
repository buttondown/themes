# Lovelace Theme Changelog

## 2026-09-02

- Fixed the subscription confirmation dialog appearing as floating, duplicated text

## 2026-08-12

- Stopped the theme's generic button styling from overriding the subscriber portal's own buttons (#10915)

## 2026-08-11

- Post navigation now keeps the newer and older links on one line when both titles fit, and wraps to two lines only when they do not (#10898)

## 2026-06-30

- Added previous/next post navigation at the foot of each archived post, with a `post_navigation` setting to toggle it (#9432)

## 2026-06-18

- Removed the `is_publicly_archived` template variable; custom templates should use `archival_mode == "enabled"` instead
- Removed the unused `has_bluesky_embeds` template variable

## 2026-05-28

- Gated archive premium label on active paid subscriptions (#9033)

## 2026-05-15

- Added configurable H1 placement (#8727)

## 2026-04-23

- Moved accent color from general to email settings (#8388)

## 2026-02-06

- Changed newsletter name from `h1` to `h2` on subscribe page to fix duplicate `h1` tags (the header already contains an `h1`)
