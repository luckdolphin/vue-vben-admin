import{du as o,f as e,a,bl as t,r as n,b as i,aG as s,i as l,br as p,ap as r,o as d,j as u,w as c,k as m,p as g}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./index.a8efe853.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.ebbe171f.js";import"./transButton.3e3572fa.js";import{s as f}from"./index.f1db30ef.js";function b(a){let t,n=document.body;if(Reflect.has(a,"target")||Reflect.has(a,"props")){const o=a;t=o.props||{},n=o.target||document.body}else t=a;const i=o(t);return[()=>{const o=e(n);o&&i.open(o)},()=>{i.close()}]}var y=a({components:{Loading:t,PageWrapper:f},setup(){const o=n(null),e=n(!1),a=i({absolute:!1,loading:!1,tip:"加载中..."}),[t,l]=b({tip:"加载中..."}),[p,r]=b({target:o,props:{tip:"加载中...",absolute:!0}});function d(o){a.absolute=o,a.loading=!0,setTimeout((()=>{a.loading=!1}),2e3)}return{openCompFullLoading:function(){d(!1)},openFnFullLoading:function(){t(),setTimeout((()=>{l()}),2e3)},openFnWrapLoading:function(){p(),setTimeout((()=>{r()}),2e3)},openCompAbsolute:function(){d(!0)},wrapEl:o,loadingRef:e,openDirectiveLoading:function(){e.value=!0,setTimeout((()=>{e.value=!1}),2e3)},...s(a)}}});const L=g("全屏 Loading"),j=g("容器内 Loading"),C=g("全屏 Loading"),k=g("容器内 Loading"),x=g(" 打开指令Loading ");y.render=function(o,e,a,t,n,i){const s=l("a-alert"),g=l("a-button"),f=l("Loading"),b=l("PageWrapper"),y=p("loading");return r((d(),u(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:c((()=>[m(s,{message:"组件方式"}),m(g,{class:"my-4 mr-4",type:"primary",onClick:o.openCompFullLoading},{default:c((()=>[L])),_:1},8,["onClick"]),m(g,{class:"my-4",type:"primary",onClick:o.openCompAbsolute},{default:c((()=>[j])),_:1},8,["onClick"]),m(f,{loading:o.loading,absolute:o.absolute,tip:o.tip},null,8,["loading","absolute","tip"]),m(s,{message:"函数方式"}),m(g,{class:"my-4 mr-4",type:"primary",onClick:o.openFnFullLoading},{default:c((()=>[C])),_:1},8,["onClick"]),m(g,{class:"my-4",type:"primary",onClick:o.openFnWrapLoading},{default:c((()=>[k])),_:1},8,["onClick"]),m(s,{message:"指令方式"}),m(g,{class:"my-4 mr-4",type:"primary",onClick:o.openDirectiveLoading},{default:c((()=>[x])),_:1},8,["onClick"])])),_:1},512)),[[y,o.loadingRef]])};export default y;