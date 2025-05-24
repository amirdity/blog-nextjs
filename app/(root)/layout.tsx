import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h1>navbar</h1> root layout
      {children}
    </div>
  )
}

export default layout
