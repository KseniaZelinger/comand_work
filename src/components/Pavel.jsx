import React from 'react';

function Pavel() {

    const SayHello = () => {
        alert("Hello")
    }

    return (
        <div>
            <button onClick={SayHello}>Нажми на меня</button>
        </div>
    )

}

export default Pavel;