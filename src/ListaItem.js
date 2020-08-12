import React from 'react';

class ListaItem extends React.Component {

	constructor(props) {
		super(props);
		this.itemWasClicked = this.itemWasClicked.bind(this);
	}
	
	//Email, Username, Id
	itemWasClicked(event) {
		event.preventDefault();
		const {callBack} = this.props;
		callBack(this.props.body, this.props.title, this.props.itemId);
	}
	
	render() {
		return(
	<h2 onClick={this.itemWasClicked}> {this.props.title} </h2>
		)
	}
}

export default ListaItem;