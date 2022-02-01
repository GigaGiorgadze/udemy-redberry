import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs",
		title: "Getting Started with NextJS",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"NextJS is a the React framework for production - it comes with built in routing and SSR, its also extremly easy to learn and hard to master",
		date: "2022-02-10",
	},
];

function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
}

export default HomePage;
