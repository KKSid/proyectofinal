(function(e){function t(t){for(var a,o,i=t[0],s=t[1],u=t[2],p=0,b=[];p<i.length;p++)o=i[p],r[o]&&b.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(b.length)b.shift()();return n.push.apply(n,u||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,i=1;i<l.length;i++){var s=l[i];0!==r[s]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;n.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("097d");var a=l("2b0e"),r=l("5c96"),n=l.n(r),o=(l("0fae"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app"},[l("Ussuarios")],1)}),i=[],s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:10}},[l("div",{staticClass:"grid-content"},[l("el-card",[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("Formulario")])]),l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"nombre del proyecto"}},[l("el-input",{attrs:{placeholder:" "},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}})],1),l("el-form-item",{attrs:{label:"fecha de lazamiento"}},[l("el-input",{attrs:{placeholder:"DD/MM/YYYY"},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1),l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"Descripcion"},model:{value:e.Descripcion,callback:function(t){e.Descripcion=t},expression:"Descripcion"}}),l("el-form-item",{attrs:{label:"Categoria"}},[l("el-select",{attrs:{placeholder:"Categoria"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-form-item",{attrs:{label:"Licencia"}},[l("el-select",{attrs:{placeholder:"Licencia"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},e._l(e.options2,function(e){return l("el-option",{key:e.value2,attrs:{label:e.label2,value:e.value2}})}),1)],1),l("el-form-item",{attrs:{label:"Link/repositorio"}},[l("el-input",{attrs:{placeholder:" "},model:{value:e.Link,callback:function(t){e.Link=t},expression:"Link"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.guardar}},[e._v("Guardar")])],1)],1)],1)],1)]),l("el-col",{attrs:{span:20}},[l("div",{staticClass:"grid-content"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[l("el-table-column",{attrs:{prop:"nombre",label:"Nombre",width:"180"}}),l("el-table-column",{attrs:{prop:"fecha",label:"fecha",width:"180"}}),l("el-table-column",{attrs:{prop:"Descripcion",label:"Descripcion",width:"180"}}),l("el-table-column",{attrs:{prop:"value",label:"Categoria",width:"180"}}),l("el-table-column",{attrs:{prop:"value2",label:"Licencia",width:"180"}}),l("el-table-column",{attrs:{prop:"Link",label:"Link"}})],1)],1)])],1)],1)},u=[],c={name:"Usuarios",data:function(){return{nombre:" ",fecha:"",Descripcion:"",options:[{value:"Web",label:"Web"},{value:"HTTP",label:"HTTP"},{value:"Mobil",label:"Mobil"},{value:"Interactivo",label:"Interactivo"},{value:"Otros",label:"Otros"}],value:"",options2:[{value2:"Apache",label2:"Apache 2.0"},{value2:"GPL",label2:"GPL"},{value2:"GNU LGPL",label2:"GNU LGPL"},{value2:"AGPL",label2:"AGPL"},{value2:"Otras",label2:"Otras"}],value2:"",Link:"",tableData:[{}]}},methods:{guardar:function(){this.tableData.push({nombre:this.nombre,fecha:this.fecha,Descripcion:this.Descripcion,value:this.value,value2:this.value2,Link:this.Link})}}},p=c,b=l("2877"),f=Object(b["a"])(p,s,u,!1,null,null,null);f.options.__file="Ussuarios.vue";var v=f.exports,d={name:"app",components:{Ussuarios:v}},h=d,m=Object(b["a"])(h,o,i,!1,null,null,null);m.options.__file="App.vue";var y=m.exports;a["default"].use(n.a),new a["default"]({el:"#app",render:function(e){return e(y)}})}});
//# sourceMappingURL=app.ca27c24a.js.map