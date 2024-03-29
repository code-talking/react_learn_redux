
//  该reducer实现增加一个新的todo
const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          } else {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        });
      default:
        return state;
    }
  };
  export default todos;