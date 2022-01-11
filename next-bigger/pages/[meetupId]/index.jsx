import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
	return (
		<>
			<MeetupDetail
				src="https://images3.alphacoders.com/905/905838.jpg"
				alt="VIOLETO"
				title="meet uo about violet"
				address="some street 6, some city 12345"
				description="WE ARE GONNA TALK ABOUT HOW AMAZING AND FUCKED UP AT SAME TIME THIS ANIME THIS"
			/>
		</>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
			{
				params: {
					meetupId: "m3",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			src: "https://images3.alphacoders.com/905/905838.jpg",
			alt: "VIOLETO",
			id: meetupId,
			title: "meet up about violet",
			address: "some streeet 6, some city 123456",
		},
	};
}

export default MeetupDetails;
