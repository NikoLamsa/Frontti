import React from 'react';
import './App.css';
import './CommonCSS.css';

import ListComponent from './ListComponent';
import Lomake from './Lomake';
import MuokkausLomake from './MuokkausLomake';
import FilterComponent from './FilterComponent';


class App extends React.Component {
	
	constructor(props) {
		super(props);

	    this.state = {
			url : 'http://jsonplaceholder.typicode.com/posts',			
		};
	}

	render () {
				
		return (

		<div>
		<h1 className ="Header"> Frontti App</h1>
		
			<div className='MuokkausLomake'>
			<MuokkausLomake shouldRender={this.state.itemSelected} 
							itemBody={this.state.body}	itemID = {this.state.valittuID} 
							itemOtsikko = {this.state.valittuOtsikko }/>
			
			</div> 
		
			<div className="LuontiLomake"> 
				<Lomake url = {this.state.url}/>
			</div>

			<div className='FilterButtonsArea'>
				<FilterComponent className='FiltersButtonsArea'/>
			</div>

			<div className ='ListaDisplay'>
				<ListComponent className="hookCounter"/>
			</div>
		</div>
		
		)
	}
}

export default App;
