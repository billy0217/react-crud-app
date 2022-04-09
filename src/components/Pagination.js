import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumber = [];

	for( let i =1; i <= Math.ceil(totalItems / itemsPerPage); i++ ){
		pageNumber.push(i);
	}
	
	return (
		<nav>
			<ul className="pagination">
				{
					pageNumber.map(number => (
						<li key={number} className="page-item">
							<button onClick={()=> paginate(number)} className="page-link">
								{number}
							</button>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default Pagination;