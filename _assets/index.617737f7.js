import{a as e,aZ as t,I as s,f as a,i as r,o as n,j as i,w as o,p,n as m,k as u}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./index.a8efe853.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.ebbe171f.js";import"./transButton.3e3572fa.js";import{s as l}from"./index.f1db30ef.js";var c=e({name:"TestTab",components:{PageWrapper:l},setup(){const{currentRoute:e}=t();return{params:s((()=>a(e).params))}}});const d=u("br",null,null,-1),j=p(" Keep Alive "),b=u("input",null,null,-1);c.render=function(e,t,s,a,u,l){const c=r("PageWrapper");return n(),i(c,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:o((()=>[p(" Current Param : "+m(e.params)+" ",1),d,j,b])),_:1})};export default c;