

export const FuncionCalificacion = () => {

    const alumnos = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion:10,

        },
        {
            name:'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name:'Gerson',
            edad:18,
            calificacion:9,
        }


    ];
    const calcularCalificaciones =(alumnos: any[]): number=>{
        const totalCali= alumnos.reduce((acumulador, alumno )=> acumulador+ alumno.calificacion,0)
        const promedio= totalCali/alumnos.length; 
        return promedio;
    }
    const promedioCali= calcularCalificaciones(alumnos);


  return (
    <div>
        <h3>FuncionCalificacion</h3>
        <span>E Promedio es: {promedioCali} </span>
    </div>
  )
}
