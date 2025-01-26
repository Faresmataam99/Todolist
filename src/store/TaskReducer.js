export const initialTaskReducer = {
    todos:[],
};
export const TaskReducer =(state,action)=>{
if(action.type == 'Add _task'){
    return {
        ...state,
        todos:[...state.todos,action.todos]
    }
}
else if (action.type== 'delete_task'){
return {
    ...state,
    todos:state.todos.filter(task=>task.id !=action.id)
}
}
else if (action.type == 'save_task'){
    return{
        ...state,
        todos:state.todos.filter(task=>task.id !=action.id ) 
    }
}
else {
    if(action.type == 'marks_as_done'){
        return{
            ...state,
            todos:state.todos.filter(task=>task.id !=action.id)
        }
    }
}
return state
}
export default TaskReducer
