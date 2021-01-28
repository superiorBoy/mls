request(url,method,param) {
        let options = {
            url:url,
            method:method
        }
        let meArr = ['post','put','patch'];
        if(param){
            meArr.some(el =>el === method.toLowerCase()) ? options.body = param : options.params = param
        }
        return Vue.http(options)
    },
postRequest(url,data,callback) {
        return new Promise((resolve,reject)=>{
            Vue.http.post(
                url,
                data,
                {emulateJSON: true}
            )
            .then(callback)
            .catch((err)=>{
                reject(err)
            })
        })
    }