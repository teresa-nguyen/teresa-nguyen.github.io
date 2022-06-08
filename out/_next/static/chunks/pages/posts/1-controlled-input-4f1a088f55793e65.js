(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{8972:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/1-controlled-input",function(){return n(1908)}])},250:function(e,t,n){"use strict";var a=n(5893),r=n(5988),o=n.n(r);(new Date).getFullYear();t.Z={footer:(0,a.jsx)("footer",{className:"jsx-2447ca1c11803f07",children:(0,a.jsx)(o(),{id:"2447ca1c11803f07",children:"footer.jsx-2447ca1c11803f07{margin-top:8rem}a.jsx-2447ca1c11803f07{float:right}"})})}},1908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(5893),r=n(8941),o=n.n(r),s=n(3805),i=n(250),c=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Learning About Controlled Inputs in React"}),"\n",(0,a.jsxs)(t.p,{children:["Form elements in HTML (",(0,a.jsx)(t.code,{children:"<input>"}),", ",(0,a.jsx)(t.code,{children:"<textarea>"}),", and ",(0,a.jsx)(t.code,{children:"<select>"}),") maintain their own state in the browser and will update based on user input. However, in React, state is kept in the state property within the component and is updated with setState(). The browser input and React state may not be the same value."]}),"\n",(0,a.jsx)(t.p,{children:"Controlled input solves this by making React act as our source of truth."}),"\n",(0,a.jsx)(t.p,{children:"The input value will be set by the value of the React state, and any update on the input by the user will trigger setState to change the React state."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import { useState } from 'react'\n\nfunction MyInput() {\n  const [value, setValue] = useState('')\n  const onChange = (event) => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <>\n      <div>My input value: {value}</div>\n      <input value={value} onChange={onChange} />\n    </>\n  )\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:'An input form element whose value is controlled by React in this way is called a "controlled component."'})]})},n=Object.assign({},(0,c.useMDXComponents)(),e.components),r=n.wrapper;return r?(0,a.jsx)(r,u({},e,{children:(0,a.jsx)(t,{})})):t()}var p=(0,a.jsx)(d,{});function h(e){return(0,s.withSSG)(o()({filename:"1-controlled-input.md",route:"/posts/1-controlled-input",meta:{title:"Learning About Controlled Inputs in React",date:"2022/4/02",description:"Understanding controlled inputs and why we should use them.",tag:"react",author:"Teresa"},pageMap:[{name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2022-04-02T00:00:00.000Z"}},{name:"posts",children:[{name:"1-controlled-input",route:"/posts/1-controlled-input",frontMatter:{title:"Learning About Controlled Inputs in React",date:"2022/4/02",description:"Understanding controlled inputs and why we should use them.",tag:"react",author:"Teresa"}},{name:"2-each",route:"/posts/2-each",frontMatter:{title:"All the Different Ways to Go Through a List in JavaScript",date:"2022/4/09",description:"Understanding all the different ways to go through a list in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"3-copying-object",route:"/posts/3-copying-object",frontMatter:{title:"How to Copy an Object in JavaScript",date:"2022/4/16",description:"Learn the different ways to copy an object in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"4-understanding-equality-in-js",route:"/posts/4-understanding-equality-in-js",frontMatter:{title:"Understanding Equality in JavaScript",date:"2022/4/23",description:"Learn the difference between '==' and '===' in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"5-understanding-box-model",route:"/posts/5-understanding-box-model",frontMatter:{title:"Understanding the Box Model",date:"2022/4/30",description:"Learn about Padding, Border, and Margin in the CSS box model.",tag:"css",author:"Teresa"}},{name:"6-flexbox",route:"/posts/6-flexbox",frontMatter:{title:"Helpful Resources for Flexbox",date:"2022/5/07",description:"Some valuable resources for understanding Flexbox.",tag:"css",author:"Teresa"}},{name:"7-style-in-react",route:"/posts/7-style-in-react",frontMatter:{title:"How to Style in React",date:"2022/5/14",description:"Understanding the className and style properties in React.",tag:"css,react",author:"Teresa"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Blog",date:"2022-04-02T00:00:00.000Z"}}],route:"/posts"},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"}]},i.Z))(u({},e,{children:p}))}}},function(e){e.O(0,[774,686,888,179],(function(){return t=8972,e(e.s=t);var t}));var t=e.O();_N_E=t}]);