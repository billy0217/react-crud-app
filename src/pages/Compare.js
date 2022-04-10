import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Compare = () => {
	const [compareList, setCompateList] = useState([]);

	useEffect(() => {}, []);

	const getCompareList = () => {
		const compareList = JSON.parse(localStorage.getItem('compareList'));

		if(compareList.length > 0){

		}
	}

	return (
		<div className="container">
			<div className="row">
				<div className="row align-items-md-center mb-3">
					<div className="col-sm-9">
						<h1 className="display-4 mb-2">Compare Horse Detail</h1>
					</div>
					<div className="col-sm-3">
						<Link to={`/`} className="px-2 link-dark">Back to List</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Compare;