const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            // don't mutate state here or the tests will fail
            let newArray = [...state, action.todo];
                // returns a copy of array with action.todo appended to it (NON MUTABLE)
            return newArray;
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: 'ADD_TO_DO',
        todo
    }
}

const store = Redux.createStore(immutableReducer);