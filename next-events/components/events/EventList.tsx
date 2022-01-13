import Link from "next/link";
import React from "react";
import Button from "../UI/Button";
import classes from "./EventItem.module.css";

const EventList: React.FC<{
	items: {
		id: string;
		title: string;
		description: string;
		location: string;
		date: string;
		image: string;
		isFeatured: boolean;
	}[];
}> = (props) => {
	const { items } = props;

	return (
		<ul className={classes.list}>
			{items.map((item) => (
				<li className={classes.item} key={item.id}>
					<img className={classes.icon} src={`/${item.image}`} />
					<div className={classes.content}>
						<div className={classes.summery}>
							<h2>{item.title}</h2>
							<div className={classes.data}>
								<time>
									{new Date(item.date).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}
								</time>
							</div>
							<div className={classes.address}>
								<address>{item.location.replace(", ", "\n")}</address>
							</div>
						</div>
						<div className={classes.actions}>
							<Button link={`/events/${item.id}`}>Explore event</Button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default EventList;
