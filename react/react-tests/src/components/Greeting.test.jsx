import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component's", () => {
	test("contains hello world", () => {
		render(<Greeting />);
		const helloWorldElement = screen.getByText(/hello world/i);
		expect(helloWorldElement).toBeInTheDocument();
	});

	test("inital text renders correctly", () => {
		render(<Greeting />);
		const goodToSeeYouElement = screen.getByText(/It's good to see you/i);
		expect(goodToSeeYouElement).toBeInTheDocument();
	});

	test("text changes when button IS clicked", () => {
		render(<Greeting />);

		const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

        const goodToSeeYouElement = screen.queryByText(/It's good to see you/i);
		expect(goodToSeeYouElement).not.toBeInTheDocument();

        const changedTextElement = screen.getByText(/changed Text/i);
		expect(changedTextElement).toBeInTheDocument();
	});
});
