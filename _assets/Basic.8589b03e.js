import{a as e,r as i,i as t,o,j as r,k as s,w as d,p as a,n}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.deb1177b.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import"./index.5586c30e.js";import"./colors.88c331b3.js";import"./index.d6ae3dfa.js";import"./RightOutlined.7f7867ab.js";import"./index.209318a5.js";import"./types.80de9d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./_baseFor.f4e5f03f.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.23afc8d6.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./LeftOutlined.760e802a.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.eb4ddc20.js";import"./index.2cd1edc8.js";import"./index.d958525d.js";import"./zh_CN.0242bd16.js";import"./TableAction.5f18bb1b.js";import"./index.99070219.js";import"./CaretDownFilled.b023be26.js";import"./index.4eeb0172.js";import"./CheckOutlined.952b8817.js";import"./CloseOutlined.c517d8dc.js";import{s as p}from"./EditTableHeaderIcon.d245563b.js";import"./DownOutlined.88faef57.js";import"./FullscreenOutlined.fcc47bab.js";import"./functional.8f7dc448.js";import"./LoadingOutlined.0226bca5.js";import"./RedoOutlined.990d63dc.js";import"./RightOutlined.28ca736c.js";import"./SettingOutlined.a5ad0862.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import"./useForm.86f9369f.js";import"./index.17c0dda7.js";import"./useWindowSizeFn.4b33812b.js";import"./useFullScreen.b273f378.js";import"./uuid.40269c00.js";import"./useExpose.95c38320.js";import"./index.e63d61cb.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.23d28b6a.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0),s=i(!1);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1,s.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:s}}});const j={class:"p-4"},u=a(" 开启loading ");c.render=function(e,i,p,m,l,c){const b=t("a-button"),f=t("BasicTable");return o(),r("div",j,[s(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:d((()=>[s(b,{type:"primary",onClick:e.toggleCanResize},{default:d((()=>[a(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleBorder},{default:d((()=>[a(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleLoading},{default:d((()=>[u])),_:1},8,["onClick"]),s(b,{type:"primary",onClick:e.toggleStriped},{default:d((()=>[a(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default c;