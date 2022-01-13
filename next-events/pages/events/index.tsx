import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSeach from "../../components/events/EventSeach";

const AllEventsPage = () => {
	const allEvents = getAllEvents();

	return <>
	<EventSeach />
	<EventList items={allEvents} /></>;
};

export default AllEventsPage;
