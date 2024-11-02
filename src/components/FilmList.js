// src/components/FilmList.js
import React from 'react';
import { Link } from 'react-router-dom';

const films = [
  { id: 1, title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology." },
  { id: 2, title: "The Godfather", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
  { id: 3, title: "The Shawshank Redemption", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
];

function FilmList() {
  return (
    <div>
      <h2>Available Films on Jio Star Cinema</h2>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/film/${film.id}`}>{film.title}</Link>: {film.description}
          </li>
        ))}
      </ul>
      <Link to="/submit">Submit Your Analysis</Link>
    </div>
  );
}

export default FilmList;
