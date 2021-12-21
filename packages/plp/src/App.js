import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

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
