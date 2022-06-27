import "./App.css";
import Display from "./components/Display/Display.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [url, setUrl] = useState(
    "https://api.punkapi.com/v2/beers?page=1&per_page=75"
  );

  const fetchBeers = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setBeers(data));
  };

  const searchBeers = () => {
    if (searchText !== "") {
      setUrl(`https://api.punkapi.com/v2/beers?beer_name=${searchText}`);
    } else {
      setUrl("https://api.punkapi.com/v2/beers?page=1&per_page=75");
    }
  };

  useEffect(() => {
    fetchBeers();
  }, [url]);

  return (
    <div className="container">
      <Navigation
        setSearchText={setSearchText}
        searchBeers={searchBeers}
        setUrl={setUrl}
      />
      {beers && <Display beers={beers} />}
    </div>
  );
}

export default App;
