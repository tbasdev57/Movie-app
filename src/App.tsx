import React from "react";

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/NoPage";
import DetailsPage from "./Pages/DetailsPage";
import { Button, StyledEngineProvider, Table } from "@mui/material";
import SearchBar from "./Components/SearchBar";
import MainTable from "./Components/Table";
import SearchTextContextProvider from "./Contexts/SearchTextContextProvider";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SearchTextContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<HomePage />} />
              {/* <Route path="/search/foo" element={<NoPage/>} /> */}
              {/* <Route path="/search/bar/" element={<NoPage/>} /> */}
              {/* <Route path="/search/details/" element={<NoPage/>} /> */}
              {/* <Route path="" element={<DetailsPage />} /> */}
              <Route path="/search/details:id" element={<DetailsPage />} />
              <Route path="/search/details/bar" element={<DetailsPage />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>

          <StyledEngineProvider injectFirst>
           
            <SearchBar />
          </StyledEngineProvider>

          <MainTable></MainTable>
        </SearchTextContextProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
