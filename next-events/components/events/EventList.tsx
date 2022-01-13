import Link from "next/link";
import React from "react";

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
		<div>
			{items.map((item) => (
				<li key={item.id}>
					<img src={`/${item.image}`} />
					<div>
						<div>
							<h2>{item.title}</h2>
							<div>
								<time>
									{new Date(item.date).toLocaleDateString("en-US", {
										day: "numeric",
										month: "long",
										year: "numeric",
									})}
								</time>
							</div>
							<div>
								<address>{item.location.replace(", ", "\n")}</address>
							</div>
						</div>
						<div>
							<Link href={`/events/${item.id}`}>Path</Link>
						</div>
					</div>
				</li>
			))}
		</div>
	);
};

export default EventList;
