(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(29),r=n(7);const c=Object(r.b)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;t.default=(()=>{const[e,t]=Object(i.useState)(!1),n=Object(i.useCallback)(()=>{const n=window.scrollY;!e&&n>350?t(!0):n<=350&&t(!1)},[e]);Object(i.useEffect)(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[n]);return o.a.createElement(c,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e},o.a.createElement(s.a,{src:"scroll-top.svg",width:"20px",height:"20px"}))})}}]);
//# sourceMappingURL=6.6236e5ea.chunk.js.map