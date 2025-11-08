"use client";

import React, { useEffect } from "react";
import { ChakraProvider, ColorModeScript, useColorMode } from "@chakra-ui/react";
import theme from "../theme";

function CookieSync() {
  // Client component: sync color mode changes into a cookie so SSR can read it next request
  const { colorMode } = useColorMode();

  useEffect(() => {
    try {
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      const isProd = process.env.NODE_ENV === "production";
      // Secure flag only in production (requires https). Keep SameSite=Lax for CSRF protection while allowing top-level navigation.
      const secureFlag = isProd ? "; Secure" : "";
      document.cookie = `chakra-ui-color-mode=${encodeURIComponent(colorMode)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secureFlag}`;
    } catch {
      // ignore
    }
  }, [colorMode]);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode ?? "light"} />
      <ChakraProvider theme={theme}>
        <CookieSync />
        {children}
      </ChakraProvider>
    </>
  );
}
