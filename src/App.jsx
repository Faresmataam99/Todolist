import { useReducer, useState } from "react";
import { TasksContext } from "./store/TaskContext";
import { initialTaskReducer, TaskReducer } from "./store/TaskReducer";
import Task from "./components/Task";
import Twoimages from "./components/twoimages";
const App = () => {
  const [input,setinput]=useState('')
  const [state, dispatch] = useReducer(TaskReducer, initialTaskReducer);
  return (
    <>
      <TasksContext.Provider value={{ state, dispatch }}>
        <div className="flex items-center gap-80 jus">
        <div className="flex flex-col gap-4  max-w-96 px-4 ">
          <h1 className="text-2xl font-bold">Private</h1>
          <header>
            <nav className="flex items-center  gap-4 ">
              <div>
                <form action="">
                  <input
                    type="text"
                    placeholder="Add task..."
                    className="p-2 w-96 rounded-md text-xl"
                  />
                </form>
                <div className="flex flex-col text-xl gap-4 ">
                  <p className=" hover:bg-gray-200 transition-all duration-200">
                    {" "}
                    <input type="checkbox" onChange={(e)=>setinput(e.target.value)} /> Completed
                  </p>
                  <p className=" hover:bg-gray-200 transition-all duration-200">
                    {" "}
                    <input type="checkbox" onChange={(e)=>setinput(e.target.value)} /> Personal
                  </p>
                  <p className=" hover:bg-gray-200 transition-all duration-200">
                    {" "}
                    <input type="checkbox" onChange={(e)=>setinput(e.target.value)} /> Work
                  </p>
                  <span className="hover:bg-gray-200 transition-all duration-200">
                    💪 Diet
                  </span>
                  <span className="hover:bg-gray-200 transition-all duration-200">
                    📕 List of book{" "}
                  </span>
                  <span className="hover:bg-gray-200 transition-all duration-200">
                    🚗 Road trip list
                  </span>
                  <div className="bg-gray-300 cursor-pointer rounded-full px-1.5 py-1.5 flex gap-4 hover:bg-gray-100 transition-all duration-200">
                    <span className="text-xl">+</span>
                    <p className="text-xl">Create list</p>
                  </div>
                  <div className="flex flex-col  gap-4 text-lg font-light ">
                    <h1 className="font-bold">Groups</h1>
                    <div className="flex items-center justify-start flex-row gap-4">
                      <div className="bg-gray-200 rounded-lg p-2  hover:shadow-indigo-700 hover:shadow-xl hover:scale-110 transition-all duration-200 ">
                        <Twoimages image="https://www.apple.com/newsroom/images/live-action/wwdc-2021/Apple_WWDC21-details-announcement_052421_big.jpg.large.jpg" />
                        <span className="text-sm">Dev project</span>
                      </div>
                      <div className="rounded-lg bg-gray-200 p-1  hover:shadow-indigo-700 hover:shadow-xl hover:scale-110 transition-all duration-200 ">
                        <Twoimages image="https://www.iculture.nl/wp-content/uploads/mediacloud/2022/06/wwdc-2022-memoji-tim-cook.jpg" />
                        <p className="text-sm">Future project</p>
                      </div>
                    </div>
                    <div className="bg-gray-300 cursor-pointer flex  rounded-full gap-4 font-normal p-2 hover:bg-gray-200 duration-200 transition-all ">
                      <p>+</p>{" "}
                      <span className="text-xl">create new groupe</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <Task />
        </div>
      </TasksContext.Provider>
    </>
  );
};
export default App;
