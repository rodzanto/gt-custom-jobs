(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);a(15);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),i=(a(21),a(1)),c=a(8),s=a(9),m=a(10),u=a(2),d=a(12),E=a(13),p=a(3),h=a(11);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var l=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(E.a)(this,a)}}var f=document.querySelector("#document-text").innerText.trim(),y=document.querySelector("#document-image").innerText.trim(),g=document.querySelector("#metadata").innerText.trim(),b=JSON.parse(g),N=b.labels,x=b.meta,S={TITLE:"#154360",PersonalFullName:"#CBDCEB",PersonalPhone:"#76A6CD",PersonalEmail:"#5697CB",PersonalAddress:"#3287CC",PersonalJobtitle:"#0E78CF",ExperienceJobtitle:"#9ADFA2",ExperienceCompany:"#75DE81",ExperienceDetails:"#59E169",ExperienceDate:"#41DF53",ExperienceLocation:"#0EBE22",StudyName:"#DEC894",StudyOrganization:"#D9AC51",StudyDate:"#E08824",StudyLocation:"#F98808",ExperienceNEW:"#2BE183",StudyNEW:"#F56B06",SkillName:"#F50611"},w=[];function C(e,t){w.push({start:+e[0],end:+e[1],tag:e[2],color:S[e[2]]})}var O=function(e){Object(d.a)(a,e);var t=v(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({value:e})},n.handleTagChange=function(e){n.setState({tag:e.target.value})},n.handleYesBtn=function(){n.setState({claimResult:!0})},n.handleNoBtn=function(){n.setState({claimResult:!1})},n.handleNotes=function(e){n.setState({notes:e.target.value})},n.renderLabels=function(){N.forEach(C),n.setState({value:w},function(){})},n.state={value:[],tag:"TITLE",complete:!1,notes:"",metadata:x},n.renderLabels=n.renderLabels.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.renderLabels()}},{key:"render",value:function(){var e,t=this;return l.a.createElement("div",{style:{padding:12,fontFamily:"sans-serif"}},l.a.createElement("div",{className:"row",style:{fontFamily:"sans-serif"}},l.a.createElement("div",{className:"col",style:{width:"100%"}},l.a.createElement("h5",null,"Instrucciones"),l.a.createElement("p",null," Revise o complemente el etiquetado como corresponda."))),l.a.createElement("div",{className:"row",style:{display:"flex",marginBottom:1}},l.a.createElement("div",{style:{boxShadow:"1px 2px 4px 1px rgba(0,0,0,.1)",margin:4,width:"38%",height:"500",padding:1}},l.a.createElement("div",{className:"img_contain",style:{width:"96%",height:"450"}},l.a.createElement("iframe",{title:"CV",crossOrigin:"anonymous",src:y,width:"100%",height:"550"}))),l.a.createElement("div",{style:{boxShadow:"1px 2px 4px 1px rgba(0,0,0,.1)",margin:4,width:"60%",padding:2}},l.a.createElement("div",{className:"col-sm-5",style:{paddingLeft:"1px"}},l.a.createElement("select",{name:"list",id:"Combo",className:"form-control",onChange:this.handleTagChange,value:this.state.tag},l.a.createElement("option",{value:"TITLE"},"TITLE"),l.a.createElement("option",{value:"PersonalFullName"},"PersonalFullName"),l.a.createElement("option",{value:"PersonalPhone"},"PersonalPhone"),l.a.createElement("option",{value:"PersonalEmail"},"PersonalEmail"),l.a.createElement("option",{value:"PersonalAddress"},"PersonalAddress"),l.a.createElement("option",{value:"PersonalJobtitle"},"PersonalJobtitle"),l.a.createElement("option",{value:"ExperienceJobtitle"},"ExperienceJobtitle"),l.a.createElement("option",{value:"ExperienceCompany"},"ExperienceCompany"),l.a.createElement("option",{value:"ExperienceDetails"},"ExperienceDetails"),l.a.createElement("option",{value:"ExperienceDate"},"ExperienceDate"),l.a.createElement("option",{value:"ExperienceLocation"},"ExperienceLocation"),l.a.createElement("option",{value:"StudyName"},"StudyName"),l.a.createElement("option",{value:"StudyOrganization"},"StudyOrganization"),l.a.createElement("option",{value:"StudyDate"},"StudyDate"),l.a.createElement("option",{value:"StudyLocation"},"StudyLocation"),l.a.createElement("option",{value:"ExperienceNEW"},"ExperienceNEW"),l.a.createElement("option",{value:"StudyNEW"},"StudyNEW"),l.a.createElement("option",{value:"SkillName"},"SkillName"))),l.a.createElement("div",{className:"border border-success bg-light",style:{width:"98%",height:350,overflow:"scroll",margin:7}},l.a.createElement(h.TextAnnotator,{style:{fontFamily:"sans-serif",maxWidth:"100%",margin:5,lineHeight:1.4},content:f,value:this.state.value,onChange:this.handleChange,getSpan:function(e){return Object(c.a)({},e,{tag:t.state.tag,color:S[t.state.tag]})}})),l.a.createElement("div",{className:"form-row",style:{width:"100%"}},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"font-weight-bold"},"Notas"),l.a.createElement("textarea",(e={className:"form-control",rows:"5",onChange:this.handleNotes,value:this.state.notes,name:"notes"},Object(i.a)(e,"rows","2"),Object(i.a)(e,"cols","100%"),e)," ")),l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("h6",{className:"font-weight-bold"},"\xbfEtiquetado completo?"),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("button",{type:"button",onClick:this.handleYesBtn,className:"btn btn-md btn-success btn-block",style:{width:50,height:30,fontSize:14},name:"y_0"},"SI")),l.a.createElement("div",{style:{height:5}}),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("button",{type:"button",onClick:this.handleNoBtn,className:"btn btn-md btn-danger btn-block",style:{width:50,height:30,fontSize:14},name:"n_0"},"NO"))),l.a.createElement("div",{className:"col",style:{width:"100%"}},l.a.createElement("h6",{className:"font-weight-bold"},"Metadatos"),l.a.createElement("p",null,JSON.stringify(x,void 0,2)))))),l.a.createElement("pre",{hidden:!0},JSON.stringify(this.state,void 0,2)))}}]),a}(n.Component);a(28);r.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.6ae9271f.chunk.js.map