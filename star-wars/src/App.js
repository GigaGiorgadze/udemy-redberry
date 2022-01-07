import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	const [error, setError] = useState(null);

	function fetchMoviesHandler() {
		setisLoading(true);
    setError(null)
		fetch("https://swapi.dev/api/films/")
			.then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong please try again')
        }
				return response.json();
			})
			.then((data) => {
				const transformMovies = data.results.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.opening_crawl,
						releaseDate: movieData.release_date,
					};
				});
				setMovies(transformMovies);
			}).catch((error) => {
        setError(error.message)
      });
      setisLoading(false);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{isLoading && movies.length > 0 && (
					<p>Movies are loading wait a bit...</p>
				)}
				{!isLoading && movies.length === 0 && <p>No movies found</p>}
				{!isLoading && <MoviesList movies={movies} />}
          {!isLoading && error && <p>{error}</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
