# Modern Theme Changelog

## 2026-11-16

- Added an `Image gallery` option to `archive_index_layout` that shows your archive as a grid of images, with an `archive-column-count` option for the number of columns
- Added a `show-description` option that shows or hides the description of each post in the archive
- Added additional padding to the archive email list

## 2026-11-06
- Adjusted the padding and margin around the email list, to match the email content body
- Added background color to the email list, footer, and the container on the subscribe page

## 2026-11-05

- Added a `background_pattern` option that puts a geometric design (chevron, circles, graph paper, grid, hive, polka dots, ramen, or scanner) behind your pages, with `color-pattern` and `color-pattern-dark` options for its color
- Added `color-content-background`, `color-content-border` (and their `-dark` versions), and `content-border-width` options that style the content area separately from the page background; the colors accept an opacity and default to fully transparent, so the page background shows behind your content until you set them
- Adjusted the padding and margin around the email content body
- The bottom border of the navigation now uses `color-pattern` when a background pattern is set

## 2026-10-28

- The content above a paywall or subscriber wall on an archived post no longer fades out; the shared `.email-body-paywall` class stays as a styling hook (E-5721)

## 2026-10-27

- Removed the suppressed-email blur style and "Content Unavailable" notice, since the `suppressed` email status no longer exists

## 2026-10-09

- Moved the social embeds block to a shared snippet so the Classic and Lovelace themes render it too (E-5558)

## 2026-09-21

- The archive's premium label now reads `archival_mode`, since `email.is_premium` now means the email was sent only to paid subscribers (#11721)

## 2026-09-14

- The "read the latest edition" link on the subscribe page now wraps onto lines of even length instead of leaving a single word alone on its last line

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
