import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import Books from './Books'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      menu: { open : false }
    }
  }

  toggleMenu = () => {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  render() {
    const { menu } = this.state

    return (
      <div id="page-wrap">

        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />

        <Navbar
          toggleMenu={ this.toggleMenu }
        />

        <Header title="Library" />

        <Books
          toggleMenu={ this.toggleMenu }
        />

        <About />

        <Footer />

      </div>
    )
  }
}

export default App
