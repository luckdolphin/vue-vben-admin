import{s as e,r as t,f as n}from"./index.247b4d5c.js";import{u as s}from"./useEventListener.2200551d.js";var X,r,i,L;(r=X||(X={})).XS="XS",r.SM="SM",r.MD="MD",r.LG="LG",r.XL="XL",r.XXL="XXL",(L=i||(i={}))[L.XS=480]="XS",L[L.SM=576]="SM",L[L.MD=768]="MD",L[L.LG=992]="LG",L[L.XL=1200]="XL",L[L.XXL=1600]="XXL";const c=new Map;let u,o,M;function a(){return{screenRef:e((()=>n(u))),widthRef:o,screenEnum:i,realWidthRef:M}}function d(r){const L=t(X.XL),a=t(window.innerWidth);function d(){const e=document.body.clientWidth,t=c.get(X.XS),n=c.get(X.SM),s=c.get(X.MD),r=c.get(X.LG),i=c.get(X.XL);L.value=e<t?X.XS:e<n?X.SM:e<s?X.MD:e<r?X.LG:e<i?X.XL:X.XXL,a.value=e}function S(){null==r||r({screen:u,width:o,realWidth:M,screenEnum:i,screenMap:c,sizeEnum:X})}return s({el:window,name:"resize",listener:()=>{d(),S()}}),d(),u=e((()=>n(L))),o=e((()=>c.get(n(L)))),M=e((()=>n(a))),S(),{screenRef:u,screenEnum:i,widthRef:o,realWidthRef:M}}c.set(X.XS,480),c.set(X.SM,576),c.set(X.MD,768),c.set(X.LG,992),c.set(X.XL,1200),c.set(X.XXL,1600);export{d as c,a as u};