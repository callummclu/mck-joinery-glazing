import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import Script from 'next/script'

import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
            <meta name="keywords" content="glazing,joinery,work,quality,windows,extentions,doors"/>
            <meta name="description" content="Quality Glazing and Joinery work done to the highest quality."/>
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
