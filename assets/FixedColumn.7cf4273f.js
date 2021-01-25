import{_ as e}from"./index.9453dcb8.js";import{d as i}from"./table.103874fa.js";import{d as t,h as o,o as s,i as d,j as n,w as r}from"./index.06f3ee29.js";import{g as a}from"./index.46e5b397.js";import{u as m}from"./useTable.e8caf5fd.js";import"./index.6f563249.js";import"./SearchOutlined.80b97ace.js";import"./CheckOutlined.170c5a81.js";import"./DownOutlined.a2b62231.js";import"./index.ca107bc6.js";import"./index.33949cd9.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.0d1494f4.js";import"./findIndex.e0eb9451.js";import"./isEqual.74a158b4.js";import"./_baseProperty.74f89655.js";import"./toInteger.c1d92202.js";import"./index.7729c420.js";import"./RightOutlined.3a6167aa.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./index.532ffeca.js";import"./LeftOutlined.117bdb10.js";import"./DoubleLeftOutlined.d6084e06.js";import"./DoubleRightOutlined.fdbb9416.js";import"./zh_CN.8094f4d6.js";import"./uuid.0357dfa3.js";import"./index.51a23a15.js";import"./util.6f4aed49.js";import"./DeleteOutlined.084cf4d3.js";import"./EyeOutlined.9c30adbb.js";import"./index.be890f15.js";import"./index.95c10fda.js";import"./scrollTo.c1e0f75f.js";import"./transButton.0234a19c.js";import"./CaretDownFilled.137924ff.js";import"./clickOutside.9c6e4165.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./index.05074f4c.js";import"./index.a3e88181.js";import"./UpOutlined.c18e08b2.js";import"./index.5f26cfb9.js";import"./useSortable.8390fa64.js";import"./useTimeout.6f68f351.js";import"./useWindowSizeFn.c470727d.js";import"./index.894ac7ce.js";import"./useAttrs.75e4bdd4.js";import"./index.6ff2b8a1.js";import"./index.de8bd41e.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./FullscreenOutlined.bbb91eb1.js";import"./index.33e2796b.js";import"./SettingOutlined.2d170f9a.js";import"./useExpose.74ed96d1.js";import"./useForm.bc255b70.js";import"./index.980e8b38.js";import"./index.1856500c.js";import"./colors.150c899a.js";import"./RedoOutlined.8be832f0.js";import"./Tree.918118f3.js";import"./index.316663d4.js";import"./index.2b3a1b55.js";import"./download.0962c71e.js";const p=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var l=t({components:{BasicTable:e,TableAction:a},setup(){const[e]=m({title:"TableAction组件及固定列示例",api:i,columns:p,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};l.render=function(e,i,t,a,m,p){const l=o("TableAction"),j=o("BasicTable");return s(),d("div",c,[n(j,{onRegister:e.registerTable},{action:r((({record:i})=>[n(l,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default l;