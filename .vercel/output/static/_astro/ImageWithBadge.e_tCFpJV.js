import{j as s}from"./jsx-runtime.Dla7y0KP.js";import{r as o}from"./index.CfLG8xVc.js";import{P as m}from"./play-icon.D_qdTj1N.js";function p({className:e}){return s.jsx(s.Fragment,{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",className:e,children:s.jsx("path",{d:"M248 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm101 365c-5 0-7-1-11-4-62-37-135-39-207-24l-12 2c-9 0-15-7-15-15 0-11 6-16 13-17 82-18 166-17 237 26 6 4 10 7 10 16s-7 16-15 16zm27-66c-6 0-9-2-13-4-62-37-155-52-238-29l-12 2c-11 0-20-8-20-19s6-18 16-21c28-8 56-13 98-13 65 0 127 16 177 45 8 5 11 11 11 20 0 11-9 19-19 19zm31-76c-6 0-9-1-13-4-72-42-199-53-281-30-4 1-8 3-13 3-13 0-23-10-23-24 0-13 8-21 17-23 35-11 75-16 118-16 73 0 149 16 205 48 8 5 13 11 13 23 0 13-11 23-23 23z"})})})}const g=({imageUrl:e,underText:a})=>{const[t,c]=o.useState(!1),[r,l]=o.useState("spotify");return s.jsxs("div",{children:[s.jsxs("div",{className:"container "+(t?"active":""),onMouseEnter:()=>{c(!0),l("play")},onMouseLeave:()=>{c(!1),setTimeout((()=>{l("spotify")}),200)},children:[s.jsx("div",{className:"overlay",children:"play"==r?s.jsx(m,{className:"play"}):s.jsx(p,{className:"logo"})}),s.jsx("img",{className:"image",src:e,alt:""})]}),a]})};export{g as default};