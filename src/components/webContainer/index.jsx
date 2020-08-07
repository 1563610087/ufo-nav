import React, { Component } from 'react'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import './index.scss'

class WebContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentType: {},
      setting: false,
      visible: false,
      addCategory: '',
      settingStatus: '',
      siteName: '',
      siteURL: '',
      showIcon: false
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

  cancel = () => {
    this.setState({
      visible: false,
      addCategory: ''
    })
  }

  saveCategory = () => {



  }


  openModal = () => {
    const settingStatus = this.state.settingStatus
    if (settingStatus === '1') {
      return (
        <Modal
          visible={this.state.visible}
          title='添加分类'
          cancel={this.cancel}
          footer={[
            <Button key={1} type='cancel' onClick={this.cancel}>取消</Button>,
            <Button key={0} type='normal' onClick={() => this.saveCategory()}>确定</Button>
          ]}
        >
          <span className='input-name'>分类名称:</span>
          <input className='input' type="text" value={this.state.addCategory}
            onChange={(e) => this.setState({
              addCategory: e.target.value
            })} />
        </Modal>
      )
    }
    else if (settingStatus === '2') {
      return (
        <Modal
          visible={this.state.visible}
          title='添加网址'
          cancel={this.cancel}
          footer={[
            <Button key={1} type='cancel' onClick={this.cancel}>取消</Button>,
            <Button key={0} type='normal' onClick={() => this.saveSite()}>确定</Button>
          ]}
        >
          <div style={{ marginBottom: '20px' }}>
            <span className='input-name'>网站名称:</span>
            <input className='input' type="text" value={this.state.addCategory}
              onChange={(e) => this.setState({
                addCategory: e.target.value
              })} />
          </div>
          <div>
            <span className='input-name'>网站地址:</span>
            <input className='input' type="text" value={this.state.addCategory}
              onChange={(e) => this.setState({
                addCategory: e.target.value
              })} />
          </div>
        </Modal>
      )
    }
  }


  render() {
    const { websiteTitle, websites } = this.props.item
    const { currentType, setting, showIcon } = this.state
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
                      {showIcon && <span className='iconfont icon-clear' ></span>}
                      <span style={{ margin: '0 5px' }}>{item.typeName}</span>
                      {showIcon && <span className='iconfont icon-search' ></span>}
                    </span>
                  )
                })
              }
            </div>
            <div className='setting'>
              {
                setting ?
                  <div>
                    <span onClick={() => {
                      this.setState({
                        settingStatus: '1',
                        visible: true
                      })
                    }}>添加分类</span>
                    <span onClick={() => {
                      this.setState({
                        settingStatus: '2',
                        visible: true
                      })
                    }}>添加网址</span>
                    <span onClick={() => {
                      this.setState({
                        showIcon: !showIcon
                      })
                    }}>修改</span>
                    <span>排序</span>
                    <span onClick={() => {
                      this.setState({
                        setting: false,
                        showIcon: false
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
                  {showIcon && <span className='iconfont icon-clear' ></span>}
                  <a style={{ margin: '0 5px' }} href={item.site} target='_blank' rel="noopener noreferrer">{item.siteName}</a>
                  {showIcon && <span className='iconfont icon-search' ></span>}
                </div>
              )
            })
          }
        </div>
        {
          this.openModal()
        }

      </div>

    )
  }

}

export default WebContainer