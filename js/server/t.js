// define([], function () {



    /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var l=this;function p(b,e){var a=b.split("."),c=l;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&void 0!==e?c[d]=e:c=c[d]?c[d]:c[d]={}};var q="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function t(b){var e=b.length,a=0,c=Number.POSITIVE_INFINITY,d,f,g,h,k,m,r,n,s,J;for(n=0;n<e;++n)b[n]>a&&(a=b[n]),b[n]<c&&(c=b[n]);d=1<<a;f=new (q?Uint32Array:Array)(d);g=1;h=0;for(k=2;g<=a;){for(n=0;n<e;++n)if(b[n]===g){m=0;r=h;for(s=0;s<g;++s)m=m<<1|r&1,r>>=1;J=g<<16|n;for(s=m;s<d;s+=k)f[s]=J;++h}++g;h<<=1;k<<=1}return[f,a,c]};function u(b,e){this.g=[];this.h=32768;this.c=this.f=this.d=this.k=0;this.input=q?new Uint8Array(b):b;this.l=!1;this.i=v;this.q=!1;if(e||!(e={}))e.index&&(this.d=e.index),e.bufferSize&&(this.h=e.bufferSize),e.bufferType&&(this.i=e.bufferType),e.resize&&(this.q=e.resize);switch(this.i){case w:this.a=32768;this.b=new (q?Uint8Array:Array)(32768+this.h+258);break;case v:this.a=0;this.b=new (q?Uint8Array:Array)(this.h);this.e=this.v;this.m=this.s;this.j=this.t;break;default:throw Error("invalid inflate mode");
}}var w=0,v=1;
u.prototype.u=function(){for(;!this.l;){var b=x(this,3);b&1&&(this.l=!0);b>>>=1;switch(b){case 0:var e=this.input,a=this.d,c=this.b,d=this.a,f=e.length,g=void 0,h=void 0,k=c.length,m=void 0;this.c=this.f=0;if(a+1>=f)throw Error("invalid uncompressed block header: LEN");g=e[a++]|e[a++]<<8;if(a+1>=f)throw Error("invalid uncompressed block header: NLEN");h=e[a++]|e[a++]<<8;if(g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>e.length)throw Error("input buffer is broken");switch(this.i){case w:for(;d+
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                g>c.length;){m=k-d;g-=m;if(q)c.set(e.subarray(a,a+m),d),d+=m,a+=m;else for(;m--;)c[d++]=e[a++];this.a=d;c=this.e();d=this.a}break;case v:for(;d+g>c.length;)c=this.e({o:2});break;default:throw Error("invalid inflate mode");}if(q)c.set(e.subarray(a,a+g),d),d+=g,a+=g;else for(;g--;)c[d++]=e[a++];this.d=a;this.a=d;this.b=c;break;case 1:this.j(y,z);break;case 2:A(this);break;default:throw Error("unknown BTYPE: "+b);}}return this.m()};
var B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],C=q?new Uint16Array(B):B,D=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],E=q?new Uint16Array(D):D,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],G=q?new Uint8Array(F):F,H=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],I=q?new Uint16Array(H):H,K=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,
    13],L=q?new Uint8Array(K):K,M=new (q?Uint8Array:Array)(288),N,O;N=0;for(O=M.length;N<O;++N)M[N]=143>=N?8:255>=N?9:279>=N?7:8;var y=t(M),P=new (q?Uint8Array:Array)(30),Q,R;Q=0;for(R=P.length;Q<R;++Q)P[Q]=5;var z=t(P);function x(b,e){for(var a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h;c<e;){if(f>=g)throw Error("input buffer is broken");a|=d[f++]<<c;c+=8}h=a&(1<<e)-1;b.f=a>>>e;b.c=c-e;b.d=f;return h}
