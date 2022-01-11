import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A first meetup",
		image: "https://images2.alphacoders.com/800/800931.jpg",
		address: "Some Adress 5, 12345 some city",
	},
	{
		id: "m2",
		title: "A second meetup",
		image: "https://images3.alphacoders.com/905/905838.jpg",
		address: "Some Adress 5, 12345 some city",
	},
	{
		id: "m3",
		title: "A third meetup",
		image: "https://images.alphacoders.com/898/898325.png",
		address: "Some Adress 5, 12345 some city",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 10,
	};
}

export default HomePage;
