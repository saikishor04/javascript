import React, {useState,useEffect} from 'react'
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID ='76b224e9'
  const APP_KEY = "d27fc7716d5daa1a60a9a2583b07b141"
  const [recipes,setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const[query,setQuery] =useState('chicken')

useEffect(() => {
  getRecipes()
},[query])
const getRecipes = async()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await(response.json())
  setRecipes(data.hits)
  console.log(data.hits)
}
const getSearch=(e)=>{
  setSearch(e.target.value)
}
const updateSearch =(e) => {
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
      <form className='search-form' onSubmit={updateSearch}>
        <input className= 'search-bar' type="text" value={search} onChange={getSearch}/>
        <button className='search-btn' type='submit'>Search</button>
      </form>
      <div className='recipes'>
      {
        recipes.map(recipe =>(
            <Recipe key={recipe.recipe.label}
             title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          )
        )}
        </div>
    </div>
  );
}

export default App;
