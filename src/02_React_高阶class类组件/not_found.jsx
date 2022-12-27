import React, { PureComponent } from 'react'

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h1>NotFound</h1>
        <h2>当前路径无效，请输入正确的路径！</h2>
      </div>
    )
  }
}

export default NotFound
