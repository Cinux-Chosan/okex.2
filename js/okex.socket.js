let apiBaseUrl = 'http://119.28.77.31:3001/okex/'

function Okex(options = {}){
    // 初始化配置参数
    let conf = this.conf = {  
        url: 'wss://real.okex.com:10441/websocket',
        apiKey: '',
        secretKey: '',
        ...options
    }
    this.simpleQuery = { 
        sign: this._buildSign({ api_key: conf.apiKey }, conf.secretKey),
        api_key: conf.apiKey
    };
    // 初始化 websocket
    let socket = this.socket = new WebSocket(conf.url);
    socket.onmessage = m => {
        data = JSON.parse(m.data);
        if(data[0]) {
            let cbList = Okex.cbQueue[data[0].channel];
            if (cbList) {
                cbList.forEach(el => el(data));
            }
        }
    };
    socket.onclose =  m => {
        console.log(m)
    };
    socket.onerror =  m => {
        console.log(m)
    };
    socket.onopen =  m => {
        console.log(m)
    };
}

Okex.prototype.send = function(event, channel, parameters, cb) {
    if (this.socket.readyState === this.socket.OPEN) {
        Okex.cbQueue = Okex.cbQueue || {};
        Okex.cbQueue[channel || event] = Okex.cbQueue[channel || event] || [];
        let queue = Okex.cbQueue[channel || event];
        cb && queue.push(cb);
        this.socket.send(JSON.stringify({ event, channel, parameters }));
    } else {
        setTimeout(() => this.send(...arguments), 1000);
    }
}

// 自动确认 websocket 连接
Okex.prototype.ping = function() {
    setInterval(() => {
        this.send('ping')
    }, 1000 * 10)
}

// 计算sign
Okex.prototype._buildSign = function (params = {}, secret_key) {
    let keys = Object.keys(params).sort(),
      sign = '';
    for(let key of keys) {
        sign += `${key}=${params[key]}&`;
    }
    sign += `secret_key=${secret_key}`;
    return md5(sign).toUpperCase();
}

// websocket 登录
Okex.prototype.login = function () {
    let data = {
        sign: this._buildSign({ api_key: this.conf.apiKey }, this.conf.secretKey),
        api_key: this.conf.apiKey
    }
    this.send('login', null, data, data => {
        if (data[0].data.result) {
            this.isLoggedIn = true;
        }
    });
}

Okex.prototype.addChannel = function(channel, parameters, cb) {
    this.send('addChannel', channel, parameters, cb);
}

// 订阅行情数据
Okex.prototype.subSpotTicker = function(from, to, parameters) {
    this.addChannel(`ok_sub_spot_${from}_${to}_ticker`, parameters);
}

//  订阅币币市场深度(200增量数据返回)
Okex.prototype.subSpotDepth = function(from, to, y,parameters) {
    this.addChannel(`ok_sub_spot_${from}_${to}_depth${ y ? '_' + y : ''}`, parameters);
}

// 订阅成交记录
Okex.prototype.subSpotDeals = function(from, to, cb) {
    this.addChannel(`ok_sub_spot_${from}_${to}_deals`, {}, cb);
}

// 订阅 K 线
Okex.prototype.subKLine = function(from, to, y, cb) {
    this.addChannel(`ok_sub_spot_${from}_${to}_kline_${y}`, {}, cb);
}

// 订阅交易数据
Okex.prototype.subSpotOrder = function(from, to, parameters, cb) {
    let symbol = from + '_' + to;
    this.addChannel(`ok_sub_spot_${from}_${to}_order`, { symbol, ...parameters }, cb);
}

// 订阅账户信息
Okex.prototype.subSpotBalance = function(from, to, parameters, cb) {
    let symbol = from + '_' + to;
    this.addChannel(`ok_sub_spot_${from}_${to}_balance`, { symbol, ...parameters }, cb);
}

// 获取钱包信息
Okex.prototype.reqWalletInfo = async function (fn) {
    let url  = `${apiBaseUrl}wallet_info.do`;
    let data = await Util.getJson(url, {
        api_key: this.conf.apiKey,
        sign: this._buildSign({ api_key: this.conf.apiKey }, this.conf.secretKey)
    })
    typeof fn === 'function' && fn(data);
}

// 获取历史订单信息，只返回最近两天的信息
Okex.prototype.reqOrderHistory = async function (from, to, status, cb) {
    let query = {
        current_page: 1,
        page_length: 200,
        api_key: this.conf.apiKey,
        symbol: `${from}_${to}`,
        status
    }
    let data = await Util.getJson(`${apiBaseUrl}order_history.do`, {
        ...query,
        sign: this._buildSign(query, this.conf.secretKey)
    });
    typeof cb === 'function' && cb(data);
}

// 获取币币用户信息
Okex.prototype.reqUserInfo = async function (cb) {
    let data = await Util.getJson(`${apiBaseUrl}userinfo.do`, this.simpleQuery);
    typeof cb === 'function' && cb(data);
}

