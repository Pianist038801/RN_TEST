import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { 
    createUser,
    getUserToken,
    getContent,
    getContentState,
    setFavorite,
    delFavorite,
    getFavorites,
} from '../service/api'
import { setData, getContentState as retrieveState } from '../actions'

function* getAccessToken(action) {
    const response = yield call(createUser);
    if (response.data.error)
    {
        
    }
    else {
        const username = response.data.users.email
        const userId = response.data.users.statistics.user_id
        const password = username.substr(0, username.indexOf('@'))
        const tokenResponse = yield call(getUserToken, username, password);
        if (tokenResponse.data.error)
        {

        }
        else
        {   
            const { access_token } = tokenResponse.data;
            yield put(setData({token: access_token, userId}))
        }
    }
    const { data } = response;
}

function* getState(action) {
    const getToken = (state) => state.mainReducer.token
    const token = yield select(getToken)
    const response = yield call(getContentState, action.id, token)
    if(response.data){
        yield put(setData({
            favorite: response.data.favorite_id,
            locked: !response.data.is_accessible,
        }))
    }
}

function* getMeditationContent(action) {
    const response = yield call(getContent);
    const { contents } = response.data;
    const _course = contents.find(content => content.discriminator_type == 'Course')
    const _course_description = _course.title + '\r\n\r\n' + _course.description
    const _simpleLists = []
    // Save to Redux store
    _course.entries.sort((a,b) => a.position - b.position)
    for (let i = 0; i < _course.entries.length; i ++)
    {
        const _simpleListId = _course.entries[i].content_id
        const _simpleList = contents.find(content => content.id == _simpleListId)
        const _meditations = []
        _simpleList.entries.sort((a,b) => a.position - b.position)
        for(let j = 0; j < _simpleList.entries.length; j++)
        {   
            const _meditationId = _simpleList.entries[j].content_id
            const _meditation = contents.find(content => content.id == _meditationId)
            _meditations.push({
                title: _meditation.title,
                description: _meditation.description,
                id: _meditationId
            })
        }
        _simpleLists.push({
            title: _simpleList.title,
            description: _simpleList.description,
            meditations: _meditations,
            id: _simpleListId
        })
    }
    yield put(setData({courseDescription: _course_description, simpleLists: _simpleLists}))
}

function* like(action){
    const getToken = (state) => state.mainReducer.token
    const token = yield select(getToken)
    const getUserId = (state) => state.mainReducer.userId
    const userId = yield select(getUserId)
    const response = yield call(setFavorite, userId, action.id, token)
    if(response.data){
        yield put(retrieveState(action.id))
    }
}

function* dislike(action){
    const getToken = (state) => state.mainReducer.token
    const token = yield select(getToken)
    const getFavoriteId = (state) => state.mainReducer.favorite
    const favId = yield select(getFavoriteId)
    const response = yield call(delFavorite, favId, token)
    yield put(retrieveState(action.id))
    
}

function* getLikes(action){
    const getToken = (state) => state.mainReducer.token
    const token = yield select(getToken)
    const response = yield call(getFavorites, token)
    if(response.data){
        yield put(setData({favorites: response.data}))
    }
}

function* mySaga() {
  yield takeLatest("GET_ACCESS_TOKEN", getAccessToken);
  yield takeLatest("GET_CONTENT", getMeditationContent);
  yield takeLatest("GET_CONTENT_STATE", getState);
  yield takeLatest("SET_FAVORITE", like);
  yield takeLatest("DEL_FAVORITE", dislike);
  yield takeLatest("GET_FAVORITES", getLikes);
}

export default mySaga;