function S(b,e){for(var a=b.f,c=b.c,d=b.input,f=b.d,g=d.length,h=e[0],k=e[1],m,r;c<k&&!(f>=g);)a|=d[f++]<<c,c+=8;m=h[a&(1<<k)-1];r=m>>>16;b.f=a>>r;b.c=c-r;b.d=f;return m&65535}
function A(b){function e(a,b,c){var e,d=this.p,f,g;for(g=0;g<a;)switch(e=S(this,b),e){case 16:for(f=3+x(this,2);f--;)c[g++]=d;break;case 17:for(f=3+x(this,3);f--;)c[g++]=0;d=0;break;case 18:for(f=11+x(this,7);f--;)c[g++]=0;d=0;break;default:d=c[g++]=e}this.p=d;return c}var a=x(b,5)+257,c=x(b,5)+1,d=x(b,4)+4,f=new (q?Uint8Array:Array)(C.length),g,h,k,m;for(m=0;m<d;++m)f[C[m]]=x(b,3);if(!q){m=d;for(d=f.length;m<d;++m)f[C[m]]=0}g=t(f);h=new (q?Uint8Array:Array)(a);k=new (q?Uint8Array:Array)(c);b.p=0;
    b.j(t(e.call(b,a,g,h)),t(e.call(b,c,g,k)))}u.prototype.j=function(b,e){var a=this.b,c=this.a;this.n=b;for(var d=a.length-258,f,g,h,k;256!==(f=S(this,b));)if(256>f)c>=d&&(this.a=c,a=this.e(),c=this.a),a[c++]=f;else{g=f-257;k=E[g];0<G[g]&&(k+=x(this,G[g]));f=S(this,e);h=I[f];0<L[f]&&(h+=x(this,L[f]));c>=d&&(this.a=c,a=this.e(),c=this.a);for(;k--;)a[c]=a[c++-h]}for(;8<=this.c;)this.c-=8,this.d--;this.a=c};
u.prototype.t=function(b,e){var a=this.b,c=this.a;this.n=b;for(var d=a.length,f,g,h,k;256!==(f=S(this,b));)if(256>f)c>=d&&(a=this.e(),d=a.length),a[c++]=f;else{g=f-257;k=E[g];0<G[g]&&(k+=x(this,G[g]));f=S(this,e);h=I[f];0<L[f]&&(h+=x(this,L[f]));c+k>d&&(a=this.e(),d=a.length);for(;k--;)a[c]=a[c++-h]}for(;8<=this.c;)this.c-=8,this.d--;this.a=c};
u.prototype.e=function(){var b=new (q?Uint8Array:Array)(this.a-32768),e=this.a-32768,a,c,d=this.b;if(q)b.set(d.subarray(32768,b.length));else{a=0;for(c=b.length;a<c;++a)b[a]=d[a+32768]}this.g.push(b);this.k+=b.length;if(q)d.set(d.subarray(e,e+32768));else for(a=0;32768>a;++a)d[a]=d[e+a];this.a=32768;return d};
u.prototype.v=function(b){var e,a=this.input.length/this.d+1|0,c,d,f,g=this.input,h=this.b;b&&("number"===typeof b.o&&(a=b.o),"number"===typeof b.r&&(a+=b.r));2>a?(c=(g.length-this.d)/this.n[2],f=258*(c/2)|0,d=f<h.length?h.length+f:h.length<<1):d=h.length*a;q?(e=new Uint8Array(d),e.set(h)):e=h;return this.b=e};
u.prototype.m=function(){var b=0,e=this.b,a=this.g,c,d=new (q?Uint8Array:Array)(this.k+(this.a-32768)),f,g,h,k;if(0===a.length)return q?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(g=a.length;f<g;++f){c=a[f];h=0;for(k=c.length;h<k;++h)d[b++]=c[h]}f=32768;for(g=this.a;f<g;++f)d[b++]=e[f];this.g=[];return this.buffer=d};
u.prototype.s=function(){var b,e=this.a;q?this.q?(b=new Uint8Array(e),b.set(this.b.subarray(0,e))):b=this.b.subarray(0,e):(this.b.length>e&&(this.b.length=e),b=this.b);return this.buffer=b};p("Zlib.RawInflate",u);p("Zlib.RawInflate.prototype.decompress",u.prototype.u);var T={ADAPTIVE:v,BLOCK:w},U,V,W,X;if(Object.keys)U=Object.keys(T);else for(V in U=[],W=0,T)U[W++]=V;W=0;for(X=U.length;W<X;++W)V=U[W],p("Zlib.RawInflate.BufferType."+V,T[V]);}).call(this);

