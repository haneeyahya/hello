(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(44)},22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(14),r=n.n(c),i=(n(22),n(2)),m=n(3),o=n(5),u=n(4),s=n(6),d=n(15),E=n.n(d),h=(n(42),0),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={iteams:[],pell:[]},n.deliteams=function(e,t){var a=Object.assign([],n.state.iteams),l=a.splice(e,1);n.setState({iteams:a}),n.state.pell.push(l),h+=l[0].itemPrice,console.log(n.state.pell),console.log(h)},n}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu").then(function(t){var n=t.data;e.setState({iteams:n})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("fieldset",{class:"tab"},l.a.createElement("legend",null,"menu"),l.a.createElement("table",{id:"table1"},l.a.createElement("tr",null,l.a.createElement("th",null,"itemDesc"),l.a.createElement("th",null,"itemPrice"),l.a.createElement("th",null,"itemImage"),l.a.createElement("th",null,"select")),this.state.iteams.map(function(t,n){return l.a.createElement("tr",null,l.a.createElement("td",null,t.itemDesc),l.a.createElement("td",null," ",t.itemPrice),l.a.createElement("td",null,t.itemImage),l.a.createElement("input",{type:"Radio",onClick:e.deliteams}))}))),l.a.createElement("fieldset",{class:"tab1"},l.a.createElement("legend",null,"Bill"),l.a.createElement("table",{id:"table2"},l.a.createElement("tr",null,l.a.createElement("th",null,"itemDesc"),l.a.createElement("th",null,"itemPrice"),l.a.createElement("th",null,"itemImage")),this.state.pell.map(function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e[0].itemDesc),l.a.createElement("td",null," ",e[0].itemPrice," "),l.a.createElement("td",null,e[0].itemImage))})),l.a.createElement("label",null,"Total :",h)))}}]),t}(a.Component),b=(n(43),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.0abb4160.chunk.js.map