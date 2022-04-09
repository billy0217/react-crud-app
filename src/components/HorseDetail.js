import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HorseDetail = (props) => {
	console.log(props.id);

	const [detail, setDetail] = useState([]);

	useEffect(()=>{
		getDetails();
	},[]);

	const isEditable = props.editable;

	const getDetails = async () => {
		const data = await axios.get(`http://localhost:3016/horse/${props.id}`)
								.then((res) => {
									console.log(res.data);
									setDetail(res.data);
								})
								.catch((err) => {
									console.log(err.message);
								})
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="row">
						<div className="col-sm-8">
							<h4>Name: {detail?.name}</h4>
						</div>
						{isEditable && <div className="col-sm-4"><Link to={'/'}>Back to list</Link><Link to={`/horse/edit/${detail.id}`}>Edit</Link></div>}
					</div>
					
					<div className="table-responsive">
						<table className="table table-borderless">
							<tbody>
								<tr>
									<th colSpan="2">
										Profile
									</th>
								</tr>
								<tr>
									<th>
										Favourite Food
									</th>
									<td>{detail?.profile?.favouriteFood}</td>
								</tr>
								<tr>
									<th colSpan="2">
										Physical
									</th>
								</tr>
								<tr>
									<th>
										Height
									</th>
									<td>{detail?.profile?.physical?.height}</td>
								</tr>
								<tr>
									<th>
										Weight
									</th>
									<td>{detail?.profile?.physical?.weight}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HorseDetail;