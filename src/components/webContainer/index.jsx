import React, { Component } from 'react'
import Modal from '../../components/Modal'
import './index.scss'

class WebContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentType: {},
      setting: false,
      visible: true,
      addCategory: '',
      current: '11'
    }
  }

  componentDidMount() {
    this.setState({
      currentType: this.props.item.websites[0]
    })
  }

  changeType = (value) => {
    this.setState({
      currentType: value
    })

  }

  addSites = () => {
    this.setState({
      visible: true
    })
  }
  cancel = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const { websiteTitle, websites } = this.props.item
    const { currentType, setting, visible } = this.state
    return (
      <div className='web-container'>
        <div>
          <div className='web-header'>
            <div className='web-title'>{websiteTitle}</div>
            <div>
              {
                websites.map((item) => {
                  return (
                    <span className='site' key={item.id} onClick={() => this.changeType(item)}>
                      {item.typeName}
                    </span>
                  )
                })
              }
            </div>
            <div className='setting'>
              {
                setting ?
                  <div>
                    <span onClick={() => this.addSites()}>添加分类</span>
                    <span>添加网址</span>
                    <span>修改</span>
                    <span>排序</span>
                    <span onClick={() => {
                      this.setState({
                        setting: false
                      })
                    }}>完成</span>
                  </div>
                  :
                  <div>
                    <span onClick={() => {
                      this.setState({
                        setting: true
                      })
                    }}>自定义</span>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className='web-content'>
          {
            currentType.webs && currentType.webs.map((item) => {
              return (
                <div className='site-name' key={item.site}>
                  <a href={item.site} target='_blank' rel="noopener noreferrer">{item.siteName}</a>
                </div>
              )
            })
          }
        </div>
        <Modal
          visible={visible}
          title='添加分类'
          cancel={this.cancel}
          footer={[
            <button key={0}>确定</button>,
            <button key={1} onClick={() => this.cancel()}>取消</button>
          ]}
        >
          <span>分类名称</span>
          <input type="text" value={this.state.addCategory} onChange={(e) => this.setState({
          addCategory: e.target.value
        })} /></Modal>
      </div>

    )
  }

}

export default WebContainer