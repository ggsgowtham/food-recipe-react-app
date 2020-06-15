import React, { useEffect, useState } from 'react';
import Receipe from './Receipe';
import './App.css';


const App = () => {


  // Got the api from edamam website(food receipe website) 
  const APP_ID = "e440f3e6";
  const APP_KEY = "51af2f463ea910edc0933bb35db5287b";
  

  const [receipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");

  //after click button search fetch data
  const [query, setQuery] = useState("veg");

  useEffect(() => {
    getReceipe();
  }, [query]);

  //[search] everytime gets receipe values on search 

  const getReceipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setReceipes(data.hits);

  //promises
    // fetch(tps://edmm.com)
    // .then(response => {
    //   response.json
    // })
  };

  const updateSearch = (e) => {
    setSearch(e.target.value)
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" type='text' onChange = {updateSearch} />
        <button className="search-button" type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        { receipes.map( recipe => (
          <Receipe 
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
