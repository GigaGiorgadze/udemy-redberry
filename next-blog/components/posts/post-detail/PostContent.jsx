import React from "react";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";

const DUMMY_POST = {
	slug: "getting-started-with-nextjs",
	title: "Getting Started with NextJS",
	image: "getting-started-with-nextjs.png",
	excerpt:
		"NextJS is a the React framework for production - it comes with built in routing and SSR, its also extremly easy to learn and hard to master",
	date: "2022-02-10",
	content: "# This is a first post",
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			{DUMMY_POST.content}
		</article>
	);
}

export default PostContent;
