import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary:   { value: "#1E2749" },
        accent:    { value: "#517664" },
        highlight: { value: "#A7ADC6" },
        bgDark:    { value: "#273469" },
        bgLight:   { value: "#FAFAFF" },
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
          subtle: {
            value: {
              _light: "{colors.highlight}",
              _dark: "#1f254a",
            },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: "#1a202c", // default Chakra gray.800
              _dark: "#FAFAFF",
            },
          },
          muted: {
            value: {
              _light: "#4A5568", // gray.600
              _dark: "{colors.highlight}",
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              _light: "#CBD5E0", // gray.300
              _dark: "{colors.accent}",
            },
          },
        },
        primary: {
          DEFAULT: {
            value: "{colors.primary}",
          },
          muted: {
            value: {
              _light: "{colors.accent}",
              _dark: "{colors.accent}",
            },
          },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;