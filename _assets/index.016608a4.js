let t=document.createElement("style");t.innerHTML=".list-basic__top[data-v-75483016]{padding:24px;text-align:center;background:#fff}.list-basic__top-col[data-v-75483016]:not(:last-child){border-right:1px dashed rgba(206,206,206,.4)}.list-basic__top-col div[data-v-75483016]{margin-bottom:12px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.list-basic__top-col p[data-v-75483016]{margin:0;font-size:24px;line-height:32px;color:rgba(0,0,0,.85)}.list-basic__content[data-v-75483016]{padding:24px;margin-top:12px;background:#fff}.list-basic__content .list[data-v-75483016]{position:relative}.list-basic__content .icon[data-v-75483016]{font-size:40px!important}.list-basic__content .extra[data-v-75483016]{position:absolute;top:20px;right:15px;font-weight:400;color:#1890ff;cursor:pointer}.list-basic__content .description[data-v-75483016]{display:inline-block;width:40%}.list-basic__content .info[data-v-75483016]{display:inline-block;width:30%;text-align:center}.list-basic__content .info div[data-v-75483016]{display:inline-block;padding:0 20px}.list-basic__content .info div span[data-v-75483016]{display:block}.list-basic__content .progress[data-v-75483016]{display:inline-block;width:15%;vertical-align:top}",document.head.appendChild(t);import{a as i,d8 as a,d9 as s,i as e,o as l,j as n,bo as o,k as c,aL as p,aV as r,m as d,n as _,p as f}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import"./index.a8efe853.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.ebbe171f.js";import{P as b}from"./index.ba9445ca.js";import"./transButton.3e3572fa.js";import{s as u}from"./index.f1db30ef.js";import{s as m}from"./index.00d20f2e.js";import{cardList as v}from"./data.cd93c365.js";var x=i({components:{Icon:m,Progress:b,PageWrapper:u},setup:()=>({prefixCls:"list-basic",list:v,pagination:{show:!0,pageSize:3}})});const g=o("data-v-75483016");a("data-v-75483016");const j=c("div",null,"我的待办",-1),h=c("p",null,"8个任务",-1),k=c("div",null,"本周任务平均处理时间",-1),y=c("p",null,"32分钟",-1),C=c("div",null,"本周完成任务数",-1),w=c("p",null,"24个任务",-1),P={key:0,class:"extra"},$={class:"description"},z={class:"info"},O=c("span",null,"Owner",-1),I=c("span",null,"开始时间",-1),L={class:"progress"};s();const S=g(((t,i,a,s,o,b)=>{const u=e("a-col"),m=e("a-row"),v=e("Icon"),x=e("Progress"),S=e("a-list-item-meta"),T=e("a-list-item"),W=e("a-list"),B=e("PageWrapper");return l(),n(B,{class:t.prefixCls,title:"标准列表"},{default:g((()=>[c("div",{class:`${t.prefixCls}__top`},[c(m,{gutter:12},{default:g((()=>[c(u,{span:8,class:`${t.prefixCls}__top-col`},{default:g((()=>[j,h])),_:1},8,["class"]),c(u,{span:8,class:`${t.prefixCls}__top-col`},{default:g((()=>[k,y])),_:1},8,["class"]),c(u,{span:8,class:`${t.prefixCls}__top-col`},{default:g((()=>[C,w])),_:1},8,["class"])])),_:1})],2),c("div",{class:`${t.prefixCls}__content`},[c(W,{pagination:t.pagination},{default:g((()=>[(l(!0),n(p,null,r(t.list,(t=>(l(),n(T,{key:t.id,class:"list"},{default:g((()=>[c(S,null,{avatar:g((()=>[t.icon?(l(),n(v,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):d("v-if",!0)])),title:g((()=>[c("span",null,_(t.title),1),t.extra?(l(),n("div",P,_(t.extra),1)):d("v-if",!0)])),description:g((()=>[c("div",$,_(t.description),1),c("div",z,[c("div",null,[O,f(_(t.author),1)]),c("div",null,[I,f(_(t.datetime),1)])]),c("div",L,[c(x,{percent:t.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));x.render=S,x.__scopeId="data-v-75483016";export default x;