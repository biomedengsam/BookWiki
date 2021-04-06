import Spinner from './Spinner'
import BookItem from './BookItem'
const BooksGrid = ({ books, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            {books.map((book) => (
                <BookItem key={book.index} book={book}></BookItem>
            ))}
        </section>
    )
}

export default BooksGrid
