import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="c-header">
			<div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
				<div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
					<Link to={'/'} className="nav-link link-dark">React Crud APP</Link>
				</div>
				<div className="col-12 col-lg-auto mb-3 mb-lg-0">
					<ul className="nav">
						<li className="nav-item">
							<Link to={'/horse/add'} className="nav-link link-dark px-2">Add New Horse</Link>
						</li>
						<li className="nav-item">
							<Link to={'/compare'} className="nav-link link-dark px-2">View Compare</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header;