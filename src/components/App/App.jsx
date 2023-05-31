import {useEffect, useState} from 'react';
import axios from 'axios';
import CreatureList from '../CreatureList/CreatureList';
import './App.css';
import CreatureItem from '../CreatureItem/CreatureItem';
import CreatureForm from '../CreatureForm/CreatureForm';


function App () {
 
  const [creatureList, setCreatureList] = useState([]);
  
  // Function to get the creatures from the server/database
  const fetchCreatures = () => {
    axios({
      method: 'GET',
      url: '/creature'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setCreatureList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  // Function to add a new creature to the database
  

  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect( () => {
    fetchCreatures();
  }, [])
  
  return (
    <div className="App">
      <CreatureForm fetchCreatures={fetchCreatures}/>
      <CreatureList taco={creatureList}/>
      
    </div>
  );

}

export default App
