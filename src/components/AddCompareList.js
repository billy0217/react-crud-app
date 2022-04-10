import React, { useEffect, useState } from "react";

const AddCompareList = (props) => {

	const [compareList, setCompateList] = useState(false);

	useEffect(()=>{
		console.log(compareList)
		checkCompareList();
	},[compareList])

	const checkCompareList = () => {
		const check = localStorage.getItem('compareList');
		if(check){
			const checkCompareList = JSON.parse(localStorage.getItem('compareList'));
			if(checkCompareList.includes(props.id)){
				setCompateList(true);
			}
		}
	}

	const addToCompareList = () => {
		const compareList = [];
		const check = localStorage.getItem('compareList');
		if(check){
			const newCompareList = JSON.parse(localStorage.getItem('compareList'));
			if(newCompareList.includes(props.id)){
				alert("Already exists on the compare list"); 
				return
			}
			newCompareList.push(props.id);
			localStorage.setItem('compareList', JSON.stringify(newCompareList));
		}else{
			compareList.push(props.id);
			localStorage.setItem('compareList', JSON.stringify(compareList));
			alert("Added to compare list");
		}
		setCompateList(true);
	}

	const removeFromCompareList = () => {
		const compareList = JSON.parse(localStorage.getItem('compareList'));

		for( var i = 0; i < compareList.length; i++){ 
			if ( compareList[i] === props.id) { 
				compareList.splice(i, 1); 
			}
		}
		localStorage.setItem('compareList', JSON.stringify(compareList));
		setCompateList(false);
	}

	return (
		<>
			{compareList ? 
				<button className="px-2 btn mt-2 me-2 mb-2 btn-danger" onClick={removeFromCompareList}>Remove from Compare List</button>
				: 
				<button className="px-2 btn mt-2 me-2 mb-2 btn-light" onClick={addToCompareList}>Add to Compare List</button>}
			
		</>
	)
}

export default AddCompareList;