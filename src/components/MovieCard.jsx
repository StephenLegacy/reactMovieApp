import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem",
      width: "250px",
      transition: "transform 0.2s",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      ":hover": {
        transform: "scale(1.03)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }
    }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img 
          src={movie.posterURL} 
          alt={movie.title} 
          style={{ 
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "4px"
          }} 
        />
        <div style={{ padding: "0.5rem" }}>
          <h2 style={{ 
            margin: "0.5rem 0",
            fontSize: "1.2rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
            {movie.title}
          </h2>
          <p style={{ 
            margin: "0.5rem 0",
            color: "#666",
            fontSize: "0.9rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            height: "2.8em"
          }}>
            {movie.description}
          </p>
          <div style={{ 
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem"
          }}>
            <span style={{ 
              backgroundColor: "#f5c518",
              color: "#000",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "0.9rem"
            }}>
              ⭐ {movie.rating}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;