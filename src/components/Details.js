import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import defaultImg from '../img/default.jpg'

/* Had to use ReactHTMLParser which is A utility for converting HTML strings into React components.
the info about author bio is an HTML string that was not rendered as html on the UI*/

const Details = ({ info }) => {
    const flapcopy = info.flapcopy;
    return (
        <section>
            <Link to='/' className='home'>Go Back Home</Link>
            <section className='details'>
                <section className='info'>
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
                            <strong>Author Bio:</strong><br /> <div>{ReactHtmlParser(info.authorbio)}</div>
                        </li>
                        {flapcopy &&
                            <li>
                                <strong>Flap Copy:</strong> <div>{ReactHtmlParser(flapcopy)}</div>
                            </li>}
                    </ul>
                </section>
                <img src={!info.imageLoadError ? defaultImg : `https://reststop.randomhouse.com/resources/titles/${info.isbn}`} alt='Book' />

            </section>



        </section>
    )
}

export default Details
