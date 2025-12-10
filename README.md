Please note that this repository is a slight work in progress as we finish unifying some class names across the two existing themes. All changes to production archives will be mirrored into this repository, but if you're reading this right this second, I'd advise sitting tight for a day or two. If you're trying to make some big sweeping design changes.

In particular, what we have planned for the next two weeks are the following:

- [ ] Renaming specific theme files to be standardized and more flexible.
- [ ] Introducing a JSON configuration file which declares CSS tokens and other metadata about the backing theme.
- [ ] A versioning schema that allows us to build and deploy breaking changes to the HTML while preserving your custom CSS.
- [ ] Three new custom themes.
- [ ] Heavy documentation and in-light comments.
- [ ] Unified context variables across all templates.

In time, if you have questions, concerns, or bugs to report about the markup, feel free to file an issue!

## Organization

The repository is organized into the following directories:

- `base`: The base styles for the themes.
- `themes`: The themes themselves.
