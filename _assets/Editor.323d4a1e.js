import{a as e,M as i,h as s,i as t,o,j as a,k as r,w as n}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./index.e03530a2.js";import"./Trigger.ac5d4b81.js";import"./omit.836c1bd6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.4ce5e280.js";import"./CheckOutlined.1be330dc.js";import{s as m}from"./index.9c067c1c.js";import"./colors.b0a3d4bc.js";import"./RightOutlined.9fa77bad.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./index.e1c0b789.js";import"./index.a172b251.js";import"./index.76eb4ecf.js";import"./index.bce375da.js";import"./UpOutlined.09ea3d5a.js";import"./index.9d3583b5.js";import"./index.f91ebcc0.js";import"./index.bfe08aa3.js";import"./index.658fe8df.js";import"./index.e33fc4bc.js";import{a as d}from"./index.92ed2934.js";import"./CloseOutlined.15684c2a.js";import"./FullscreenOutlined.fcdbf0a9.js";import"./LoadingOutlined.110c74b1.js";import"./RightOutlined.204b1f99.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./index.f8e54d62.js";import"./index.1fc7357a.js";import"./useWindowSizeFn.e0ce7d91.js";import{T as l}from"./index.c1d5987b.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>i(l,{value:e[s],onChange:i=>{e[s]=i}})}];var p=e({components:{BasicForm:m,CollapseContainer:d},setup(){const{createMessage:e}=s();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};p.render=function(e,i,s,m,d,l){const c=t("BasicForm"),p=t("CollapseContainer");return o(),a("div",u,[r(p,{title:"富文本表单"},{default:n((()=>[r(c,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default p;