!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(n.moneyClip={})}(this,function(n){var e,t=function(n,e){void 0===n&&(n="keyval-store"),void 0===e&&(e="keyval"),this.storeName=e,this._dbp=new Promise(function(t,r){var o=indexedDB.open(n,1);o.onerror=function(){return r(o.error)},o.onsuccess=function(){return t(o.result)},o.onupgradeneeded=function(){o.result.createObjectStore(e)}})};function r(){return e||(e=new t),e}function o(n,e){return void 0===e&&(e=r()),e._withIDBStore("readwrite",function(e){e.delete(n)})}t.prototype._withIDBStore=function(n,e){var t=this;return this._dbp.then(function(r){return new Promise(function(o,i){var u=r.transaction(t.storeName,n);u.oncomplete=function(){return o()},u.onabort=u.onerror=function(){return i(u.error)},e(u.objectStore(t.storeName))})})};var i={maxAge:Infinity,version:0,lib:{Store:t,get:function(n,e){var t;return void 0===e&&(e=r()),e._withIDBStore("readonly",function(e){t=e.get(n)}).then(function(){return t.result})},set:function(n,e,t){return void 0===t&&(t=r()),t._withIDBStore("readwrite",function(t){t.put(e,n)})},del:o,clear:function(n){return void 0===n&&(n=r()),n._withIDBStore("readwrite",function(n){n.clear()})},keys:function(n){void 0===n&&(n=r());var e=[];return n._withIDBStore("readonly",function(n){(n.openKeyCursor||n.openCursor).call(n).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}}).then(function(){return e})}}},u=function(n){return Object.assign({},i,n)},c=function(n,e,t){var r=u(e),o=r.maxAge,i=r.version,c=r.lib;return c.get(n,t).then(JSON.parse).then(function(e){return Date.now()-e.time>o||i!==e.version?(c.del(n,t),null):e.data}).catch(function(){return null})},f=function(n,e,t,r){var o=u(t);return o.lib.set(n,JSON.stringify({version:o.version,time:Date.now(),data:e}),r).catch(function(){return null})},a=function(n,e){var t,r=u(n);return r.lib.keys(e).then(function(n){return t=n,Promise.all(t.map(function(n){return c(n,r,e)}))}).then(function(n){return n.reduce(function(n,e,r){return e&&(n[t[r]]=e),n},{})}).catch(function(){})};n.del=o,n.get=c,n.set=f,n.getAll=a,n.getConfiguredCache=function(n){var e,r=u(n);return r.name&&(e=new t(r.name,r.name)),{get:function(n){return c(n,r,e)},set:function(n,t){return f(n,t,r,e)},getAll:function(){return a(r,e)},del:function(){return r.lib.del(e)},clear:function(){return r.lib.clear(e)},keys:function(){return r.lib.keys(e)}}}});
//# sourceMappingURL=money-clip.umd.js.map
