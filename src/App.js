import './App.css';

import { useState } from 'react';

function App() {

  const [state, setState] = useState(null); //this is a react thing - kind of like an instance variable in a class

  const flip = () => setState(!state);  //toggle in between beeping and booping

  let displayText;  //text to show in div
  let displayClass; //HTML class attribute

  if(state === false){
    displayText = 'beep!'
    displayClass = 'display beep'
  }
  else if(state === true){
    displayText = 'boop!'
    displayClass = 'display boop'
  }
  else{ //first time null    
    displayText = '...'
    displayClass = 'display'
  }

  return (
    <div className="App">
      
      <div className={displayClass}>{displayText}</div>
      
      <button onClick={flip}>Press Me!</button>

    </div>
  );
}

export default App;
