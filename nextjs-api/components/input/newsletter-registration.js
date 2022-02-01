import { useRef } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
	const emailRef = useRef();

	function registrationHandler(e) {
		e.preventDefault();

		fetch("/api/newsletter", {
			method: "post",
			body: JSON.stringify({ email: emailRef.current.value }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type="email"
						ref={emailRef}
						id="email"
						placeholder="Your email"
						aria-label="Your email"
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
