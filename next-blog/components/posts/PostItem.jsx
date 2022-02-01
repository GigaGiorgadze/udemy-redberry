import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./PostItem.module.css";

function PostItem(props) {
	const { title, date, excerpt, image, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<li className={classes.content}>
			<Link href={`posts/${slug}`}>
				<a>
					<div className={classes.image}>
						<Image src={imagePath} alt={title} width={300} height={200} />
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
}

export default PostItem;
