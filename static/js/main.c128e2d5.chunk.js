(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),s=a.n(r),c=a(1),o=a(2),u=a(4),i=a(3),d=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"ToDo List"))},h=a(5),m=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"createTask",value:function(e){var t=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"presentation"},l.a.createElement("h5",null,e)),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"button",onClick:this.handleAdd,className:"b btn btn-success"},l.a.createElement("i",{className:"fa fa-check"})),l.a.createElement("button",{type:"button",onClick:function(){return t.props.onDelete(t.props.id)},className:"b btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"}))))}},{key:"render",value:function(){var e=this.props.value,t=this.createTask(e);return l.a.createElement("div",null,t)}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleDelete=function(e){var t=n.state.data.filter((function(t){return t.id!==e}));n.setState({data:t}),fetch("https://us-central1-clear-tooling-281208.cloudfunctions.net/first-function/users/"+e,{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){return console.log(e)}))},n.handleDup=function(){var e=parseInt(n.state.id)+1;console.log(n.state.id),n.setState({id:e.toString()},(function(){console.log(n.state.id);var e=n.state.data.concat({id:n.state.id,todo:n.state.value});n.setState({data:e})})),document.getElementsByClassName("add")[0].placeholder="Succeed"},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleAdd=n.handleAdd.bind(Object(h.a)(n)),n.state={value:"",data:[],id:"0"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handleAdd()}},{key:"handleAdd",value:function(){var e=this;fetch("https://us-central1-clear-tooling-281208.cloudfunctions.net/first-function/users").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t}),t.map((function(t){return e.setState({id:t.id})}))}))}},{key:"renderData",value:function(){var e=this;return 0===this.state.data.length?l.a.createElement("p",null,"You don't have anything to do today"):l.a.createElement(l.a.Fragment,null,this.state.data.map((function(t){return l.a.createElement(m,{key:t.id,id:t.id,value:t.todo,onDelete:e.handleDelete})})))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://us-central1-clear-tooling-281208.cloudfunctions.net/first-function/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.state.id,todo:this.state.value})}).then((function(e){var a=document.getElementsByClassName("add")[0];400!==e.status?t.handleDup():a.placeholder="You have already enter this task",a.value=""}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{value:this.state.value,onChange:this.handleChange,type:"text",className:"add"}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"submit",className:"b btn btn-success"},l.a.createElement("i",{className:"fa fa-plus"})),l.a.createElement("button",{type:"button",className:"b disable ",disabled:!0},l.a.createElement("i",{className:"fa fa-plus"})))),this.renderData())}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(f,null))}}]),a}(n.Component);a(13);s.a.render(l.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c128e2d5.chunk.js.map