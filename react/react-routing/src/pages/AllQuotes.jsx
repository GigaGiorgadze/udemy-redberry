import React, { useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

export const DUMMY_QUOTES = [
	{ id: "q1", author: "Giga", text: "Laravel is a best framework" },
	{ id: "q2", author: "Giga", text: "bless Tyron Otwell" },
	{ id: "q3", author: "Giga", text: "Ubuntu sucks ass" },
];

function AllQuotes() {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound />
	}

	return <QuoteList quotes={loadedQuotes} />;
}

export default AllQuotes;
