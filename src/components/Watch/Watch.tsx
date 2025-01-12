import React, { useEffect, useRef, useState } from 'react'

// Ref: Reference hay nói theo tiếng Việt là tham chiếu đến Value (Dom, ...), *** Có thuộc tính current ***


const WatchTimer = () => {
    const [second, setSecond] = useState<number>(0);
    const timerRef = useRef<any>(null)
    let h1Ref = useRef<HTMLHeadingElement | null>(null)
    useEffect(() => {
         timerRef.current = setInterval(() => {
            setSecond((pre) => pre + 1)
            console.log('Timer is running')
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
            console.log('Timer was clear')
        }
    }, [])

    const changeColor = () => {
       if(h1Ref.current) {
        h1Ref.current.style.color = 'red'
       }
    }
 
  return (
    <>
        <h1 ref={h1Ref}>Watch {second}</h1>
        <button onClick={changeColor}>Change color</button>
    </>
  )
}


const Watch = () => {
    const [display, setDisplay] = useState<boolean>(true)
    
    const handleDisplayWatch = () => {
        setDisplay((pre) => !pre)
    }
    return (
        <>
            <button onClick={handleDisplayWatch}>Hidden</button>
            {display && <WatchTimer></WatchTimer>}
        </>
    )
}


export default Watch;
