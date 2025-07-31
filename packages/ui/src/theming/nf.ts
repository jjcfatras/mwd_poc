"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { buttonRecipe } from "../recipes/button";

import { PALETTE } from "./palette";

const { black, charcoal, cream, navy, tangerine, white } = PALETTE;

const { theme: defaultTheme, ...rest } = defaultConfig;

const config = defineConfig({
  globalCss: {
    ":root": {
      background: "surface",
    },
  },
  preflight: true,
  strictTokens: true,
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    semanticTokens: {
      colors: {
        onPrimary: {
          DEFAULT: { value: "{colors.navy.700}" },
          interact: { value: "{colors.cream.50}" },
        },
        onSurface: {
          DEFAULT: { value: "{colors.navy.700}" },
        },
        onSurfaceAlt: {
          DEFAULT: { value: "{colors.charcoal.700}" },
        },
        onSurfaceSecondary: {
          DEFAULT: { value: "{colors.navy.700}" },
        },
        onSurfaceSecondaryInverse: {
          DEFAULT: { value: "{colors.cream.50}" },
        },
        primary: {
          DEFAULT: { value: "{colors.tangerine.400}" },
          interact: { value: "{colors.tangerine.600}" },
        },
        surface: {
          DEFAULT: { value: "{colors.cream.50}" },
        },
        surfaceSecondary: {
          DEFAULT: { value: "{colors.cream.100}" },
        },
      },
    },
    tokens: {
      ...defaultTheme?.tokens,
      colors: {
        black: { value: black },
        charcoal: {
          50: { value: charcoal[50] },
          100: { value: charcoal[100] },
          200: { value: charcoal[200] },
          300: { value: charcoal[300] },
          400: { value: charcoal[400] },
          500: { value: charcoal[500] },
          600: { value: charcoal[600] },
          700: { value: charcoal[700] },
          800: { value: charcoal[800] },
          900: { value: charcoal[900] },
          950: { value: charcoal[950] },
        },
        cream: {
          50: { value: cream[50] },
          100: { value: cream[100] },
          200: { value: cream[200] },
          300: { value: cream[300] },
          400: { value: cream[400] },
          500: { value: cream[500] },
          600: { value: cream[600] },
          700: { value: cream[700] },
          800: { value: cream[800] },
          900: { value: cream[900] },
          950: { value: cream[950] },
        },
        navy: {
          50: { value: navy[50] },
          100: { value: navy[100] },
          200: { value: navy[200] },
          300: { value: navy[300] },
          400: { value: navy[400] },
          500: { value: navy[500] },
          600: { value: navy[600] },
          700: { value: navy[700] },
          800: { value: navy[800] },
          900: { value: navy[900] },
          950: { value: navy[950] },
        },
        tangerine: {
          50: { value: tangerine[50] },
          100: { value: tangerine[100] },
          200: { value: tangerine[200] },
          300: { value: tangerine[300] },
          400: { value: tangerine[400] },
          500: { value: tangerine[500] },
          600: { value: tangerine[600] },
          700: { value: tangerine[700] },
          800: { value: tangerine[800] },
          900: { value: tangerine[900] },
          950: { value: tangerine[950] },
        },
        white: { value: white },
      },
      fonts: {
        body: {
          value: "var(--font-geist-sans)",
        },
        heading: {
          value: "var(--font-geist-sans)",
        },
      },
    },
  },
});

export default createSystem(rest, config);
