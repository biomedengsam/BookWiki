import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { useState } from 'react';

/* Had to use ReactHTMLParser which is A utility for converting HTML strings into React components.
the info about author bio is an HTML string that was not rendered as html on the UI*/

const Details = ({ info }) => {
    const [excerpt, setExcerpt] = useState('')
    console.log(info);
    const CheckForExcerpt = () => {
        if (info.excerpt === 'undefined') {
            console.log('yok');
        }
    }

    CheckForExcerpt();
    // setExcerpt(info.excerpt)
    // console.log(excerpt);

    return (
        <section>
            <Link to='/'>Go Back Home</Link>
            <section className='details'>
                <section>
                    <h1>{info.titleweb}</h1>
                    <ul className='list'>
                        <li>
                            <strong>Category:</strong> {info.subjectcategorydescription1}
                        </li>
                        <li>
                            <strong>Pages:</strong> {info.pages}
                        </li>
                        <li>
                            <strong>Price In USA: </strong> {`${info.priceusa} $`}
                        </li>
                        <li>
                            <strong>Price In Canada: </strong>{`${info.pricecanada} $`}
                        </li>
                        <li>
                            <strong>Author Name:</strong> {info.authorweb}
                        </li>
                        <li>
                            <strong>Author Bio:</strong> <div>{ReactHtmlParser(info.authorbio)}</div>;
                        </li>
                    </ul>
                </section>
                <img src={`https://reststop.randomhouse.com/resources/titles/${info.isbn}`} alt='Book' />

            </section>



        </section>
    )
}

export default Details
