import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
	return (
		<div className={"chart"}>
			<Line
				// width={400}
				// height={600}
				data={{
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of votes",
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)",
							],
							borderWidth: 1,
						},
						{
							label: "Quantity",
							data: [44, 120, 45, 78, 12, 455],
							backgroundColor: "orange",
							borderColor: "red",
						},
					],
				}}
				options={{
					maintainAspectRatio: false,
					legend: {
						labels: {
							fontSize: 20,
						},
					},
				}}
			/>
		</div>
	);
};

export default LineChart;
