let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,J as i,cQ as o,a as s,d8 as a,d9 as l,i as n,o as r,j as d,aL as p,aV as c,n as m,p as b,bo as u}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import"./colors.d37333f4.js";import"./RightOutlined.ac5b2c4e.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import{T as f}from"./index.ebbe171f.js";import"./LeftOutlined.afe04eed.js";import{T as _}from"./index.99f9d65f.js";import"./index.4ac1b22a.js";import"./zh_CN.0242bd16.js";import{L as j}from"./index.ed9e2bdb.js";import{a as g}from"./index.a56b187c.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{t as h}from"./data.edc06832.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,s){var a=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,s.attrs);return e(o,i(a,{icon:x}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=s({name:"TodoList",components:{CollapseContainer:g,List:j,ListItem:j.Item,ListItemMeta:j.Item.Meta,Tag:_,Tooltip:f,EllipsisOutlined:O},setup:()=>({todoList:h})});const L=u("data-v-352db18b");a("data-v-352db18b");const T=e("span",null,[b(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),w={class:"todo-list__item-title"},z={class:"todo-list__item-memo"},k={class:"todo-list__item-desc"},C=e("br",null,null,-1),I=b("待审批"),E={class:"todo-list__all"},M=b("查看更多");l();const P=L(((t,i,o,s,a,l)=>{const u=n("ListItemMeta"),f=n("Tag"),_=n("a-button"),j=n("ListItem"),g=n("List"),h=n("EllipsisOutlined"),x=n("Tooltip"),v=n("CollapseContainer");return r(),d(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:L((()=>[T])),default:L((()=>[e(g,null,{default:L((()=>[(r(!0),d(p,null,c(t.todoList,(t=>(r(),d(j,{key:t.id,class:"todo-list__item"},{default:L((()=>[e(u,null,{title:L((()=>[e("div",null,[e("span",w,m(t.title),1),e("span",z,m(t.memo),1)])])),description:L((()=>[e("div",k,[b(" 提交人："+m(t.sbmter)+" ",1),C,b(" 提交时间："+m(t.sbmtTime),1)])])),_:2},1024),e(_,{type:"link"},{default:L((()=>[e(f,{color:"blue"},{default:L((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",E,[e(x,{placement:"topRight"},{title:L((()=>[M])),default:L((()=>[e(h)])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-352db18b";export default y;