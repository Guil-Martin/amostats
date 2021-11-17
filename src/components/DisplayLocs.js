import React, { useEffect } from "react";
import { serviceGetAllLocs } from "../services/amosService";
import { useSelector, useDispatch } from "react-redux";

const DisplayLocs = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.userSlice);
	const { locList } = useSelector((state) => state.amosSlice);

	useEffect(() => {
		serviceGetAllLocs(dispatch, currentUser);
	}, [dispatch, currentUser]);

	return (
		<div className={"wrappers locWrapper"}>
			{locList.length > 0 &&
				locList.map((item) => {
					return (
						<div key={item.catches.id} className={"elements locElement"}>
							<div className="value">Amos ID: {item.catches.id}</div>
							<div className="value">Species: {item.species}</div>
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
