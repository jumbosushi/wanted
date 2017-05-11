import React from 'react'
import ReactDOM from 'react-dom'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import Counter from './components/Counter'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Counter)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Counter', () => {
    render(Counter)
  })
}
