import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getAllEvents, getEventById } from "../../helpers/api-utils";

function EventDetailPage(props) {
	if (!props.event) {
		return (
			<ErrorAlert>
				<p>No event found!</p>
			</ErrorAlert>
		);
	}

	return (
		<Fragment>
			<EventSummary title={props.event.title} />
			<EventLogistics
				date={props.event.date}
				address={props.event.location}
				image={props.event.image}
				imageAlt={props.event.title}
			/>
			<EventContent>
				<p>{props.event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;

export async function getStaticPaths() {
  const allEvents = await getAllEvents()
  const paths = allEvents.map(event => ({params: {eventId: event.id}}))
	return {
		paths: paths,
		fallback: true, // false or 'blocking'
	};
}

export async function getStaticProps(context) {
	const event = await getEventById(context.params.eventId);
	return {
		props: {
			event,
		},
	};
}
