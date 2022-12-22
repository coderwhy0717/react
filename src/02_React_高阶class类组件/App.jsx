import React, { PureComponent } from 'react'
import Home from './home'
import Detail from './detail'
export default class App extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      isLogin: false
    }
  }
  // npm install react-transition-group
  render() {
    // const { isLogin } = this.state
    return (
      <div>
        <Home />
        <Detail />
      </div>
    )
  }
}
