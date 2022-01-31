import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
import Head from "next/head";

function HomePage(props) {
	return (
		<div>
			<Head>
				<title>NextEvents - featured events</title>
				<meta
					name="description"
					content="Find a lot of great events that allow you to evolve"
				/>
			</Head>
			<EventList items={props.featuredEvents} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();
	return {
		props: {
			featuredEvents,
		},
		revalidate: 1800,
	};
}

export default HomePage;
