import React from 'react';
import './App.css';
import ListItem from './ListItem'

function App(props) {
  return (
    <div className="App">
      {
        props.people.map(person => {
          return (
            <ListItem name={person.name}/>
          )
        })
      }
    </div>
  );
}

export default App;
