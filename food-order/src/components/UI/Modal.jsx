import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

function Backdrop(props) {
	return <div onClick={props.hideCartHandler} className={classes.backdrop} />;
}

function ModalOverlays(props) {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
}

const overlays = document.querySelector("#overlays");

function Modal(props) {
	return (
		<>
			{reactDom.createPortal(
				<Backdrop hideCartHandler={props.hideCartHandler} />,
				overlays
			)}
			{reactDom.createPortal(
				<ModalOverlays>{props.children}</ModalOverlays>,
				overlays
			)}
		</>
	);
}

export default Modal;
