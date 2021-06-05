import {Todo} from "../models/todo.model";
import {TodoActions} from "../actions/todo.action";

//initial store data
const initialState: Array<Todo> = [
  {
    name: 'Raghav', timestamp: 10, user: 'RaghavAdmin'
  }
]

export function TodoReducer(state: Array<Todo> = initialState, action: TodoActions) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter(item => item.user !== action.payload);

    default:
      return state;
  }
};


