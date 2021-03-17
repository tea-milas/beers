import './App.css';
import Display from './components/Display/Display.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import React, {useState, useEffect} from 'react';


function App() {

  const [beers,setBeers]= useState([]);
  const [searchText,setSearchText] = useState("");

  const fetchBeers = () => {
    return fetch("https://api.punkapi.com/v2/beers?page=2&per_page=27")
    .then(response => response.json())
    .then(data => data.map(beer => beer))
  }

  const searchBeers = (searchText) => {
    if (searchText !== "") {
      return fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchText}`)
      .then(response => response.json())
      .then(result => {
        const beers = result.map(beers=>beers);
        setBeers(beers);
      })
    } else {
      fetchBeers().then(beers =>setBeers(beers));
    }
    
  }

  useEffect( () => {
    fetchBeers().then(beers =>setBeers(beers));

  }, [])


  return (
    <div className="container">
      <Navigation setSearchText={setSearchText} setBeers={setBeers} searchBeers={searchBeers} wholeList={fetchBeers}/>
      {beers && <Display beers={beers} />} 
      {console.log(searchText)}
    </div>
  );
}

export default App;
