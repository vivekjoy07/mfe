import React, { lazy } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import PlpApp from './components/PlpApp'
import PdpApp from './components/PdpApp'

import Header from './components/Header'
import { Toolbar } from '@material-ui/core'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
  disableGlobal: true,
})

function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <>
          <Header />
          <Toolbar />
          <Toolbar />
          <Route exact path="/pdp" component={PdpApp} />

          <Route exact path="/" component={PlpApp} />
          <Link to="/pdp">PDP</Link>
        </>
      </StylesProvider>
    </BrowserRouter>
  )
}

export default App
