import React, { Fragment } from 'react'
import logo from '../images/logo.jpg'

const Logo = () => {
  return (
    <Fragment>
        <img  src={logo} style={{width : '50px', height : '50px',borderRadius: '50%'}}/>
    </Fragment>
  )
}

export default Logo