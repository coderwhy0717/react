import React, { PureComponent } from 'react'
import { Home, Homet } from './home'
import Detail from './detail'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './not_found'
import DetailRom from './detailRom'
import DetailSong from './detailSong'
import { routerAuth } from './router_auth'

class App extends PureComponent {
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
        {/* <Home />
        <Detail /> */}

        <Link to="/home">home</Link>
        <Link to="/detail">detail</Link>
        <Link to="/page">page</Link>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homet />} />
          <Route path="/detail" element={<Detail />}>
            {/* 二级路由 */}
            <Route path="/detail" element={<Navigate to="/detail/rom" />} />
            <Route path="/detail/rom" element={<DetailRom />} />
            <Route path="/detail/song" element={<DetailSong />} />
          </Route>
          <Route path="/page" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }
}

export default routerAuth(App)
