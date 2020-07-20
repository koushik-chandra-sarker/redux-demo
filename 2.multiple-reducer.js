const { createStore } = require("redux"); 

// action start
const BYE_CAKE = "BYE_CAKE";
const BYE_ICECREAM = "BYE_ICECREAM";
function bye_cake(){
    return{
        type:BYE_CAKE,
        info:"First redux ACTION"
    }
}
function bye_icecream(){
    return{
        type:BYE_ICECREAM,
        info:"Second redux ACTION"
    }
}

// action end 

// create a state 
const initialState = {
    numOfCakes:10,
    numOfIcecream:20
}
// creare a reducer 
const reducer = (state = initialState, action)=>{
        switch(action.type){
            case BYE_CAKE: return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            case BYE_ICECREAM: return{
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
            default: return state
        }
}

// create a store 
const store = createStore(reducer)
// print initial state 
console.log("Iitial state", store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated state", store.getState()))


store.dispatch(bye_cake())
store.dispatch(bye_cake())
store.dispatch(bye_cake())

store.dispatch(bye_icecream())
store.dispatch(bye_icecream())
store.dispatch(bye_icecream())

unsubscribe()