// Next
import type { AppProps } from "next/app";
// Material UI
import {
  CssBaseline,
  ThemeProvider
} from '@mui/material';
// Theme
import { lightTheme } from '@/theme';
// Styles
import "@/styles/styles.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
