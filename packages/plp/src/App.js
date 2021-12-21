import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Stats from './components/Stats/Stats'
import Container from '@material-ui/core/Container'
import ProductList from './components/ProductList'
import Filter from './components/Filter'
import PlpContainer from './components/PlpContainer'

const generateClassName = createGenerateClassName({
  productionPrefix: 'plp',
  disableGlobal: true,
})

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={PlpContainer} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
