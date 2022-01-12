import { useRouter } from "next/router";

function BlogPostPage() {
    const router = useRouter()

    console.log(router.query)

    return (
        <h1>The blog post</h1>
    )
}
export default BlogPostPage;
