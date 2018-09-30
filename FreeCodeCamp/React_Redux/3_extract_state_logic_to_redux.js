// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'

function addMessage(input) {
    type: ADD,
    message: input
}

const messageReducer = (state = [], action) => {
    // change code below this line
    if (action.type === ADD) {
        return {
            [...input]
        }
    }
    return state;
    // change code above this line
};

const store = Redux.createStore(messageReducer);