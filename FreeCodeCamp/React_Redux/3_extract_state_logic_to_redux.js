// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'

function actionCreator(input) {
    type: ADD,
    message: input
}

const messageReducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type === 'LOGIN') {
        return {
            login: true
        }
    }
    return state;
    // change code above this line
};