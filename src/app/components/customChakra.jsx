"use client";
import * as React from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {},
  colors: {
    primary: "#00A9FF",
    primaryHover: "#0089DF",
    secondary: "#89CFF3",
    third: "#A0E9FF",
    fourth: "#CDF5FD",
    hitam: "#4A4A4A",
    abu: "#CECECE"
  },
  borders: {
    'primary':  `1px solid #00A9FF`,
    'primaryHover':  `1px solid #0089DF`,
    'hitam':  `1px solid #4A4A4A`,
    'abu':  `1px solid #CECECE`,
  }
});

const CustomChakra = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default CustomChakra;
