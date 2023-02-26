import { useState } from "react"
import Card from "./components/Card";
import frameworks from './assets/data.json'

function App() {
  const [indexVisibleFramework, setFrameworkVisible] = useState(0);

  const changeFramework = () => {
    const newFrameworkVisible = indexVisibleFramework +1;
    
    if (newFrameworkVisible >= frameworks.length) setFrameworkVisible(0);
    else setFrameworkVisible(newFrameworkVisible);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-black w-full h-full">
      <h1 className=" min-w-320 shadow-white shadow-xl border-2 border-white w-auto h-auto text-white bg-transparent text-6xl font-bold justify-center items-center text-center drop-shadow-4xl rounded box-content">Frameworks de JavaScript</h1>
      <Card framework={frameworks[indexVisibleFramework]} 
      changeFramework={changeFramework}
      />
    </div>
  )
}

export default App
