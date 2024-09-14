import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [counter,setcounter]=useState(1);
  useEffect(()=>{
    console.log("welcoome")
  },[counter])
  return (
    <div className="App">
      {counter}
      <button onClick={()=>setcounter(counter+1)}>Count</button>
    </div>
  );
}

export default App;
