import React, {useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 5)
        }
    }
 
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset{count}</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase {count}</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease {count}</button>
            <button onClick={incrementFive}>Plus 5 {count}</button>
        </div>
    )
}

export default HookCounterTwo