import React, { Component } from 'react'
import { websiteList } from '../../common/js/website'
import WebContainer from '../../components/webContainer'
import './index.scss'

class WebSites extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='websites'>
        {
          websiteList.map((item) => {
            return (
                <WebContainer key={item.id} item={item}/>
            )
          })
        }
      </div>
    )
  }

}


export default WebSites