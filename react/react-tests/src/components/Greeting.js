import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
	const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => [
        setChangeText(true)
    ]

	return (
		<>
			<h2>Hello world</h2>
			{!changeText && <Output>It's good to see you</Output>}
            {changeText && <Output>changed Text</Output>}
			<button onClick={changeTextHandler}>Change Text</button>
		</>
	);
}

export default Greeting;
