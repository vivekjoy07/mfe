import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// Mount function to start app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory()

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      history.push(nextPathname)
    },
  }
}
// If development and in isolation
// call mount immediately
// if (process.env.NODE_ENV === 'development') {
const devRoot = document.querySelector('#_plp-dev-root')
if (devRoot) {
  mount(devRoot, {
    defaultHistory: createBrowserHistory(),
  })
}
// }

// We are running through container
// we should export mount function
export { mount }
