import React, { useEffect } from "react";
import { serviceGetAllAmos } from "../services/amosService";
import { useSelector, useDispatch } from "react-redux";

const DisplayAmos = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.userSlice);
	const { amosList } = useSelector((state) => state.amosSlice);

	useEffect(() => {
		serviceGetAllAmos(dispatch, currentUser);
	}, []);

	return (
		<div className={"container"}>
			<div className={"amosWrapper"}>
				{amosList.length > 0 &&
					amosList.map((item) => {
						return (
							<div key={item.id} className={"amosElement"}>
								{item.name}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default DisplayAmos;
