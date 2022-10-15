import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='h-screen py-32 bg-zinc-900'>{children}</div>
  )
}

export default Layout