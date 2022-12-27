import React, { PureComponent } from 'react'
import { loginAuth } from './login_auth'

export class DetailSong extends PureComponent {
  render() {
    return (
      <div>
        <h1>二级路由的跳转detailSong</h1>
        <ul>
          <li>歌曲1</li>
          <li>歌曲2</li>
          <li>歌曲3</li>
          <li>歌曲4</li>
          <li>歌曲5</li>
        </ul>
      </div>
    )
  }
}

export default loginAuth(DetailSong)
