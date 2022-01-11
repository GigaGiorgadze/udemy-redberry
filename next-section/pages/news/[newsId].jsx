import { useRouter } from "next/router";

function DetaisPage() {
	const router = useRouter();

	const newsId = router.query.newsId;

	return <h1>The Details page</h1>;
}

export default DetaisPage;
