import { addTodo, removeTodo, doTodo, filterAllTodos, filterCompletedTodos, filterIncompletedTodos } from "../Redux/Actions"

//  create TodoList Reducer

function todoListReducer(state = [], action) {
    switch (action.type) {
        case addTodo: {
            return state
        }
        case removeTodo: {
            return state
        }
        case doTodo: {
            return state
        }
        case filterAllTodos: {
            return state
        }
        case filterCompletedTodos: {
            return state
        }
        case filterIncompletedTodos: {
            return state
        }
        default: {
            return state
        }
    }
}

//  create Store

const store = Redux.createStore(todoListReducer)
console.log(store);

