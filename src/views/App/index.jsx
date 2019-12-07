import React from 'react';
import './app.scss'
import Header from '../Header'
import SearchContainer from '../SearchContainer'
import Websites from '../WebSites'
import Footer from '../Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <SearchContainer />
        <Websites />
        <Footer/>
      </div>

    )
  }
}

export default App