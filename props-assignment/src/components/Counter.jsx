import React from 'react';
import { useState } from 'react';
import CounterCSS from './Counter.module.css'

function Counter() {
    const [addition, setAddition] = useState(0);

    return (
        <div className={CounterCSS.container}>
            <h1>{addition}</h1>
            <input type="button" value="Add" onClick={() => setAddition(addition + 1)} className={CounterCSS.button} />
            <input type="button" value="Subtract" onClick={() => setAddition(addition - 1)} className={CounterCSS.button} />
            <input type="button" value="Reset" onClick={() => setAddition(0)} className={CounterCSS.button} />
        </div>
    )
}

export default Counter