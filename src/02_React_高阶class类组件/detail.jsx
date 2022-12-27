import React, { Fragment, PureComponent } from 'react'
import { DetailWrapper, BotWrapper } from './detail-style'
// 动态添加class
import _ from 'classnames'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { routerAuth } from './router_auth'
export class Detail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      szie: '50px',
      color: 'green',
      isbbb: true,
      isccc: false
    }
  }
  cccClick() {
    const state = { ...this.state }
    this.setState({ isccc: !state.isccc }, () => {
      console.log(this.state.isccc)
    })
  }
  navlinkto(path) {
    // 通过封装高阶组件来传递navigate到props中 因为类组件不能使用useNavigate() hook 进行路由跳转
    console.log(this.props.router)
    this.props.router.navigate(path)
  }
  render() {
    const { szie, color, isbbb, isccc } = this.state

    return (
      // 包裹器
      <Fragment>
        <DetailWrapper size={szie} color={color}>
          <div className="detail">
            <div className="item">detail页面</div>
            <div>
              点击自动跳转 a标签
              <br />
              <NavLink to="/detail/rom">推荐</NavLink>
              <NavLink to="/detail/song">歌曲</NavLink>
              <hr />
            </div>
            <div>
              <h2>类组件 手动btn点击跳转二级路由 </h2>
              <button onClick={(e) => this.navlinkto('/detail/rom')}>
                跳转rom页面
              </button>
              <button onClick={(e) => this.navlinkto('/detail/song')}>
                跳转song页面
              </button>
              <hr />
            </div>
            {/* 二级路由站位符 */}
            <Outlet />
            {/* 通过布尔值 动态添加 className */}
            <div className={_('aaa', { bbb: isbbb, ccc: isccc })}>
              aaa bbb ccc
            </div>
            {/* 也可以数组使用 */}
            <div className={[_('aaa', { bbb: isbbb, ccc: isccc })]}>
              aaa bbb ccc
            </div>
            <button onClick={(e) => this.cccClick()}>
              点击 aaa bbb ccc 字体变大
            </button>
          </div>
        </DetailWrapper>
        <BotWrapper onClick={(e) => this.cccClick()}>按钮</BotWrapper>
      </Fragment>
    )
  }
}
// 通过封装高阶组件来传递navigate 因为类组件不能使用useNavigate() hook 进行路由跳转
export default routerAuth(Detail)
