import React, { useState, useEffect } from 'react';
import Item from './components/Item';
import axios from 'axios';
import './App.css';

function App() {
  const [tab, setTab] = useState([])
  const url = "https://api.punkapi.com/v2/"

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers")
      .then(function (response) {
        // handle success
        console.log(response)
        setTab(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })
  }, [])


  console.log(tab)

  return (
    <div className="App">
      {tab.map(item => <div key={item.id}> 
        <h1>{item.name}</h1>
        <h3>{item.tagline}</h3>
        <p>{item.description}</p>
        <img src={item.image_url} alt="beer"/>
      </div>)
      }
    </div>
  );
}

export default App;
