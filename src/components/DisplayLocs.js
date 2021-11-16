import React, { useEffect } from "react";
import { serviceGetAllLocs } from "../services/amosService";
import { useSelector, useDispatch } from "react-redux";

const DisplayLocs = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.userSlice);
	const { locList } = useSelector((state) => state.amosSlice);

	useEffect(() => {
		serviceGetAllLocs(dispatch, currentUser);
	}, []);

	// catches: {
	// 	accuracy: "20.0"
	// 	altitude: "71.0"
	// 	amos_id: "19ee0880-0422-4e34-8440-d0073c0ede71"
	// 	created_at: "2021-10-31T12:16:28.764Z"
	// 	id: "09b2c762-c415-43d4-8349-4ca20c88ddf0"
	// 	lat: "47.0"
	// 	long: "-2.0"
	// 	updated_at: "2021-10-31T12:16:28.764Z"
	// },
	// species: "dog"

	return (
		<div className={"wrappers locWrapper"}>
			{locList.length > 0 &&
				locList.map((item) => {
					return (
						<div key={item.catches.id} className={"elements locElement"}>
							<div className="value">Amos ID: {item.catches.id}</div>
							<div className="value">{item.species}</div>
							<div className="value">Accuracy: {item.catches.accuracy}</div>
							<div className="value">Altitude: {item.catches.altitude}</div>
							<div className="value">lat: {item.catches.lat}</div>
							<div className="value">long: {item.catches.long}</div>
							<div className="value">updated_at: {item.catches.updated_at}</div>
							<div className="value">created_at: {item.catches.created_at}</div>
						</div>
					);
				})}
		</div>
	);
};

export default DisplayLocs;
