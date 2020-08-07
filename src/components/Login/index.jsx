import React, { Component, Fragment } from 'react'
import './index.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      currentStatus: 'register',
      login: {

      },
      register: {

      }

    }
  }

  render() {
    const { currentStatus, show } = this.state
    return (
      <Fragment>
        {
          show && <div className='background'>
            {
              currentStatus === 'login' ?
                <div className='login'>
                  <div className='top'>
                    <span className='title'>登录</span>
                    <span className='close'>×</span>
                  </div>
                  <form>
                    <div>
                      <input className='input' type="text" placeholder='请输入手机号/邮箱' />
                    </div>
                    <div>
                      <input className='input' type="text" placeholder='登录密码' />
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>记住我</span>
                      <a href="#" className='forget'>忘记密码?</a>
                    </div>
                    <div className='btn'>
                      登录
                    </div>
                    <div className='login-bottom'>
                      <span onClick={() => this.setState({ currentStatus: 'register' })}>注册</span>
                      <span className='other-login'>
                        <span>短信登录</span>|<span>其他方式</span>
                      </span>
                    </div>
                    <div className='login-icon'>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </form>
                </div> :
                <div className='register'>
                  <div className='top'>
                    <span className='title'>注册</span>
                    <span className='close'>×</span>
                  </div>
                  <div>
                    <label htmlFor="">昵称：</label>
                    <input type="text"/>
                  </div>
                  <div>
                    <label htmlFor="">手机号：</label>
                    <input type="text"/>
                  </div>
                  <div>
                    <label htmlFor="">验证码：</label>
                    <input type="text" />
                    <span>获取验证码</span>
                  </div>
                  <div>
                    <label htmlFor="">设置密码：</label>
                    <input type="text"/>
                  </div>
                  <div>
                    <label htmlFor="">确认密码：</label>
                    <input type="text"/>
                  </div>
                  <div className='btn'>
                      注册
                  </div>
                  <div className='word-color r-login item'>
                      已有账号登录
                  </div>
                  <div>
                    <span>注册登录即表示同意用户</span>
                    <span className='word-color'>用户协议、隐私政策</span>
                  </div>
                </div>
            }
          </div>
        }
      </Fragment>

    )
  }
}

export default Login

