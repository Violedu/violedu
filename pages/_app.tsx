import { Fragment, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { DialogProvider } from '../components/DialogContext';
import { LearningPathProvider } from "../components/LearningPathContext";
import CookieBanner from '../components/CookieBanner'; // Import CookieBanner
import "./global.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();

  return (
    <LearningPathProvider>
      <DialogProvider>
        <Fragment>
          <Head>
            {/* Title Tag */}
            <title>Online Violin Lessons for Intermediate & Advanced Players | Violedu</title>
            
            {/* Meta Description */}
            <meta
              name="description"
              content="Step up your next violin performance with personalized online violin lessons, expert feedback and progress tracking for intermediate to advanced violinists."
            />
            
            {/* Keywords */}
            <meta
              name="keywords"
              content="violin lessons, learn violin, online violin courses, violin tutorials, music education, violin practice, music lessons online"
            />
            
            {/* Open Graph Tags */}
            <meta property="og:title" content="Online Violin Lessons | Violedu" />
            <meta
              property="og:description"
              content="Step up your next violin performance with personalized online violin lessons, expert feedback and progress tracking for intermediate to advanced violinists."
            />
            <meta property="og:image" content="https://www.violedu.com/logo_open_graph.png" />
            <meta property="og:url" content="https://www.violedu.com" />
            <meta property="og:type" content="website" />

            {/* Structured Data (JSON-LD) */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "Violedu",
                  "foundingDate": "2023",
                  "email": "contact@violedu.com",
                  "url": "https://www.violedu.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.violedu.com/logo_structured_data.png",
                    "name": "Violedu Logo",
                    "width": "196",
                    "height": "196"
                  }
                })
              }}
            />
            
            {/* Viewport */}
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={muiTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
            <CookieBanner /> {/* Add CookieBanner here */}
          </ThemeProvider>
        </Fragment>
      </DialogProvider>
    </LearningPathProvider>
  );
}
