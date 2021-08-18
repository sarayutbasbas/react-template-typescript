import React from 'react'
import styled from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import useWindowSize from './hooks/useWindowSize'
import './App.css'

import Home from './containers/Home'
import { History } from 'history'

const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow-x: hidden;
`

const App = ({ history }: { history: History }) => {
  useWindowSize()
  return (
    <Container>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact component={() => <div>Not found</div>} />
        </Switch>
      </ConnectedRouter>
    </Container>
  )
}

export default App
