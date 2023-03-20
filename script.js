const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

const initialState = {
    value: 0
}

const INCREMENT = "increment";
const DECREMENT = "decrement";

function counterReducer(state = initialState, action) {
    if(action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload  
        };
    }else if(action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        };
    }else {
        return state;
    }
}

const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerHTML = state.value.toString();
}

render();

store.subscribe(render);

incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: INCREMENT,
        payload: 5,
    });
})

decrementEl.addEventListener("click", () => {

    store.dispatch({
        type: DECREMENT,
        payload: 2,
    });
})
