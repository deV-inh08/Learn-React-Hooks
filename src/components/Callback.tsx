import React from 'react'

// Dùng useCallback khi không muốn Fn ở component cha được truyền vào component con, bị khởi tạo lại tham chiếu

interface Props {
    handleGetName: () => void;
}

const Callback = ({ handleGetName }: Props) => {
    console.log('re-render')
  return (
    <>
        <div>Callback</div>
        <button onClick={handleGetName}>Click for getName</button>
    </>
  )
}

export default React.memo(Callback);
