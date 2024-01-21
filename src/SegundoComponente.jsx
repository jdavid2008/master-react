import React from 'react'

/*
 En jsx NO se debe utilizar forEach directamente dentro del bloque de retorno (JSX) de un componente. 
 La razón principal es que forEach no devuelve un nuevo array y no produce salida para ser renderizada en JSX.

En su lugar, puedes utilizar el método map, que es más comúnmente utilizado en React para iterar sobre elementos 
y devolver un nuevo array de elementos React. El método map crea un nuevo array basado en la función que le proporcionas,
y este nuevo array puede ser renderizado en JSX.
*/

export const SegundoComponente = () => {

    const libros = [];

  return (
    <div className='segundo-componente'>

        <h1>Listado de Libros</h1>
        {libros.length >= 1 ? 
            (<ul>
                {
                    libros.map((libro, indice) => {
                        return (
                            <li key={indice}>{libro}</li>
                        )
                    })
                }

            </ul>)
        : (
        <p>No hay Libros</p>
        )
        }

    </div>
  )
}

