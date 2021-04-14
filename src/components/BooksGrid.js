import Spinner from './Spinner'
import BookItem from './BookItem'


const BooksGrid = ({ books, isLoading, details }) => {

    return isLoading ? (
        <Spinner />
    ) :
        (
            <section className='cards'>
                {books.map((book, index) => (
                    <BookItem key={index} details={details} book={book} id={index} ></BookItem>
                ))}
            </section>
        )

}

export default BooksGrid
