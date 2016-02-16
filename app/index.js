import 'libs/bootstrap-4.0-flex.css'
import 'styles/main.scss'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import App from 'components/app'
import reducers from 'reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const log = debug('application:bootstrap')

log('creating application node')
const applicationNode = document.createElement('div')
applicationNode.id = 'application'

log('adding application node to body')
document.body.appendChild(applicationNode)

const rootNode = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
)

render(rootNode, applicationNode, () => {
  log('finished mounting application')
})
