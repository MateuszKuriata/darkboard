import React from 'react'
import './App.css'
import { ErrorBoundary, ErrorFallback } from '@tldraw/tldraw'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import FirebaseUserProvider from './providers/firebaseUserProvider'
import '@tldraw/tldraw/editor.css'
import '@tldraw/tldraw/ui.css'
import LayoutWrapper from './layout/layoutWrapper'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FirebaseUserProvider>
        <ErrorBoundary
          fallback={(error) => <ErrorFallback error={error} />}
          onError={(error) => console.error(error)}
        >
          <BrowserRouter>
            <LayoutWrapper>
              <Router />
            </LayoutWrapper>
          </BrowserRouter>
        </ErrorBoundary>
      </FirebaseUserProvider>
    </ThemeProvider>
  )
}

export default App
