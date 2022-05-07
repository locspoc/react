import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("");
	const [isError, setIsError] = useState(false);
	// const firstValue = text || "hello world";
	// const secondValue = text && "hello world";
	// console.log(secondValue);
	return (
		<>
			{/* <h1>{firstValue}</h1> */}
			{/* <h1>value: {secondValue}</h1> */}
			<h1>{text || "john doe"}</h1>
			<button className="btn" onClick={() => setIsError(!isError)}>
				toggle error
			</button>
			{isError && <h1>Error...</h1>}
			{/* {!text && <h1>hello world</h1>} */}
			{isError ? (
				<p>there is an error...</p>
			) : (
				<div>
					<h2>There is no error</h2>
				</div>
			)}
		</>
	);
};

export default ShortCircuit;
