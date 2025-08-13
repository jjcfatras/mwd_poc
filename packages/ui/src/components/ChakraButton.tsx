"use client";

import {
  chakra,
  type ButtonProps as ChakraButtonProps,
  type RecipeVariantProps,
} from "@chakra-ui/react";
import type { FC } from "react";

import { buttonRecipe } from "../recipes/button";

export type ButtonProps = ChakraButtonProps &
  RecipeVariantProps<typeof buttonRecipe>;

export const Button: FC<ButtonProps> = chakra("button", buttonRecipe);
