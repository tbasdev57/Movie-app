import { SearchMoviesResult } from "../../Models/SearchMovie";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "092421976dbcafd808f6fe9f9332003e";




export async function fetchMovies(search: string): Promise<SearchMoviesResult> {
    return fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&language=fr-FR&query=${search}&page=1&include_adult=false`
    ).then(async (res) => await res.json()) as Promise<SearchMoviesResult>
}