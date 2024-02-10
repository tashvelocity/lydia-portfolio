// theme.js

// 1. import `extendTheme` function
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react";
import color from "./color";

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
