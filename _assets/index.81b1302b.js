import{a as o,i as e,o as i,j as s,w as t,k as r,p as a}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import"./index.3620d909.js";import{A as n}from"./index.28c69232.js";import"./index.a8efe853.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./transButton.3e3572fa.js";import"./index.a56b187c.js";import"./CloseOutlined.93cdb7f8.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{s as d}from"./index.f1db30ef.js";import"./useAttrs.4a972d2b.js";import{a as p}from"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import"./useForm.7906866b.js";import m from"./Modal1.1d7b792f.js";import l from"./Modal2.436a949d.js";import j from"./Modal3.f3a8fa18.js";import c from"./Modal4.54ea1a06.js";var f=o({components:{Alert:n,Modal1:m,Modal2:l,Modal3:j,Modal4:c,PageWrapper:d},setup(){const[o,{openModal:e,setModalProps:i}]=p(),[s,{openModal:t}]=p(),[r,{openModal:a}]=p(),[n,{openModal:d}]=p();return{register1:o,openModal1:e,register2:s,openModal2:t,register3:r,openModal3:a,register4:n,openModal4:d,send:function(){d(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),b=a("打开弹窗"),x=a("打开弹窗并传递数据");f.render=function(o,a,n,d,p,m){const l=e("Alert"),j=e("a-button"),c=e("Modal1"),f=e("Modal2"),M=e("Modal3"),y=e("Modal4"),C=e("PageWrapper");return i(),s(C,{title:"modal组件使用示例"},{default:t((()=>[r(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(j,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(l,{message:"内外同时同时显示隐藏","show-icon":""}),r(j,{type:"primary",class:"my-4",onClick:o.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(l,{message:"自适应高度","show-icon":""}),r(j,{type:"primary",class:"my-4",onClick:o.openModal3},{default:t((()=>[b])),_:1},8,["onClick"]),r(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(j,{type:"primary",class:"my-4",onClick:o.send},{default:t((()=>[x])),_:1},8,["onClick"]),r(c,{onRegister:o.register1},null,8,["onRegister"]),r(f,{onRegister:o.register2},null,8,["onRegister"]),r(M,{onRegister:o.register3},null,8,["onRegister"]),r(y,{onRegister:o.register4},null,8,["onRegister"])])),_:1})};export default f;