import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href="/" passHref>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
