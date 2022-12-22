import { PureComponent } from 'react'

export function loginAuth(OriginComponent) {
  return class extends PureComponent {
    constructor(props) {
      super()
    }
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }
    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(
        `当前${OriginComponent.name}页面花费了${interval}ms渲染完成！`
      )
    }
    loginClick() {
      setTimeout(() => {
        localStorage.setItem('token', 'classToken')
        // this.setState({ isLogin: true }, () => {
        //   console.log(this.state.isLogin)
        // })
        // 强制更新
        this.forceUpdate()
      }, 2000)
    }
    render() {
      const token = localStorage.getItem('token')

      if (token) {
        return <OriginComponent {...this.props} />
      } else {
        return (
          <div>
            <div>请先点击登录！</div>
            <button onClick={(e) => this.loginClick(e)}>登录</button>
          </div>
        )
      }
    }
  }
}
