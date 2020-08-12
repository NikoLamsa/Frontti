import React from 'react';
import ListaItem from './ListaItem';


class Lista extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			url: 'http://jsonplaceholder.typicode.com/posts',
			lista: [],
		};
		
		this.callBackHandler = this.callBackHandler.bind(this);
	}
	
	
	callBackHandler(Body, Otsikko, Id) {		
		console.log("Lista callBackTrigger");
		const {callBack} = this.props;
		callBack(Body, Otsikko, Id);
	}
	
	// lue Apilta uusi listaus tässä vaiheessa
	componentDidMount() {
		
		fetch(this.state.url)
		.then(response => response.json())
		.then((data) => this.setState({ lista: data  }))
	}
	

	render () {		
				
		return (
				
				// mappaa datan listaksi ruudulle
				this.state.lista.map( (data) => (
				<div className="listaDisplay">
					<ListaItem itemId={data.id} title={data.title} body = {data.body} userId = {data.userId}
					callBack={this.callBackHandler}/>
					<hr/>
				</div>
				
				))
				
		)
	}

}

export default Lista;