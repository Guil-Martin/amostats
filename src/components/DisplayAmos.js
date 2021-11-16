import React, { useEffect } from "react";
import { serviceGetAllAmos } from "../services/amosService";
import { useSelector, useDispatch } from "react-redux";

const DisplayAmos = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.userSlice);
	const { amosList } = useSelector((state) => state.amosSlice);

	useEffect(() => {
		serviceGetAllAmos(dispatch, currentUser);
	}, [dispatch, currentUser]);

	return (
		<div className={"wrappers amosWrapper"}>
			{amosList.length > 0 &&
				amosList.map((item) => {
					return (
						<div key={item.id} className={"elements amosElement"}>
							<img src={item.image_path} alt="Amos" />
							<div className={"value"}>ID: {item.id}</div>
							<div className={"value"}>Amos ID: {item.animal_id}</div>
							<div className={"value"}>Name: {item.name}</div>
							<div className={"value"}>Level: {item.level}</div>
							<div className={"value"}>Species: {item.species}</div>
							<div className={"value"}>User id: {item.user_id}</div>
							<div className={"value"}>Created at: {item.created_at}</div>
							<div className={"value"}>Updated at: {item.updated_at}</div>
						</div>
					);
				})}
		</div>
	);
};

export default DisplayAmos;
