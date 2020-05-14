import React, {useState} from 'react';

function MyComponent(){
    const [count,setCount] = useState(100);
    function myOnClickCount(e) {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Hello World from myComp</h1>
            <h1 onClick={myOnClickCount}>Hello World: Count {count}</h1>
        </div>
    )
}

export default MyComponent;