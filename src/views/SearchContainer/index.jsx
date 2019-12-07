import React from 'react';
import './SearchContainer.scss'
import { searchCategory } from '../../common/js/searchCategory'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchType: {
        type: '网页',
        colorType: 'color-type1',
        searchList: [
          {
            searchName: '百度搜索',
            website: 'baidu.com',
            iconName: 'baidu'
          },
          {
            searchName: '谷歌搜索',
            website: 'google.com',
            iconName: 'google'
          }
        ]
      },
      searchEngine: {
        searchName: '百度搜索',
        website: 'baidu.com',
        iconName: 'baidu'
      },
      inputValue: '',
      currentIndex:'1'
    }
  }

  chooseType = (value) => {
    this.setState({
      searchType: value,
      searchEngine:value.searchList[0]
    })
  }

  chooseEngine = (value) => {
    this.setState({
    searchEngine:value
  })
}

  render() {
    const { searchName,iconName} = this.state.searchEngine
    const {searchList,colorType} = this.state.searchType
    return (
      <div className='search-container'>
        <div className='left'>
          {
            searchCategory.map((item, index) => {
              return (
                <div className='search-type' key={item.colorType} onClick={() => this.chooseType(item)}>{item.type}</div>
              )
            })
          }
        </div>
        <div className={`right ${colorType}`}>
          <div className='r-search'>
            <span className={`iconfont icon-${iconName} search-icon`}></span>
            {/* <img src={`/image/${iconName}.png`} alt="" /> */}
            <span className='search-name'>{searchName}</span>
          </div>
          <div className='r-input'>
            <input type="text"
              className={colorType}
              value={this.state.inputValue}
              placeholder='请输入要查找的资源名'
              onChange={(e)=>this.setState({
                inputValue: e.target.value
              })}
            />
            <span className='iconfont icon-search' ></span>
            <i className='iconfont icon-clear clear' onClick={()=>this.setState({inputValue:''})}></i>
          </div>
          <div className='r-list'>
            {
              searchList.map((item, index) => {
                return (
                  <span onClick={()=>this.chooseEngine(item)} key={index}>{item.searchName}</span>
                )
              })
            }
          </div>
        </div>
      </div>

    )
  }

}

export default App