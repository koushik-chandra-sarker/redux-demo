{ /*async action creator->
    1.axios -> Request to an API end Point 
    2.redux-thunk -> Define async action creator
    middleware
    command -> npm install axios redux-thunk
*/}

const { createStore, applyMiddleware } = require("redux")
const { default: thunkMiddleware } = require("redux-thunk")
const { default: Axios } = require("axios")

const initialState = {
    loading: false,
    users: [],
    error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAINURE = 'FETCH_USERS_FAINURE'

// action start 
const fetchUsersRequest =()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSeccess =()=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure =(users)=>{
    return {
        type: FETCH_USERS_FAINURE,
        payload : error
    }
}
// action end 

// reducer start 

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload
            }

        case FETCH_USERS_FAINURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
    }
}


const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response =>{
            // Response.data is the array of users 
            users = Response.data.map(user => user.id)
            dispatch(fetchUsersSeccess(users))
        })
        .catch(error =>{
            // error.message is the error despripton 
            dispatch(fetchUsersFailure(error.message))
        })
    }
}


const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=> { console.log(store.getState())})
store.dispatch(fetchUsers())