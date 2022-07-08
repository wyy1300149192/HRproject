
// 加工数据提供组件使用
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.userInfo.staffPhoto,
  username: state => state.user.userInfo.username
}
export default getters
