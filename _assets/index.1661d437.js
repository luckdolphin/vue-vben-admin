let e=document.createElement("style");e.innerHTML=".vben-image-preview .ant-image-preview-operations{background:rgba(0,0,0,.4)}",document.head.appendChild(e);import{a,H as s,aU as r,I as t,Y as i,i as o,o as n,j as l,w as p,K as m,aL as d,aV as c,J as u,bp as f,k as g}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import{I as v}from"./index.eb3e67f1.js";import"./CloseOutlined.93cdb7f8.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";var w=a({name:"ImagePreview",components:{Image:v,PreviewGroup:v.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:a}=r("image-preview");return{prefixCls:a,getImageList:t((()=>{const{imageList:a}=e;return a?a.map((e=>i(e)?{src:e,placeholder:!1}:e)):[]}))}}});w.render=function(e,a,s,r,t,i){const v=o("Image"),w=o("PreviewGroup");return n(),l(w,{class:e.prefixCls},{default:p((()=>[!e.imageList||e.$slots.default?m(e.$slots,"default",{key:0}):(n(!0),l(d,{key:1},c(e.getImageList,(e=>(n(),l(v,u({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:p((()=>[g(v,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1},8,["class"])};export default w;