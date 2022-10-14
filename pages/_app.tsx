import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

import { Header } from "../src/components/Header/Header";
import { theme } from "../src/themes/themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
