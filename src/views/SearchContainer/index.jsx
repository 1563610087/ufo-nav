import React from 'react';
import './SearchContainer.scss'
import { searchCategory } from '../../common/js/searchCategory'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //这里是默认的网页搜索，是否可以直接读取searchCategory的第一个数据？
      searchType: {
        type: '网页',
        colorType: 'color-type1',
        searchList: [
          {
            searchName: '百度搜索',
            website: 'http://www.baidu.com/s?wd=',
            iconName: 'baidu'
          },
          {
            searchName: '谷歌搜索',
            website: 'http://www.google.com/#q=',
            iconName: 'google'
          },
          {
            searchName: '必应搜索',
            website: 'http://cn.bing.com/search?q=',
            iconName: 'biying'
          },
          {
            searchName: '公众号',
            website: 'http://weixin.sogou.com/weixin?type=2&query=',
            iconName: 'gongzonghao'
          },
          {
            searchName: '知乎',
            website: 'https://www.zhihu.com/search?type=content&q=',
            iconName: 'zhihu'
          },
          {
            searchName: '微博',
            website: 'http://s.weibo.com/weibo/',
            iconName: 'weibo'
          }
        ]
      },
      searchEngine: {
        searchName: '百度搜索',
        website: 'http://www.baidu.com/s?wd=',
        iconName: 'baidu'
      },
      keyWord: '',
      currentIndex: '1'
    }
  }

  chooseType = (value) => {
    this.setState({
      searchType: value,
      searchEngine: value.searchList[0]
    })
  }

  chooseEngine = (value) => {
    this.setState({
      searchEngine: value
    })
  }

  search = () => {
    const { keyWord, searchEngine } = this.state
    window.open(`${searchEngine.website}${keyWord}`)

  }

  enterSearch = (e) => {
    if (e.keyCode === 13) {
      this.search()
    }
  }

  render() {
    const { searchName, iconName } = this.state.searchEngine
    const { searchList, colorType } = this.state.searchType
    return (
      <div className='search-container' onKeyDown={(e) => { this.enterSearch(e) }}>
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
              value={this.state.keyWord}
              placeholder='请输入要查找的资源名'
              onChange={(e) => this.setState({
                keyWord: e.target.value
              })}
            />
            <span className='iconfont icon-search' onClick={() => this.search()}></span>
            <i className='iconfont icon-clear clear' onClick={() => this.setState({ keyWord: '' })}></i>
          </div>
          <div className='r-list'>
            {
              searchList.map((item, index) => {
                return (
                  <span onClick={() => this.chooseEngine(item)} key={index}>{item.searchName}</span>
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