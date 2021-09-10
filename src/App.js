import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <h1 className="hea">Hey welcome to kiran kumar's Netlfix Clone</h1>
      <Row
        title="NETLFIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
