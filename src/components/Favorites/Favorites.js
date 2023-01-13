import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Favorites.css';

const Favorites = () => {

    const { list } = useSelector(state => state);

    return (
        <div className="favorites">
            <input defaultValue="Новый список" className="favorites__name" />
            <ul className="favorites__list">
                {list?.map((item) => {
                    return <li key={item?.imdbID} className="list-item">
                                <span>{item?.Title} ({item?.Year})</span> <button>x</button>
                            </li>;
                })}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    )
}

export default Favorites;