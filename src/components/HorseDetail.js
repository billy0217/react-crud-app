import axios from "axios";
import React, { useEffect, useState } from "react";

const HorseDetail = (props) => {
	console.log(props);

	const [detail, setDetail] = useState([]);

	useEffect(()=>{
		getDetails();
	},[]);

	const getDetails = async () => {
		const data = await axios.get(`http://localhost:3016/horse/${props.id}`)
								.then((res) => {
									console.log(res);
									setDetail(res.data);
								})
								.catch((err) => {
									console.log(err.message);
								})
	}

	return (
		<div>
			detail
		</div>
	)
}

export default HorseDetail;