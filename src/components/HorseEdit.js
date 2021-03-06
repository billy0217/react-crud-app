import * as React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function withRouter(Children){
	return(props)=>{
        const data  = {state: useParams()};
        return <Children {...props} data = {data}/>
    }
}

class HorseEdit extends React.Component {
	
	constructor(props) {

		super(props);
		
		this.state = {
			id: props.data.state.id,
			name: "",
			favouriteFood: "",
			height: "",
			weight: "",
			error: "",
			message: ""
		};
	
		this.handleInputChange = this.handleInputChange.bind(this);
		
	}

	componentDidMount(){
		this.getHorseData(this.state.id);
	}

	handleInputChange = (e) => {
		
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}

	getHorseData = async (id) => {
		await axios.get(`http://localhost:3016/horse/${id}`).then(
			(res) => {
				console.log(res.data)
				if(res.status === 200 && res.data !== ""){
					const data = res.data;
					this.setState({
						name: data.name,
						favouriteFood: data.profile.favouriteFood,
						height: data.profile.physical.height,
						weight: data.profile.physical.weight,
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
	addNewHorse = async (e) => {
		e.preventDefault();
		const id = this.state.id;
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
			`http://localhost:3016/horse/${id}`,
			data
			,config
		).then(
			(res) => {
				if(res.status === 200 && res.data !== ""){
					this.setState({
						message: "Successfull Update Horse detail"
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
						<div className="row align-items-md-center mb-3">
							<div className="col-sm-8">
								<h1 className="display-4 mb-2">Edit Horse Detai</h1>
							</div>
							<div className="col-sm-4">
								<Link to={`/horse/${this.state.id}`} className="px-2 link-dark">Back to Detail</Link>
							</div>
						</div>
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
							<button type="submit" className="btn btn-primary">Update</button>
						</form>
					</div>
				</div>
			</div>
		);
	}	
}

export default withRouter(HorseEdit);