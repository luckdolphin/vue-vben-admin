import{a as e,i as t,o as i,j as o,k as n,w as d,p as s}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.deb1177b.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import"./index.5586c30e.js";import"./colors.88c331b3.js";import"./index.d6ae3dfa.js";import"./RightOutlined.7f7867ab.js";import"./index.209318a5.js";import"./types.80de9d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./_baseFor.f4e5f03f.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.23afc8d6.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./LeftOutlined.760e802a.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.eb4ddc20.js";import"./index.2cd1edc8.js";import"./index.d958525d.js";import"./zh_CN.0242bd16.js";import{T as r}from"./TableAction.5f18bb1b.js";import"./index.99070219.js";import"./CaretDownFilled.b023be26.js";import"./index.4eeb0172.js";import"./CheckOutlined.952b8817.js";import"./CloseOutlined.c517d8dc.js";import{s as a,b as c,c as l}from"./EditTableHeaderIcon.d245563b.js";import"./DownOutlined.88faef57.js";import"./FullscreenOutlined.fcc47bab.js";import"./functional.8f7dc448.js";import"./LoadingOutlined.0226bca5.js";import"./RedoOutlined.990d63dc.js";import"./RightOutlined.28ca736c.js";import"./SettingOutlined.a5ad0862.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import"./useForm.86f9369f.js";import"./index.17c0dda7.js";import"./useWindowSizeFn.4b33812b.js";import"./useFullScreen.b273f378.js";import"./uuid.40269c00.js";import"./useExpose.95c38320.js";import"./index.e63d61cb.js";import{u as m}from"./useTable.ea56ba93.js";const p=[{title:"成员姓名",dataIndex:"name",customRender:l({dataIndex:"name",placeholder:"请输入成员姓名"})},{title:"工号",dataIndex:"no",customRender:l({dataIndex:"no",placeholder:"请输入工号"})},{title:"所属部门",dataIndex:"dept",customRender:l({dataIndex:"dept",placeholder:"请输入所属部门"})}],j=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var b=e({components:{BasicTable:a,EditTableHeaderIcon:c,TableAction:r},setup(){const[e,{getDataSource:t}]=m({columns:p,showIndexColumn:!1,dataSource:j,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){e.editable=!0}function o(e){if(e.editable=!1,e.onCancel&&e.onCancel(),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){e.editable=!1,e.onSubmit&&e.onSubmit()}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const u=s("新增成员");b.render=function(e,s,r,a,c,l){const m=t("TableAction"),p=t("BasicTable"),j=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:d((({record:t,column:i})=>[n(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:d((()=>[u])),_:1},8,["onClick"])])};export default b;