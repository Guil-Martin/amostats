import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { useSelector } from "react-redux";

const Chart = () => {
	const { chartData } = useSelector((state) => state.chartSlice);

	if (chartData === null) return <div>No chart generated yet</div>;

	const ChartType = ({ data, options }) => {
		if (chartData.type === "pie") {
			return <Pie data={data} options={options} />;
		} else if (chartData.type === "bar") {
			return <Bar data={data} options={options} />;
		}
		return <Line data={data} options={options} />;
	};

	const config = {
		data: JSON.stringify(chartData.data),
		options: JSON.stringify(chartData.options),
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
