import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";

const Chart = ({ chartData }) => {
	let config = {
		type: JSON.stringify(chartData.type),
		data: JSON.stringify(chartData.data),
		options: JSON.stringify(chartData.options),
	};

	const ChartType = ({ data, options }) => {
		if (chartData.type === "pie") {
			return <Pie data={data} options={options} />;
		} else if (chartData.type === "bar") {
			return <Bar data={data} options={options} />;
		}
		return <Line data={data} options={options} />;
	};

	return (
		<div className={"chart"}>
			<ChartType
				data={JSON.parse(config.data)}
				options={JSON.parse(config.options)}
			/>
		</div>
	);
};

export default Chart;
