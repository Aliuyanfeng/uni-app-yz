import Request from '@/js_sdk/luch-request/luch-request/index.js' // 下载的插件
const http = new Request();
http.setConfig((config) => { /* config 为默认全局配置*/
	config.baseURL = 'http://www.phonegap100.com/'; /* 根域名 */
	config.header = {
		'Content-Type': "application/x-www-form-urlencoded",
		// 'appId': 'wx3a4ad3501b4d2736'
	}
	return config
})


//请求拦截
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})

//响应拦截
http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
	console.log(response)
	return response
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
	console.log(response)
	return Promise.reject(response)
})

export default function ajax(url, data = {}, type = 'GET') {
	return new Promise(function(resolve, reject) {
		// 执行异步ajax请求
		let promise
		if (type === 'GET') {
			// 准备url query参数数据
			let dataStr = '' //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&'

			})
			if (dataStr !== '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + '?' + dataStr
			}
			// 发送get请求
			promise = http.get(url)
		} else {
			// 发送post请求
			promise = http.post(url, data)
		}
		promise.then(function(response) {
			// 成功了调用resolve()
			resolve(response.data)
		}).catch(function(error) {
			//失败了调用reject()
			reject(error)
		})
	})
}
