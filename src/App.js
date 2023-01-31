import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);
  const handelDel = (id) => {
    setTodos( prev => prev.filter(item => item.id !== id))
  }
  const handleAdd = () => {
    if(todos.some(todo => todo.id ===  work.replace(/\s/g, ""))){
      toast.warn("Đã có công việc này")
    }
    else {
      setTodos((prev) => [...prev, { id: work.replace(/\s/g, ""), job: work }]);
      setWork("");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-8 h-screen border border-red-400 justify-center items-center">
        <div className="flex gap-8">
          <input
            type="text"
            class="outline-none border border-blue-500 px-4 py-2 w-[400px]"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          ></input>
          <button
            type="button"
            class="outline-none px-4 py-2 bg-blue-500 rounded-md"
            onClick={(handleAdd)}
          >
            ADD
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content:</h3>
          <ul>
            {todos?.map((item, index) => {
              return (<li key={item.id} className="flex gap-10 items-center">
                <span className="my-2">{item.job}</span>
                <span className="my-2 cursor-pointer p-2" 
                onClick={() => handelDel(item.id)}>X</span>
                </li>)
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;