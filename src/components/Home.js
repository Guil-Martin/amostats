import React from "react";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DisplayAmos from "./DisplayAmos";
import Login from "./Login";

const Home = () => {
	const { amosList } = useSelector((state) => state.amosSlice);
	const { currentUser } = useSelector((state) => state.userSlice);

	if (currentUser === null) return <Login />;

	return (
		<div className={"container"}>
			<DisplayAmos />
		</div>
	);
};

export default Home;
