import { connect } from 'react-redux'
 
import { getAccessToken, getContent } from '../../actions';
import Component from './layout.js'

const mapStateToProps = (state) => {
    return {
      token: state.mainReducer.token,
      courseDescription: state.mainReducer.courseDescription,
      simpleLists: state.mainReducer.simpleLists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getToken: () => dispatch(getAccessToken()),
      getContent: () => dispatch(getContent())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Component)