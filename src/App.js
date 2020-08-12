import React from 'react';
import Lomake from './Lomake';
import Lista from './Lista';
import MuokkausLomake from './MuokkausLomake';
import './App.css';
import './CommonCSS.css';



class App extends React.Component {
	
	constructor(props) {
		super(props);

	    this.state = {
			url : 'http://jsonplaceholder.typicode.com/posts',
			valittuID: 0,
			valittuOtsikko: "",
			itemSelected: false,
		};
	}

	
	callBack(Body, Otsikko, Id) {		
		
		this.setState(
			{itemSelected: true,
			 valittuID: Id,
			 valittuOtsikko: Otsikko,
			 body: Body});

			 console.log(this.state.email);
		
	}
  
	render () {
				
		return (

		<div>
		<h1 className ="Otsikko"> Frontti App</h1>
		
			<div>
			<MuokkausLomake className="MuokkasLomake" shouldRender={this.state.itemSelected} 
							itemBody={this.state.body}	itemID = {this.state.valittuID} 
							itemOtsikko = {this.state.valittuOtsikko }/>
			
			</div> 
		
			<div> 
				<Lomake className="LuontiLomake" url = {this.state.url}/>
			</div>		
		
			<div>
				<Lista className="Lista" callBack={this.callBack.bind(this)}/>
			</div>
		
		</div>
		
		)
	}
}

export default App;
