let e=document.createElement("style");e.innerHTML=".high-form[data-v-40783baa]{padding-bottom:48px}",document.head.appendChild(e);import{a as o,r as t,d8 as i,d9 as r,i as s,o as n,j as a,bo as p,k as l,p as d}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./useSortable.ad13960b.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import{s as m}from"./index.3620d909.js";import"./index.28c69232.js";import"./index.a8efe853.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./LeftOutlined.afe04eed.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.4ac1b22a.js";import"./zh_CN.0242bd16.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./CaretDownFilled.5b4eb00d.js";import"./transButton.3e3572fa.js";import"./index.a56b187c.js";import"./CheckOutlined.5fcde905.js";import"./CloseOutlined.93cdb7f8.js";import"./index.be77f595.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./SettingOutlined.f0e8c907.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{s as c}from"./index.f1db30ef.js";import"./useAttrs.4a972d2b.js";import"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import{u as f}from"./useForm.7906866b.js";import"./useExpose.0843e844.js";import"./useTable.79996857.js";import b from"./PersonTable.853ee011.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var g=o({components:{BasicForm:m,PersonTable:b,PageWrapper:c},setup(){const e=t(null),[o,{validate:i}]=f({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[r,{validate:s}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:o,registerTask:r,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([i(),s()])}catch(e){}},tableRef:e}}});const h=p("data-v-40783baa");i("data-v-40783baa");const q=d("提交");r();const v=h(((e,o,t,i,r,p)=>{const d=s("BasicForm"),m=s("a-card"),c=s("PersonTable"),f=s("a-button"),b=s("PageWrapper");return n(),a(b,{class:"high-form",title:"高级表单",contentBackgrond:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:h((()=>[l(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[q])),_:1},8,["onClick"])])),default:h((()=>[l(m,{title:"仓库管理",bordered:!1},{default:h((()=>[l(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[l(d,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[l(c,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=v,g.__scopeId="data-v-40783baa";export default g;