(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),s=(a(14),a(15),a(1)),o=a(4),c=a(5),m=a(8),d=a(6),u=a(7),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).inputHandler=function(e){n.setState({addItem:{newItem:e.target.value,key:Date.now()}})},n.addHandler=function(e){if(e.preventDefault(),""!==n.state.addItem.newItem){var t=[n.state.addItem].concat(Object(s.a)(n.state.taskList));n.setState({taskList:t,addItem:{newItem:"",key:""}})}},n.state={filterlist:[],taskList:[],completed:[],addItem:{newItem:"",key:""}},n}return Object(c.a)(a,[{key:"doneHandler",value:function(e){var t,a=this,n=this.state.taskList.filter((function(n){if(n.key!==e)return n;t=[n].concat(Object(s.a)(a.state.completed))}));this.setState({completed:t,taskList:n})}},{key:"render",value:function(){var e=this,t=this.state.taskList.map((function(t){return r.a.createElement("div",{className:"task"},r.a.createElement("p",{key:t.key},t.newItem,r.a.createElement(u.a,{style:{display:"inline"},onClick:function(){return e.doneHandler(t.key)}})))})),a=this.state.completed.map((function(e){return r.a.createElement("div",{className:"completetask"},r.a.createElement("p",{key:e.key},e.newItem))}));return r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:"title"},"TO DO APP"),r.a.createElement("form",{onSubmit:this.addHandler},r.a.createElement("input",{type:"text",value:this.state.addItem.newItem,onChange:this.inputHandler,style:{height:"23px",width:"300px"},placeholder:"add task"}),r.a.createElement("button",{type:"submit",style:{width:"70px",height:"35px",margin:"7px"}},"ADD")),r.a.createElement("h1",{style:{"margin-left":"7px"}},"Tasks"),r.a.createElement("h1",{style:{float:"right","margin-right":"7px"}},"Done"),r.a.createElement("div",null,t),r.a.createElement("div",null,a))}}]),a}(n.Component);var p=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.004b1016.chunk.js.map