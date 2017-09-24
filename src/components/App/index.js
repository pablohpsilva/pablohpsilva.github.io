import React, { Component } from 'react'
import './app.scss'

import Logo from '../Logo'
import Navbar from '../Navbar'
import NavbarItem from '../NavbarItem'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Navbar>
          <Logo className="logo"/>
          <div className="menu">
            <NavbarItem>Item 1</NavbarItem>
            <NavbarItem>Item 2</NavbarItem>
            <NavbarItem>Item 3</NavbarItem>
          </div>
        </Navbar>
        <main className="app-main">main</main>
        <aside className="app-aside">aside</aside>
        <footer className="app-footer">footer</footer>
      </div>
    )
  }
}

export default App
