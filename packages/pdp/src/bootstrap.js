import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { StoreProvider } from 'store/store'
import App from './App'

// Mount function to start app
const mount = (el, { onNavigate, defaultHistory, initialPath, standalone }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }
  const render = standalone ? (
    <StoreProvider>
      <App history={history} />
    </StoreProvider>
  ) : (
    <App history={history} />
  )

  ReactDOM.render(render, el)

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
const devRoot = document.querySelector('#_pdp-dev-root')
if (devRoot) {
  mount(devRoot, {
    defaultHistory: createBrowserHistory(),
    standalone: true,
  })
}
// }

// We are running through container
// we should export mount function
export { mount }
