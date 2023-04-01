import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'normalize.css'
import 'antd/dist/reset.css'
import '@/assets/css/index.less'
import theme from '@/assets/theme'

import App from '@/App'
import store from '@/store'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
