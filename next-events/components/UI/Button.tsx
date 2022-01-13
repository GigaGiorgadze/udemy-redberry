import Link from "next/link";
import classes from "./Button.module.css";

const Button: React.FC<{ link: string }> = (props) => {
	return (
		<Link href={props.link}>
			<a className={classes.btn}>{props.children}</a>
		</Link>
	);
};

export default Button;
