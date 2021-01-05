import{k as t,J as e,cQ as r,a,M as i,i as n,o,j as s,w as l}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./index.a8efe853.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./transButton.3e3572fa.js";import{a as c}from"./index.a56b187c.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{s as u}from"./index.f1db30ef.js";import{B as f,t as p}from"./data.dfa1417f.js";var d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(a,i){var n=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){m(t,e,r[e])}))}return t}({},a,i.attrs);return t(r,e(n,{icon:d}),null)};b.displayName="DeleteOutlined",b.inheritAttrs=!1;var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function(a,i){var n=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){h(t,e,r[e])}))}return t}({},a,i.attrs);return t(r,e(n,{icon:j}),null)};g.displayName="PlusOutlined",g.inheritAttrs=!1;var v=a({components:{BasicTree:f,CollapseContainer:c,PageWrapper:u},setup:()=>({treeData:p,actionList:[{render:t=>i(g,{class:"ml-2",onClick:()=>{}})},{render:()=>i(b)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const y={class:"flex"};v.render=function(e,r,a,i,c,u){const f=n("BasicTree"),p=n("CollapseContainer"),d=n("PageWrapper");return o(),s(d,{title:"Tree函数操作示例"},{default:l((()=>[t("div",y,[t(p,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:l((()=>[t(f,{treeData:e.treeData,actionList:e.actionList},null,8,["treeData","actionList"])])),_:1}),t(p,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:l((()=>[t(f,{treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default v;