import{a as e,I as n,f as t,i as a,o as s,j as i,J as r,w as o,k as d,aL as l,aV as c,m as u,n as m,K as p,N as f}from"./index.c5d8d2c2.js";import{D as v,e as y,M as g}from"./index.5e68bb45.js";import{s as k}from"./index.00d20f2e.js";v.Button=y,v.install=function(e){return e.component(v.name,v),e.component(y.name,y),e};var M=e({name:"BasicDropdown",components:{[v.name]:v,[g.name]:g,[g.Item.name]:g.Item,[g.Divider.name]:g.Divider,Icon:k},props:{trigger:{type:[Array],default:()=>["contextmenu"]},dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}},emits:["menuEvent"],setup(e,{emit:a}){const s=n((()=>e.dropMenuList));return{handleClickMenu:function(e){var n;const{event:i}=e,r=t(s).find((e=>`${e.event}`==`${i}`));a("menuEvent",r),null==(n=e.onClick)||n.call(e)},getMenuList:s}}});const x={class:"ml-1"};M.render=function(e,n,t,f,v,y){const g=a("Icon"),k=a("a-menu-item"),M=a("a-menu-divider"),$=a("a-menu"),b=a("a-dropdown");return s(),i(b,r({trigger:e.trigger},e.$attrs),{overlay:o((()=>[d($,{selectedKeys:e.selectedKeys},{default:o((()=>[(s(!0),i(l,null,c(e.getMenuList,(n=>(s(),i(l,{key:`${n.event}`},[d(k,{onClick:t=>e.handleClickMenu(n),disabled:n.disabled},{default:o((()=>[n.icon?(s(),i(g,{key:0,icon:n.icon},null,8,["icon"])):u("v-if",!0),d("span",x,m(n.text),1)])),_:2},1032,["onClick","disabled"]),n.divider?(s(),i(M,{key:`d-${n.event}`})):u("v-if",!0)],64)))),128))])),_:1},8,["selectedKeys"])])),default:o((()=>[d("span",null,[p(e.$slots,"default")])])),_:3},16,["trigger"])},f(M);export{M as s};