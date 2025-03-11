import { useState } from 'react'


import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username:"ridam",
    age:22
  };
  return (
    <>
    
       <h1 className=' bg-amber-500 text-center px-1.5 py-0 rounded-2xl'>hello world</h1>
       <p className='px-2.5 bg-amber-400 text-center rounded-2xl border-amber-100 mt-5 mb-8' >now m learng taleind and props </p>
       <Cards channel ="chaiaurcode" someobj={myobj} />
       {/* < Cards /> */}
    </>
  )
}

export default App
