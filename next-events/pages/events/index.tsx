import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSeach from "../../components/events/EventSeach";
import { useRouter } from "next/router";

const AllEventsPage = () => {
	const allEvents = getAllEvents();
	const router = useRouter();

	function findEventHandler(year: string, month: string) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}

	return (
		<>
			<EventSeach onSearch={findEventHandler} />
			<EventList items={allEvents} />
		</>
	);
};

export default AllEventsPage;
