
export const tasksInit = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

export const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      const newItem = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      return [ ...state, newItem ];
    case 'CLEAR_TODO':
      const newTasks = state.filter(function (task) {
        return task.completed !== true;
      });
      return newTasks; 
    case 'CHANGE_TODO':
      action.payload.completed = !action.payload.completed;  
    default:
      return state;
  }
};
