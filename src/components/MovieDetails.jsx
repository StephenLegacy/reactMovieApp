import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details" style={styles.notFound}>
        <h2>Movie not found</h2>
        <Link to="/" style={styles.backLink}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-details" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.posterColumn}>
          <img 
            src={movie.posterURL} 
            alt={`${movie.title} Poster`} 
            style={styles.poster}
          />
          <div style={styles.ratingContainer}>
            <span style={styles.rating}>⭐ {movie.rating.toFixed(1)}</span>
          </div>
        </div>

        <div style={styles.detailsColumn}>
          <h1 style={styles.title}>{movie.title}</h1>
          
          <div style={styles.trailerContainer}>
            <iframe
              width="100%"
              height="400"
              src={movie.trailerLink.replace('watch?v=', 'embed/')}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={styles.trailer}
            ></iframe>
          </div>

          <div style={styles.description}>
            <h3 style={styles.sectionTitle}>Synopsis</h3>
            <p>{movie.description}</p>
          </div>

          <Link to="/" style={styles.backLink}>← Back to All Movies</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#333'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
  },
  posterColumn: {
    flex: '0 0 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  detailsColumn: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  poster: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  rating: {
    backgroundColor: '#f5c518',
    color: '#000',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#121212'
  },
  trailerContainer: {
    position: 'relative',
    paddingBottom: '56.25%', /* 16:9 aspect ratio */
    height: '0',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  trailer: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: 'none'
  },
  description: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px'
  },
  sectionTitle: {
    color: '#121212',
    marginTop: '0',
    marginBottom: '1rem'
  },
  backLink: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#f5c518',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.2s',
    ':hover': {
      color: '#d4a916',
      textDecoration: 'underline'
    }
  },
  notFound: {
    textAlign: 'center',
    padding: '4rem',
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default MovieDetails;