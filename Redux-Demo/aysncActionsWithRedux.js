//async actions with redux demo 

const initialState={
    loading:false,
    users:[],
    error:''
}

//actions
const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST' 
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE' 

//action creators 
const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=()=>{
    return {
        type:FETCH_USERS_SUCCESS
    }
}

const fetchUsersFailure=()=>{
    return{
        type:FETCH_USERS_FAILURE
    }
}

//reducers
const reducer=(state=initialState,action)=>{
  switch(action.type){

      case FETCH_USERS_REQUEST:
          return {
              ...state,
              loading:true
          }
    
      case FETCH_USERS_SUCCESS:
          return {
              ...state,
              loading:false,
              users:action.payload,
              error:''
          }

      case FETCH_USERS_FAILURE:
          return {
              ...state,
              loading:false,
              users:[],
              error:''
          }
  }
}


//special action creator which can make network requests - not a pure function as normal action creators - it returns a function not a type
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response=>{
                 const users=response.data 
                 dispatch(fetchUsersSuccess(users))
                 console.log(users)
             })
             .catch(error=>{
                 dispatch(fetchUsersFailure(error.message))
             })
    }
}

const { default: axios } = require('axios')
const redux=require('redux') 
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware 

//import thunk middleware for async() calls from action creators 
const thunkMiddleware=require('redux-thunk').default 

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchUsers())

