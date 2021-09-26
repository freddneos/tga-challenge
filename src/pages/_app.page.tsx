import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { themeDark , themeLight} from '../styles/theme'
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
  <ThemeProvider theme={themeDark}>
    <GlobalStyle/>
    <Component {...pageProps} />
  </ThemeProvider>
)
}
export default App
