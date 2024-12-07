import React from 'react';

const GenreSelector = ({ genres, selectedGenre, setSelectedGenre }) => {
    return (
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((genre) => (
            <option key={genre} value={genre}>
            {genre}
            </option>
        ))}
        </select>
    );
};

export default GenreSelector;
