


export const FuncionArreglos = () => {

  const MiArreglo =  [1,2,3,4,5];

   const sumaArreglo= (arreglo: number[]):number => {
    return arreglo.reduce((suma, valor)=> suma + valor, 0)
   };
   const resultado = sumaArreglo(MiArreglo);
   

  return (
    <>
      <h3>FuncionArreglos</h3>
      <span>el resultado es  {resultado} </span>  
    </>
    
  );
};

