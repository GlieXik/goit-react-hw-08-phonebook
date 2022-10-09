"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[64],{4064:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,o,i,a,s,c,l,d,u=r(7691),p=r(407),x=(0,u.ZP)("div")({boxSizing:"border-box"},p.Dh,p.bK,p.$_,p.GQ,p.Cg,p.FK,p.eC),f=r(168),h=((0,u.ZP)("ul")(t||(t=(0,f.Z)(["\n  width: 250px;\n"]))),(0,u.ZP)("li")(o||(o=(0,f.Z)(["\n  display: block;\n  color: #000;\n  background-color: white;\n  padding: 8px 16px;\n  text-decoration: none;\n  display: flex;\n  justify-content: space-between;\n  animation: 1s show ease;\n\n  @keyframes show {\n    from {\n      opacity: 0;\n      background-color: transparent;\n      color: transparent;\n    }\n    to {\n      opacity: 1;\n      background-color: white;\n      color: #000;\n    }\n  }\n  &:hover {\n    background-color: rgb(232, 243, 254);\n  }\n"])))),b=r(2134),m=r(5162),g=r(9434),w=r(184),j=function(n){var e=n.id,r=n.name,t=n.number,o=(0,g.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(h,{children:[(0,w.jsxs)("span",{children:[r," : ",t]}),(0,w.jsx)("button",{onClick:function(){return o((0,m.GK)(e))},children:(0,w.jsx)(b.YK6,{})})]},e)})},v=function(n){return n.contacts.contacts.items},y=function(n){return n.contacts.contacts},k=function(n){return n.contacts.contacts.error},Z=function(n){return n.contacts.filter},C=function(){var n=(0,g.v9)(v),e=(0,g.v9)(Z),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,w.jsx)("div",{children:0===n.length?(0,w.jsx)(x,{p:4,width:"250px",display:"flex",flexWrap:"wrap",justifyContent:"center",children:(0,w.jsx)("b",{children:"Empty List".toUpperCase()})}):(0,w.jsx)(x,{as:"ul",width:"250px",children:r.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,w.jsx)(j,{id:e,name:r,number:t},e)}))})})},_=r(1413),F=r(2982),P=r(5705),z=r(9504),K=r.n(z),q=(0,u.ZP)("label")(i||(i=(0,f.Z)(['\n  position: relative;\n  width: 250px;\n  background-color: #fff;\n  display: flex;\n  &:before {\n    content: "";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: #0170f0;\n    transform: scale(0);\n    transform-origin: center;\n    transform-origin: left;\n    transition: transform 0.25s;\n  }\n  &:focus-within::before {\n    transform: scale(1);\n  }\n']))),I=(0,u.ZP)(P.gN)(a||(a=(0,f.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: #8e8e8e;\n  width: 100%;\n  padding: 10px;\n"]))),L=(0,u.ZP)(K())(s||(s=(0,f.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: #8e8e8e;\n  width: 100%;\n  padding: 10px;\n"]))),A=(0,u.ZP)("button")(c||(c=(0,f.Z)(["\n  margin-top: ",'px;\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: "JetBrains Mono", monospace;\n  height: 48px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 18px;\n  &:focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n  &:active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n'])),(function(n){return n.theme.space[4]})),D=r(7103),R=function(){var n=(0,g.I0)(),e=(0,g.v9)(v).map((function(n){return n.name})),r=D.Ry().shape({name:D.Z_().required("Required"),number:D.Z_().required("Required")}),t=function(r){var t=r.name,o=r.number;e.find((function(n){return n.toLowerCase()===t}))?alert(t+" is already in contacts"):n((0,m.uK)({name:t,number:o}))};return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(x,{width:"250px",children:(0,w.jsx)(P.J9,{initialValues:{name:"",number:""},onSubmit:function(n,e){t(n),e.resetForm()},validationSchema:r,children:(0,w.jsx)(P.l0,{children:(0,w.jsxs)(x,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:[(0,w.jsx)(x,{mb:3,children:(0,w.jsx)(q,{htmlFor:"name",children:(0,w.jsx)(I,{id:"name",name:"name",placeholder:"Name",type:"text",onKeyDown:function(n){if("enter"===n.key.toLowerCase()){var e=n.target.form,r=(0,F.Z)(e).indexOf(n.target);e.elements[r+1].focus(),n.preventDefault()}},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})})}),(0,w.jsx)("div",{children:(0,w.jsx)(q,{htmlFor:"number",children:(0,w.jsx)(I,{id:"number",name:"number",children:function(n){var e=n.field;return(0,w.jsx)(L,(0,_.Z)((0,_.Z)({mask:"999-99-99"},e),{},{type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number"}))}})})}),(0,w.jsx)(A,{type:"submit",children:"Submit"})]})})})})})},S=r(2791),N=(0,u.ZP)("label")(l||(l=(0,f.Z)(['\n  position: relative;\n  width: 250px;\n  background-color: #fff;\n  display: flex;\n  &:before {\n    content: "";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background: #0170f0;\n    transform: scale(0);\n    transform-origin: center;\n    transform-origin: left;\n    transition: transform 0.25s;\n  }\n  &:focus-within::before {\n    transform: scale(1);\n  }\n']))),Y=(0,u.ZP)("input")(d||(d=(0,f.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: #8e8e8e;\n  width: 100%;\n  padding: 10px;\n"]))),E=r(8952),G=function(){var n=(0,g.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(N,{children:(0,w.jsx)(Y,{type:"text",name:"filter",onChange:function(e){var r=e.currentTarget.value;n((0,E.A)(r))},placeholder:"Find contacts by name"})})})},J=function(){var n=(0,g.I0)(),e=(0,g.v9)(y),r=(0,g.v9)(k);return(0,S.useEffect)((function(){n((0,m.yF)())}),[n]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(x,{display:"flex",alignItems:"center",flexDirection:"column",children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(R,{}),(0,w.jsx)("h2",{children:"Contacts"}),e&&r&&(0,w.jsx)("b",{children:"Request in progress..."}),(0,w.jsx)(G,{}),(0,w.jsx)(C,{})]})})}}}]);
//# sourceMappingURL=64.e01303e0.chunk.js.map