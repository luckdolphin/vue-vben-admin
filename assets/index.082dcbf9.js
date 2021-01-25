import{a as e}from"./index.6ff2b8a1.js";import{r as t,e as r,s as a,a$ as o,d as n,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.06f3ee29.js";import{_ as p}from"./index.192de65f.js";import"./index.de8bd41e.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./RightOutlined.3a6167aa.js";import"./index.95c10fda.js";import"./useTimeout.6f68f351.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./vendor.0d1494f4.js";import"./index.c2c2071e.js";import"./index.7729c420.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./isEqual.74a158b4.js";import"./toInteger.c1d92202.js";import"./DownOutlined.a2b62231.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const a=r(e);a&&a.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const a=document.createElement("canvas");a.width=300,a.height=240;const o=a.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,a.width/20,a.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+a.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),o()&&a((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),x=c("Clear"),g=c(" Reset ");f.render=function(e,t,r,a,o,n){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[x])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[g])),_:1})])),_:1})])),_:1})};export default f;