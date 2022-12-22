import React, { Fragment, PureComponent } from 'react'
import { DetailWrapper, BotWrapper } from './detail-style'
// 动态添加class
import _ from 'classnames'

export class Detail extends PureComponent {
  constructor(props) {
    super()
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
  render() {
    const { szie, color, isbbb, isccc } = this.state

    return (
      <Fragment>
        <DetailWrapper size={szie} color={color}>
          <div className="detail">
            detail
            <div className="item">item</div>
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

export default Detail
