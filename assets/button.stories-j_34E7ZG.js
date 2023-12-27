import{j as t}from"./jsx-runtime-AgcCsxC8.js";import{B as n}from"./button-AyLhSy3X.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-bittVVcR.js";const C={title:"Button",component:n,tags:["autodocs"]},e={args:{btnType:"default",children:"Button",onClick:function(){}}};e.storyName="默认 Button";const r={args:{btnType:"primary",size:"lg",children:"Button"}};r.storyName="不同大小的 Button";const o={args:{btnType:"primary",children:"Button"}};o.storyName="不同主题的 Button";const s=()=>t.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[t.jsx(n,{onClick:function(){},children:" default button "}),t.jsx(n,{btnType:"primary",children:" primary button "}),t.jsx(n,{btnType:"danger",children:" danger button "}),t.jsxs(n,{btnType:"link",href:"https://google.com",children:[" ","link button"," "]}),t.jsx(n,{size:"sm",children:" small button "}),t.jsx(n,{size:"lg",children:" large button "})]});s.storyName="示例";var a,u,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    btnType: "default",
    children: "Button",
    onClick: function onRefCheck() {}
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    btnType: "primary",
    size: "lg",
    children: "Button"
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    btnType: "primary",
    children: "Button"
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var B,g,h;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  justifyContent: 'space-around'
}}>\r
    <Button onClick={function onRefCheck() {}}> default button </Button>\r
\r
  \r
    <Button btnType="primary"> primary button </Button>\r
    <Button btnType="danger"> danger button </Button>\r
    <Button btnType="link" href="https://google.com">\r
      {" "}\r
      link button{" "}\r
    </Button>\r
    <Button size="sm"> small button </Button>\r
\r
    <Button size="lg"> large button </Button>\r
  </div>`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const z=["DefaultButton","ButtonWithSize","ButtonWithType","ButtonExample"];export{s as ButtonExample,r as ButtonWithSize,o as ButtonWithType,e as DefaultButton,z as __namedExportsOrder,C as default};
