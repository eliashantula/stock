import React, {PropTypes} from 'react'

const Button = (props) => {
  const {size, color, children, type, ...rest} = props
  const sizeClass = size ? `btn-${size}` : ''

  return (
    <button
      type={type}
      className={`btn btn-${color} ${sizeClass}`}
      {...rest}
    >
      {children}
    </button>
  )
}


Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'Submit',
}




export default Button