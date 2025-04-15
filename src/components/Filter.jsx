import React, { useState } from "react";

const Filter = ({ onTitleChange, onRatingChange }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    onTitleChange(value);
  };

  const handleRatingChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div style={{
      margin: "2rem 0",
      padding: "1.5rem",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ marginTop: 0, marginBottom: "1rem", color: "#333" }}>Filter Movies</h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        alignItems: "end"
      }}>
        <div>
          <label htmlFor="title-filter" style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "500",
            color: "#555"
          }}>
            By Title
          </label>
          <input
            id="title-filter"
            type="text"
            placeholder="Search movies..."
            value={title}
            onChange={handleTitleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem"
            }}
          />
        </div>

        <div>
          <label htmlFor="rating-filter" style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "500",
            color: "#555"
          }}>
            Minimum Rating ({rating.toFixed(1)})
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              id="rating-filter"
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={rating}
              onChange={handleRatingChange}
              style={{ flex: 1 }}
            />
            <span style={{
              backgroundColor: "#f5c518",
              color: "#000",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
              minWidth: "40px",
              textAlign: "center"
            }}>
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;