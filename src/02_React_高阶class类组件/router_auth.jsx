import { useNavigate, useRoutes } from 'react-router-dom'
// 高阶函数组件 与类组件结合 传递方法navigate 的封装
export function routerAuth(OriginComponent) {
  return function (props) {
    const navigate = useNavigate()
    const Routes = useRoutes
    console.log(Routes)

    const router = { navigate, Routes }
    return <OriginComponent {...props} router={router} />
  }
}
