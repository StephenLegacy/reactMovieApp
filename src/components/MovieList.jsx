import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title = "Popular Movies" }) => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{
        fontSize: "2rem",
        marginBottom: "1.5rem",
        color: "#333",
        borderBottom: "2px solid #f5c518",
        paddingBottom: "0.5rem"
      }}>
        {title}
      </h1>
      
      <div className="movie-list" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1.5rem",
        justifyContent: "center"
      }}>
        {movies.length ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            padding: "2rem",
            color: "#666"
          }}>
            <p style={{ fontSize: "1.2rem" }}>No movies found.</p>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;