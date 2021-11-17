import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../app/slices/chartSlice";
import { numAmosPerTypes, occurencesPerDay } from "../app/utils";

const CommandPanel = () => {
	const dispatch = useDispatch();
	const { amosList } = useSelector((state) => state.amosSlice);
	const { userList } = useSelector((state) => state.amosSlice);

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

	const chartAmosType = () => {
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
					backgroundColor: colors,
				},
			],
		};
		const options = {
			responsive: true,
			plugins: {
				datalabels: {},
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Number of Amos per type",
				},
			},
		};

		setCurrentDataType("Types of Amos");
		setChartType("pie");
		setChartData(data);
		setChartOptions(options);
	};

	const chartAmosAndUser = () => {
		const numUsers = userList.length;
		const numAmos = amosList.length;
		// const avgAmosPerUser = numUsers > 0 && numAmos > 0 ? numUsers / numAmos : 0;

		const labels = ["# of Users", "# of Amos"];
		const colors = ["#ff1c42", "#3289F6"];
		const data = {
			labels: labels,
			datasets: [
				{
					label: "Users and Amos",
					data: [numUsers, numAmos],
					borderColor: colors,
					backgroundColor: colors,
				},
			],
		};
		const options = {
			responsive: true,
			plugins: {
				datalabels: {},
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Users and Amos",
				},
			},
		};

		setCurrentDataType("Users and Amos");
		setChartType("bar");
		setChartData(data);
		setChartOptions(options);
	};

	const chartSubsCapturesTime = () => {
		const dateStart = Date.parse("2021-10-21T16:01:06.240Z");
		const dateEnd = Date.now();

		const userCreatedDates = occurencesPerDay(userList);
		const amosCaptures = occurencesPerDay(amosList);

		const data = {
			datasets: [
				{
					label: "Subscriptions",
					data: userCreatedDates,
					borderColor: "#ff1c42",
					backgroundColor: "#ff1c42",
				},
				{
					label: "Captures",
					data: amosCaptures,
					borderColor: "#3289F6",
					backgroundColor: "#3289F6",
				},
			],
		};

		const options = {
			responsive: true,
			scales: {
				xAxes: {
					title: "Time",
					type: "time",
					time: {
						unit: "day",
					},
					min: dateStart,
					max: dateEnd,
					distribution: "linear",
					grid: {
						color: "rgba(255, 255, 255, 0.3)",
					},
				},
				yAxes: {
					beginAtZero: true,
					grid: {
						color: "rgba(255, 255, 255, 0.3)",
					},
				},
			},
			plugins: {
				datalabels: {},
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Subs and captures in time",
				},
			},
		};

		setCurrentDataType("Subscriptions and captures over time");
		setChartType("bar");
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
				<button onClick={chartSubsCapturesTime} className={"cmdDataBtns"}>
					Subs/Captures over time
				</button>
				<button onClick={chartAmosType} className={"cmdDataBtns"}>
					Types of Amos
				</button>
				<button onClick={chartAmosAndUser} className={"cmdDataBtns"}>
					Users and Amos
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
