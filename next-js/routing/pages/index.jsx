import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Home() {
	const router = useRouter()

	const loadMiriHandler = () => {
		router.push('blog/miritoiu')
	}

	return (
		<div>
			<h1>Hello</h1>
			<ul>
				<li>
					<Link href='/about'>about</Link>
				</li>
				<li>
					<Link href='blog/blog'>Blog</Link>
				</li>
			</ul>
			<button onClick={loadMiriHandler}>Load miri blog</button>
		</div>
	);
}

export default Home;
