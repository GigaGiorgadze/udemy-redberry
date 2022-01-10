import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
	return (
		<section>
			<h1>The products page</h1>
			<ul>
				<li>
					<Link to="/products/p1">A book</Link>
				</li>
				<li>
					<Link to="/products/p2">A carpet</Link>
				</li>
				<li>
					<Link to="/products/p3">An online course</Link>
				</li>
			</ul>
		</section>
	);
}

export default Products;