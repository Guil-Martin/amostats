import React, { useEffect } from "react";
import { serviceGetAllUsers } from "../services/amosService";
import { useSelector, useDispatch } from "react-redux";

const DisplayUsers = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.userSlice);
	const { userList } = useSelector((state) => state.amosSlice);

	useEffect(() => {
		serviceGetAllUsers(dispatch, currentUser);
	}, [dispatch, currentUser]);

	// connected_at: "2021-11-15T07:35:31.000Z"
	// created_at: "2021-11-15T07:35:31.349Z"
	// email: "jm@gmail.com"
	// id: "073f94f4-d83f-40c7-9bc8-1d346ade4d0a"
	// name: "jm"

	return (
		<div className={"wrappers userWrapper"}>
			{userList.length > 0 &&
				userList.map((item) => {
					return (
						<div key={item.id} className={"elements userElement"}>
							<div className={"value"}>Id: {item.id}</div>
							<div className={"value"}>Name: {item.name}</div>
							<div className={"value"}>Email: {item.email}</div>
							<div className={"value"}>Created at: {item.created_at}</div>
							<div className={"value"}>
								Last connection: {item.connected_at}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default DisplayUsers;
