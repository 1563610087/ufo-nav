import React, { Component, Fragment } from 'react'
import './index.scss'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { title, visible, footer } = this.props
    return (
      <Fragment>
        {
          visible &&
          <div className='modal'>
            <div className='title'>{title}</div>
            <div className='content'>
              {
                this.props.children
              }
            </div>
            <div className='bottom'>
              {
                footer.map((item) => {
                  return item
                })
              }
            </div>
          </div>
        }
      </Fragment>
    )
  }

}

Modal.defaultProps = {
  title: '默认标题',
  visible: false


}

export default Modal

