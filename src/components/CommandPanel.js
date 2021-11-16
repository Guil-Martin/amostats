import React from "react";
import { useDispatch } from "react-redux";
import { setData } from "../app/slices/chartSlice";

const CommandPanel = () => {
	const dispatch = useDispatch();

	const generateChart = (type, data) => {
		// Fill up store data for chart and its type

		const labels = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

		const testdata = {
			labels: labels,
			datasets: [
				{
					label: "Dataset 1 for " + type,
					data: [12, 56, 48, 75, 66],
					borderColor: "red",
					backgroundColor: "#e57285",
				},
				{
					label: "Dataset 2 for " + type,
					data: [44, 78, 21, 35, 56],
					borderColor: "blue",
					backgroundColor: "#72a1e5",
				},
			],
		};

		const config = {
			type: type,
			data: testdata,
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "top",
					},
					title: {
						display: true,
						text: "Chart.js Line Chart",
					},
				},
			},
		};

		dispatch(setData(config));
	};

	return (
		<div className={"commandPanel"}>
			<button onClick={() => generateChart("line", null)}>Line chart</button>
			<button onClick={() => generateChart("pie", null)}>Pie chart</button>
			<button onClick={() => generateChart("bar", null)}>Bar chart</button>
		</div>
	);
};

export default CommandPanel;
