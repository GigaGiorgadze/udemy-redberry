import React from "react";
import MainHeader from "./MainHeader";

const Layout: React.FC = (props) => {
	return (
		<>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
