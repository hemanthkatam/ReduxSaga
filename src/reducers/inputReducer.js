import { act } from "react-dom/cjs/react-dom-test-utils.production.min";


const initialState = {
    inputValue: 'GK'
};


export const inutReducer = (state= initialState,action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'UPDATE_INPUT': {
            return { ...state, inputValue: 'NEW'}
        }
        case 'UPDATE_INPUT_VALUE': {
            return { ...state, inputValue: action.value}
        }
        default:{
            return state
        }
    }
}