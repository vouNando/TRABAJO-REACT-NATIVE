import { useState } from "react"


export const Acumulador = () => {

    const[valor, setValor]=useState(0);

    const contador=(num:number)=>{
        setValor(valor+num)

    }

  return (
    <div>
        <h3>Acumulador  <small> {valor} </small> </h3>
        <button className="btn btn-success"
        onClick={()=> contador(+5)}>+5</button>
        &nbsp;
        <button className="btn btn-danger"
        onClick={()=> contador(-5)}>-5</button>
        
    </div>
  )
}
