import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import PdpContainer from './components/PdpContainer'

const generateClassName = createGenerateClassName({
  productionPrefix: 'pdp',
  disableGlobal: true,
})

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pdp" component={PdpContainer} />
          </Switch>
        </Router>
        {/* <PdpContainer /> */}
      </StylesProvider>
    </div>
  )
}
