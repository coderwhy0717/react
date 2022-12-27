import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './02_React_高阶class类组件/App函数组件的router使用'
import App from './02_React_高阶class类组件/App类组件使用router'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Suspense fallback={<h1>loading...</h1>}>
      <App />
    </Suspense>
  </HashRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
