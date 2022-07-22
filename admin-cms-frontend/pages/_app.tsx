import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider, useUser } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {

  const { isLoading } = useUser()

  return (
    <UserProvider>
      {isLoading ? "loading..." : <Component {...pageProps} />}
    </UserProvider>
  )
}

export default MyApp
