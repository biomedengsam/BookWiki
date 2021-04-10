import { Link } from 'react-router-dom'
import defaultImg from '../img/default.jpg'
import { useState } from 'react';

const BookItem = ({ book, details, id }) => {
    const [imageLoadError, setImageLoadError] = useState(true);
    // console.log(id);
    return (
        <Link to='/details' onClick={() => details(id)}>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={`https://reststop.randomhouse.com/resources/titles/${book.isbn}`} onError={(e) => {
                            if (imageLoadError) {
                                setImageLoadError(false)
                                e.target.src = defaultImg;
                            }
                        }} alt='Book' />
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
        </Link>
    )
}

export default BookItem
