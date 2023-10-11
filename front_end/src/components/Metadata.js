import React from 'react'
import Helmet from 'react-helmet'


export const Metadata = ({title}) => {
  return (
  <Helmet>
    <title>{title}</title> 
    {/* DYNAMIC TITLE ACCORDING TO THE PRODUCT */}
     </Helmet>    
  )
}
