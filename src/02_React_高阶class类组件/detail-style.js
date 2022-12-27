import styled from 'styled-components'

// attrs设置默认值 名字不能与传入得值重名
export const DetailWrapper = styled.div.attrs((props) => ({
  tSize: props.size || '10px',
  tColor: props.color || 'blue'
}))`
  .detail {
    /* NavLink 转化为a标签 会自动添加上 active 类 */
    /* 在这个class里detail 子路由也继承 */
    a {
      &.active {
        color: green;
        font-weight: 600;
      }
    }
    .item {
      font-size: ${(props) => props.size || '14px'};
      font-weight: 600;
      color: red;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .aaa {
    color: ${(props) => props.tColor};
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
  .bbb {
    font-family: '幼圆';
  }
  .ccc {
    font-weight: 600;
    font-size: ${(props) => props.tSize};
    color: blue;
  }
`

// css 的继承 不想重复编写代码
const button = styled.button`
  color: #000;
  background-color: red;
`
export const BotWrapper = styled(button)`
  border-radius: 5px;
  border: 1px solid #000;
`
