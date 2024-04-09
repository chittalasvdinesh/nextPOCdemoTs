import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Header/>
    <main className='p-2 mt-12'>{children}</main>
    <Footer/>
    </>
  )
}
