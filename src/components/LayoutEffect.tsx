import React, { useEffect, useLayoutEffect, useState } from 'react'

// re-render: state || props

// Render JSX => Update DOM aor => DOM that (can access DOM) =>

// useEffect:  Add in DOM, and then invoke callback

// useEffect: 
// 1. Cap nhat lai state
// 2. muted
// 3. Render UI
// 4. Goi cleanup neu deps thay doi
// 5. Goi callback


// useLayoutEffect
// 1. Cap nhat lai state
// 2. muted
// 3. Goi cleanup neu deps thay doi
// 4. Goi Callback
// 5. Render lai UI

const LayoutEffect = () => {
    const [count, setCount] = useState<number>(0)
    
    const handleClick = () => {
        setCount((pre) => pre + 1)
    }

    useEffect(() => {
        if(count === 4) {
            setCount(0)
        }
    }, [count]);

    useLayoutEffect(() => {
        if(count === 4) {
            setCount(0)
        }
    }, [count])

    return (
    <>
        <div>{count}</div>
        <button onClick={handleClick}>Click me to increase</button>
    </>
  )
}


export default LayoutEffect