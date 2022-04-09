import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-12">
					<h1 className="mb-4">Page Not Found</h1>
					<Link to={'/'} className="btn btn-warning" >Back to Home Page</Link>
				</div>
			</div>
		</div>
	)
}

export default NotFound;