let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-18c6f5e8]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as t,i,o as r,j as s,bo as o,k as a}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./useSortable.ad13960b.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import"./index.3620d909.js";import"./index.28c69232.js";import"./index.a8efe853.js";import"./index.3a783be0.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./LeftOutlined.afe04eed.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.4ac1b22a.js";import"./zh_CN.0242bd16.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./CaretDownFilled.5b4eb00d.js";import"./transButton.3e3572fa.js";import"./index.a56b187c.js";import"./CheckOutlined.5fcde905.js";import"./CloseOutlined.93cdb7f8.js";import{s as d}from"./index.be77f595.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./SettingOutlined.f0e8c907.js";import"./index.baee5596.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{s as n}from"./index.f1db30ef.js";import{D as m}from"./index.bdc6e0da.js";import"./useAttrs.4a972d2b.js";import"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import"./useForm.7906866b.js";import"./useExpose.0843e844.js";import{u as p}from"./useTable.79996857.js";import{refundSchema as c,refundData as j,personSchema as l,personData as u,refundTableData as f,refundTableSchema as b,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.f3c076bf.js";var h=t({components:{Description:m,BasicTable:d,PageWrapper:n},setup(){const[e]=p({title:"退货商品",dataSource:f,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=p({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:j,personSchema:l,personData:u}}});const T=o("data-v-18c6f5e8"),S=T(((e,t,o,d,n,m)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),l=i("PageWrapper");return r(),s(l,{title:"基础详情页",contentBackgrond:""},{default:T((()=>[a(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),a(c),a(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),a(c),a(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),a(c),a(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=S,h.__scopeId="data-v-18c6f5e8";export default h;