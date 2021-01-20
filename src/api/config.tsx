export default {
    method: 'get',
    // 基础url前缀
    baseUrl: "/api/",
    // baseUrl: "http://job.chenjh.work:3001/api",
    // baseUrl: "http://localhost:3001/api",
    // 请求头信息
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      // 'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 100000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
  }