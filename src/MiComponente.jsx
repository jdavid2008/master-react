// Importar módulos de React / Dependencias
import React from 'react';

// Función del componente
const MiComponente = () => {
    const miNombre = 'David';
    const miEmail = 'davidmoralesgonzalez76@gmail.com';

    const usuario = {
        nombre: 'David',
        apellidos: 'Morales González',
        email: 'david@galdon.com'
    }

    return (
        <div>
            <hr/>
            <p>Este es mi primer componente</p>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>Nombre: <strong>{miNombre}</strong></li>
                <li>Web: <strong>{miEmail}</strong></li>
                <li>Datos del usuario: <strong>{JSON.stringify(usuario)}</strong></li>
            </ul>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Python</li>
            </ul>
        </div>
    )

}

// Export
export default MiComponente;
