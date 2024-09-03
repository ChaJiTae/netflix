import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetctMovieGenre = () => {
  return api.get(`/genre/movie/list`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetctMovieGenre,
    select: (result) => result.data.genres,
    staleTime: 300000,
  });
};
