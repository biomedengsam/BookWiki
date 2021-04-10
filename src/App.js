import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Header } from './components/Header'
import Search from './components/Search'
import BooksGrid from './components/BooksGrid';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Details from './components/Details';

const App = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [bookSearch, setBookSearch] = useState('')
  const [detailedInfo, setDetailedInfo] = useState({})

  useEffect(() => {
    // console.log(books.length)
    if (bookSearch !== '') {
      setIsLoading(true)
      const fetchBooks = async () => {
        const config = {
          method: 'get',
          url: `https://reststop.randomhouse.com/resources/titles/?start=0&max=12&expandLevel=1&title=${bookSearch}`,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        const result = await axios(config)
        // console.log(result.data);
        /* A sample of what the API returns 
        {"@uri":"https://reststop.randomhouse.com/resources/titles?start=0&max=2","title":[{"@uri":"http://reststop.randomhouse.com/resources/titles/9780736688567/"},{"@uri":"http://reststop.randomhouse.com/resources/titles/9780440422976/"}]
        so it always returns an object with @uri property and a title property only if the title is found
        the info in the title property is what we are interested in and will store the its info in our state
        */
        console.log(result.data.hasOwnProperty('title'));
        // Check if the book title exists
        if (result.data.hasOwnProperty('title')) {
          // setBookFound(true)
          setIsLoading(false)
          // Titles data from the API call
          const titles = result.data.title
          console.log(titles);
          // titles.map((item, index) => {
          //   item.id = index
          // })
          setBooks(titles)

        } else {
          const notFound = () => {
            setIsLoading(false)
            setBooks([])

            return alert('Book Not Found')
          }
          notFound();

        }

        // console.log(result.data.title)
      }
      fetchBooks()
    }
  }, [bookSearch]);

  const searchBook = (book) => {
    console.log(book)
    setBookSearch(book)
  }

  // More details
  const moreDetails = (id) => {
    console.log(id);
    // refactor
    const info = books.filter((book, index) => index === id)
    setDetailedInfo(info[0])
    // console.log(info[0].author);
    // console.log(detailedInfo);

  }

  return (
    <Router>
      <div className="container">
        <Header />
        {/* <img src="https://reststop.randomhouse.com/resources/titles/9780141330136" /> */}
        <Route path='/' exact render={(props) => (
          <>
            <Search onSearch={searchBook} />
            {books.length !== 0 && <BooksGrid isLoading={isLoading} details={moreDetails} books={books} />}
          </>
        )} />
        <Route path='/details' render={(props) => (
          <>
            <Details info={detailedInfo} />
          </>
        )} />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
