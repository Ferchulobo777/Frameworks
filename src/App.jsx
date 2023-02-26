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
    <div className="flex flex-col justify-center items-center bg-black md:w-screen md:h-screen">
      <h1 className=" shadow-white shadow-xl border-2 border-white md:w-auto md:h-auto text-white bg-transparent text-7xl font-bold justify-center items-center text-center drop-shadow-4xl rounded">Frameworks de JavaScript</h1>
      <Card framework={frameworks[indexVisibleFramework]} 
      changeFramework={changeFramework}
      />
    </div>
  )
}

export default App
