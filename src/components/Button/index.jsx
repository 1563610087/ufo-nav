import React from 'react'
import './index.scss'

function Button(props) {
  return (
    <div className={`button ${props.type}`} onClick={()=>props.onClick&&props.onClick()}>{props.children}</div>
  )
}

Button.defaultProps = {
  type:'normal'
}
export default Button

