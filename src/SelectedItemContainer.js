import { connect } from 'react-redux'
import { itemSelected} from './actions'
import MuokkausLomake from './MuokkausLomake'

function mapStateToProps(state){
    
    return { 
        title: state,
        body : state,
        id: state
    }
}

<MuokkausLomake></MuokkausLomake>
