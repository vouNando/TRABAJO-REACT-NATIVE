

export const FuncionDivision = () => {
    const arreglo=[5,10,15,20,25,30,35,40,45,50];

    const arregloDiv =(arreglo: number[]):number[] => {
        return arreglo.map(valor=> valor /5)
    };
    const resultado = arregloDiv(arreglo);

  return (
    <div>
        <h3>FuncionDivision</h3>
        <span> El arreglo es [ {arreglo}  ]  </span>
        <br />
        <span>El resultado es: [ {resultado}   ] </span>
    </div>
  );
};
