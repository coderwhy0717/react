import logo from '../logo.svg'
import '../App.css'
import { loginAuth } from './login_auth'
import { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    // console.log('first')
    // const app = 'app'
    // const state = [
    //   { key: 1, value: 'a', isshow: true },
    //   { key: 2, value: 'b', isshow: false },
    //   { key: 3, value: 'c', isshow: true }
    // ]
    // /**
    //  * 1. 先过滤找 出满足条件的 filter返回的是一个数组
    //  * 2. 通过map遍历 提取你需要的属性
    //  */
    // const a = state
    //   .filter((item) => item.isshow === true)
    //   .map((item) => item.value)
    // console.log(a, 'aaa') // ['a', 'c']
    // // 把字符串转成数组
    // console.log(Array.from(app)) // ['a', 'p', 'p']
    // // 直接存储本地
    // // localStorage.setItem('to', 'why')

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default loginAuth(Home)
