import { useState } from "react";

function App() {
  const [work , setWork] = useState("");
  console.log(work);
  return (
    <div className="flex gap-8 h-screen border border-red-400 justify-center items-center">
      <input
        type="text"
        class="outline-none border border-blue-500 px-4 py-2 w-[400px]" 
        value={work}
        onChange = { e =>  setWork(e.target.value)}
      ></input>
      <button type="button" class="outline-none px-4 py-2 bg-blue-500 rounded-md">ADD</button>
    </div>
  );
}

export default App;
