import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [result , setResult] = useState({});
  const [isClicked ,setIsClicked]=useState(false) ;


  const search = async () => {
    const response = await axios.get('https://api.quotable.io/random');
  setResult(response.data)
  }

  const handelSubmit = (e)=>{
      e.preventDefault();
      setIsClicked(true);
    console.log(isClicked)}

  useEffect (() => {
    if(isClicked){
      search();
      setIsClicked(false);
    }
  },[isClicked]);
  

  return (
  <>
  <header className='header'>
    <h1>Quote Generator</h1>
  </header>
  <div className='formbtn'>
  <form onSubmit={e=> e.preventDefault()} >
    <button className='btn btn-warning' type='submit' onClick={handelSubmit}>Search</button>
  </form>
  </div>
  <div  className="quote">
    <h1>{result.content}</h1>
    <h4>{result.author}</h4>
  </div>
  </>
  );
}

export default App;
