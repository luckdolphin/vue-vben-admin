import{r as e,aq as t,O as n,f as o}from"./index.247b4d5c.js";import{u as s}from"./useDebounce.bc3eb614.js";function a({el:a=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:v=!0,wait:c=80}){let d=()=>{};const b=e(!1);if(a){const f=e(a),[l]=v?s(r,c):t(r,c),p=c?l:r,w=e=>{b.value=!0,e.removeEventListener(i,p,m)},E=e=>e.addEventListener(i,p,m),j=n(f,((e,t,n)=>{e&&(!o(b)&&E(e),n((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(f.value),j()}}return{removeEvent:d}}export{a as u};