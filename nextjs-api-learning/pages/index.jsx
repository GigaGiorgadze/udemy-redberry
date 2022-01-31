import { useRef } from "react";

function HomePage() {
	const emailRef = useRef();
	const feedbackRef = useRef();

	function submitFormHandler(e) {
		e.preventDefault();

		const enteredEmail = emailRef.current.value;
		const enteredFeedback = feedbackRef.current.value;

		fetch("/api/feedback", {
			method: "POST",
			body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<div>
			<h1>The Home Page</h1>
			<form onSubmit={submitFormHandler}>
				<div>
					<label htmlFor="email">Your email address</label>
					<input type="email" ref={emailRef} name="email" id="email" />
				</div>
				<div>
					<label htmlFor="feedback">Your feedback</label>
					<textarea
						name="feedback"
						ref={feedbackRef}
						id="feedback"
						rows="5"
					></textarea>
				</div>
				<button>submit</button>
			</form>
		</div>
	);
}

export default HomePage;
