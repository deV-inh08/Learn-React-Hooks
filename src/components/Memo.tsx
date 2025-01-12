import React from 'react'

interface Props {
    user: {
        name: string
    }
}

const Memo = ({ user }: Props) => {
    console.log('re-render')
  return (
    <div>Memo with name {user.name}</div>
  )
}

// React memo: có 2 tường hợp dùng React Memo để check kiểu dữ liệu tham chiếu

// + Dùng function 'Equal'. Tham số thứ 2 của React.memo
// + Dùng useMemo() return kiểu dữ liệu tham chiếu đó

export default React.memo(Memo)
