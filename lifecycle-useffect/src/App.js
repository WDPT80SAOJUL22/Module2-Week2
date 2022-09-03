import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import ApartmentList from './components/ApartmentList';
import ClassComponent from './components/ClassComponent';

function App() {
  const [showCounter, setShowCounter] = useState(false)
  const [showClass, setShowClass] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>{setShowCounter(!showCounter)}}>Show Counter</button>
      <button onClick={()=>{setShowClass(!showClass)}}>Show Class</button>
      {showCounter && <Counter/>}

      {/* <ApartmentList/> */}

      {showClass && <ClassComponent showCounter={showCounter}/>}
      
    </div>
  );
}

export default App;
