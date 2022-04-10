import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class HorseAdd extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			favouriteFood: "",
			height: "",
			weight: "",
			error: "",
			message: ""
		};
	
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange = (e) => {
		
		const target = e.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		});
	}

	addNewHorse = async (e) => {
		e.preventDefault();

		const data = {
			name: this.state.name,
			
			profile: {
				favouriteFood: this.state.favouriteFood,
				physical: {
					height: this.state.height? this.state.height : 0,
					weight: this.state.weight? this.state.weight : 0
				}
			}
		};

		const config = { headers: {'Content-Type': 'application/json; charset=utf-8'} };
		await axios.put(
			'http://localhost:3016/horse',
			data
			,config
		).then(
			(res) => {
				if(res.status === 200 && res.data !== ""){
					this.state({
						name: "",
						favouriteFood: "",
						height: "",
						weight: "",
						message: "Successfull added new Horse detail"
					});
				}
			}
		).catch(
			(err) => {
				this.setState({
					error: err
				});
			}
		);
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<h1 className="mb-5">Add New Horse Detail</h1>
						{
							this.state.error && 
							<div className="alert alert-danger" role="alert">{this.state.error}</div>
						}
						{
							this.state.message &&
							<div className="alert alert-success" role="alert">
								{this.state.message} <Link to={"/"}>Back to list</Link>
							</div>
						}
						<form onSubmit={this.addNewHorse}>
							<div className="mb-3 d-flex justify-content-start">
								<label 
									className="form-label flex-shrink-0">
									Horse Name
								</label>
								<input 
									type="text" 
									className="form-control flex-grow-auto ms-3"
									name="name"
									value={this.state.name}
									onChange={this.handleInputChange}
									required/>
							</div>
							<div className="mb-3 d-flex justify-content-start">
								<label
									className="form-label flex-shrink-0">
									Favourite Food
								</label>
								<input 
									type="text" 
									className="form-control flex-grow-auto ms-3"
									name="favouriteFood"
									value={this.state.favouriteFood}
									onChange={this.handleInputChange}
								/>
							</div>
							<div className="mb-3 d-flex justify-content-start">
								<label
									className="form-label flex-shrink-0">
									Physical Height
								</label>
								<input 
									type="number"
									step="0.01"
									min="0"
									className="form-control flex-grow-auto ms-3"
									name="height"
									value={this.state.height}
									onChange={this.handleInputChange} 
								/>
							</div>
							<div className="mb-3 d-flex justify-content-start">
								<label
									className="form-label flex-shrink-0">
									Physical Weight
								</label>
								<input 
									type="number"
									step="0.01"
									min="0"
									name="weight"
									className="form-control flex-grow-auto ms-3"
									value={this.state.weight}
									onChange={this.handleInputChange} 
								/>
							</div>
							<button type="submit" className="btn btn-primary">Add New</button>
						</form>
					</div>
				</div>
			</div>
		);
	}	
}

export default HorseAdd;