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

    if (bookSearch !== '') {
      setIsLoading(true)
      //The Api returns data in different type. used config to specify the received data json type data
      const fetchBooks = async () => {
        const config = {
          method: 'get',
          url: `https://reststop.randomhouse.com/resources/titles/?start=0&max=100&expandLevel=1&title=${bookSearch}`,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        const result = await axios(config)
        /* A sample of what the API returns 
        {"@uri":"https://reststop.randomhouse.com/resources/titles?start=0&max=2","title":[{"@uri":"http://reststop.randomhouse.com/resources/titles/9780736688567/"},{"@uri":"http://reststop.randomhouse.com/resources/titles/9780440422976/"}]
        so it always returns an object with @uri property and a title property only if the title is found
        the info in the title property is what we are interested in and will store the its info in our state
        */
        // Check if the book title exists
        if (result.data.hasOwnProperty('title')) {
          setIsLoading(false)

          // Titles data from the API call
          const titles = result.data.title

          /* Check if we only have one result it will return an object,if more than one 
           it will return an array of objects.why this check In BooksGrid component if we get one result the books.map
           will break the app because books will be an object not an array */

          titles instanceof Array ? setBooks(titles) : setBooks([titles])
          // console.log(titles);
        } else {
          const notFound = () => {
            setIsLoading(false)
            setBooks([])

            return alert('Book Not Found')
          }
          notFound();
        }
      }
      fetchBooks()
    }
  }, [bookSearch]);
  console.log(books)

  const searchBook = (book) => {
    setBookSearch(book)
  }

  // More details
  const moreDetails = (id, imageLoadError) => {
    const info = books.filter((book, index) => index === id)
    setDetailedInfo({ ...info[0], imageLoadError })
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/' exact render={(props) => (
          <>
            <Search onSearch={searchBook} />
            <BooksGrid isLoading={isLoading} details={moreDetails} books={books} />
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
