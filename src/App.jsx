import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import moviesData from "./data/moviesData";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerLink: ""
  });

  const handleAddMovie = () => {
    const movieWithId = {
      ...newMovie,
      id: Date.now()
    };
    setMovies([...movies, movieWithId]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0, trailerLink: "" });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <Router>
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>🎬WatchPawa</h1>
        </Link>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  onTitleChange={setTitleFilter}
                  onRatingChange={setRatingFilter}
                />

                <div style={{ margin: "2rem 0", padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
                  <h2>Add a New Movie</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                    <input
                      type="text"
                      placeholder="Title"
                      value={newMovie.title}
                      onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                      style={{ padding: "0.5rem" }}
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={newMovie.description}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, description: e.target.value })
                      }
                      style={{ padding: "0.5rem" }}
                    />
                    <input
                      type="text"
                      placeholder="Poster URL"
                      value={newMovie.posterURL}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, posterURL: e.target.value })
                      }
                      style={{ padding: "0.5rem" }}
                    />
                    <input
                      type="text"
                      placeholder="Trailer Embed URL"
                      value={newMovie.trailerLink}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, trailerLink: e.target.value })
                      }
                      style={{ padding: "0.5rem" }}
                    />
                    <input
                      type="number"
                      placeholder="Rating"
                      min="0"
                      max="5"
                      step="0.1"
                      value={newMovie.rating}
                      onChange={(e) =>
                        setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })
                      }
                      style={{ padding: "0.5rem" }}
                    />
                  </div>
                  <button 
                    onClick={handleAddMovie}
                    style={{
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#f5c518",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Add Movie
                  </button>
                </div>

                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;