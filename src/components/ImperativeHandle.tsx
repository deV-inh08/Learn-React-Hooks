import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react'

// Dùng để đưa fn từ ( component con ) ra ( component cha )
// ==> Cha có thể thực thi Fn của con

// - Trước đây: Cha -> con: Tại ( component con ) gọi fucn của ( component cha ) thong qua props 
// - Bây giờ: Con -> cha: Tại ( component cha ) có thể gọi Fn của ( component con ) thông qua ref


// Kết hợp useRef & forwardRef

const ImperativeHandle = forwardRef<{ type: () => void }>((props, ref) => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const type = () => {
        let indexNumber = 0;
        const string = 'Trần Dương Vinh';
        inputRef.current?.focus()
        const interval = setInterval(() => {
            setValue(string.slice(0, indexNumber))
            if(indexNumber === string.length) {
                return clearInterval(interval)
            }
            indexNumber++
        }, 100)
    }

    useImperativeHandle(ref, () => {
        return {
         type
        }
    }, []) // Thường không dùng deps


    return (
        <input type="text" value={value} ref={inputRef}/>
    )
})


function AutoInput() {
    const fnInputRef = useRef<{type: () => void}>({ type: () => {} });
    const handleClick = () => {
        console.log(fnInputRef.current.type())
    }
    return (
        <div>
            <div>
                <button onClick={handleClick}>Click to type</button>
            </div>
            <ImperativeHandle ref={fnInputRef}></ImperativeHandle>
        </div>
    )
}

export default AutoInput;

