(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb64362e"],{"13d5":function(e,t,n){"use strict";var o=n("23e7"),r=n("d58f").left,i=n("a640"),a=n("2d00"),l=n("605d"),s=i("reduce"),d=!l&&a>79&&a<83;o({target:"Array",proto:!0,forced:!s||d},{reduce:function(e){var t=arguments.length;return r(this,e,t,t>1?arguments[1]:void 0)}})},"4a92":function(e,t,n){},"605d":function(e,t,n){var o=n("c6b6"),r=n("da84");e.exports="process"==o(r.process)},"67ce":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"todo_Cards"},[t("div",{staticClass:"todoList"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",placeholder:"输入待办的事项"},domProps:{value:e.title},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add.apply(null,arguments)},input:function(t){t.target.composing||(e.title=t.target.value)}}}),t("div",{staticClass:"list"},[t("h1",[e._v("待办事项")]),e._l(e.calendarTodos,(function(n){return t("div",{key:n.id,staticClass:"item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.done,expression:"todo.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.done)?e._i(n.done,null)>-1:n.done},on:{change:function(t){var o=n.done,r=t.target,i=!!r.checked;if(Array.isArray(o)){var a=null,l=e._i(o,a);r.checked?l<0&&e.$set(n,"done",o.concat([a])):l>-1&&e.$set(n,"done",o.slice(0,l).concat(o.slice(l+1)))}else e.$set(n,"done",i)}}}),t("span",{class:{checked:n.done}},[e._v(e._s(n.title))])])}))],2),t("div",{staticClass:"footer"},[t("label",[t("span",[e._v("全选")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isAll)?e._i(e.isAll,null)>-1:e.isAll},on:{change:function(t){var n=e.isAll,o=t.target,r=!!o.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);o.checked?a<0&&(e.isAll=n.concat([i])):a>-1&&(e.isAll=n.slice(0,a).concat(n.slice(a+1)))}else e.isAll=r}}})]),t("span",[e._v("已完成 "+e._s(e.doneTotal)+" 个/共 "+e._s(e.calendarTodos.length)+" 个")]),t("button",{on:{click:e.deleteTodo}},[e._v("清除已完成")])])])])},r=[],i=(n("13d5"),n("e1bd")),a={name:"todo",data(){return{title:""}},methods:{deleteTodo(){this.deleteAll()},add(){const e={id:Object(i["a"])(),title:this.title,done:!1};this.addTodo(e),this.title=""}},computed:{isAll:{get(){return this.calendarTodos.length==this.doneTotal&&this.calendarTodos.length>0},set(e){return this.calendarTodos.forEach(t=>t.done=e)}},doneTotal(){return this.calendarTodos.reduce((e,t)=>e+(t.done?1:0),0)}},props:["addTodo","calendarTodos","deleteAll"]},l=a,s=(n("9674"),n("2877")),d=Object(s["a"])(l,o,r,!1,null,"555c779f",null);t["default"]=d.exports},9674:function(e,t,n){"use strict";n("4a92")},a640:function(e,t,n){"use strict";var o=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){return 1},1)}))}},d58f:function(e,t,n){var o=n("59ed"),r=n("7b0b"),i=n("44ad"),a=n("07fa"),l=TypeError,s=function(e){return function(t,n,s,d){o(n);var c=r(t),u=i(c),p=a(c),f=e?p-1:0,h=e?-1:1;if(s<2)while(1){if(f in u){d=u[f],f+=h;break}if(f+=h,e?f<0:p<=f)throw l("Reduce of empty array with no initial value")}for(;e?f>=0:p>f;f+=h)f in u&&(d=n(d,u[f],f,c));return d}};e.exports={left:s(!1),right:s(!0)}},e1bd:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));let o=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>(t&=63,e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_",e),"")}}]);