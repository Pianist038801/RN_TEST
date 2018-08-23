import axios from 'axios';

const BASE_URL = 'https://apidev.breethe.com/';

export const createUser = () =>
    axios.post(BASE_URL + 'v4/users',
    {
        device: 'html5',
        guest: 1
    }
)

export const getUserToken = (username, password) =>
axios.post(BASE_URL + 'oauth/access_token?grant_type=password',
    {
        client_id: 'OMG_ID_ZeB3BCEAohRpyBp',
        client_secret: 'OMG_SECRET_KEY_kW4eksl3PeZzY7z',
        username,
        password
    }
)

export const getContent = () =>
    axios.get(BASE_URL + 'v5/catalogs/default'
)

export const getFavorites = (token) =>
    axios.get(BASE_URL + 'v5/favorites', 
    {
        headers: {Authorization: 'Bearer ' + token}
    }
)

export const getContentState = (id, token) =>
    axios.get(BASE_URL + 'v5/content-states/' + id, 
    {
        headers: {Authorization: 'Bearer ' + token}
    }
)

export const delFavorite = (id, token) =>
    axios.delete(BASE_URL + 'v5/favorites/' + id, 
    {
        headers: {Authorization: 'Bearer ' + token}
    }
)

export const setFavorite = (user_id, id, token) =>
    axios.post(BASE_URL + 'v5/favorites',
    {
        user: {
            user_id,
        },
        content: {
            id,
        }
    },
    {
        headers: {Authorization: 'Bearer ' + token}
    }
)