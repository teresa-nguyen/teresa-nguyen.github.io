(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{3625:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/3-copying-object",function(){return n(3814)}])},250:function(e,t,n){"use strict";var o=n(5893),a=n(5988),r=n.n(a);(new Date).getFullYear();t.Z={footer:(0,o.jsx)("footer",{className:"jsx-2447ca1c11803f07",children:(0,o.jsx)(r(),{id:"2447ca1c11803f07",children:"footer.jsx-2447ca1c11803f07{margin-top:8rem}a.jsx-2447ca1c11803f07{float:right}"})})}},3814:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(5893),a=n(8941),r=n.n(a),s=n(3805),c=n(250),i=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"How to Copy an Object in JavaScript"}),"\n",(0,o.jsx)(t.p,{children:"I recently found out that you can't simply assign an object to another variable to copy it. The two variables will end up pointing to the same object! Fortunately, there are many ways to create a new copy of an object in JavaScript. Here are the ways I found:"}),"\n",(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:[(0,o.jsxs)(t.p,{children:["The first way I learned was the ",(0,o.jsx)(t.code,{children:"Object.assign()"})," method. Learn more about it ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",children:"here"}),"."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const object1 = { name: 'John' }\n\nconst object2 = Object.assign({}, object1)\nobject2.name = 'Scott'\n\nconsole.log(object1.name) // John\nconsole.log(object2.name) // Scott\n"})})]}),(0,o.jsxs)("li",{children:[(0,o.jsxs)(t.p,{children:["The second way is similar to the first but uses the ES6 spread operator. Learn more about it ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",children:"here"}),"."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const object1 = { name: 'John' }\n\nconst object2 = { ...object1 }\nobject2.name = 'Scott'\n\nconsole.log(object1.name) // John\nconsole.log(object2.name) // Scott\n"})})]}),(0,o.jsxs)("li",{children:[(0,o.jsxs)(t.p,{children:["Lastly, you can use libraries like Underscore or Lodash for the clone method. Learn more about it ",(0,o.jsx)(t.a,{href:"https://underscorejs.org/#clone",children:"here"})]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const object1 = { name: 'John' }\n\nconst object2 = _.clone(object1)\nobject2.name = 'Scott'\n\nconsole.log(object1.name) // John\nconsole.log(object2.name) // Scott\n"})})]})]}),"\n",(0,o.jsx)(t.p,{children:"I hope these help you learn how to create newly copied objects without affecting your existing object."})]})},n=Object.assign({},(0,i.useMDXComponents)(),e.components),a=n.wrapper;return a?(0,o.jsx)(a,d({},e,{children:(0,o.jsx)(t,{})})):t()}var u=(0,o.jsx)(p,{});function h(e){return(0,s.withSSG)(r()({filename:"3-copying-object.md",route:"/posts/3-copying-object",meta:{title:"How to Copy an Object in JavaScript",date:"2022/4/16",description:"Learn the different ways to copy an object in JavaScript.",tag:"javascript",author:"Teresa"},pageMap:[{name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2022-04-02T00:00:00.000Z"}},{name:"posts",children:[{name:"1-controlled-input",route:"/posts/1-controlled-input",frontMatter:{title:"Learning About Controlled Inputs in React",date:"2022/4/02",description:"Understanding controlled inputs and why we should use them.",tag:"react",author:"Teresa"}},{name:"2-each",route:"/posts/2-each",frontMatter:{title:"All the Different Ways to Go Through a List in JavaScript",date:"2022/4/09",description:"Understanding all the different ways to go through a list in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"3-copying-object",route:"/posts/3-copying-object",frontMatter:{title:"How to Copy an Object in JavaScript",date:"2022/4/16",description:"Learn the different ways to copy an object in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"4-understanding-equality-in-js",route:"/posts/4-understanding-equality-in-js",frontMatter:{title:"Understanding Equality in JavaScript",date:"2022/4/23",description:"Learn the difference between '==' and '===' in JavaScript.",tag:"javascript",author:"Teresa"}},{name:"5-understanding-box-model",route:"/posts/5-understanding-box-model",frontMatter:{title:"Understanding the Box Model",date:"2022/4/30",description:"Learn about Padding, Border, and Margin in the CSS box model.",tag:"css",author:"Teresa"}},{name:"6-flexbox",route:"/posts/6-flexbox",frontMatter:{title:"Helpful Resources for Flexbox",date:"2022/5/07",description:"Some valuable resources for understanding Flexbox.",tag:"css",author:"Teresa"}},{name:"7-style-in-react",route:"/posts/7-style-in-react",frontMatter:{title:"How to Style in React",date:"2022/5/14",description:"Understanding the className and style properties in React.",tag:"css,react",author:"Teresa"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Blog",date:"2022-04-02T00:00:00.000Z"}}],route:"/posts"},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"}]},c.Z))(d({},e,{children:u}))}}},function(e){e.O(0,[774,686,888,179],(function(){return t=3625,e(e.s=t);var t}));var t=e.O();_N_E=t}]);