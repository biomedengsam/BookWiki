import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Header } from './components/Header'
import Search from './components/Search'
const App = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [bookSearch, setBookSearch] = useState('')
  useEffect(() => {
    const fetchBooks = async () => {
      const config = {
        method: 'get',
        url: `https://reststop.randomhouse.com/resources/titles/?start=0&max=1&expandLevel=1&title=${bookSearch}`,
        headers: {
          Accept: 'application/json'
        }
      }
      const result = await axios(config)
      console.log(result.data)
    }
    fetchBooks()
  }, [bookSearch]);

  const searchBook = (book) => {
    console.log(book)
    setBookSearch(book)
  }


  return (
    <div className="container">
      <Header />
      <Search onSearch={searchBook} />
      <img src="https://reststop.randomhouse.com/resources/titles/9780141330136" />

    </div>
  );
}

export default App;
