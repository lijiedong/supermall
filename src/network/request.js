/*
import axios from 'axios'
export  function request(config) {
  return new Promise((resolve ,reject)=>{
    // 1 创建axios的实例
    const instance=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    // 发送真正的网络请求
    instance(config)
      .then(res=>{
        resolve(res)
      }).catch(err=>{
     reject(err)
    })
  })
 
}*/

import axios from 'axios'
export  function request(config) {
  
    // 1 创建axios的实例
    const instance=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
  //2 axios的拦截器
  // 发送请求时的拦截器，两个参数，分别对应请求成功和失败的时候执行相关的函数
  instance.interceptors.request.use(config=>{
    //console.log(config);
    return config
  },err=>{
    console.log(err);
  })
  // 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })
    // 3.发送真正的网络请求
 return   instance(config)
}
