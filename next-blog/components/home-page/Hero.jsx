import Image from "next/image";
import React from "react";
import classes from "./Hero.module.css";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/violeto.png"
					alt='image of "giga"'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Giga</h1>
			<p>
				I blog about web development - especially about frameworks like React,
				Next-js and Laravel
			</p>
		</section>
	);
}

export default Hero;
