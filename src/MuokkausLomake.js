import React from 'react';
import { connect } from 'react-redux';

class MuokkausLomake extends React.Component {

	constructor(props) {
		super(props);

		this.sendPUT = this.sendPUT.bind(this);
		this.sendDELETE = this.sendDELETE.bind(this);
		this.Muutos = this.Muutos.bind(this);
		
		this.state = {
			newPUTValue: null,
			j : '' 
		};
	}

	Muutos(event) {	
		this.setState({
			newPUTValue: event.target.value
		});
	}

	sendPUT() {
		
		fetch('http://jsonplaceholder.typicode.com/posts/' + this.props.itemID, {
			method: "PUT",
			body: JSON.stringify( {
				id: this.props.itemID,
				body: this.props.newPUTValue
			}),
			headers: {"Content-type": "application/json"} 
			}
		)
		.then(response => console.log(response))
	}
	
	// lähettää DELETE requestin sillä id arvolla jolla lomake on luotu
	sendDELETE() {

		console.log(this.props.itemID);

		fetch('http://jsonplaceholder.typicode.com/posts/' + this.props.itemID, {
			method: "DELETE"
		})
		.then(response => console.log(response))
	}
	
	
	render() {
		
	
			return(
				<div>
				<h2> DETAILS  </h2>
				<label> Valittu ID: {this.props.itemID} </label><br/>
				<label> Valittu Otsikko: {this.props.itemOtsikko}</label><br/>
				<label> Valittu Sisältö: {this.props.itemBody}</label><br/><br/>
		
				
				<input type="text" onChange={this.Muutos}></input>		
				<button value = {this.props.itemID} onClick={this.sendPUT}> Save Changes </button><br/>
				
				<button onClick={this.sendDELETE}> DELETE </button>
				</div>
			)
	}
}

function mapStateToProps(state) {

	return {
		itemID: state.itemSelected.selectedId,
		itemOtsikko: state.itemSelected.selectedTitle,
		itemBody: state.itemSelected.selectedBody
	}
}

export default connect(mapStateToProps)(MuokkausLomake)