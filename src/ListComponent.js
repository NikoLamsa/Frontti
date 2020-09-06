import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { FilterState, ApiState, apiUpdateDone } from './actions'

function ListComponent(props) {

    const [lista, setLista] = useState([]);
    
    useEffect( () =>
        {
            console.log(props.apiState)
            if (props.apiState === ApiState.COMPLETED) {
                console.log('API test')
                return;
            }

            fetch('http://jsonplaceholder.typicode.com/posts')
		    .then(response => response.json())
            .then((data) => setLista(data))
            
            props.dispatch(apiUpdateDone())
            console.log('API loaded')
        }
    )

    // filter if filterstate is on else map all items
    if (props.filterType === FilterState.NAME_FILTER) {

        return (
            lista.filter(item => item.title.includes(props.filterName)).map(data =>(
                <ListItem Title={data.title} Body={data.body} ItemId={data.id} ></ListItem>
            ))
        )
    }
    
    if (props.filterType === FilterState.ID_FILTER) {

        return(
            lista.filter(item => item.id == props.filterID).map(data=>(
                <ListItem Title={data.title} Body={data.body} ItemId={data.id} ></ListItem>)
            )
        )
    }

    return (


        lista.map((data) => (
            <ListItem Title={data.title} Body={data.body} ItemId={data.id} ></ListItem>
        )
        )
    ) 
}

function mapStateToProps(state) {
    return {
		filterName: state.setGetFilter.filterText,
		filterID: state.setGetFilter.FilterId,
        filterType: state.setGetFilter.currentFilter,
        
        apiState: state.handleApiState.apiState
	}
}

export default connect(mapStateToProps)(ListComponent)