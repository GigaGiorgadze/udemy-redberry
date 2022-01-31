import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
	const { loadedProduct } = props;

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { pId: "p1" } },
			{ params: { pId: "p2" } },
			{ params: { pId: "p3" } },
		],
		fallback: false,
	};
}


export async function getStaticProps(context) {
	const { params } = context;
	const productId = params.pId;

	const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	const product = data.products.find((product) => product.id === productId);

	return {
		props: {
			loadedProduct: product,
		},
	};
}

export default ProductDetailPage;
