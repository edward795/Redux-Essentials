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

const initialCakeState={
    numOfCakes:10
}

const initialIceCreamState={
    numOfIceCreams:20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1           
             }

        default:return state
    }

    
}



const redux=require('redux')

//combine reducers to create rootReducer
const combineReducer=redux.combineReducers 
const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

//create a redux store
const createStore=redux.createStore 
const store=createStore(rootReducer) 

console.log('Initial State:',store.getState()) 

//dispatch actions
const unsubscribe=store.subscribe(()=>console.log('updated state:',store.getState())) 
store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake()) 
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()