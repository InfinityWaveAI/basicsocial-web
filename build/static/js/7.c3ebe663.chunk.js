(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(163),i=t(165),s=t(164),m=t(168),c=t(181);const o={name:"",email:"",message:""};function d(e){let a={};return e.name||(a.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email address is required",e.message||(a.message="Message is required"),a}var p=t(72),u=t(7);const b=Object(u.b)("p")`
  margin-top: 1.5rem;
`,g=Object(u.b)("div")`
  position: relative;
  max-width: 700px;
`,h=Object(u.b)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var E=Object(s.a)()(e=>{let{title:a,content:t,t:n}=e;return r.a.createElement(g,null,r.a.createElement("h6",null,n(a)),r.a.createElement(h,null,r.a.createElement(b,null,n(t))))});const v=Object(u.b)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,x=Object(u.b)("input")`
  font-size: 0.875rem;
`,y=Object(u.b)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,w=Object(u.b)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,O=Object(u.b)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;var j=Object(s.a)()(e=>{let{name:a,placeholder:t,onChange:n,t:l}=e;return r.a.createElement(v,null,r.a.createElement(O,{htmlFor:a},l(a)),r.a.createElement(x,{placeholder:l(t),name:a,id:a,onChange:n}))});var f=Object(s.a)()(e=>{let{name:a,placeholder:t,onChange:n,t:l}=e;return r.a.createElement(y,null,r.a.createElement(O,{htmlFor:a},l(a)),r.a.createElement(w,{placeholder:l(t),id:a,name:a,onChange:n}))});const S=Object(u.b)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,C=Object(u.b)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,k=Object(u.b)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,z=Object(u.b)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;a.default=Object(s.a)()(e=>{let{title:a,content:t,id:s,t:u}=e;const{values:b,errors:g,handleChange:h,handleSubmit:v}=(e=>{const[a,t]=Object(n.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:a,value:n}=e.target;t(e=>({...e,values:{...e.values,[a]:n},errors:{...e.errors,[a]:""}}))},handleSubmit:async n=>{n.preventDefault();const r=a.values,l=e(r);t(e=>({...e,errors:l}));try{Object.values(l).every(e=>""===e)&&((await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(n.target.reset(),t(()=>({values:{...o},errors:{...o}})),c.a.success({message:"Success",description:"Your message has been sent!"})):c.a.error({message:"Error",description:"There was an error sending your message, please try again later."}))}catch(i){c.a.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:a.values,errors:a.errors}})(d),x=e=>{let{type:a}=e;const t=g[a];return r.a.createElement(k,null,t)};return r.a.createElement(S,{id:s},r.a.createElement(l.a,{justify:"space-between",align:"middle"},r.a.createElement(i.a,{lg:12,md:11,sm:24,xs:24},r.a.createElement(m.b,{direction:"left",triggerOnce:!0},r.a.createElement(E,{title:a,content:t}))),r.a.createElement(i.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(m.b,{direction:"right",triggerOnce:!0},r.a.createElement(C,{autoComplete:"off",onSubmit:v},r.a.createElement(i.a,{span:24},r.a.createElement(j,{type:"text",name:"name",placeholder:"Your Name",value:b.name||"",onChange:h}),r.a.createElement(x,{type:"name"})),r.a.createElement(i.a,{span:24},r.a.createElement(j,{type:"text",name:"email",placeholder:"Your Email",value:b.email||"",onChange:h}),r.a.createElement(x,{type:"email"})),r.a.createElement(i.a,{span:24},r.a.createElement(f,{placeholder:"For what you want to use Basic.Social?",value:b.message||"",name:"message",onChange:h}),r.a.createElement(x,{type:"message"})),r.a.createElement(z,null,r.a.createElement(p.a,{name:"submit"},u("Submit"))))))))})}}]);
//# sourceMappingURL=7.c3ebe663.chunk.js.map