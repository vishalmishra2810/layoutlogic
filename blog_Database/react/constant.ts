export const code1 = `
npx create-react-app react-hooks-example
`;

export const code2 = `
import React, { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(false);

    useEffect(() => {
        if (count % 2 === 0) {
            setIsEven(true);
        } else {
            setIsEven(false);
        }
    }, [count]);

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <h1>Is Even: {isEven ? "Yes" : "No"}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

`;

export const code3 = `
npm start
`;
