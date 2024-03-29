import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import Script from 'next/script'

import Link from 'next/link'
import Head from 'next/head'

function checkIfSiteIsVercel():boolean{
  if (typeof window !== "undefined") {
    return window.location.origin == "https://mck-joinery-glazing.vercel.app" || window.location.origin == "https://mck-joinery-glazing.vercel.app/"
  }
  return false
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
            <meta name="keywords" content="glazing,joinery,work,quality,windows,extentions,doors"/>
            <meta name="description" content="Quality Glazing and Joinery work done to the highest quality."/>
            <meta property="og:title" content="MCK Joinery Glazing"/>
            <meta property="og:description" content="Quality Glazing and Joinery work done to the highest quality."/>
            <meta property="og:image" content="https://i.imgur.com/HV0Nwwt.png"/>
            <meta property="og:url" content="https://mckjoineryglazing.co.uk"/>
            <meta name="theme-color" content="#354B8C"/>
            <link rel="apple-touch-icon" href="/MCKJoinery Logo B&W copy 4.png"></link>
            <link rel="manifest" href="/manifest.json"></link>
            {checkIfSiteIsVercel() && (
              <>
                <meta name="robots" content="noindex"></meta>
                <meta name="googlebot" content="noindex"></meta>
                <meta name="google-site-verification" content="qjIwQJA0jLsIU9z4SzzcCRj00kg-BDNlZM4UvGwtAGY" />
              </>
            )}
          </Head>
          <Script
                id="google-analytics"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
           <Script
                id="google-analytics-code"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
    <MantineProvider>
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
    </>
  )
}

export default MyApp
