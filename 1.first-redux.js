const { createStore } = require("redux"); //or 
// const redux = require("redux")
// const createStore =  redux.createStore;

// action start
const BYE_CAKE = "BYE_CAKE";
function bye_cake(){
    return{
        type:BYE_CAKE,
        info:"First redux app"
    }
}
// action end 

// create a state 
const initialState = {
    numOfCakes:10
}
// creare a reducer 
const reducer = (state = initialState, action)=>{
        switch(action.type){
            case BYE_CAKE: return{
                numOfCakes: state.numOfCakes - 1
            }
            default: return state
        }
}



// Store Methods
// getState()
// dispatch(action)
// subscribe(listener)

// create a store 
const store = createStore(reducer)
// print initial state 
console.log("Iitial state", store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated state", store.getState()))

store.dispatch(bye_cake())
store.dispatch(bye_cake())
store.dispatch(bye_cake())
unsubscribe()