import React from "react";
import PostGrid from "../posts/PostGrid";
import classes from "./FeaturedPosts.module.css";

function FeaturedPosts(props) {
	return (
		<section className={classes.latest}>
			<h2>Featured posts</h2>
			<PostGrid posts={props.posts} />
		</section>
	);
}

export default FeaturedPosts;
