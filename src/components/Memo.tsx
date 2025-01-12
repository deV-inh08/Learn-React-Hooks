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

export default React.memo(Memo)
