import React, { useState } from "react";

function Greeting() {
	const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => [
        setChangeText(true)
    ]

	return (
		<>
			<h2>Hello world</h2>
			{!changeText && <p>It's good to see you</p>}
            {changeText && <p>changed Text</p>}
			<button onClick={changeTextHandler}>Change Text</button>
		</>
	);
}

export default Greeting;
