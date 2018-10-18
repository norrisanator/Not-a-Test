import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import styled from 'styled-components'

import App from './containers/App'
import rootReducer from './state/reducers'

const StyledApp = styled.div`
  text-align: right;
  font-family: 'Verdana', sans-serif;
`

const state = createStore(rootReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={state}>
    <StyledApp>
      <App />
    </StyledApp>
  </Provider>,
  rootElement
)
