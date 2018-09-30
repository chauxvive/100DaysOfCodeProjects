// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    };
};

const messageReducer = (state = [], action) => {
    // change code below this line
    if (action.type === ADD) {
        return [...state, action.message]
    };
    return state;
}
// change code above this line

const store = Redux.createStore(messageReducer);
