import{j as t}from"./jsx-runtime-AgcCsxC8.js";import{r as o}from"./index-XiNr8FW2.js";import{I as R}from"./icon-ZGsI-D2p.js";import{I as z}from"./Input-TpOmoRiz.js";import{c as L}from"./index-bittVVcR.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-iqSuTeQG.js";import"./index-hnMjDxAq.js";function J(n,s=300){const[r,u]=o.useState(n);return o.useEffect(()=>{const a=window.setTimeout(()=>{u(n)},s);return()=>{clearTimeout(a)}},[n,s]),r}function M(n,s){o.useEffect(()=>{const r=u=>{!n.current||n.current.contains(u.target)||s(u)};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[n,s])}const m=n=>{const{fetchSuggestions:s,onSelect:r,value:u,renderOption:a,...w}=n,[F,E]=o.useState(u),[c,i]=o.useState([]),[I,v]=o.useState(!1),[p,y]=o.useState(-1),b=J(F,500),f=o.useRef(!1),C=o.useRef(null);M(C,()=>{i([])}),o.useEffect(()=>{if(b&&f.current){const e=s(b);e instanceof Promise?(v(!0),e.then(l=>{v(!1),i(l),console.log(l)})):i(e)}else i([]);y(-1)},[b]);const S=e=>{e<0&&(e=0),e>=c.length&&(e=c.length-1),y(e)},W=e=>{switch(e.key){case"Enter":c[p]&&A(c[p]);break;case"ArrowUp":S(p-1);break;case"ArrowDown":S(p+1);break;case"Escape":i([]);break}},T=e=>{const l=e.target.value.trim();E(l),f.current=!0},A=e=>{E(e.value),i([]),r&&r(e),f.current=!1},_=e=>a?a(e):e.value,G=()=>t.jsx("ul",{children:c.map((e,l)=>{const P=L("suggestion-item",{"item-highlighted":l===p});return t.jsx("li",{className:P,onClick:()=>A(e),children:_(e)},l)})});return t.jsxs("div",{className:"viking-auto-complete",ref:C,children:[t.jsx(z,{value:F,onChange:T,onKeyDown:W,...w}),I&&t.jsx("ul",{children:t.jsx(R,{icon:"spinner",spin:!0})}),c.length>0&&G()]})};try{m.displayName="AutoComplete",m.__docgenInfo={description:`输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择
### 引用方法

~~~js
import { AutoComplete } from 'vikingship'
~~~`,displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceObject) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceObject) => ReactElement<any, string | JSXElementConstructor<any>>)"}},disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const ee={title:"AutoComplete",component:m,tags:["autodocs"]},d=()=>{const n=["bradley","pope","caruso","cook","cousins","james","AD","green","howard","kuzma","McGee","rando"],s=r=>n.filter(u=>u.includes(r)).map(u=>({value:u}));return t.jsx(m,{fetchSuggestions:s,placeholder:"输入湖人队球员英文名试试"})};d.storyName="基本搜索";const h=()=>{const n=[{value:"bradley",number:11},{value:"pope",number:1},{value:"caruso",number:4},{value:"cook",number:2},{value:"cousins",number:15},{value:"james",number:23},{value:"AD",number:3},{value:"green",number:14},{value:"howard",number:39},{value:"kuzma",number:0}],s=u=>n.filter(a=>a.value.includes(u)),r=u=>{const a=u;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["名字: ",a.value]}),t.jsxs("span",{children:["球衣号码: ",a.number]})]})};return t.jsx(m,{fetchSuggestions:s,placeholder:"输入湖人队球员英文,自定义下拉模版",renderOption:r})};h.storyName="自定义搜索结果模板";const g=()=>{const n=r=>fetch(`https://api.github.com/search/users?q=${r}`).then(u=>u.json()).then(({items:u})=>u.slice(0,10).map(a=>({value:a.login,...a}))),s=r=>{const u=r;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",u.value]}),t.jsxs("span",{children:["url: ",u.url]})]})};return t.jsx(m,{fetchSuggestions:n,placeholder:"输入 Github 用户名试试",renderOption:s})};g.storyName="支持异步搜索";var D,j,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({
      value: name
    }));
  };
  return <AutoComplete fetchSuggestions={handleFetch} placeholder="输入湖人队球员英文名试试" />;
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var B,q,x;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const lakersWithNumber = [{
    value: 'bradley',
    number: 11
  }, {
    value: 'pope',
    number: 1
  }, {
    value: 'caruso',
    number: 4
  }, {
    value: 'cook',
    number: 2
  }, {
    value: 'cousins',
    number: 15
  }, {
    value: 'james',
    number: 23
  }, {
    value: 'AD',
    number: 3
  }, {
    value: 'green',
    number: 14
  }, {
    value: 'howard',
    number: 39
  }, {
    value: 'kuzma',
    number: 0
  }];
  const handleFetch = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query));
  };
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = (item as DataSourceType<LakerPlayerProps>);
    return <>\r
        <b>名字: {itemWithNumber.value}</b>\r
        <span>球衣号码: {itemWithNumber.number}</span>\r
      </>;
  };
  return <AutoComplete fetchSuggestions={handleFetch} placeholder="输入湖人队球员英文,自定义下拉模版" renderOption={renderOption} />;
}`,...(x=(q=h.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var N,O,V;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const handleFetch = (query: string) => {
    return fetch(\`https://api.github.com/search/users?q=\${query}\`).then(res => res.json()).then(({
      items
    }) => {
      return items.slice(0, 10).map((item: any) => ({
        value: item.login,
        ...item
      }));
    });
  };
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = (item as DataSourceType<GithubUserProps>);
    return <>\r
        <b>Name: {itemWithGithub.value}</b>\r
        <span>url: {itemWithGithub.url}</span>\r
      </>;
  };
  return <AutoComplete fetchSuggestions={handleFetch} placeholder="输入 Github 用户名试试" renderOption={renderOption} />;
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ue=["BaseAnto","PropsTemplate","AsynchronousCompontant"];export{g as AsynchronousCompontant,d as BaseAnto,h as PropsTemplate,ue as __namedExportsOrder,ee as default};
