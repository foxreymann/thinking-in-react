import React from 'react'
import books from '../mocks/books'
import BookList from './BookList'

class Books extends React.Component {
  // this.props.name
  constructor () {
    super()
    this.state = {
      books: books,
      selectedFilter: 'All',
    }
  }

  selectFilter = ( filter ) => {
    this.setState({
      selectedFilter: filter,
      books: filter === 'All'? books : books.filter( book => (book.category === filter) )
    })
  }

  render() {
    const { books, selectedFilter } = this.state

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
          <BookList
            books={ books }
          />
        </div>
      </section>
    )
  }
}

export default Books
