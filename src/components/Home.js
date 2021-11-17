import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Chart from "./Chart";
import DisplayAmos from "./DisplayAmos";
import DisplayUsers from "./DisplayUsers";
import DisplayLocs from "./DisplayLocs";
import CommandPanel from "./CommandPanel";

const Home = () => {
	const { currentUser } = useSelector((state) => state.userSlice);

	if (currentUser === null) return <Login />;

	return (
		<div className={"container home"}>
			<h2>Commands:</h2>
			<div className={"commandsWrapper"}>
				<CommandPanel />
			</div>
			<h2>Chart:</h2>
			<div className={"chartWrapper"}>
				<Chart />
			</div>
			<h2>Requests results:</h2>
			<div className={"resultWrapper"}>
				<DisplayAmos />
				<DisplayUsers />
				<DisplayLocs />
			</div>
		</div>
	);
};

export default Home;
