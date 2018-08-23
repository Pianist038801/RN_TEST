import { connect } from 'react-redux'
import Component from './layout.js'

const mapStateToProps = (state) => {
    return {
      simpleLists: state.mainReducer.simpleLists,
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)