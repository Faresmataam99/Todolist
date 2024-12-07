import { useReducer, useEffect } from "react";


export default () => {

  const [todos, dispatch] = useReducer(TaskReducer, []);
  useEffect(() => {
    fetch("./Todos.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((task) => {
          dispatch({ type: "Add_task", payload: task });
        });
      })
  }, []);


  const deleteTask = (id) => {
    dispatch({ type: "delete_task" });
  };

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
            <span className="bg-green-200 rounded-lg p-1 text-white ml-4">
              Mark as done
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};