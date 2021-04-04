import React, { useState } from 'react'

const Search = ({ onSearch }) => {
    const [book, setBook] = useState('')
    //search for book
    const onClick = (e) => {
        e.preventDefault();
        if(!book){
           alert('Please provide a book name to search for')
           return
        }
        onSearch(book)
        setBook('');
    }
    return (
        <form>
            <input type="text" value = {book} onChange={(e) => setBook(e.target.value)} placeholder='Enter book title to search' />
            <button onClick={(e) => onClick(e)}>Search</button>
        </form>
    )
}

export default Search
