import { useState, useCallback, useMemo } from 'react'
import './App.css'
// import LayoutEffect from './components/LayoutEffect'
// import Reducer from './components/Reducer'
// import ReactMemo from './components/ReactMemo';
import Callback from './components/Callback'


function App() {
  const str = 'a'
  const [value, setValue] = useState<string>('')

  
  // const user = useMemo(() => {
  //   return { 
  //     name: 'Vinh'
  //   }
  // }, [])

  // const user = {
  //   name: 'Vinh'
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  // useCallback(Fn)

  // const handleGetName = useCallback(() => {
  //   console.log('Vinh')
  // }, [])

  // useMemo(c() => return { ...value })
  const handleGetName = useMemo(() => {
    return () => {
      console.log('Vinh')
    }
  }, [])
 
  return (
    <>
      <input onChange={(e) => handleChange(e)} type="text" />
      <Callback handleGetName={handleGetName}></Callback>
    </>
  )
}

export default App