function WebSocketUtil() {
var _this = this;
//var $ = jQuery.noConflict();

// 连接失败时重连的时间间隔
var reConnectInterval = 10 * 1000;
var is_test_env = (location.hostname.indexOf('local') >= 0) ? true : false;
var is_qa_env = (location.hostname.indexOf('.docker.') >= 0) ? true : false;
var url =  "wss://okexcomreal.bafang.com:10441/websocket"; // real.okex.com
if (is_qa_env) {
     url =  "ws://192.168.80.60:10441/websocket";
    // var url =  "wss://okexcomreal.bafang.com:10441/websocket"; // real.okex.com
}
if (is_test_env) {
    url =  "ws://192.168.80.60:10441/websocket";
}
this.isBinary = function() {
    if(!FileReader){
        return 0;
    }
    if (is_test_env || is_qa_env) {
        return 0;
    }
    return 1;
}();//是否压缩


var dataModel = {
    'product': 'product',
    'type': 'type',
    'base': 'base',
    'quote': 'quote',
    'contract': 'contract',
    'period': 'period',
    'ladder': 'ladder',
    'number': 'number',
    'binary': 'binary'/*,
     'quotes': 'quotes',
     'api_key': 'api_key',
     'sign': 'sign',
     'size': 'size'*/
};
var uniqueKeyObj = {};
var sortObj = function (obj) {
    var keyArr = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            if (Object.prototype.toString.call(obj[k]) !== "[object String]") {
                obj[k] = obj[k].toString();
            }
            keyArr.push(k);
        }
    }
    keyArr = keyArr.sort();
    var retObj = {};
    for (var i = 0; i < keyArr.length; i++) {
        retObj[keyArr[i]] = obj[keyArr[i]];
    }
    return retObj;
};
var generateUniqueKey = function(defaultCfg, config) {
    var transferSymbol = {};
    if (defaultCfg.product === 'futures' && config && config.base) {
        transferSymbol['base'] = "f_usd_" + config.base;
    }
    if (defaultCfg.product === 'spot' && config && config.symbol) {
        transferSymbol['base'] = config.symbol.split("_")[0];
        transferSymbol['quote'] = config.symbol.split("_")[1];
    }
    var cfg = $.extend(true, {}, defaultCfg, {
        binary: _this.isBinary
    }, config, transferSymbol);
    if (cfg['symbol']) {
        delete cfg['symbol'];
    }
    cfg = sortObj(cfg);
    cfg = JSON.stringify(cfg);
    if (!uniqueKeyObj[cfg]) {
        uniqueKeyObj[cfg] = cfg;
    }
    return cfg;
};
var generateUniqueKeyFromServer = function(d) {
    var retObj = {};
    for (var key in d) {
        if (d.hasOwnProperty(key) && d.hasOwnProperty(dataModel[key])) {
            retObj[key] = d[key];
        }
    }
    return JSON.stringify(sortObj(retObj));
};


/**
 * 根据参数生成唯一key
 *
 */
this.Utils = {
    // --------------------------行情 API---------------------------
    getAllMarketTickers: function(config) {
        return generateUniqueKey({type: 'all_ticker_3s'}, config);
    },
    /**
     * 订阅行情
     * product
     * symbol
     */
    getTicker: function(config) {
        return generateUniqueKey({product: "spot", type: 'ticker'}, config);
    },
    // 订阅所有行情
    getTickers: function (config) {
        return generateUniqueKey({
            product: "spot",
            type: 'ticker',
            base: 'a',
            quote: 'b'
        }, config); // 不与ticker重复
    },
    /**
     * 订阅市场深度
     * spot_depth_symbol
     */
    getDepth: function(config) {
        return generateUniqueKey({product: "spot", type: 'depth'}, config);
    },
    /**
     * 订阅K线数据
     * symbol btc, ltc
     */
    getKline: function(config) {
        return generateUniqueKey({product: "spot", type: 'kline'}, config);
    },

    /**
     * 订阅最新成交
     * symbol btc, ltc
     */
    getDeal: function(config) {
        return generateUniqueKey({product: "spot", type: 'deal'}, config);
    },


    // --------------------------交易 API---------------------------
    /**
     * 订阅用户订单
     * symbol btc, ltc
     */
    getOrder: function(config) {
        return generateUniqueKey({product: "spot", type: 'order'}, config);
    },

    /**
     * 订阅用户资产
     * symbol btc, ltc
     */
    getUserBalance: function(config) {
        return generateUniqueKey({product: "spot", type: 'balance'}, config);
    }
};

/**
 * 合约参数Util
 */
