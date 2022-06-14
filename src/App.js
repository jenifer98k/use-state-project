import React, {useState} from "react"
import Data from "../src/Data"
import './App.css';
import List from "../src/List";
function App() {
  const [people,setPeople]= useState(Data);
  return (
   <main className='main'>
   <section className="container">
    <h3>{people.length} BirthDay Today</h3>
    < List people={people} />
    <div className="div-btn">
    <button className='btn' onClick={()=>setPeople([])}>clear All</button> 
    </div>
  
    </section> 
   
   </main>
    
  );
}

export default App;
