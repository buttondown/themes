# Classic Theme Changelog

## 2026-11-03

- Sentences on the archive index now end with the newsletter language's full stop, such as `।` in Nepali, instead of a hardcoded `.` (E-5866)

## 2026-10-28

- The content above a paywall or subscriber wall on an archived post no longer fades out; the shared `.email-body-paywall` class stays as a styling hook (E-5721)

## 2026-10-27

- Removed the suppressed-email blur class and "Content Unavailable" notice, since the `suppressed` email status no longer exists

## 2026-10-09

- Archived posts now show their Bluesky and Twitter cross-posts, hidden by the "Social embeds" setting; the setting previously did nothing on this theme (E-5558)

## 2026-09-21

- The archive's premium label now reads `archival_mode`, since `email.is_premium` now means the email was sent only to paid subscribers (#11721)

## 2026-09-13

- Post dates now match the archive index format and use the newsletter's language
- Removed an unused footnotes include

## 2026-09-02

- Fixed click-to-zoom on archive images: the zoomed image was cropped to the reading column instead of filling the viewport

## 2026-08-12

- Stopped the theme's generic button styling from overriding the subscriber portal's own buttons

## 2026-08-11

- Post navigation now keeps the newer and older links on one line when both titles fit, and wraps to two lines only when they do not

## 2026-06-30

- Added previous/next post navigation at the foot of each archived post, with a `post_navigation` setting to toggle it

## 2026-06-18

- Removed the `is_publicly_archived` template variable; custom templates should use `archival_mode == "enabled"` instead
- Removed the unused `has_bluesky_embeds` template variable

## 2026-06-13

- Fixed default font name so Source Serif 4 loads on archives

## 2026-04-23

- Moved accent color from general to email settings

## 2026-03-18

- Fixed precedence on bar-style blockquotes

## 2026-03-17

- Changed blockquote option from sizes to styles
- Combined dark-mode color variants into a single tabbed UI

## 2026-03-14

- Added configurable background colors token

## 2026-02-09

- Added blockquote font size option (Small, Medium, Large) to theme settings

## 2026-02-06

- Changed newsletter name from `h1` to `h2` on subscribe page to fix duplicate `h1` tags (the header already contains an `h1`)
