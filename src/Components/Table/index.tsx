import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow
  
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SearchTextContext } from "../../Contexts/SearchTextContextProvider";
import { SearchMoviesResult } from "../../Models/SearchMovie";

import { fetchMovies } from "../../Services/Api/tmdb";


export default function MainTable() {

  const [movies, setMovies] = useState <SearchMoviesResult>();
  const results = movies?.results || [];
  const search = useContext(SearchTextContext);

  useEffect(() => {
      console.log("search", search);
      fetchMovies(search.searchText).then((movies) => {
          console.log(movies);
          setMovies(movies);
      });
  }, [search.searchText]);


  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              ID
            </TableCell>
            <TableCell align="center">
              Titre
            </TableCell>
            <TableCell align="center">
              Évaluation
            </TableCell>
            <TableCell align="center">
              Nb de votes
            </TableCell>
            <TableCell align="center">
              Popularité
            </TableCell>
            <TableCell align="center">
              Date de sortie
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((movie) => (
            <TableRow
              key={movie.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              
              onClick={() => {}}
            >
              <TableCell align="center">{movie.id}</TableCell>
              <TableCell align="center">{movie.title}</TableCell>
              <TableCell align="center">{movie.vote_average}</TableCell>
              <TableCell align="center">{movie.vote_count}</TableCell>
              <TableCell align="center">{movie.popularity}</TableCell>
              <TableCell align="center">{movie.release_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
