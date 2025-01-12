import { useMemo, useState } from 'react'
import './App.css'
// import LayoutEffect from './components/LayoutEffect'
// import Reducer from './components/Reducer'
// import ReactMemo from './components/ReactMemo';
import Memo from './components/Memo'



function App() {
  const str = 'a'
  const [value, setValue] = useState<string>('')

  
  // const user = useMemo(() => {
  //   return { 
  //     name: 'Vinh'
  //   }
  // }, [])

  const user = {
    name: 'Vinh'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  return (
    <>
      <Memo user={user}></Memo>
      <input onChange={(e) => handleChange(e)} type="text" />
    </>
  )
}

export default App
