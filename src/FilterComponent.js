import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterByTitle, setFilterById, resetFilter } from './actions';

function FilterComponent (props) {

    const [nameFilterInput, setNameFilter] = useState('')
    const [idFilterInput, setIdFilter] = useState(0)

    function onChangeHandler(event) {
        setNameFilter(event.target.value);
        console.log(event.target.value)
    }

    function onChangeHandler2(event) {
        setIdFilter(event.target.value);
        console.log(event.target.value)
    }


    return (

        <div>

            <label>Title: </label>
            <input type='text' onChange= {event => onChangeHandler(event)}></input><br/>
            <button onClick={() => props.dispatch(setFilterByTitle(nameFilterInput))}> Search </button><br/>

            <label>ID: </label><br/>
            <input onChange= {event => onChangeHandler2(event)}></input>     
            <button onClick={() => props.dispatch(setFilterById(idFilterInput))}> Search </button><br/>
            <br/>
            <br/>
            <label>
                Current Filter: {props.filterName}  ,  {props.filterID}, {props.filterType}
            </label>
            <br/>
            <br/>
            <button onClick={() => props.dispatch(resetFilter())}>Reset filters</button>
        </div>
    )

}

function mapStateToProps(state) {

	return {
		filterName: state.setGetFilter.filterText,
		filterID: state.setGetFilter.FilterId,
		filterType: state.setGetFilter.currentFilter
	}
}

export default connect(mapStateToProps)(FilterComponent);