this.futureUtils = {

    /**
     * 订阅指数ticker
     * @param config
     */
    getIndexTicker: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'index_ticker'}, config);
    },

    /**
     * 订阅指数ticker
     * @param config
     */
    getIndexKine: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'kline'}, config);
    },

    /**
     * 订阅ticker
     * @param config
     */
    getTicker: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'ticker'}, config);
    },

    /**
     * 订阅限价范围
     * @param config
     */
    getPriceRange: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'price_range'}, config);
    },

    /**
     * 订阅指数
     * @param config
     */
    getIndex: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'index'}, config);
    },

    /**
     * 订阅深度
     * @param config
     */
    getDepth: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'depth'}, config);
    },

    /**
     * 订阅深度
     * @param config
     */

    getDeal: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'deal'}, config);
    },

    /**
     * 订阅预估交割价
     * @param config
     */
    getForecast: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'forecast'}, config);
    },

    // -----------------个人相关------------------------

    /**
     * 订阅用户订单
     * @param config
     */
    getOrder: function(config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'order'}, config);
    },

    /**
     * 订阅逐仓个人信息
     * @param config
     */
    getFixedAccountInfo: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'account_4fix'}, config);
    },

    /**
     * 订阅逐仓仓位
     * @param config
     */
    getFixedHoldPosition: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'position_4fix'}, config);
    },

    /**
     * 订阅全仓个人信息
     * @param config
     */
    getCrossAccountInfo: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'account'}, config);
    },

    /**
     * 订阅全仓仓位
     * @param config
     */
    getCrossHoldPosition: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'position'}, config);
    },

    /**
     * 订阅交割类型变化
     * @param config
     */
    getDeliveryChange: function (config) {
        return generateUniqueKey({product: "futures", quote: 'usd', type: 'delivery'}, config);
    }
};

var isEmptyObject = function (obj){
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return true;
};


var websocket;
var isErrorCallBack = false; //errorCall只调用一次
var callBacks = [];
var stopCallBacks = [];
var erroCallBackFun;
var conectionCallBackFun;
var klineCallBack;
var isConnection = false;
var isFixPending = true;
var pingTimer;
var reConnTimer;

var stopPing = function () {
    if (!pingTimer) {
        return;
    }
    window.clearInterval(pingTimer);
};
var ping = function(){
    if (!!pingTimer) {
        stopPing();
    }
    pingTimer = setInterval(function() {
        websocket.send("{'event':'ping'}");
    }, 5000);
};

