import React from 'react'

interface Props {
    user: {
        name: string
    }
}

const ReactMemo = ({ user }: Props) => {
    console.log('re-render')
  return (
    <h1>React Memo with</h1>
  )
};

export default React.memo(ReactMemo, (prevProp: Props, nextProp: Props) => {
    return prevProp.user.name === nextProp.user.name 
});
