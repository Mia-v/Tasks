import React from "react";
import "./Menu.css";

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-menu">
				<input type="checkbox" id="ckb" className="checkbox-menu" />
				<label for="ckb" className="menu-btn-cross">
					<span className="one"></span>
					<span className="two"></span>
					<span className="three"></span>
				</label>
				<ul className="menu-list">
					<li><a href="#">About</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">About</a></li>
				</ul>
			</div>
		)
	}
}
