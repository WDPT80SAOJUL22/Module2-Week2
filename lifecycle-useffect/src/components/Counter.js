import React, { useState, useEffect } from "react";

const Counter = (props) => {
    
  const [count, setCount] = useState(0);


  useEffect(()=>{
    console.log('Primeira renderização')
    const id = setInterval(()=>{
        setCount((prevCount) => prevCount + 1)
      }, 1000) // Executa quando o Componente é renderizado a primeira vez

      return () => {
        console.log('Estou desmontando')
        clearInterval(id)
      } // Executa no processo de desmontagem do componente
  }, [])

  useEffect(()=>{
    console.log('Update fase')
    document.title = count
  },[count]) // executa de acordo com a mudança das dependecia

 

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

    </div>
  );
}

export default Counter