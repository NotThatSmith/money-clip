var n=require("./idb-keyval"),e={maxAge:Infinity,version:0,lib:n},t=function(n){return Object.assign({},e,n)},r=function(n,e,r){var u=t(e),i=u.maxAge,o=u.version,c=u.lib;return c.get(n,r).then(JSON.parse).then(function(e){return Date.now()-e.time>i||o!==e.version?(c.del(n,r),null):e.data}).catch(function(){return null})},u=function(n,e,r,u){var i=t(r);return i.lib.set(n,JSON.stringify({version:i.version,time:Date.now(),data:e}),u).catch(function(){return null})},i=function(n,e){var u,i=t(n);return i.lib.keys(e).then(function(n){return u=n,Promise.all(u.map(function(n){return r(n,i,e)}))}).then(function(n){return n.reduce(function(n,e,t){return e&&(n[u[t]]=e),n},{})}).catch(function(){})};exports.del=n.del,exports.get=r,exports.set=u,exports.getAll=i,exports.getConfiguredCache=function(e){var o,c=t(e);return c.name&&(o=new n.Store(c.name,c.name)),{get:function(n){return r(n,c,o)},set:function(n,e){return u(n,e,c,o)},getAll:function(){return i(c,o)},del:function(){return c.lib.del(o)},clear:function(){return c.lib.clear(o)},keys:function(){return c.lib.keys(o)}}};
//# sourceMappingURL=money-clip.js.map
