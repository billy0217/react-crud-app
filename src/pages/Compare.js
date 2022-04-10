import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HorseDetail from "../components/HorseDetail";

const Compare = () => {
	const [compareList, setCompateList] = useState([]);
	const [displayMessage, setDisplayMessage] = useState(false);

	useEffect(() => {
		getCompareList()
	}, []);

	const getCompareList = () => {
		const compareItems = JSON.parse(localStorage.getItem('compareList'));

		if(compareItems){
			setCompateList(compareItems);
			setDisplayMessage(false)
			if(compareItems.length === 0){
				setDisplayMessage(true)
			}
		}else{
			setDisplayMessage(true)
		}
	}

	const removeCompareItem = (id) => {
		const compareItems = JSON.parse(localStorage.getItem('compareList'));
		console.log(compareItems)
		for( var i = 0; i < compareItems.length; i++){ 
			if ( compareItems[i] === id) { 
				compareItems.splice(i, 1); 
			}
		}
		localStorage.setItem('compareList', JSON.stringify(compareItems));
		setCompateList(compareItems);
		getCompareList();
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
				<div className="row">
					{
						compareList?.map((item)=>(
							<div key={item} className="col-md-6">
								<HorseDetail id={item} editable={false}/>
								<button className="btn btn-danger" onClick={(e)=>{ removeCompareItem(item)}}>Rmeove from List</button>
							</div>
						))
					}
					{displayMessage && 
						<div className="alert alert-danger" role="alert">No Horses to Compare, please add one</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Compare;