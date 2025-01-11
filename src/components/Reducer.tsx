import React, { useReducer } from 'react'

// 1. Dispatch Fn ==> dispatch action
// 2. reducer Fn: nhận action, tiến hành tính toán state
// 3. State: update state
type ActionType = {type: 'increase_age' | 'descrease_age'}


const initialState = { age: 26 };

const reducer = (state: typeof initialState, action: ActionType) => {
    if(action.type === 'increase_age') {
        return {
            ...state, age: state.age + 1
        }
    }
    if(action.type === 'descrease_age') {
        return {
            ...state, age: state.age - 1
        }
    }
    return state
};

const Reducer = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
    
   const handleIncrease = () => {
        dispatch({
            type: 'increase_age'
        })
    }

    const handleDecrease = () => {
        dispatch({
            type: 'descrease_age'
        })
    }
   return (
    <div>
        <button onClick={handleDecrease}>Decreasement age</button>
        <h1>Hello! You are {state.age}</h1>
        <button onClick={handleIncrease}>Increasement age</button>
    </div>
  )
}

export default Reducer;
