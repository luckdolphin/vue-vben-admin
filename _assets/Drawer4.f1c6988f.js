import{a as e,i,o as s,j as t,w as r,k as o,v as d}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import{s as n}from"./index.5586c30e.js";import"./colors.88c331b3.js";import"./RightOutlined.7f7867ab.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.2cd1edc8.js";import"./index.99070219.js";import"./index.d1cc2d2c.js";import"./index.4eeb0172.js";import{s as a,a as m}from"./index.25ed3e1e.js";import"./LoadingOutlined.0226bca5.js";import"./RightOutlined.28ca736c.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import{u as p}from"./useForm.86f9369f.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=e({components:{BasicDrawer:a,BasicForm:n},setup(){const[e,{setFieldsValue:i}]=p({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=m((e=>{i({field2:e.data,field1:e.info})}));return{register:s,schemas:c,registerForm:e}}});l.render=function(e,n,a,m,p,c){const l=i("BasicForm"),j=i("BasicDrawer");return s(),t(j,d(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:r((()=>[o("div",null,[o(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;