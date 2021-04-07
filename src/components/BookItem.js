

const BookItem = ({ book }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={`https://reststop.randomhouse.com/resources/titles/${book.isbn}`} alt='Book' />
                </div>
                <div className='card-back'>
                    <h1>{book.titleweb}</h1>
                    <ul>
                        <li>
                            <strong>Author Name:</strong> {book.authorweb}
                        </li>
                        <li>
                            <strong>Category:</strong> {book.subjectcategorydescription1}
                        </li>
                        <li>
                            <strong>Pages:</strong> {book.pages}
                        </li>
                        <li>
                            <strong>Price In USA: </strong> {`${book.priceusa} $`}
                        </li>
                        <li>
                            <strong>Price In Canada: </strong>{`${book.pricecanada} $`}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookItem
