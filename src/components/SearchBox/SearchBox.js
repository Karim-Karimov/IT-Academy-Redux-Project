import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json } from 'react-router-dom';
import { getData } from '../../redux/actions/actions';
import './SearchBox.css';

const SearchBox = () => {

    const dispatch = useDispatch();

    const [searchLine, setSearchLine] = useState('');
    const [data, setData] = useState([]);

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getData(data))
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=43983fd`)
            .then(res => res.json())
            .then(apiData => setData(apiData?.Search))
    }, [searchLine])

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        defaultValue={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={(e) => { setSearchLine(e.target.value) }}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    )
}

export default SearchBox;