import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/layout";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Layout>
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
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
