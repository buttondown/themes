import Ajv from "ajv";
import addFormats from "ajv-formats";
import { describe, expect, it } from "vitest";

import arbusTheme from "./arbus/theme.json";
import classicTheme from "./classic/theme.json";
import lovelaceTheme from "./lovelace/theme.json";
import modernTheme from "./modern/theme.json";
import schema from "./theme.schema.json";

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const validate = ajv.compile(schema);

const THEMES = {
  arbus: arbusTheme,
  classic: classicTheme,
  lovelace: lovelaceTheme,
  modern: modernTheme,
} as const;

describe("theme.schema.json", () => {
  for (const [name, theme] of Object.entries(THEMES)) {
    it(`${name}/theme.json should be valid`, () => {
      const valid = validate(theme);
      if (!valid) {
        console.error(`Validation errors for ${name}:`, validate.errors);
      }
      expect(valid).toBe(true);
    });
  }

  it.each([
    [
      "should reject a theme with missing required fields",
      { name: "Invalid", version: "1.0.0" },
      false,
    ],
    [
      "should reject a theme with invalid version format",
      { name: "Invalid", version: "v1", configuration: {} },
      false,
    ],
    [
      "should reject a theme with invalid color format",
      {
        name: "Invalid",
        version: "1.0.0",
        configuration: {
          "color-accent": {
            type: "color",
            header: "Accent color",
            default: "not-a-hex-color",
          },
        },
      },
      false,
    ],
    [
      "should reject a select field without options",
      {
        name: "Invalid",
        version: "1.0.0",
        configuration: { layout: { type: "select", header: "Layout" } },
      },
      false,
    ],
    [
      "should accept a valid select field with options",
      {
        name: "Valid",
        version: "1.0.0",
        configuration: {
          layout: {
            type: "select",
            header: "Layout",
            default: "grid",
            options: [
              { id: "grid", label: "Grid" },
              { id: "list", label: "List" },
            ],
          },
        },
      },
      true,
    ],
  ])("%s", (_desc, theme, expected) => {
    expect(validate(theme)).toBe(expected);
  });
});
