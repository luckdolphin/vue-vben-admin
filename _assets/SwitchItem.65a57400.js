let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,au as n,u as a,s as i,i as s,o as d,j as l,k as o,n as r,v as c,aR as p}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.f5b6f6ca.js";import{S as f}from"./index.c667da3b.js";import"./SettingOutlined.10ef9f35.js";import"./index.cffe7315.js";import"./useHeaderSetting.38c8c494.js";import{b as h}from"./index.f526bed4.js";var u=t({name:"SwitchItem",components:{Switch:f},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=n("setting-switch-item"),{t:s}=a();return{prefixCls:t,t:s,handleChange:function(t){e.event&&h(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const m=p("data-v-2b7b2ae4")(((e,t,n,a,i,p)=>{const f=s("Switch");return d(),l("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(f,c(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=m,u.__scopeId="data-v-2b7b2ae4";export default u;