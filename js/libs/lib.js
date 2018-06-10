function Util() {}

Util.getJson = function(url = '', data = {}, method = 'post') {
    let rs = null;
    switch (method.toLowerCase()) {
        case 'get': {
            let queryString = '';
            for(let kv of Object.entries(data)) {
                queryString += `${kv[0]=kv[1]}&`
            }
            rs = fetch(url, {
                method,
                headers: new Headers({
                    'Accept': 'application/json', // 通过头指定，获取的数据类型是JSON
                    'Content-Type': 'application/x-www-form-urlencoded',
                })
            })
            break;
        }
        case 'post': {
            rs = fetch(url, {
                method,
                headers: new Headers({
                    'Accept': 'application/json', // 通过头指定，获取的数据类型是JSON
                    'Content-Type': 'application/json',
                }),
                body: typeof data === 'string' ? data : JSON.stringify(data)
            });
            break;
        }
        default: {
            return Promise.reject('暂不支持其它方式！');
        }
    }
    return rs.then(data => data.json());
}


Util.check = function (fn, interval = 300 , timeout = 1500) {
    return new Promise((res, rej) => {
        let timeUsed = 0;
        let sId = setInterval(() => {
            timeUsed += interval;
            if (fn()) {
                res();
                clearInterval(sId);            
            } else if (timeUsed >= timeout) {
                rej('timeout');
                clearInterval(sId);            
            }
        }, interval)
    })
}