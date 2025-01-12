import { useState } from 'react'
import './App.css'
// import LayoutEffect from './components/LayoutEffect'
// import Reducer from './components/Reducer'
import ReactMemo from './components/ReactMemo';

function App() {
  const [value, setValue] = useState<string>('')
  
  const user = { // id
    name: 'Vinh'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  return (
    <>
      <input onChange={(e) => handleChange(e)} type="text" />
      <ReactMemo user={user}></ReactMemo>
    </>
  )
}

export default App
