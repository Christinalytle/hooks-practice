import React, {useState} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0);

    useEffect(( => {
        document.title = `You click ${count} times`
    }))

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterOne