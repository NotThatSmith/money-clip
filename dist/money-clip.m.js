var n=require("./idb-keyval-new"),e=n.del,t={maxAge:Infinity,version:0,lib:n},r=function(n){return Object.assign({},t,n)},u=function(n,e,t){var u=r(e),i=u.maxAge,c=u.version,o=u.lib;return o.get(n,t).then(JSON.parse).then(function(e){return Date.now()-e.time>i||c!==e.version?(o.del(n,t),null):e.data}).catch(function(){return null})},i=function(n,e,t,u){var i=r(t);return i.lib.set(n,JSON.stringify({version:i.version,time:Date.now(),data:e}),u).catch(function(){return null})},c=function(n,e){var t,i=r(n);return i.lib.keys(e).then(function(n){return t=n,Promise.all(t.map(function(n){return u(n,i,e)}))}).then(function(n){return n.reduce(function(n,e,r){return e&&(n[t[r]]=e),n},{})}).catch(function(){})},o=function(e){var t,o=r(e);return o.name&&(t=new n.Store(o.name,o.name)),{get:function(n){return u(n,o,t)},set:function(n,e){return i(n,e,o,t)},getAll:function(){return c(o,t)},del:function(){return o.lib.del(t)},clear:function(){return o.lib.clear(t)},keys:function(){return o.lib.keys(t)}}};export{e as del,u as get,i as set,c as getAll,o as getConfiguredCache};
//# sourceMappingURL=money-clip.m.js.map
