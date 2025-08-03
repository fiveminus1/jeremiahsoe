import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        surface:       { value: "#0C1821" },
        text:          { value: "#CCC9DC" },
        accentDark:        { value: "#324A5F" },
        muted:         { value: "#888888" },
        link: { value: "#60a5fa" },

      },
      gradients: {
        bg: { value: "linear-gradient(to bottom right, var(--chakra-colors-gray-950), var(--chakra-colors-blue-950), var(--chakra-colors-blue-900))"},
        card: { value: "linear-gradient(to right, var(--chakra-colors-bg-panel), #141a2cff 90%)"},

      },
      fonts: {
        heading: { value: "var(--font-inter)" },
        body: { value: "var(--font-manrope)" },
      },
    },
    semanticTokens: {
      colors: {
        border: {
          DEFAULT: {
            value: {
              _light: "{colors.accentLight}",
              _dark: "{colors.accentDark}",
            },
          },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;