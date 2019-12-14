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
          <div className='background'>
            <div className='modal'>
              <div className='title'>
                <span>{title}</span>
                <span className='close' onClick={()=>this.props.cancel()}>×</span>
              </div>
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

