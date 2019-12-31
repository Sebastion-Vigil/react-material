import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

import NavBar from './NavBar.js'

class App extends Component {
  render () {
    return (
      <div>
        <AppBar color='primary' position='static'>
          <NavBar>
            <Toolbar>
              <TypoGraphy variant='title' color='inherit'>
                My header
              </TypoGraphy>
            </Toolbar>
          </NavBar>
        </AppBar>
      </div>
    )
  }
}
export default App
