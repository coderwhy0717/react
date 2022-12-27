import React, { PureComponent } from 'react'

export class DetailRom extends PureComponent {
  render() {
    return (
      <div>
        <h1>二级路由 detailRom</h1>
        {/*快捷  ul>li{歌单$}*5 */}
        <ul>
          <li>详细1</li>
          <li>详细2</li>
          <li>详细3</li>
          <li>详细4</li>
          <li>详细5</li>
        </ul>
      </div>
    )
  }
}

export default DetailRom
