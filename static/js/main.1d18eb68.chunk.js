(this["webpackJsonptest-google-api"]=this["webpackJsonptest-google-api"]||[]).push([[0],{77:function(t,e,s){},84:function(t,e,s){"use strict";s.r(e);var a=s(2),r=s(0),i=s(9),o=s.n(i),n=(s(77),s(52)),c=s.n(n),l=s(59),h=s(35),p=s(54),d=s(12),u="SET_DATA",j="SET_TOTAL_ITEMS",m="SET_CURRENT_BOOK",b="SET_START_INDEX",x="SET_MAX_RESULT",O="SET_FILTER_VALUE",v="SET_PLACE_FIND";function f(t){return{type:m,payload:t}}var I=s(19),k=s(18),g=s.n(k);class y extends r.Component{constructor(t){if(super(t),this.item=null,this.authors="",this.item=this.props.date,this.item.volumeInfo.authors)for(var e=0;e<this.item.volumeInfo.authors.length;e++)this.authors+=this.item.volumeInfo.authors[e],this.authors+=e+1<this.item.volumeInfo.authors.length?", ":""}render(){return Object(a.jsxs)("div",{className:"column book-row column-bottom-border",children:[this.item.volumeInfo.imageLinks?Object(a.jsx)("img",{alt:this.item.volumeInfo.title,src:this.item.volumeInfo.imageLinks.thumbnail}):Object(a.jsx)("div",{className:"missing-image",children:Object(a.jsx)(g.a,{className:"missing-image-icon",path:I.h,size:2})}),Object(a.jsxs)("div",{className:"row book-info",children:[Object(a.jsx)("span",{children:this.authors}),Object(a.jsx)("h3",{children:this.item.volumeInfo.title}),this.item.volumeInfo.description&&Object(a.jsxs)("span",{children:[this.item.volumeInfo.description.substring(0,150),"..."]})]})]})}}var w=y,A=s(128),N=s(123);class B extends r.Component{formatLanguage(t){switch(t){case"en":return"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439";case"ru":return"\u0420\u0443\u0441\u0441\u043a\u0438\u0439";case"fr":return"\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439";case"de":return"\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439";default:return t}}formatDate(t){var e=t.split("-");return 1===e.length?t:3===e.length?e[0]:void 0}render(){return this.props.currentBook&&Object(a.jsxs)("div",{className:"column",children:[this.props.currentBook.volumeInfo.imageLinks?Object(a.jsx)("img",{alt:this.props.currentBook.volumeInfo.title,src:this.props.currentBook.volumeInfo.imageLinks.thumbnail}):Object(a.jsx)("div",{className:"missing-image",children:Object(a.jsx)(g.a,{className:"missing-image-icon",path:I.h,size:2})}),Object(a.jsxs)("div",{className:"book-info",children:[Object(a.jsx)("div",{className:"column",children:this.props.currentBook.volumeInfo.authors&&this.props.currentBook.volumeInfo.authors.map(((t,e)=>Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:t}),e<this.props.currentBook.volumeInfo.authors.length-1&&Object(a.jsx)("span",{children:", "})]},e)))}),Object(a.jsx)("h3",{children:this.props.currentBook.volumeInfo.title}),Object(a.jsx)("span",{children:this.props.currentBook.volumeInfo.description}),Object(a.jsxs)("div",{className:"row description",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{children:"\u042f\u0437\u044b\u043a:"})," ",this.formatLanguage(this.props.currentBook.volumeInfo.language)]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{children:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438:"})," ",this.formatDate(this.props.currentBook.volumeInfo.publishedDate)]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446:"})," ",this.props.currentBook.volumeInfo.pageCount]})]})]}),Object(a.jsx)(A.a,{title:"\u041d\u0430\u0437\u0430\u0434","aria-label":"add",children:Object(a.jsx)(N.a,{className:"icon-button back-arrow-icon-button",onClick:()=>this.props.setCurrentBookAction(null),color:"primary",children:Object(a.jsx)(g.a,{className:"back-arrow-icon",path:I.a,size:1})})})]})}}var F=Object(h.b)((t=>({currentBook:t.currentBook})),(t=>({setCurrentBookAction:e=>t(f(e))})))(B),C=s(129),S=s(131),R=s(124),E=s(126),T=s(125),V=s(130);class D extends r.Component{constructor(...t){var e;super(...t),e=this,this.state={redirect:!1,isExact:!1,$valueFind:"",valueFind:""},this.getDate=function(){var t=Object(l.a)(c.a.mark((function t(s){var a,r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.state.isExact?'"'.concat(s.split(" ").join("+"),'"'):s,1===e.props.placeFind&&(s="intitle:".concat(s)),2===e.props.placeFind&&(s="inauthor:".concat(s)),a="".concat(e.props.baseUrl,"=").concat(s,"&key=").concat(e.props.api,"&startIndex=").concat(e.props.startIndex,"&maxResults=").concat(e.props.maxResults),t.next=6,fetch(a);case 6:return r=t.sent,t.next=9,r.json();case 9:i=t.sent,e.props.setTotalItemsAction(i.totalItems),e.props.setDataAction(i.items),e.setState({$valueFind:e.props.filterValue});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}handleChange(t){this.setState({valueFind:t.target.value})}handleInputChange(t){this.setState({isExact:t.target.checked})}handleSelectChange(t,e){1===e?this.props.setPlaceFindAction(t.target.value):this.props.setMaxResultAction(+t.target.value)}checkCanLoadNewData(){return this.state.valueFind.length>1&&this.state.valueFind!==this.state.$valueFind}clearFilterValueEvent(t){this.setState({valueFind:""}),this.props.setFilterValueAction("")}keyPressEvent(t){"Enter"===t.key&&this.checkCanLoadNewData()&&this.props.setFilterValueAction(this.state.valueFind)}render(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"column column-bottom-border",children:[Object(a.jsxs)(R.a,{className:"item-two-on-row",children:[Object(a.jsx)(C.a,{children:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(a.jsx)(T.a,{type:"text",value:this.state.valueFind,onChange:t=>this.handleChange(t),onKeyPress:t=>this.keyPressEvent(t),endAdornment:Object(a.jsxs)(V.a,{position:"end",children:[Object(a.jsx)(N.a,{disabled:""===this.state.valueFind,onClick:t=>this.clearFilterValueEvent(t),color:"primary",children:Object(a.jsx)(g.a,{className:"back-arrow-icon",path:I.f,size:1})}),Object(a.jsx)(N.a,{disabled:!this.checkCanLoadNewData(),onClick:t=>this.keyPressEvent({key:"Enter"}),color:"primary",children:Object(a.jsx)(g.a,{className:"search-icon-button",path:I.g,size:1})})]})})]}),Object(a.jsxs)("div",{className:"item-two-on-row",children:[Object(a.jsxs)(R.a,{className:"item-half-on-row",children:[Object(a.jsx)(C.a,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(a.jsxs)(E.a,{value:this.props.placeFind,onChange:t=>this.handleSelectChange(t,1),autoWidth:!0,children:[Object(a.jsx)(S.a,{value:0,children:"\u0412\u0435\u0437\u0434\u0435"}),Object(a.jsx)(S.a,{value:1,children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0435"}),Object(a.jsx)(S.a,{value:2,children:"\u0410\u0432\u0442\u043e\u0440"})]})]}),Object(a.jsxs)(R.a,{className:"item-half-on-row",children:[Object(a.jsx)(C.a,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"}),Object(a.jsxs)(E.a,{value:this.props.maxResults,onChange:t=>this.handleSelectChange(t,2),autoWidth:!0,children:[Object(a.jsx)(S.a,{value:10,children:"10"}),Object(a.jsx)(S.a,{value:20,children:"20"}),Object(a.jsx)(S.a,{value:40,children:"40"})]})]})]})]}),Object(a.jsxs)(p.a,{children:[this.state.redirect&&Object(a.jsx)(d.a,{to:"/"}),Object(a.jsx)(d.b,{path:"/",children:null===this.props.currentBook&&Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("div",{className:"item-five-on-row-with-center",children:Object(a.jsx)(N.a,{disabled:0===this.props.startIndex,onClick:()=>this.props.setStartIndexAction(0),color:"primary",children:Object(a.jsx)(g.a,{path:I.b,size:1})})}),Object(a.jsx)("div",{className:"item-five-on-row-with-center",children:Object(a.jsx)(N.a,{disabled:0===this.props.startIndex,onClick:()=>this.props.setStartIndexAction(this.props.startIndex-this.props.maxResults),color:"primary",children:Object(a.jsx)(g.a,{path:I.d,size:1})})}),Object(a.jsx)("div",{className:"item-five-on-row-center",children:Object(a.jsx)(A.a,{title:"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 / \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446","aria-label":"add",children:Object(a.jsxs)("span",{children:[Math.floor((this.props.startIndex+1)/this.props.maxResults+1),"/",Math.floor(this.props.totalItems/this.props.maxResults+1)]})})}),Object(a.jsx)("div",{className:"item-five-on-row-with-center",children:Object(a.jsx)(N.a,{disabled:this.props.startIndex+this.props.maxResults>this.props.totalItems,onClick:()=>this.props.setStartIndexAction(this.props.startIndex+this.props.maxResults),color:"primary",children:Object(a.jsx)(g.a,{path:I.e,size:1})})}),Object(a.jsx)("div",{className:"item-five-on-row-with-center",children:Object(a.jsx)(N.a,{disabled:this.props.startIndex+this.props.maxResults>this.props.totalItems,onClick:()=>this.props.setStartIndexAction(Math.floor(this.props.totalItems/this.props.maxResults)*this.props.maxResults),color:"primary",children:Object(a.jsx)(g.a,{path:I.c,size:1})})})]}),Object(a.jsx)("div",{className:"rowDays",children:this.props.data&&0!==this.props.data.length&&this.props.data.map((t=>Object(a.jsx)(p.b,{to:t.id,onClick:()=>this.props.setCurrentBookAction(t),children:Object(a.jsx)(w,{date:t})},t.id)))})]})}),Object(a.jsx)(d.b,{path:"/:id",component:F})]})]})}componentDidUpdate(t,e,s){if(t.filterValue!==this.props.filterValue&&(""!==this.props.filterValue?this.getDate(this.props.filterValue):(this.setState({$valueFind:""}),this.props.setDataAction([]),this.props.setTotalItemsAction(0),this.props.setStartIndexAction(0))),t.placeFind!==this.props.placeFind&&""!==this.props.filterValue&&this.props.setStartIndexAction(0),t.startIndex!==this.props.startIndex&&""!==this.props.filterValue&&this.getDate(this.props.filterValue),t.maxResults!==this.props.maxResults)if(t.startIndex%this.props.maxResults===0)""!==this.props.filterValue&&this.getDate(this.props.filterValue);else{var a=Math.floor(t.startIndex/this.props.maxResults)*this.props.maxResults;this.props.setStartIndexAction(a)}t.currentBook!==this.props.currentBook&&this.setState({redirect:null===this.props.currentBook})}}var L=Object(h.b)((t=>({baseUrl:t.baseUrl,api:t.api,filterValue:t.filterValue,data:t.data,currentBook:t.currentBook,totalItems:t.totalItems,startIndex:t.startIndex,maxResults:t.maxResults,placeFind:t.placeFind})),(t=>({setFilterValueAction:e=>t(function(t){return{type:O,payload:t}}(e)),setDataAction:e=>t(function(t){return{type:u,payload:t}}(e)),setCurrentBookAction:e=>t(f(e)),setTotalItemsAction:e=>t(function(t){return{type:j,payload:t}}(e)),setMaxResultAction:e=>t(function(t){return{type:x,payload:t}}(e)),setStartIndexAction:e=>t(function(t){return{type:b,payload:t}}(e)),setPlaceFindAction:e=>t(function(t){return{type:v,payload:t}}(e))})))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=s(40),z=s(62),M=s.n(z),U=s(63),P=s(15),$={baseUrl:"https://www.googleapis.com/books/v1/volumes?q",api:"AIzaSyBSgvdpNgfB_F992Tvobm3djh9Ie082AIM",filterValue:"",data:[],currentBook:null,totalItems:0,startIndex:0,maxResults:10,placeFind:0};var W=Object(_.c)((function(t=$,e){switch(e.type){case v:return Object(P.a)(Object(P.a)({},t),{},{placeFind:e.payload});case O:return Object(P.a)(Object(P.a)({},t),{},{filterValue:e.payload});case u:return Object(P.a)(Object(P.a)({},t),{},{data:e.payload});case m:return Object(P.a)(Object(P.a)({},t),{},{currentBook:e.payload});case j:return Object(P.a)(Object(P.a)({},t),{},{totalItems:e.payload});case x:return Object(P.a)(Object(P.a)({},t),{},{maxResults:e.payload});case b:return Object(P.a)(Object(P.a)({},t),{},{startIndex:e.payload});default:return t}}),Object(_.a)(U.a,M.a));o.a.render(Object(a.jsx)(h.a,{store:W,children:Object(a.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((t=>{t.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.1d18eb68.chunk.js.map