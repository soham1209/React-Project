import { useState } from 'react';
import Button from './components/button';

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      // style={{backgroundColor : "#fff"}}  this is syntax
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

         <Button bgColor="red" bgColorName="Red" setColor={setColor}/>
         <Button bgColor="green" bgColorName="Green" setColor={setColor}/>
         <Button bgColor="blue" bgColorName="Blue" setColor={setColor}/>
         <Button bgColor="olive" bgColorName="Olive" setColor={setColor}/>
         <Button bgColor="gray" bgColorName="Gray" setColor={setColor}/>
         <Button bgColor="yellow" bgColorName="Yellow" setColor={setColor}/>
         <Button bgColor="pink" bgColorName="Pink" setColor={setColor}/>
         <Button bgColor="purple" bgColorName="Purple" setColor={setColor}/>
         <Button bgColor="lavender" bgColorName="levender" setColor={setColor}/>
         <Button bgColor="white" bgColorName="White" setColor={setColor}/>
         <Button bgColor="black" bgColorName="Black" setColor={setColor}/>

        </div>
      </div>

    </div>
  )
}

export default App
