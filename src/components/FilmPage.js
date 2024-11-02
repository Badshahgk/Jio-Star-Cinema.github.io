// src/components/FilmPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const filmData = {
  1: {
    title: "Inception",
    analysis: "Inception explores the themes of reality and dreams, questioning what is real. The complex narrative structure and visual effects enhance this exploration.",
    comments: ["This film blew my mind!", "Great analysis of dreams!"]
  },
  2: {
    title: "The Godfather",
    analysis: "The Godfather is a powerful narrative about family, power, and loyalty, showcasing the moral complexities of the mafia lifestyle.",
    comments: ["A timeless classic!", "The characters are so well-developed."]
  },
  3: {
    title: "The Shawshank Redemption",
    analysis: "This film is about hope and resilience. It beautifully portrays friendship and the human spirit's capacity to endure.",
    comments: ["An inspiring story!", "I love the bond between the characters."]
  }
};

function FilmPage() {
  const { id } = useParams();
  const film = filmData[id];

  return (
    <div>
      <h2>{film.title} - Jio Star Cinema</h2>
      <p>{film.analysis}</p>
      <h3>User Comments</h3>
      <ul>
        {film.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmPage;
