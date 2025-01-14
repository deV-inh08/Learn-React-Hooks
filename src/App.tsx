import { useState, useCallback, useMemo } from 'react'
// import LayoutEffect from './components/LayoutEffect'
// import Reducer from './components/Reducer'
// import ReactMemo from './components/ReactMemo';
// import Callback from './components/Callback'
// import Watch from './components/Watch'
// import Slider from './components/Slider'
import AutoInput from './components/ImperativeHandle'


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
      <AutoInput></AutoInput>
    </>
  )
}

export default App
