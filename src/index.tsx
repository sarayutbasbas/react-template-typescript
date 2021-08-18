import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import KrungsriBold from './assets/fonts/krungsri_con_bol-webfont.ttf'
import KrungsriMedium from './assets/fonts/krungsri_con_med-webfont.ttf'
import KrungsriNormal from './assets/fonts/krungsri_con-webfont.ttf'
import rootReducer from './reducers'
import saga from './sagas/index'
import theme from './theme'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './i18n'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: auto;
    font-family: "krungsri-normal";
    font-size: 14px;
    color: ${theme.colors.tundora};
  }
  ${normalize}
  * {
    font-family: "krungsri-normal";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: "krungsri-bold";
    src: url(${KrungsriBold});
    src: url(${KrungsriBold}) format("truetype"),
        url("${KrungsriBold}?#iefix") format("embedded-opentype");
    font-style: normal;
    font-weight: bold;
  }

  @font-face {
    font-family: "krungsri-medium";
    src: url(${KrungsriMedium});
    src: url(${KrungsriMedium}) format("truetype"),
        url("${KrungsriMedium}?#iefix") format("embedded-opentype");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "krungsri-normal";
    src: url(${KrungsriNormal});
    src: url(${KrungsriNormal}) format("truetype"),
        url("${KrungsriNormal}?#iefix") format("embedded-opentype");
    font-style: normal;
    font-weight: normal;
  }
`

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(saga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App history={history} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
