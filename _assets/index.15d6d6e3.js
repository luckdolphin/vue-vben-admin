import{a as e,i as o,o as i,j as s,k as r,w as t,p as a}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./index.e03530a2.js";import"./Trigger.ac5d4b81.js";import"./omit.836c1bd6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.4ce5e280.js";import"./CheckOutlined.1be330dc.js";import"./index.9c067c1c.js";import{A as n}from"./index.8c5d8547.js";import"./colors.b0a3d4bc.js";import"./RightOutlined.9fa77bad.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./index.e1c0b789.js";import"./index.a172b251.js";import"./index.76eb4ecf.js";import"./index.bce375da.js";import"./UpOutlined.09ea3d5a.js";import"./index.9d3583b5.js";import"./index.f91ebcc0.js";import"./index.bfe08aa3.js";import"./index.658fe8df.js";import"./index.e33fc4bc.js";import"./index.92ed2934.js";import"./CloseOutlined.15684c2a.js";import"./FullscreenOutlined.fcdbf0a9.js";import"./LoadingOutlined.110c74b1.js";import"./RightOutlined.204b1f99.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./index.f8e54d62.js";import{a as d}from"./index.1fc7357a.js";import"./useWindowSizeFn.e0ce7d91.js";import"./useForm.ff1be0bc.js";import l from"./Modal1.9e0a05b3.js";import p from"./Modal2.77d6b7ea.js";import m from"./Modal3.9a344236.js";import c from"./Modal4.643f622a.js";var j=e({components:{Alert:n,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:a}]=d(),[n,{openModal:l}]=d();return{register1:e,openModal1:o,register2:s,openModal2:r,register3:t,openModal3:a,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),M=a("打开弹窗"),b=a("打开弹窗并传递数据");j.render=function(e,a,n,d,l,p){const m=o("Alert"),c=o("a-button"),j=o("Modal1"),x=o("Modal2"),y=o("Modal3"),R=o("Modal4");return i(),s("div",f,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:t((()=>[M])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),r(j,{onRegister:e.register1},null,8,["onRegister"]),r(x,{onRegister:e.register2},null,8,["onRegister"]),r(y,{onRegister:e.register3},null,8,["onRegister"]),r(R,{onRegister:e.register4},null,8,["onRegister"])])};export default j;