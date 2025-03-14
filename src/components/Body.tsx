import React from 'react'

interface BodyProp{
    children : React.ReactNode
}

const Body = ({children} : BodyProp) => {
  return (
    <div className='main'>
        {
            children
        }
    </div>
  )
}

export default Body