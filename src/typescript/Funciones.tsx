

export const Funciones = () => {

    const ladoCuadrado=7;
    const calcularArea=(lado:number):number=>{
        return lado*lado;
    }
    const resultado= calcularArea(ladoCuadrado);
  return (
    <div>
        <h3>Funciones</h3>
        <samp>El lado del cuadrado es: {ladoCuadrado} </samp>
        <br />
        <span> El Area de un cuadrado es: {resultado} </span>
    </div>
  )
}
