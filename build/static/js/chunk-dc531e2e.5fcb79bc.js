(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc531e2e"],{"1af6":function(t,r,e){var n=e("63b6");n(n.S,"Array",{isArray:e("9003")})},"20fd":function(t,r,e){"use strict";var n=e("d9f6"),i=e("aebd");t.exports=function(t,r,e){r in t?n.f(t,r,i(0,e)):t[r]=e}},"549b":function(t,r,e){"use strict";var n=e("d864"),i=e("63b6"),a=e("241e"),o=e("b0dc"),c=e("3702"),s=e("b447"),u=e("20fd"),f=e("7cd6");i(i.S+i.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var r,e,i,d,l=a(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,m=0,g=f(l);if(b&&(v=n(v,p>2?arguments[2]:void 0,2)),void 0==g||h==Array&&c(g))for(r=s(l.length),e=new h(r);r>m;m++)u(e,m,b?v(l[m],m):l[m]);else for(d=g.call(l),e=new h;!(i=d.next()).done;m++)u(e,m,b?o(d,v,[i.value,m],!0):i.value);return e.length=m,e}})},"54a1":function(t,r,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"642b":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("HNav",[t._v("\n    列表\n    ")]),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载","immediate-check":!1},on:{"update:error":function(r){t.error=r},load:t.onLoad},model:{value:t.loading,callback:function(r){t.loading=r},expression:"loading"}},t._l(t.list,function(t){return e("div",{key:t.id},[e("router-link",{attrs:{to:{name:"detail",params:{id:t.id}}}},[e("van-card",{attrs:{price:t.price,desc:t.info,title:t.name,thumb:t.img}})],1)],1)}),0)],1)},i=[],a=e("75fc"),o=(e("96cf"),e("3b8d")),c=e("9ec7"),s=e("365c"),u={data:function(){return{list:[],loading:!1,finished:!1,page:1,hasMore:!0,error:!1}},components:{HNav:c["a"]},created:function(){this.getL()},methods:{getL:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var r,e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s["c"])(this.page);case 3:r=t.sent,e=r.list,n=r.hasMore,this.list=[].concat(Object(a["a"])(this.list),Object(a["a"])(e)),this.hasMore=n,0==this.hasMore&&(this.finished=!0,this.loading=!1),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.error=!0;case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function r(){return t.apply(this,arguments)}return r}(),loadmore:function(){this.page=this.page+1,this.getL()},onLoad:function(){this.loadmore()}}},f=u,d=e("2877"),l=Object(d["a"])(f,n,i,!1,null,null,null);r["default"]=l.exports},"75fc":function(t,r,e){"use strict";var n=e("a745"),i=e.n(n);function a(t){if(i()(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}var o=e("774e"),c=e.n(o),s=e("c8bb"),u=e.n(s);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return a(t)||f(t)||d()}e.d(r,"a",function(){return l})},"774e":function(t,r,e){t.exports=e("d2d5")},9003:function(t,r,e){var n=e("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"95d5":function(t,r,e){var n=e("40c3"),i=e("5168")("iterator"),a=e("481b");t.exports=e("584a").isIterable=function(t){var r=Object(t);return void 0!==r[i]||"@@iterator"in r||a.hasOwnProperty(n(r))}},"9ec7":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("van-icon",{attrs:{name:"arrow-left"}}),e("span",[t._t("default"),t._t("ry")],2)],1)},i=[],a=e("2877"),o={},c=Object(a["a"])(o,n,i,!1,null,null,null);r["a"]=c.exports},a745:function(t,r,e){t.exports=e("f410")},c8bb:function(t,r,e){t.exports=e("54a1")},d2d5:function(t,r,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},f410:function(t,r,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);