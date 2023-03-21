const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6
  }
};

const INCREMENT = "increment";
const DECREMENT = "decrement";
const TEST = "test";

const increment = (value) => {
  return { type: INCREMENT, payload: value };
};

const decrement = (value) => {
  return { type: DECREMENT, payload: value };
};

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  }else if(action.type === TEST){
    const updateState = {
        ...state,
        properties: {
            ...state.properties,
            b: state.properties.b + 1 
        }
    }
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.value.toString();
};

render();

store.subscribe(render);

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(2));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
