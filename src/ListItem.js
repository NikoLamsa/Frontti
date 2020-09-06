import React, { useState, useEffect } from 'react';
import './CommonCSS.css';
import { connect } from 'react-redux'
import { itemSelected } from './actions';

function ListItem (props) {

const [StateData, setStateData] = useState(props);

useEffect( () => {
    setStateData(props);    
})

return(

<h3 className= "listaItem" onClick={() => props.dispatch(itemSelected(
    StateData.ItemId, StateData.Title, StateData.Body))}> 
    {StateData.ItemId} {StateData.Title}
    </h3>

)

}

export default connect()(ListItem)