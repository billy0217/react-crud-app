import React from "react";
import {Route, Routes} from 'react-router-dom'
import HorseEdit from "../components/HorseEdit";
import Home from "./Home";
import Horse from "./Horse";
import NotFound from "./NotFound";

const Pages = () => {

	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/horse">
				<Route index element={<Horse />} />
				<Route path=":id" element={<Horse />} />
				<Route path="edit/:id" element={<HorseEdit />} />
			</Route>
			
			<Route path="*" element={<NotFound />} />
		</Routes>
		
	)
}

export default Pages;