import 'libs/bootstrap-4.0-flex.css'
import 'styles/main.scss'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise'
import App from 'components/app'
import reducers from 'reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const log = debug('application:bootstrap')

log('creating application node')
const domNode = document.createElement('div')
domNode.id = 'application'

log('adding application node to body')
document.body.appendChild(domNode)

const store = createStoreWithMiddleware(reducers)

const applicationNode = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

render(applicationNode, domNode, () => {
  log('finished mounting application')
})
