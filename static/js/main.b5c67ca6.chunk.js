(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(7),c=a.n(n),l=(a(13),a(1)),u=a(2),i=a(3),s=a(5),h=a(4);var d=function(e){return o.a.createElement("div",{className:"quote-text"},o.a.createElement("div",{id:"text"},o.a.createElement("h1",null,o.a.createElement("i",{className:"fa fa-quote-left","aria-hidden":"true"})," ",e.quote," ",o.a.createElement("i",{className:"fa fa-quote-right","aria-hidden":"true"}))),o.a.createElement("div",{id:"author"},o.a.createElement("p",null," - ",e.author)))};var m=function(e){var t='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" '.concat(e.content,' "  - ').concat(e.author);return o.a.createElement("a",{id:"tweet-quote",href:t,target:"_blank",rel:"noopener noreferrer",style:e.color},o.a.createElement("i",{className:"fa fa-twitter fa-2x"}))};var f=function(e){var t={backgroundColor:e.color.backgroundColor};return o.a.createElement("button",{id:"new-quote",className:"btn",style:t,onClick:e.handleClick},"New Quote")},p=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"quote-box",className:"Quotes"},o.a.createElement(d,{quote:this.props.randomQuote.text,author:this.props.randomQuote.author?this.props.randomQuote.author:"Unknown"}),o.a.createElement("div",{className:"clickable-container"},o.a.createElement(m,{color:this.props.color,content:this.props.randomQuote.text,author:this.props.randomQuote.author?this.props.randomQuote.author:"Unknown"}),o.a.createElement(f,{color:this.props.color,handleClick:this.props.handleClick})))}}]),a}(o.a.Component);var v=function(){return o.a.createElement("p",{className:"footer"},"Developed by"," ",o.a.createElement("a",{href:"https://twitter.com/elias_ferede",target:"_blank",rel:"noopener noreferrer"},"Elias"))};var E=function(){var e="rgb("+(Math.floor(255*Math.random())+1)+", "+(Math.floor(255*Math.random())+1)+", "+(Math.floor(255*Math.random())+1)+")";return{backgroundColor:e,color:e}},b=E(),k=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={quote:{},randomQuote:{},color:b},r.handleClick=r.handleClick.bind(Object(i.a)(r)),r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://type.fit/api/quotes").then(function(e){return e.json()}).then(function(t){var a=Math.floor(Math.random()*t.length);e.setState({quote:t,randomQuote:t[a]})})}},{key:"handleClick",value:function(){var e=Math.floor(Math.random()*this.state.quote.length);this.setState(function(t){return{randomQuote:t.quote[e],color:E()}})}},{key:"render",value:function(){return o.a.createElement("div",{style:this.state.color,className:"App"},o.a.createElement(p,{color:this.state.color,background:this.state.color,randomQuote:this.state.randomQuote,handleClick:this.handleClick}),o.a.createElement(v,null))}}]),a}(o.a.Component);function w(){return o.a.createElement(k,null)}var q=document.getElementById("root");c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),q)},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b5c67ca6.chunk.js.map