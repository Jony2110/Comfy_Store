import React from 'react'
import Headers from '../components/Headers'
function MainLayout({children}) {
  return (
    <>
      <Headers></Headers>
      
        {
        children
        }
     
      
    </>
  )
}

export default MainLayout
