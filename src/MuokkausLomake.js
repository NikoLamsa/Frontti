import React from 'react';

class MuokkausLomake extends React.Component {

	constructor(props) {
		super(props);

		this.sendPUT = this.sendPUT.bind(this);
		this.sendDELETE = this.sendDELETE.bind(this);
		this.Muutos = this.Muutos.bind(this);
		
		this.state = {
			newEmail: this.props.itemEmail
		};
	}

	Muutos(e) {	

		this.setState({
			newEmail: e.target.value
		});
	}

	sendPUT(event) {
		
		const id = event.target.value;
		console.log(this.state.newEmail);
		
		fetch('http://jsonplaceholder.typicode.com/posts/' + id, {
			method: "PUT",
			body: JSON.stringify( {
				id: this.props.itemID,
				body: this.props.itemEmail
			}),
			headers: {"Content-type": "application/json"} 
			}
		)
		.then(response => console.log(response))
	}
	
	// lähettää DELETE requestin sillä id arvolla jolla lomake on luotu
	sendDELETE(event) {

		const id = event.target.value;
		console.log('http://jsonplaceholder.typicode.com/posts/' + id);

		fetch('http://jsonplaceholder.typicode.com/posts/' + id, {
			method: "DELETE"
		})
		.then(response => console.log(response))
	}
	
	
	render() {
		
		if (this.props.shouldRender) {
			
			console.log("passed IF");
			return(
				<div>
				<label> Valittu ID: {this.props.itemID} </label><br/>
				<label> Valittu Otsikko: {this.props.itemOtsikko}</label><br/>
				<label> Valittu Sisältö: {this.props.itemBody}</label><br/>
		
				
				<input type="text" onChange={this.Muutos}></input>		
				<button value = {this.props.itemID} onClick={this.sendPUT}> Save Changes </button><br/>
				
				<button value={this.props.itemID} onClick={this.sendDELETE}> DELETE </button>
				</div>
			)
		} 
		else {
			console.log("did not pass IF");
			return (<br/>) 
		}

	}
}

export default MuokkausLomake;