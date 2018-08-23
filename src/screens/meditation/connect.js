import { connect } from 'react-redux'
import Component from './layout.js'
import { getContentState, delFavorite, setFavorite } from '../../actions';

const mapStateToProps = (state) => {
    return {
      locked: state.mainReducer.locked,
      favorite: state.mainReducer.favorite,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContentState: (id) => dispatch(getContentState(id)),
    delFavorite: (id) => dispatch(delFavorite(id)),
    setFavorite: (id) => dispatch(setFavorite(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
