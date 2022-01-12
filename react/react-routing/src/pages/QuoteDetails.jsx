import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { DUMMY_QUOTES } from "./AllQuotes";

function QuoteDetails() {
	const params = useParams();
	const route = useRouteMatch();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		)
	}

	if (error) {
		return <p className="centere">{ }</p>
	}

	if (!loadedQuote.text) {
		return <p>no quote found</p>;
	}

	return (
		<>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<Route exact path={route.path}>
				<div className="centered">
					<Link to={`${route.url}/comments`} className="btn--flat">
						Load comments
					</Link>
				</div>
			</Route>
			<Route path={`${route.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
}

export default QuoteDetails;
