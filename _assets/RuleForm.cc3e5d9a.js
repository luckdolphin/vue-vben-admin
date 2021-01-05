import{a as e,h as i,i as s,o,j as t,w as r,k as a,p as l}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import{s as n}from"./index.3620d909.js";import"./index.28c69232.js";import"./index.a8efe853.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./transButton.3e3572fa.js";import{a as d}from"./index.a56b187c.js";import"./CloseOutlined.93cdb7f8.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{s as p}from"./index.f1db30ef.js";import"./useAttrs.4a972d2b.js";import"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import{u as c}from"./useForm.7906866b.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,i)=>i?"1"===i?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var u=e({components:{BasicForm:n,CollapseContainer:d,PageWrapper:p},setup(){const{createMessage:e}=i(),[s,{validateFields:o,clearValidate:t,getFieldsValue:r,setFieldsValue:a}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:s,schemas:m,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},getFormValues:function(){const i=r();e.success("values:"+JSON.stringify(i))},setFormValues:function(){a({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const f={class:"mb-4"},j=l("手动校验表单"),b=l("清空校验信息"),x=l("获取表单值"),g=l("设置表单值");u.render=function(e,i,l,n,d,p){const c=s("a-button"),m=s("BasicForm"),u=s("CollapseContainer"),C=s("PageWrapper");return o(),t(C,{title:"表单校验示例"},{default:r((()=>[a("div",f,[a(c,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),a(c,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),a(c,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"]),a(c,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[g])),_:1},8,["onClick"])]),a(u,{title:"表单校验"},{default:r((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;