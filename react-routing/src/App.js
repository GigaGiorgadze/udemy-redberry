import { Redirect, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/layout/layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
	return (
		<Layout>
			<Suspense
				fallback={
					<div className="centered">
						<LoadingSpinner />
					</div>
				}
			>
				<Switch>
					<Route exact path="/">
						<Redirect to="/quotes" />
					</Route>
					<Route exact path="/quotes">
						<AllQuotes />
					</Route>
					<Route path="/quotes/:quoteId">
						<QuoteDetails />
					</Route>
					<Route path="/new-quote">
						<NewQuote />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
