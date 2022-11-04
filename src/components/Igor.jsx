import React from 'react';

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
        </div>
    )
}

export default Igor;