if (typeof this.connection != 'function') {
    this.socket = function () {
        return websocket;
    };
    this.connection = function () {
        if (!window.WebSocket) { //不支持websocket 启动轮训
            errorCallBackData();
            return this;
        }

        toConnection();
        return this;
    };
    var toConnection = function() {
        websocket = new WebSocket(url);
        websocket.onmessage = decodeData;
        websocket.onclose = errorCallBackData;
        websocket.onerror = errorCallBackData;
        websocket.onopen = onConnection;

        setTimeout(_this.fixPending, 5000);
    };
    var onConnection = function(socketUtil) {
        isErrorCallBack = false;
        isFixPending = false;
        isConnection = true;

        if (!!reConnTimer) {
            window.clearInterval(reConnTimer);
            reConnTimer = null;
        }
        if (!!conectionCallBackFun) {
            conectionCallBackFun();
        }
        ping();
    };
    /**
     * send 支持三个参数
     * @param string 字符串，唯一key
     * @param function 回调函数
     * @param object 可选参数对象
     * ***/
    this.send = function (type, callBack) {
        if (this.removeCallBack(type)) {
            this.stop(type);
        }
        this.addCallBack(type, callBack);
        websocket.send("{event:'addChannel',parameters:" + type + "}");
    };
    this.login = function(userid) {
        websocket.send("{event:'login',parameters:{userId:'" + userid + "',binary:" + this.isBinary +"}}")
    };
    this.stop = function (type, callBack) {
        if (!!callBack) {
            this.removeStopCallBack(type);
            this.addStopCallBack(type, callBack);
        }
        websocket.send("{event:'removeChannel',parameters:" + type + "}");
    };
    var decodeData = function(data) {
        if (data.data instanceof Blob) {
            var blob = data.data;
            //js中的blob没有没有直接读出其数据的方法，通过FileReader来读取相关数据
            var reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            //  当读取操作成功完成时调用.
            reader.onload = function (evt) {
                if (evt.target.readyState == FileReader.DONE) {
                    var result = new Uint8Array(evt.target.result);
                    result = (new Zlib.RawInflate(result)).decompress();
                    var strResult = "";
                    var length = result.length;
                    for(var i = 0; i < length; i++){
                        strResult += String.fromCharCode(result[i]);
                    }
                    callBackData(JSON.parse(strResult));
                }
            };
            return;
        }
        callBackData(JSON.parse(data.data));
    };
    var callBackData = function (data) {
        if (data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
                toCallMethod(data[i]);
            }
        }else if (data instanceof Object) {
            if (data.hasOwnProperty("event") && data.event == 'pong') {
                return;
            }
            toCallMethod(data);
        }
    };
    var toCallMethod = function(data) {
        if (!data) {
            console.info('data is null', data);
            return;
        }
        var type = '';
        if (data.data) {
            type = generateUniqueKeyFromServer(data);
        }
        // 订阅结果
        if (data && data.channel) {
            if (data.data.result) {
                if (data.channel === 'removeChannel') {
                    for (var j = 0; j < stopCallBacks.length; j++) {
                        var callBack = stopCallBacks[j];
                        if (callBack.type.toString() == type && !!callBack.callBack) {
                            callBack.callBack(data, type);
                            break;
                        } else if (data.hasOwnProperty(type)) {
                            callBack.callBack(data, type);
                            break;
                        }
                    }
                }
                return;
            } else {
                // TODO 重新订阅
                console.warn("连接失败，详情：", data);
                return;
            }
        }
        if (!uniqueKeyObj[type]) {
            console.error('has not channel', data);
            return;
        }
        doCallback(data, type);
    };
    var doCallback = function (data, type) {
        for (var j = 0; j < callBacks.length; j++) {
            var callBack = callBacks[j];
            if (callBack.type.toString() == type && !!callBack.callBack) {
                if (callBack.type.indexOf('order') > -1 || callBack.type.indexOf('depth') > -1) {
                    callBack.callBack(data, type);
                } else {
                    callBack.callBack(data.data, type);
                }
                break;
            } else if (data.hasOwnProperty(type)) {
                callBack.callBack(data, type);
                break;
            } else if (data.type.indexOf("kline") != -1 && !!klineCallBack) {
                klineCallBack(data.data, type);
                break;
            }
        }
    };
    var errorCallBackData = function () {
        isConnection = false;
        isFixPending = false;
        if (!isErrorCallBack && !!erroCallBackFun) {
            erroCallBackFun();
        }
        stopPing();
        if (!reConnTimer) {
            reConnTimer = window.setInterval(toConnection, reConnectInterval);
        }
    };
    this.isConnection = function() {
        return isConnection;
    };
    this.addCallBack = function (type, callBack) {
        callBacks.push({type: type, callBack: callBack});
    };
    this.addStopCallBack = function (type, callBack) {
        stopCallBacks.push({type: type, callBack: callBack});
    };
    this.removeCallBack = function(type) {
        if (!!callBacks && callBacks.length > 0) {
            for (var i = 0; i < callBacks.length; i++) {
                if (callBacks[i].type.toString() == type) {
                    callBacks.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    };
    this.removeStopCallBack = function(type) {
        if (!!stopCallBacks && stopCallBacks.length > 0) {
            for (var i = 0; i < stopCallBacks.length; i++) {
                if (stopCallBacks[i].type.toString() == type) {
                    stopCallBacks.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    };
    this.addErrCallBackFun = function(callBack) {
        erroCallBackFun = callBack;
    };
    this.addSuccCallBackFun = function(callBack) {
        conectionCallBackFun = callBack;
    };
    this.addKlineCallBack = function(callBack) {
        klineCallBack = callBack;
    };
    this.fixPending = function() {
        if (isFixPending) {
            if (!isErrorCallBack && !!erroCallBackFun) {
                erroCallBackFun();
            }
            setTimeout(_this.fixPending, 10000);
        }
    };
}
};

// 即用于requirejs，又用于普通引用
if (typeof define === 'function' && define.amd) {
// AMD
define([], function () {
    return WebSocketUtil;
});
} else {
// Browser globals
window.WebSocketUtil = WebSocketUtil;
}


// });