import '@/styles/nprogress.css'
import '@/styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { useLayoutEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Layout from '@/pages/layout'
import Loader from '@/pages/loader'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/pages/theme'
import nProgress from 'nprogress'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleTransitionEnd = () => {
    const root = document.getElementById('__next')
    const loader = document.getElementById('loader')
    root?.removeChild(loader!)
  }

  const useBrowserLayoutEffect = process.browser ? useLayoutEffect : () => {}

  useBrowserLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1400)
  }, [])

  return (
    <>
      <Provider store={store}>
        <Loader isLoading={isLoading} onTransitionEnd={handleTransitionEnd} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}
