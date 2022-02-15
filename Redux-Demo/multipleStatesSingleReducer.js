//redux- demo 

//Actions 

const BUY_CAKE='BUY_CAKE' 
const BUY_ICECREAM='BUY_ICEREAM'

//Action Creators 

function buyCake(){
    return {
        type:BUY_CAKE
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM
    }
}

//Reducers

const initialState={
    numOfCakes:10,
    numOfIceCreams:20
} 

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }

        case BUY_ICECREAM:return {
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }

        default:return state
    }
}

//create a redux store
const redux=require('redux')
const createStore=redux.createStore 
const store=createStore(reducer) 
console.log('Initial State:',store.getState()) 

//subscribe to it
const unsubscribe=store.subscribe(()=>console.log('updated state:',store.getState())) 

//dispatch actions
store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake()) 
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()