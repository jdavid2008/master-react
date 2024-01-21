import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e) => {
        console.log('Ha dado Click !!!');
    }

    const hasDadoDobleClick = (e, nombre) => {
        console.log('Ha dado Doble Click !!! '+nombre);
    }

    const hasEntrado = (e, accion) => {
        console.log(`Has ${accion} a la Caja con el Mouse !!! `);
    }

    const estasDentro = () => {
        console.log('Estas dentro del Input. Introduce el nombre');
    }

    const estasFuera = () => {
        console.log('Estas fuera del Input');
    }

    
  return (
    <>
        <h1>Eventos en React</h1>
        <p>
            {/* Evento Click */}
            <button onClick={ hasDadoClick }>Dame Click </button>
        </p>
        <p>
            {/* Evento Doble Click */}
            <button onDoubleClick={ e => hasDadoDobleClick(e,'David') }>Doble Click </button>
        </p>
        <p>
            {/* Evento onMouseEnter onMouseLeave */}
            <div id="caja" 
                onMouseEnter={ e => hasEntrado(e,'Entrado')}
                onMouseLeave={ e => hasEntrado(e,'Salido') }
            >
                Pasa por Encima!!
            </div>
        </p>

        {/* Evento onFocus onBlur */}
        <p>

            <input type="text" 
                onFocus={ estasDentro} 
                onBlur={ estasFuera } 
                placeholder='Introduce tu Nombre...'/>
        </p>



    </>
  )
}

