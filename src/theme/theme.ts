import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        surfaceDark:       { value: "#0C1821" },
        surfaceElevatedDark: { value: "#1B2A41" },
        textDark:          { value: "#CCC9DC" },
        accentDark:        { value: "#324A5F" },
        mutedDark:         { value: "#888888" },
        linkDark: { value: "#60a5fa" },

        surfaceLight:      { value: "#ffffff" },
        surfaceElevatedLight: { value: "#f0f0f5" },
        textLight:         { value: "#1B2A41" },
        accentLight:       { value: "#324A5F" },
        mutedLight:        { value: "#666666" },
        linkLight: { value: "#4497fdff" },
      },
      gradients: {
        bgDark: { value: "linear-gradient(to bottom right, var(--chakra-colors-gray-950), var(--chakra-colors-blue-950), var(--chakra-colors-blue-900))"},
        cardDark: { value: "linear-gradient(to right, var(--chakra-colors-bg-panel), #141a2cff 90%)"},

        bgLight: { value: "linear-gradient(to bottom right, var(--chakra-colors-gray-600), var(--chakra-colors-gray-500))"},
        cardLight: { value: "linear-gradient(to right, var(--chakra-colors-gray-300))"}
      },
      fonts: {
        heading: { value: "var(--font-inter)" },
        body: { value: "var(--font-manrope)" },
      },
    },
    semanticTokens: {
      colors: {
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
        link: {
          DEFAULT: {
            value: {
              _light: "{colors.linkLight}",
              _dark: "{colors.linkDark}",
            }
          }
        },
        text: {
          DEFAULT: {
            value: {
              _light: "{colors.textLight}",
              _dark: "{colors.textDark}",
            }
          }
        }
      },
      gradients: {
        bg: {
          DEFAULT: {
            value: {
              _light: "{gradients.bgLight}",
              _dark: "{gradients.bgDark}",

            }
          }
        },
        card: {
          DEFAULT: {
            value: {
              _light: "{gradients.cardLight}",
              _dark: "{gradients.cardDark}",
            }
          }
        }
      }
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;