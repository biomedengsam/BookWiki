import Spinner from './Spinner'
import BookItem from './BookItem'

const BooksGrid = ({ books, isLoading }) => {
    console.log(books);
    return isLoading ? (
        <Spinner />
    ) :
        books.length !== 0 ? (
            <section className='cards'>
                {books.map((book) => (
                    <BookItem key={book.index} book={book}></BookItem>
                ))}
            </section>
        ) : alert('book not found')

}

export default BooksGrid
