"use client";

import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: "md",
    cursor: "button",
    display: "inline-flex",
    flexShrink: 0,
    fontWeight: "normal",
    isolation: "isolate",
    justifyContent: "center",
    transitionDuration: "moderate",
    transitionProperty: "common",
  },
  className: "button",
  defaultVariants: {
    size: "md",
    visual: "solid",
  },
  variants: {
    size: {
      lg: { fontSize: "xl", height: "11", minW: "11", px: "6", py: "3" },
      md: { fontSize: "md", height: "11", minW: "10", px: "4", py: "2" },
      sm: { fontSize: "xs", height: "11", minW: "9", px: "2", py: "1" },
    },
    visual: {
      solid: {
        background: { _hover: "primary.interact", base: "primary" },
        color: { _hover: "onPrimary.interact", base: "onPrimary" },
      },
    },
  },
});
