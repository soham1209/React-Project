import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLenth] = useState(8)//this is for length we select
  const [isNumber, setIsNumber] = useState(false)//this is for is number allowed or not
  const [isChar, setIsChar] = useState(false)// this is for is symbol are allwed or not
  const [password, setPassword] = useState("")//for storing the password

  //useRef hook 
  // use to get refrance 
  const passwordRef = useRef(null)

  //fuction we for password genration
  //its a hook wich take fuction and a depenncy array
  //and this hook need to store in variable
  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqustuvwxyz"
    if (isNumber) str += "101123456789"
    if (isChar) str += "!@#$%^&*(){}></."

    for (let i = 0; i <= length; i++) {
      let charIndx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndx)
    }

    setPassword(pass)

  }, [length, isNumber, isChar, setPassword])//this is hook for meory optimisation
  
const copyPassword = useCallback(()=>{
  passwordRef.current?.select() 
  // passwordRef.current?.setSelectionRange(0,3) 
  window.navigator.clipboard.writeText(password)
},[password])

  //useEffect Hook
  // whean ever a value in dependency array variable value change it trigger the funtionn again
  useEffect(()=>{
    passwordGenrator()
    //running the password gen
  },[length,isChar,isNumber,passwordGenrator])
  // console.log(setPassword)
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700" >
      <h1 className="text-4xl text-center text-white mb-10">Password Genrator</h1>

        <div className="flex shadow-lg rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly 
            ref={passwordRef}/>
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py0.5 shrink-0"> copy </button>
        </div>

        <div className='flex text-sm gap-x-2'>

          {/* slider */}
          <div className='flex item-ceter gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLenth(e.target.value)
              }} />

            <label>Length :{length}</label>
          </div>

          {/* checkBox */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id='numberInput'
              onChange={() => {
                setIsNumber((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* checkBox */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={isChar}
              id='charInput'
              onChange={() => {
                setIsChar((prev) => !prev);
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
        
      </div>
      
    </>
  )
}

export default App
