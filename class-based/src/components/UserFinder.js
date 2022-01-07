import { Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: "",
		};
	}

	componentDidMount() {
		this.setState({ filteredUsers: DUMMY_USERS });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) => {
					return user.name.includes(this.state.searchTerm);
				}),
			});
		}
	}

	searchChangeHandler(e) {
		this.setState({ searchTerm: e.target.value });
	}

	render() {
		return (
			<>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<Users users={this.state.filteredUsers} />
			</>
		);
	}
}

export default UserFinder;
