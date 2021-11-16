import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../app/slices/chartSlice";
import { numAmosPerTypes } from "../app/logic";

const CommandPanel = () => {
	const dispatch = useDispatch();
	const { amosList } = useSelector((state) => state.amosSlice);

	const [currentDataType, setCurrentDataType] = useState("Nothing");

	const [chartType, setChartType] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [chartOptions, setChartOptions] = useState(null);

	// Chart Comparaison
	// BAR and PIE chart with number of amos and number of users

	// Chart Relation
	// Number of amos per user

	// Chart Composition
	// PIE with all the types 56% mammal, 5% reptiles etc with the colors!

	// Chart Distribution
	// Geolocalisation

	const setAmosType = () => {
		// PIE with all the types 56% mammal, 5% reptiles etc with the colors!
		const numTypes = numAmosPerTypes(amosList);

		const labels = [
			"Mammals",
			"Birds",
			"Fish",
			"Amphibians",
			"Reptiles",
			"Invertebrates",
		];

		const colors = [
			"#F887B0",
			"#7EDCE6",
			"#3289F6",
			"#63BC55",
			"#2D8159",
			"#783BB6",
		];

		const data = {
			labels: labels,
			datasets: [
				{
					label: "Types",
					data: [
						numTypes.mammal,
						numTypes.bird,
						numTypes.fish,
						numTypes.amphibian,
						numTypes.reptile,
						numTypes.invertebrate,
					],
					borderColor: colors,
					backgroundColor: colors,
				},
			],
		};

		const options = {
			responsive: true,
			plugins: {
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Types",
				},
			},
		};

		setCurrentDataType("Types of Amos");
		setChartType("pie");
		setChartData(data);
		setChartOptions(options);
	};

	const generateChart = (type) => {
		if (chartData !== null) {
			const config = {
				type: type !== null ? type : chartType,
				data: chartData,
				options: chartOptions,
			};
			dispatch(setData(config));
		}
	};

	return (
		<div className={"commandPanel"}>
			<h3>
				Type of data:{" "}
				<span className={"cmdTypeOfDataTxt"}>{currentDataType}</span>
			</h3>
			<div className={"cmdDataBtnsWrapper"}>
				<button onClick={setAmosType} className={"cmdDataBtns"}>
					Types of Amos
				</button>
			</div>
			<h3>Generate chart</h3>
			<div className={"cmdChartTypeBtnsWrapper"}>
				<button
					onClick={() => generateChart("line")}
					className={"cmdChartTypeBtns"}
				>
					Line chart type
				</button>
				<button
					onClick={() => generateChart("pie")}
					className={"cmdChartTypeBtns"}
				>
					Pie chart type
				</button>
				<button
					onClick={() => generateChart("bar")}
					className={"cmdChartTypeBtns"}
				>
					Bar chart type
				</button>
			</div>
		</div>
	);
};

export default CommandPanel;
