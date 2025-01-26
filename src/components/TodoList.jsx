import { useReducer, useEffect } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Add_task":
//       return [...state, action.payload];
//     case "delete_task":
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };
const reducer =(state,action)=>{ 
  switch (action.type){
    case "Add_task":
      return [...state,action.payload];
      case "delete_task":
      return state.filter((todo)=>todo.id !==action.payload);
      case "Mark_as_done":
        return [...state,action.payload];

        case "sace_task":
          return [...state,action.payload];
  }
}
export default () => {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch("./Todos.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((task) => {
          // so practicially here we added the add task because we needed to map so basically it is optional in both ways depending on what we want to do eaxactly 
          dispatch({ type: "Add_task", payload: task });
        });
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const deleteTask = (id) => {
    dispatch({ type: "delete_task", payload: id });
  };
  const markasdone =(id)=>{
dispatch({type:"Mark_as_done"})
  }
  const savetask = (id)=>{
    dispatch ({type:"save_task",payload:id});
  }

  return (
    <div>
      <ul className="flex gap-6 flex-col ">
        {todos.map((todo) => (
          <li
            className="bg-gray-300 p-2 rounded-full hover:scale-110 hover:bg-gray-100 transition-all duration-200"
            key={todo.id}
          >
            {todo.title}
            <button
              className="text-xl ml-4"
              onClick={() => deleteTask(todo.id)}
            >
              🗑
            </button>
            <span onClick={()=>markasdone(todo.id)} className="bg-green-800 hover:bg-green-400 rounded-lg p-1 text-white ml-4">
              Mark as done
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};