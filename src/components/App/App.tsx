import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type Movie from "../../types/movie";
import toast, { Toaster } from 'react-hot-toast';

const noMoviesFound = () => toast('No movies found for your request.');

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setMovies([]);
      
      const data = await fetchMovies(topic);
      if (data.length === 0) {
        noMoviesFound();
      }
      setMovies(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {movies.length > 0 && <p>{movies.length} movies found</p>}
      <Toaster />
    </div>
  );
}
