

const BookItem = ({ book }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={`https://reststop.randomhouse.com/resources/titles/${book.isbn}`} alt='Book image' />
                </div>
                <div className='card-back'>
                    <h1>{book.titleweb}</h1>
                    <ul>
                        <li>
                            <strong>Author Name:</strong> {book.author}
                        </li>
                        {/* <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookItem
