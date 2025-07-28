import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        bgDark:            { value: "#000000" },
        surfaceDark:       { value: "#0C1821" },
        surfaceElevatedDark: { value: "#1B2A41" },
        textDark:          { value: "#CCC9DC" },
        accentDark:        { value: "#324A5F" },
        mutedDark:         { value: "#888888" },

        bgLight:           { value: "#CCC9DC" },
        surfaceLight:      { value: "#ffffff" },
        surfaceElevatedLight: { value: "#f0f0f5" },
        textLight:         { value: "#1B2A41" },
        accentLight:       { value: "#324A5F" },
        mutedLight:        { value: "#666666" },
      },
      gradients: {
        cardBgDark: { value: "linear-gradient(to right, var(--chakra-colors-bg-panel), #141a2cff 90%)"}
      },
      fonts: {
        heading: { value: "var(--font-inter)" },
        body: { value: "var(--font-manrope)" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {
              _light: "{colors.bgLight}",
              _dark: "{colors.bgDark}",
            },
          },
        },
        surface: {
          DEFAULT: {
            value: {
              _light: "{colors.surfaceLight}",
              _dark: "{colors.surfaceDark}",
            },
          },
          elevated: {
            value: {
              _light: "{colors.surfaceElevatedLight}",
              _dark: "{colors.surfaceElevatedDark}",
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: "{colors.textLight}",
              _dark: "{colors.textDark}",
            },
          },
          muted: {
            value: {
              _light: "{colors.mutedLight}",
              _dark: "{colors.mutedDark}",
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              _light: "{colors.accentLight}",
              _dark: "{colors.accentDark}",
            },
          },
        },
        primary: {
          DEFAULT: {
            value: {
              _light: "{colors.accentLight}",
              _dark: "{colors.accentDark}",
            },
          },
          muted: {
            value: {
              _light: "{colors.mutedLight}",
              _dark: "{colors.mutedDark}",
            },
          },
        },
        raised: {
          DEFAULT: {
            value: {
              _light: "{colors.raisedLight}",
              _dark: "{colors.raisedDark}",
            }
          }
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;