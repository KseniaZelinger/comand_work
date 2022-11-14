import React from 'react';
import ModalWindow from './igor-components/ModalWindow';
import Corusel from './igor-components/Corusel'
import TableIgor from './igor-components/Table'

function Igor() {

    const info = () => {
        alert('Командная работа! Ура!')
        console.log('Командная работа! Ура!')
    }


    return (
        <div>
            Это компонент Igor!
            Мой компонент работает
            <button onClick={() => info()}>Модальное окно</button>
            <div>
                <ModalWindow />
            </div>
            <div style={{ width: '500px', margin: '0 auto' }}>
                <Corusel />
            </div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <TableIgor />
            </div>

        </div>
    )
}

export default Igor;