import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "./TodoList"; 

export default () => {
    const [todos, setTasks] = useState([]);

fetch('https://dummyjson.com/image/400x200/282828')
.then(response => response.blob()) 
.then(blob => {
  console.log('Fetched image blob:', blob);
})


    useEffect(() => {
        axios.get("https://dummyjson.com/todos")
            .then((response) => setTasks(response.data.todos));
    }, []);

    const date = new Date();
    const showdate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    return (
        <>
            <div className="flex items-center gap-10 bg-white flex-col ">
                <h1 className="text-2xl font-bold">Good morning, Steve 👋 </h1>
                <span>Today: {showdate}</span>
                <div className="flex items-center justify-center p-2 rounded-lg bg-gray-200">
                    <h1>
                        Today:
                        <select className="p-2 bg-gray-200">
                            <option></option>
                            <option>Done</option>
                            <option>Undone</option>
                        </select>
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                <TodoList/>
                </div>
            </div>
        </>
    );
};