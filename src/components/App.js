import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import books from '../mocks/books'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      books: books,
      selectedFilter: 'All',
      menu: { open : false }
    }
  }

  toggleMenu = () => {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  selectFilter = ( filter ) => {
    this.setState({
      selectedFilter: filter,
      books: filter === 'All'? books : books.filter( book => (book.category === filter) )
    })
  }

  render() {
    const { books, menu, selectedFilter } = this.state
    const filters = [
      'All',
      'Web',
      'Mobile',
      'DevOps',
      'Essentials',
    ]

    const tabItems = filters.map(filter => (
      <li className={ filter === selectedFilter ? 'active': '' } key={ filter } onClick={() => this.selectFilter(filter) }>
        <a href="#0">{ filter }</a>
      </li>
    ))

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

        <section id="books">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Books</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-pills text-center">
                  { tabItems }
                </ul>
              </div>
            </div>
            <div className="row book-list">
              { books.map( book => (
                <div className="col-xs-6 col-sm-3" key={ book.id }>
                  <div className="thumbnail">
                    <img alt="" className="img-responsive" src={ book.cover }/>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </section>

        <About />

        <Footer />

      </div>
    )
  }
}

export default App
