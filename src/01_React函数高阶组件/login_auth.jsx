export function loginAuth(OriginComponent) {
  return (porps) => {
    const token = localStorage.getItem('token')
    if (token) {
      return <OriginComponent {...porps} />
    } else {
      return (
        <div>
          <h1>避免用户体验，请先登录！</h1>
        </div>
      )
    }
  }
}
