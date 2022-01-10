import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetails() {
	const params = useParams();

	console.log(params.quoteId);

	return (
		<>
			<h1>Quote details page</h1>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
}

export default QuoteDetails;
