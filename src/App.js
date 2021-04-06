import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Header } from './components/Header'
import Search from './components/Search'
import BooksGrid from './components/BooksGrid';

const App = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [bookSearch, setBookSearch] = useState('')
  // const [bookImg, setBookImage] = useState('')
  useEffect(() => {
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
        setBooks(result.data.title)
        setIsLoading(false)
        console.log(result.data.title)
      }
      fetchBooks()
    }
  }, [bookSearch]);

  const searchBook = (book) => {
    console.log(book)
    setBookSearch(book)
  }


  return (
    <div className="container">
      <Header />
      <Search onSearch={searchBook} />
      {books !== [] ? <BooksGrid isLoading={isLoading} books={books} /> : ''}
      {/* <img src="https://reststop.randomhouse.com/resources/titles/9780141330136" /> */}
    </div>
  );
}

export default App;
