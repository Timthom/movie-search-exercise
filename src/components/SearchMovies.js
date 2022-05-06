import React from 'react'

import { useState } from 'react';

function SearchMovies(props) {
    const [query, setQuery] = useState('');
    const { addMovies } = props;

    async function getMovies() {
        const response = await fetch(`https://www.omdbapi.com/?apiKey=37fe945a&s=${query}`);
        const data = await response.json();

        console.log(data);
        addMovies(data.Search);
    }

    function handleKeyPress(event) {
        setQuery(event.target.value);
    }

    function handleClick() {
        if (query) {
            getMovies();
        }
    }

    return (
        <section>
            <input type="text" className="input-field" onKeyUp={ handleKeyPress} />
            <button className="button" onClick={ handleClick }>Sök</button>
        </section>
    );
}

export default SearchMovies;