import Link from "next/link";

function NewsPage() {
	return (
		<>
			<h1>The News page</h1>
			<ul>
				<li>
					<Link href="/news/nextjs-is-a-greate-framework">
						NextJS is a greate framework
					</Link>
				</li>
				<li>something else</li>
			</ul>
		</>
	);
}

export default NewsPage;
