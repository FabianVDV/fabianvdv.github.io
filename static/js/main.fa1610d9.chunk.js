(this.webpackJsonprecepten=this.webpackJsonprecepten||[]).push([[0],{189:function(e,t,n){},340:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n(0),i=n.n(a),r=n(27),c=n.n(r),o=(n(189),n(28)),l=n(13),u=n(14),h=n(16),j=n(15),d=(n(55),n(29)),b=n(361),p=n(355),m=n(357),x=n(34),O=n.p+"static/media/logo.f8913ece.png",f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(p.a,{children:Object(s.jsx)(p.a.Body,{id:"navbox",children:Object(s.jsxs)(b.a,{id:"nav",children:[Object(s.jsx)(b.a.Item,{children:Object(s.jsx)(x.b,{to:"/",children:Object(s.jsx)(m.a,{children:Object(s.jsx)("img",{className:"logo",src:O,alt:"logo"})})})}),Object(s.jsx)(b.a.Item,{children:Object(s.jsx)(x.b,{to:"/",children:Object(s.jsx)(m.a,{children:"Home"})})}),Object(s.jsx)(b.a.Item,{children:Object(s.jsx)(x.b,{to:"/likes",children:Object(s.jsx)(m.a,{children:"Likes"})})}),Object(s.jsx)(b.a.Item,{children:Object(s.jsx)(x.b,{to:"/preferences",children:Object(s.jsx)(m.a,{children:"Preferences"})})})]})})})}}]),n}(a.Component),v=n(12),g=n(111),y=n.n(g),S=n(170),C=n(30),k=n(360),I=n(362);function w(){var e=Object(o.a)(["\n    text-align: center;\n    margin: 5px;\n    font-family: monospace;\n    font-size: 24px;\n    line-height: 32px;\n    "]);return w=function(){return e},e}var P=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(F,{children:this.props.title})}}]),n}(a.Component),F=d.a.h3(w());function N(){var e=Object(o.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]);return N=function(){return e},e}var M=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(_,{src:this.props.source,alt:this.props.title})}}]),n}(a.Component),_=d.a.img(N()),D=n(174),L=n.n(D),A=n(175),B=n.n(A),E=n(359);function K(){var e=Object(o.a)(["\n\tmax-width: 350px;\n\twidth: 100%;\n\tdisplay: inline-block;\n\tborder-radius: 3px;\n\ttext-decoration: none;\n\tbackground-color: #EFA48B;\n    margin: 0 10px 25px;\n    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);\n"]);return K=function(){return e},e}var V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{id:"recipes",children:this.props.recipes.map((function(t,n){return Object(s.jsx)(W,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(x.b,{to:"/recipes/"+t.id+"/"+t.title,children:Object(s.jsx)(m.a,{children:Object(s.jsx)(M,{source:t.image,text:t.title})})}),Object(s.jsx)(P,{title:t.title}),Object(s.jsx)("h3",{children:"Per serving: "}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["calories: ",t.calories]}),Object(s.jsxs)("li",{children:["carbs: ",t.carbs]}),Object(s.jsxs)("li",{children:["fat: ",t.fat]}),Object(s.jsxs)("li",{children:["protein: ",t.protein]})]}),!0===e.props.show&&Object(s.jsxs)("div",{children:[Object(s.jsx)(E.a,{id:t.title,"aria-label":"like recipe",onClick:function(){return function(e){null!=localStorage.getItem(e.id+"dislike")&&localStorage.removeItem(e.id+"dislike");localStorage.setItem(e.id+"like",JSON.stringify(e))}(t)},children:Object(s.jsx)(L.a,{})}),Object(s.jsx)(E.a,{"aria-label":"dislike recipe",onClick:function(){return function(e){null!=localStorage.getItem(e.id+"like")&&localStorage.removeItem(e.id+"like");localStorage.setItem(e.id+"dislike",JSON.stringify(e))}(t)},children:Object(s.jsx)(B.a,{})})]})]})},t.title)}))})}}]),n}(a.Component);var W=d.a.div(K()),T=n(71),J=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={user:"",type_rec:""},s.handleInputChange=s.handleInputChange.bind(Object(C.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(C.a)(s)),s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user");if(null!==e){var t=localStorage.getItem(e);this.setState({user:e}),this.setState({type_rec:t})}}},{key:"handleInputChange",value:function(e){var t=e.target,n="select"===t.type?t.select:t.value,s=t.name;this.setState(Object(T.a)({},s,n))}},{key:"handleSubmit",value:function(e){this.props.name?this.state.user&&this.state.type_rec?(localStorage.setItem("user",this.state.user),localStorage.setItem(this.state.user,this.state.type_rec)):!this.state.user&&this.state.type_rec?alert("Name cannot be emty"):!this.state.type_rec&&this.state.user?(localStorage.setItem("user",this.state.user),localStorage.setItem(this.state.user,"Endurance sports"),this.setState({type_rec:"Endurance sports"})):alert("Fill in your name and choose where you want to focus on"):this.state.type_rec&&(localStorage.setItem(this.state.user,this.state.type_rec),this.props.history.push("/"))}},{key:"render",value:function(){var e="";return this.props.name&&(e=Object(s.jsxs)("label",{children:["Name:",Object(s.jsx)("input",{type:"text",name:"user",value:this.state.user,onChange:this.handleInputChange})]})),Object(s.jsxs)("form",{name:"preferences",onSubmit:this.handleSubmit,children:[e,Object(s.jsx)("label",{children:Object(s.jsxs)("select",{type:"select",name:"type_rec",value:this.state.type_rec,onChange:this.handleInputChange,children:[Object(s.jsx)("option",{value:"Endurance sports",selected:!0,children:"Endurance sports"}),Object(s.jsx)("option",{value:"Power sports",children:"Power sports"}),Object(s.jsx)("option",{value:"Keto",children:"Keto"}),Object(s.jsx)("option",{value:"Weight loss",children:"Weight loss"}),Object(s.jsx)("option",{value:"Nothing",children:"Nothing specifics"})]})}),Object(s.jsx)("input",{type:"submit",value:"Submit"})]})}}]),n}(a.Component);function R(){var e=Object(o.a)(["\n\tbackground-color: #685369;\n  color: white\n  padding: 2em;\n"]);return R=function(){return e},e}function U(e){return"".concat(e,"g carbs")}var z=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).setMaxCalories=function(e,t){s.setState({maxCalories:t})},s.setMaxCarbs=function(e,t){s.setState({maxCarbs:t})},s.setMaxProtein=function(e,t){s.setState({maxProtein:t})},s.setMaxFat=function(e,t){s.setState({maxFat:t})},s.state={user:"",focus:"",show:!1,maxCarbs:30,maxCalories:400,maxProtein:30,maxFat:30,recipes:[],likes:[],dislikes:[]},s.handleSubmit=s.handleSubmit.bind(Object(C.a)(s)),s}return Object(u.a)(n,[{key:"setSliders",value:function(){var e=this.state.focus;"Endurance sports"===e?(this.setState({maxCalories:700}),this.setState({maxCarbs:100}),this.setState({maxProtein:80}),this.setState({maxFat:20})):"Power sports"===e?(this.setState({maxCalories:600}),this.setState({maxCarbs:50}),this.setState({maxProtein:100}),this.setState({maxFat:40})):"Keto"===e?(this.setState({maxCalories:500}),this.setState({maxCarbs:10}),this.setState({maxProtein:10}),this.setState({maxFat:100})):"Weight loss"===e&&(this.setState({maxCalories:100}),this.setState({maxCarbs:50}),this.setState({maxProtein:50}),this.setState({maxFat:50}))}},{key:"getRecipesApi",value:function(){var e=this,t="https://api.spoonacular.com/recipes/findByNutrients?apiKey=";t+="f92d5c6716cc42e3922e26d9bc1ad0b5",t+="&maxCalories="+this.state.maxCalories,t+="&maxCarbs="+this.state.maxCarbs,t+="&maxProtein="+this.state.maxProtein,t+="&maxFat="+this.state.maxFat,console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({recipes:t})}))}},{key:"componentDidMount",value:function(){var e=Y();null!==e&&this.refreshUser(e)}},{key:"refreshUser",value:function(){var e=Object(S.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem(t),this.setState({user:t}),e.next=4,this.setState({focus:n});case 4:return e.next=6,this.setSliders();case 6:return e.next=8,this.getRecipesApi();case 8:this.setState({show:!0});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),this.refreshUser()}},{key:"render",value:function(){var e=this.state.recipes,t=this.state.focus,n="",a="",i=Y(),r="";return this.state.show?(a=Object(s.jsxs)("h2",{children:["Hello ",i]}),r=Object(s.jsx)("div",{children:Object(s.jsxs)(H,{children:[Object(s.jsxs)("h2",{children:["Recipes for your preference: ",t]}),e.length>0&&Object(s.jsx)(V,{recipes:e,show:!0}),Object(s.jsxs)("div",{className:"sliderbox",children:[Object(s.jsxs)("div",{id:"slider",children:[Object(s.jsx)(k.a,{id:"discrete-slider",gutterBottom:!0,children:" Calories "}),Object(s.jsx)(I.a,{defaultValue:this.state.maxCalories,getAriaValueText:U,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:50,marks:!0,min:50,max:800,onChange:this.setMaxCalories})]}),Object(s.jsxs)("div",{id:"slider",children:[Object(s.jsx)(k.a,{id:"discrete-slider",gutterBottom:!0,children:"  Carbs (gram)"}),Object(s.jsx)(I.a,{id:"slider",defaultValue:this.state.maxCarbs,getAriaValueText:U,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:100,onChange:this.setMaxCarbs})]}),Object(s.jsxs)("div",{id:"slider",children:[Object(s.jsx)(k.a,{id:"discrete-slider",gutterBottom:!0,children:"Fat (gram)"}),Object(s.jsx)(I.a,{id:"slider",defaultValue:this.state.maxFat,getAriaValueText:U,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0,min:1,max:100,onChange:this.setMaxFat})]}),Object(s.jsxs)("div",{id:"slider",children:[Object(s.jsx)(k.a,{id:"discrete-slider",gutterBottom:!0,children:" Protein (gram)"}),Object(s.jsx)(I.a,{id:"slider",defaultValue:this.state.maxProtein,getAriaValueText:U,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:100,onChange:this.setMaxProtein})]}),Object(s.jsx)("button",{onClick:this.handleSubmit,children:"Apply filters"})]})]})})):n=Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Fill in your personal data and preferences"}),Object(s.jsx)(J,{name:!0})]}),Object(s.jsxs)("div",{children:[a,n,r]})}}]),n}(a.Component),H=d.a.div(R());function Y(){var e=localStorage.getItem("user");return null!==e?e:null}var q=n(176),G=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={Likes:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0,n=Object.entries(localStorage);t<n.length;t++){var s=Object(q.a)(n[t],2),a=s[0],i=s[1];a.includes("like")&&!a.includes("dislike")&&e.push(JSON.parse(i))}this.setState({Likes:e})}},{key:"render",value:function(){var e=this.state.Likes;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Your liked recipes"}),e.length>0&&Object(s.jsx)(V,{recipes:e,show:!1})]})}}]),n}(a.Component),Q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={name:s.props.match.params.name,steps:[],ingredients:[],img:"",nutrition:new Map},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="f92d5c6716cc42e3922e26d9bc1ad0b5",n="https://api.spoonacular.com/recipes/",s=n+=this.props.match.params.id,a=n,i=n;s+="/ingredientWidget.json?apiKey=",s+=t,a+="/information?apiKey=",a+=t,i+="/nutritionWidget.json?apiKey=",i+=t,fetch(s).then((function(e){return e.json()})).then((function(t){e.setState({ingredients:t.ingredients})})),fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({img:t.image}),e.setState({steps:t.analyzedInstructions[0].steps})})),fetch(i).then((function(e){return e.json()})).then((function(t){var n=new Map;n.Calories=t.calories,n.Carbs=t.carbs,n.Fat=t.fat,n.Protein=t.protein,e.setState({nutrition:n})}))}},{key:"render",value:function(){var e=this.state.steps,t=this.state.ingredients,n=this.state.img,a=this.state.nutrition;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Steps from recipe ",this.state.name]}),Object(s.jsx)("img",{id:"img",src:n,alt:n}),Object(s.jsx)("h3",{children:"Ingredients: "}),Object(s.jsx)("ul",{className:"ing",children:t.map((function(e){return Object(s.jsxs)("li",{children:[e.amount.metric.value," ",e.amount.metric.unit," ",e.name]})}))}),Object(s.jsx)("ul",{className:"ing",children:Object.keys(a).map((function(e,t){return console.log(e+" "+t),Object(s.jsxs)("li",{children:[e,": ",a[e]]})}))}),Object(s.jsx)("section",{className:"steps",children:e.map((function(e,t){return Object(s.jsxs)("p",{children:[" ",Object(s.jsxs)("h4",{children:["step ",t+1,":"]})," ",e.step]})}))})]})}}]),n}(a.Component),X=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={userName:"",type_rec:""},s.handleInputChange=s.handleInputChange.bind(Object(C.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(C.a)(s)),s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=function(){var e=localStorage.getItem("user");if(null!==e)return e;return null}();this.setState({userName:e})}},{key:"handleInputChange",value:function(e){var t=e.target,n=t.select,s=t.name;this.setState(Object(T.a)({},s,n))}},{key:"handleSubmit",value:function(e){this.state.type_rec&&localStorage.setItem(this.state.user,this.state.type_rec),e.preventDefault(),window.location.href="/"}},{key:"render",value:function(){var e="";return e=this.state.userName?Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Change your preferences:"}),Object(s.jsxs)("form",{name:"preferences",onSubmit:this.handleSubmit,children:[Object(s.jsx)("label",{children:Object(s.jsxs)("select",{type:"select",name:"type_rec",value:this.state.type_rec,onChange:this.handleInputChange,children:[Object(s.jsx)("option",{value:"Endurance sports",selected:!0,children:"Endurance sports"}),Object(s.jsx)("option",{value:"Power sports",children:"Power sports"}),Object(s.jsx)("option",{value:"Keto",children:"Keto"}),Object(s.jsx)("option",{value:"Weight loss",children:"Weight loss"}),Object(s.jsx)("option",{value:"Nothing",children:"Nothing specifics"})]})}),Object(s.jsx)("input",{type:"submit",value:"Submit"})]})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"Fill in your preferences on home screen"})}),Object(s.jsx)("div",{children:e})}}]),n}(a.Component);function Z(){var e=Object(o.a)(["\n  background-color: #685369;\n  color: white\n  padding: 2em;\n"]);return Z=function(){return e},e}var $=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(ee,{className:"App",children:Object(s.jsxs)(x.a,{basename:"/",children:[Object(s.jsx)(f,{}),Object(s.jsx)(v.a,{exact:!0,path:"/",component:z}),Object(s.jsx)(v.a,{exact:!0,path:"/likes",component:G}),Object(s.jsx)(v.a,{exact:!0,path:"/recipes/:id/:name",component:Q}),Object(s.jsx)(v.a,{exact:!0,path:"/preferences",component:X})]})})}}]),n}(a.Component),ee=d.a.main(Z()),te=$,ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(te,{})}),document.getElementById("root")),ne()},55:function(e,t,n){}},[[340,1,2]]]);
//# sourceMappingURL=main.fa1610d9.chunk.js.map