import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListPage.css';


const ListPage = () => {
    const [movie, setMovie] = useState([
        { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
    ])
    useEffect(() => {
        // const id = this.props.match.params;
        // console.log(id);
    })
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movie.map((item) => (
                    <li key={item.imdbID}>
                        <Link to="https://www.imdb.com/title/tt0068646/">{item.title} ({item.year})</Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default ListPage;