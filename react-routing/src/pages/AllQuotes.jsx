import React from "react";
import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
	{ id: "q1", author: "Giga", text: "Laravel is a best framework" },
	{ id: "q2", author: "Giga", text: "bless Tyron Otwell" },
	{ id: "q3", author: "Giga", text: "Ubuntu sucks ass" },
];

function AllQuotes() {
	return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
