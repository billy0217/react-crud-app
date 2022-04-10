import React from "react";
import {Route, Routes} from 'react-router-dom'
import HorseAdd from "../components/HorseAdd";
import HorseEdit from "../components/HorseEdit";
import Compare from "./Compare";
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
				<Route path="add" element={<HorseAdd />} />
			</Route>
			<Route path="compare" element={<Compare />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		
	)
}

export default Pages;