import { useState } from 'react'
import {Input} from './components'
import useCurrencyInfoHook from './hook/useCurrencyInfoHook'


function App() {
  const [amt,setAmt] =useState()
  const [from,setFrom] =useState('usd')
  const [to,setTo]= useState('inr')
  const[convertedAmt,setConvertedAmt]= useState()

  const currencyInfo = useCurrencyInfoHook(from)

  const option = Object.keys(currencyInfo)

  const convert=()=>{
    setConvertedAmt(amt * currencyInfo[to])
  }

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setAmt(convertedAmt)
    setConvertedAmt(amt)
  }


  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-amber-800"
      >

          <div className="w-full max-w-2xl max-h-auto mx-auto border-0 shadow-2xl rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
            Currency Converter 
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1 border-1 rounded-lg">
                <Input
                  label="From"
                  amt={amt}
                  onAmtChange={(amt)=>setAmt(amt)}
                  onCurrencyChange={(curr) => setFrom(curr)}
                  selectedCurrency={from}
                  currencyOptions={option}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>

              </div>
              <div className="w-full mt-1 mb-4 border-1 rounded-lg">
                <Input
                  label="To"
                  amt={convertedAmt}
                  onCurrencyChange={(curr)=>setTo(curr)}
                  selectedCurrency={to}
                  currencyOptions={option}
                  isAmtActive
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>

    </>
  )
}

export default App
