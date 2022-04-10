
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import AddCompareList from "./AddCompareList";

const HorseList = () => {
	
	const [horseList, setHorseList] = useState([]);
	const [errors, setError] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(10);
	
	useEffect(()=> {
		getHouseList();
	},[])

	const getHouseList = async () => {
		await axios.get('http://localhost:3016/horse')
					.then( (res) => {
						setHorseList(res.data);
					})
					.catch((err) => {
						setError(err.message);
					})

	}

	// Get current Items
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFistItem = indexOfLastItem - itemPerPage;
	const currentItems = horseList.slice(indexOfFistItem, indexOfLastItem);

	// change page 
	const paginate = (pageNumber) =>{
		setCurrentPage(pageNumber);
	}

	return (
		<div className="row">
			<div className="col-sm-12">
				<div className="row align-items-md-center">
					<div className="col-sm-8">
						<h2 className="display-4 mb-2">Horse List</h2>
					</div>
					<div className="col-sm-4">
						<Link to={'/horse/add'} className="px-2 btn me-3 btn-info">Add New Horse</Link>
					</div>
				</div>
				
			</div>
			<div className="col-sm-12">
				<ul className="list-group mb-4">
					{
						currentItems?.map((horse) => {
							
							return(
								<li className="list-group-item" key={horse.id}>
									<div className="row">
										<div className="col-sm-12 col-md-6">
											<h4 className="mt-2 mb-3 ">{horse.name}</h4>
										</div>
										<div className="col-sm-12 col-md-6">
											<Link to={`/horse/${horse.id}`} className="btn btn-primary mt-2 me-2 mb-2">
												View Detail
											</Link>
											<Link to={`/horse/edit/${horse.id}`} className="px-2 btn me-2 mt-2 mb-2 btn-success" id={horse.id}>Edit</Link>
											<AddCompareList id={horse.id} />
										</div>
									</div>
									
									
								</li>
							)
							
						})
					}
				</ul>
				<Pagination 
					itemsPerPage={itemPerPage}
					totalItems={horseList.length}
					paginate={paginate}
				/>
				{
					errors && 
					<div className="alert alert-danger" role="alert">{errors}</div>
				}
			</div>
		</div>
	)
}

export default HorseList;