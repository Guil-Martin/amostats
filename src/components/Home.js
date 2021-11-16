import React from "react";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import DisplayAmos from "./DisplayAmos";
import DisplayUsers from "./DisplayUsers";
import DisplayLocs from "./DisplayLocs";
import Login from "./Login";

const Home = () => {
	const { amosList } = useSelector((state) => state.amosSlice);
	const { currentUser } = useSelector((state) => state.userSlice);

	if (currentUser === null) return <Login />;

	return (
		<div className={"container home"}>
			<h2>Commands:</h2>
			<div className={"commandsWrapper"}>
				<button>A button</button>
			</div>
			<h2>Charts:</h2>
			<div className={"chartWrapper"}>
				<LineChart />
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
