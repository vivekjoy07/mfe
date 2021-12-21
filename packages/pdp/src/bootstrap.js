import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// Mount function to start app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log({ nextPathname })
      history.push(nextPathname)
    },
  }
}
// If development and in isolation
// call mount immediately
// if (process.env.NODE_ENV === 'development') {
if (document.querySelector('#_pdp-dev-root')) {
  const devRoot = document.querySelector('#_pdp-dev-root')
  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    })
  }
}
// }

// We are running through container
// we should export mount function
export { mount }
