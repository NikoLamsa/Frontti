import React from 'react';
import './CommonCSS.css';

class Lomake extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.submitMethod = this.submitMethod.bind(this);
		
		this.state = {
			title: "",
			body: ""
		}

		this.muutos = this.muutos.bind(this);
	}
	 
	
	muutos(event) {
		this.setState({body: event.target.value})
	}

	submitMethod(event) {
		
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'DEFAULT OTSIKKO',
				body: this.state.body,
				userID: 1
			}),

			headers: { "Content-type": "application/json; charset=UTF-8"}
			
		})
		.then(response => console.log(response))		
	}
	
	render () {
		
		return (
		<div className = "lomakeComponent"> 
		<h3>Tallenna uutta tietoa </h3>
		palvelin: <br/> {this.props.url}
		<hr/>	
			
			<label> Viesti </label><br/>
			<input type="text" id="body" onChange={this.muutos} value={this.state.body} /><br/>
			<button onClick={this.submitMethod}> Send! </button>
		
		</div> 
		)
		
	}
}

export default Lomake;