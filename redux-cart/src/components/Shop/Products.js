import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: "p1",
		price: 6,
		title: "My first website",
		description: "The first website i have ever made",
	},
	{
		id: "p2",
		price: 6,
		title: "My second website",
		description: "The second website i have ever made",
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						id={product.id}
						key={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
