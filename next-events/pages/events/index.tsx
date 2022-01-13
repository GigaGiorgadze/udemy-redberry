import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

const AllEventsPage = () => {
	const allEvents = getAllEvents();

	return <EventList items={allEvents} />;
};

export default AllEventsPage;
