import React from "react";
import { useParams } from 'react-router-dom'
import HorseDetail from "../components/HorseDetail";
import HorseList from "../components/HorseList";

const Horse = () => {
	let params = useParams();

	return (
		<div className="container">
			<div className="row">
				{ 
					params.id ? 
						<HorseDetail id={params.id} editable={true}/>
					: <HorseList />
				}
			</div>
		</div>
	)
}

export default Horse;