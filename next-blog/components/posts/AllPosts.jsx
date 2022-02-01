import React from "react";
import classes from "./AllPosts.module.css";
import PostGrid from "./PostGrid";

function AllPosts(props) {
	return (
		<section className={classes.posts}>
			<h1>All posts</h1>
            <PostGrid posts={props.posts} />
		</section>
	);
}

export default AllPosts;
