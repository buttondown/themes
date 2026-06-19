# Lovelace Theme Changelog

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
