import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Header'
import { Toolbar } from '@material-ui/core'

const PlpLazy = lazy(() => import('./components/PlpApp'))
const PdpLazy = lazy(() => import('./components/PdpApp'))

import { StoreProvider } from 'store/store'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
  disableGlobal: true,
})

function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <StoreProvider>
          <Header />
          <Toolbar />
          <Toolbar />

          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route exact path="/pdp" component={PdpLazy} />

              <Route exact path="/" component={PlpLazy} />
            </Switch>
          </Suspense>
        </StoreProvider>
      </StylesProvider>
    </BrowserRouter>
  )
}

export default App
