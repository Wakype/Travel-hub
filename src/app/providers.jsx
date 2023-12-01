// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({ children }) {
  const theme = extendTheme({
    components: {},
    colors: {
      primary: "#00A9FF",
      secondary: "#89CFF3",
      third: "#A0E9FF",
      fourth: "#CDF5FD",
      hitam: "#4A4A4A",
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
