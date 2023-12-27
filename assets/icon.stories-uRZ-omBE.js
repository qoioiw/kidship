import{j as e}from"./jsx-runtime-AgcCsxC8.js";import{I as s}from"./icon-tfYIDLX5.js";import{B as d}from"./button-ZkopNhqI.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-bittVVcR.js";import"./index-iqSuTeQG.js";import"./index-hnMjDxAq.js";const B={title:"Icon",component:s,tags:["autodocs"]},c={args:{icon:"check",size:"3x"}};c.storyName="默认图标";const r={args:{icon:"check",theme:"danger",size:"3x"}};r.storyName="不同主题的 Icon";const n=()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[e.jsx(s,{icon:"check",size:"3x"}),e.jsx(s,{icon:"times",size:"3x"}),e.jsx(s,{icon:"anchor",size:"3x"}),e.jsx(s,{icon:"trash",size:"3x"}),e.jsxs(d,{size:"lg",btnType:"primary",children:[e.jsx(s,{icon:"check"})," check"," "]}),e.jsx(s,{icon:"check",size:"3x",theme:"theme"}),e.jsx(s,{icon:"times",size:"3x",theme:"danger"}),e.jsx(s,{icon:"anchor",size:"3x",theme:"primary"}),e.jsx(s,{icon:"exclamation-circle",size:"3x",theme:"warning"}),e.jsx(s,{icon:"spinner",size:"3x",theme:"primary",spin:!0}),e.jsx(s,{icon:"spinner",size:"3x",theme:"success",pulse:!0})]});n.storyName="示例Icon";var o,i,t;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    /**设置 icon 图标*/
    icon: "check",
    size: "3x"
  }
}`,...(t=(i=c.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var a,m,x;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    icon: "check",
    theme: "danger",
    size: "3x"
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,h,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  justifyContent: 'space-around'
}}>\r
    <Icon icon="check" size="3x" />\r
    <Icon icon="times" size="3x" />\r
    <Icon icon="anchor" size="3x" />\r
    <Icon icon="trash" size="3x" />\r
    <Button size="lg" btnType="primary">\r
      <Icon icon="check" /> check{" "}\r
    </Button>\r
\r
    <Icon icon="check" size="3x" theme="theme" />\r
    <Icon icon="times" size="3x" theme="danger" />\r
    <Icon icon="anchor" size="3x" theme="primary" />\r
    <Icon icon="exclamation-circle" size="3x" theme="warning" />\r
\r
    <Icon icon="spinner" size="3x" theme="primary" spin />\r
    <Icon icon="spinner" size="3x" theme="success" pulse />\r
  </div>`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const E=["ADefaultIcons","BThemeIcons","IconExample"];export{c as ADefaultIcons,r as BThemeIcons,n as IconExample,E as __namedExportsOrder,B as default};
