(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var M=a(34),i=a.n(M),n=a(7),l=a.n(n),u=a(0),s=a.n(u),r=a(148),L=a(4),c=a.n(L),j=a(161),o=a.n(j),N=function(e){return s.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},s.a.createElement("div",{className:"logo"},s.a.createElement("img",{src:o.a,className:"icon",alt:"Sheep by Unrecognized MJ from the Noun Project"})),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"inner"},s.a.createElement("h2",null,"Gasthof"),s.a.createElement("h1",null,"Lamm"),s.a.createElement("p",null,"Beilstein"))),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.onOpenArticle("ueber-uns")}},"Über uns")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.onOpenArticle("oeffnungszeiten")}},"Öffnungszeiten")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.onOpenArticle("adresse")}},"Kontakt")),s.a.createElement("li",null,s.a.createElement("button",{onClick:function(){e.onOpenArticle("menu")}},"Speisekarte")))))};N.propTypes={onOpenArticle:c.a.func,timeout:c.a.bool};var m=N,w=(a(73),a(162)),D=a(147);var T=function(e){return s.a.createElement(D.b,{query:"1958394481",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",null,function(e){var t=[];return e.allMenuItemsJson.edges.forEach(function(e){console.log(e),t.push(s.a.createElement("li",{key:e.node.titel},e.node.titel," - ",e.node.beschreibung))}),t}(e)))},data:w})},E=a(163),C=a.n(E),y=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this,t=s.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return s.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},s.a.createElement("article",{id:"ueber-uns",className:("ueber-uns"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Über uns"),s.a.createElement("span",{className:"image main"},s.a.createElement("img",{src:C.a,alt:""})),s.a.createElement("p",null,s.a.createElement("strong",null,"Gasthof Lamm | Beilstein"),s.a.createElement("br",null),"Familie Kurz - Rode"),t),s.a.createElement("article",{id:"oeffnungszeiten",className:("oeffnungszeiten"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Öffnungszeiten"),s.a.createElement("p",null,s.a.createElement("strong",null,"Montag, Dienstag und Freitag"),s.a.createElement("br",null),"von 10.30 - 14.00 Uhr",s.a.createElement("br",null),"und ab 17.30 Uhr",s.a.createElement("br",null),s.a.createElement("strong",null,"Samstag"),s.a.createElement("br",null),"von 10.30 - 14.00 Uhr",s.a.createElement("br",null),s.a.createElement("strong",null,"Sonn- & Feiertags"),s.a.createElement("br",null),"Geschlossen",s.a.createElement("br",null)),s.a.createElement("p",null,"Familienfeiern und größere Gruppen sind nach Vereinbarung auch außerhalb der Öffnungszeiten möglich."),t),s.a.createElement("article",{id:"adresse",className:("adresse"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Wo sie uns finden?"),s.a.createElement("address",null,s.a.createElement("strong",null,"Gasthof Lamm"),s.a.createElement("br",null),"Familie Kurz - Rode",s.a.createElement("br",null),"Hauptstraße 40",s.a.createElement("br",null),"71717 Beilstein",s.a.createElement("br",null),s.a.createElement("abbr",{title:"E-Mail"},"E-Mail:")," ",s.a.createElement("a",{href:"mailto:info@lamm-beilstein.de"},"info@lamm-beilstein.de"),s.a.createElement("br",null),s.a.createElement("abbr",{title:"Phone"},"Telefon:")," ",s.a.createElement("a",{href:"tel:+4970623716"},"+49 (07062) 3716"),s.a.createElement("br",null),s.a.createElement("abbr",{title:"Fax"},"Fax:")," +49 (07062) 916192",s.a.createElement("br",null),s.a.createElement("br",null)),t),s.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Contact"),s.a.createElement("form",{method:"post",action:"#"},s.a.createElement("div",{className:"field half first"},s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("input",{type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"field half"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"text",name:"email",id:"email"})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{name:"message",id:"message",rows:"4"})),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),s.a.createElement("li",null,s.a.createElement("input",{type:"reset",value:"Reset"})))),t),s.a.createElement("article",{id:"menu",className:("menu"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Speisekarte"),s.a.createElement(T,null),t))},t}(s.a.Component);y.propTypes={route:c.a.object,article:c.a.string,articleTimeout:c.a.bool,onCloseArticle:c.a.func,timeout:c.a.bool,setWrapperRef:c.a.func.isRequired};var z=y,d=function(e){return s.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},s.a.createElement("p",{className:"copyright"},"© Gasthof Lamm Beilstein ",(new Date).getFullYear()," ❤"))};d.propTypes={timeout:c.a.bool};var A=d,g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return s.a.createElement(r.a,{location:this.props.location},s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},s.a.createElement("div",{id:"wrapper"},s.a.createElement(m,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),s.a.createElement(z,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),s.a.createElement(A,{timeout:this.state.timeout})),s.a.createElement("div",{id:"bg"})))},t}(s.a.Component);t.default=g},146:function(e,t,a){var M;e.exports=(M=a(150))&&M.default||M},147:function(e,t,a){"use strict";a.d(t,"b",function(){return L});var M=a(0),i=a.n(M),n=a(4),l=a.n(n),u=a(32),s=a.n(u);a.d(t,"a",function(){return s.a});a(146);var r=i.a.createContext({}),L=function(e){return i.a.createElement(r.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};L.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){"use strict";var M=a(149),i=a(0),n=a.n(i),l=a(4),u=a.n(l),s=a(151),r=a.n(s),L=a(147),c=(a(152),function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?n.a.createElement("div",null,a):n.a.createElement("div",{id:"wrapper",className:"page"},n.a.createElement("div",null,a)),n.a.createElement(L.b,{query:"2994927498",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Gasthof Lamm Beilstein"},{name:"keywords",content:"restaurant, local, german"}],link:[{href:"//fonts.googleapis.com/css?family=Great+Vibes",rel:"stylesheet",type:"text/css"}]},n.a.createElement("html",{lang:"de"})),t)},data:M})});c.propTypes={children:u.a.node.isRequired},t.a=c},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Lamm Beilstein"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var M=a(0),i=a.n(M),n=a(4),l=a.n(n),u=a(53),s=a(2),r=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};r.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=r},161:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDk5Ljk5NyA4Ni43MTYyNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOTkuOTk3IDY5LjM3MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTgxLjYzNSwwLjIyMmMwLjU1My0wLjMyNywxLjI0Mi0wLjIxOSwxLjg1LTAuMTMzYzEuNTAyLDAuMjk2LDIuNjU4LDEuNDI2LDMuNTMzLDIuNjINCgljMC42MDgtMC4zNzksMS4yNTItMC43NzcsMS45ODMtMC44NDJjMC41OTUtMC4wMTUsMS4wOSwwLjQxNiwxLjM5NCwwLjg4OWMwLjU2OCwwLjkwOSwwLjc2LDIuMDIsMS40NDIsMi44NjQNCglDOTIsNS44MjksOTIuMjQ2LDUuOTQxLDkyLjQ4Miw2LjA0NGMwLjk2OCwwLjQwOSwxLjg0NiwwLjk5NiwyLjY4OCwxLjYxNWMwLjM2MSwwLjIyMywwLjM5NiwwLjY5MSwwLjUyOSwxLjA1Ng0KCWMwLjQ3OCwxLjU3OSwwLjMwNiwzLjI0MSwwLjE0OSw0Ljg1M2MtMC4wMzUsMC44MTItMC4xMDQsMS42NTksMC4xNzIsMi40MzhjMC40MiwwLjk1NCwxLjIyOSwxLjY1NSwxLjc0NiwyLjU0Nw0KCWMxLjE5MSwyLjEzLDIuMTQ2LDQuNDY3LDIuMjI5LDYuOTM3djAuMDg4Yy0wLjA3MSwxLjI2OC0wLjIwMywyLjY0Ny0xLjA2MiwzLjY1M2MtMC43MDcsMC44NDYtMS44NSwxLjEwMS0yLjg5NiwxLjIyMw0KCWMtMC43NDcsMC4xMDQtMS41MDgsMC4xMjctMi4yNTgsMC4wNzdjLTEuOTEyLTAuMjc1LTMuODEyLTAuNjI4LTUuNzI0LTAuOTExYy0wLjM0LTAuMDUyLTAuNzE5LTAuMDU1LTEsMC4xNjcNCgljLTAuMzkxLDAuMjgxLTAuNDk0LDAuNzg2LTAuNTM3LDEuMjM1Yy0wLjA2OCwxLjE3NywwLjEzMywyLjQwNS0wLjMxMiwzLjUzMmMtMC4yMjcsMC42MDQtMC43NjgsMC45OTktMS4yNjYsMS4zNzENCgljLTEuMDkyLDAuNzUzLTIuMzEzLDEuMjkxLTMuNDQxLDEuOTgxYy0wLjE2NCwwLjExNS0wLjEyNSwwLjM0OC0wLjEyNSwwLjUyMWMwLjA3NSwwLjkxNiwwLjMzMiwxLjgyMSwwLjI1MywyLjc0Nw0KCWMtMC4wMjEsMC41OTctMC4yNzEsMS4xODgtMC43MiwxLjU4N2MtMC43NjgsMC43MDktMS40MzQsMS41MTktMi4wNjgsMi4zNDZjLTAuMTA0LDAuMTQyLTAuMjIyLDAuMjgzLTAuMjU2LDAuNDYxDQoJYy0wLjI2NCwxLjI3Mi0wLjM4NSwyLjU3Ni0wLjc0LDMuODNjLTAuMjAxLDAuNjQxLTAuNDE2LDEuMzQtMC45NDMsMS43OTNjLTAuNjMzLDAuNDkyLTEuNDU2LTAuMzQyLTIuMDk4LDAuMTY0DQoJYy0xLjE5MSwwLjg4Mi0xLjU1OCwyLjQxMi0yLjM3OSwzLjU4MmMtMC40NjksMC41OTUtMS4xMDQsMS4wMzktMS44MDUsMS4zMTljLTAuMzMxLDQuMzctMC42MjUsOC43NDEtMC44OTYsMTMuMTE1aC01LjE2Ng0KCWMwLjE2LTIuNzgzLDAuMzItNS41NjcsMC40ODYtOC4zNTFjMC4yMDMtMS43MjgtMC4wOTctMy40NDQtMC4zMTItNS4xNTJjLTAuMDE3LTAuMzY0LTAuNDMtMC43MDktMC43ODUtMC41NDMNCgljLTEuMDM3LDAuMy0yLjEzMSwwLjQ1OS0zLjIwNCwwLjI4OWMtMC44Ny0wLjIyNy0xLjUzNi0wLjg3Ny0yLjExLTEuNTMzYy0xLjc2NSwxLjY5NS00LjMyNiwyLjI3NS02LjcxMiwyLjAyNQ0KCWMtMC40NzEtMC43MjYtMC43OTItMS42MjktMS42MDMtMi4wNDljLTAuNTM5LTAuMzI0LTEuMTk4LTAuMTU1LTEuNzI5LDAuMDk4Yy0xLjIxNCwwLjU1OC0xLjk0NSwxLjgwNS0zLjE5NywyLjMwNQ0KCWMtMS4xLDAuNTEtMi4zNTksMC4xODgtMy40MS0wLjI5MWMtMS4xMjctMC41NC0yLjE3Ni0xLjI0Mi0zLjE4Ni0xLjk3NWMtMC41MiwwLjIzNi0wLjgzNywwLjcyOC0xLjEyMywxLjE5NQ0KCWMtMC45NjgsMC4xMTctMS45NjQsMC40NDktMi45MjMsMC4xMDNjLTEuNTQ4LTAuMzk5LTIuNjI1LTEuNjUyLTMuOTQtMi40NzJjLTAuODg2LDAuNjYtMS42MDgsMS41OC0yLjY4LDEuOTU3DQoJYy0wLjY5OCwwLjI0LTEuNDY4LDAuMzk5LTIuMTk2LDAuMjA3Yy0wLjgyNS0wLjE4MS0xLjYwOS0wLjUtMi40MjUtMC43MDVjLTAuMjctMC4wNzgtMC41NTgtMC4wMzctMC44MDcsMC4wODINCgljLTEuNDMzLDAuNjQ2LTIuMTk3LDIuMjMtMy42ODgsMi43NzljLTAuMzA3LDAuMTQ4LTAuNjMyLDAuMDQzLTAuOTM2LTAuMDQ3Yy0wLjM0NiwzLjgxMi0wLjc5LDcuNjE4LTEuMTU5LDExLjQzDQoJYy0xLjgxMSwwLjAwNi0zLjYyMy0wLjAwMi01LjQzNCwwLjAwNGMtMC4wNzgtMC42NTYtMC4yOTctMS4zMTItMC4xODgtMS45NzhjMC4yNy0yLjI4MiwwLjYzNy00LjU1MSwwLjktNi44MzMNCgljMC4xODEtMS44OTUtMC44MzUtMy42NDgtMi4wOTYtNC45NzdjMC4xNTQtMC43MzctMC4wNTYtMS41MDItMC41MjgtMi4wNzhjLTEuMjQtMS42NS0zLjM2Mi0yLjM0Mi00LjU0Ni00LjA0Mw0KCWMtMC4zNTctMC41My0wLjY5OC0xLjI1Ni0wLjMyOC0xLjg2NGMwLjI4NS0wLjcyNCwwLjk0LTEuMzgxLDAuNzY5LTIuMjFjLTAuMDQtMC4yNjItMC4xNjUtMC41MDItMC4zNDctMC42OTENCgljLTEuMDctMS4xODgtMS45NzEtMi41MTQtMi44NDktMy44NDRjLTAuNDAzLTAuNTktMC4zNzItMS4zMzgtMC40MzgtMi4wMmMtMC4xNDEtMS4xOTQsMC43MzItMi4yMDEsMC43OTgtMy4zNjQNCgljLTAuMTk2LTAuNjY1LTAuODQtMS4wNzMtMS4xOTItMS42NTRDMC42MzgsMzEuNzg1LDAuMDc3LDMwLjIzMSwwLDI4LjYydi0wLjQ0NmMwLjA4Ni0wLjc1MSwwLjA3OC0xLjUzNywwLjM5Ni0yLjIzOQ0KCWMwLjUyMi0xLjAwNiwxLjU2Ni0xLjYyMywyLjA3NS0yLjYzNmMtMC4yMjItMC45NjgtMC43NDctMS44MzMtMC45NjYtMi43OTljLTAuMDk3LTEuNDY2LDAuNDI1LTIuOTU1LDEuNDA0LTQuMDQ5DQoJYzAuNjY0LTAuMDM1LDEuMzE5LTAuMTU3LDEuOTY4LTAuMjk2YzAuNjMzLTAuMTI1LDEuMS0wLjYzMSwxLjQ0OC0xLjE0NWMwLjcwMy0xLjA0NSwwLjgzMi0yLjM1MSwxLjQ3OS0zLjQyMg0KCWMwLjI1NS0wLjQ0NCwwLjYwNy0wLjg1NSwxLjA4LTEuMDc0YzAuNjkyLTAuMzI3LDEuMzk1LTAuNjMxLDIuMTE5LTAuODhjMC4zOC0wLjExNywwLjc3OS0wLjIzNywxLjE4LTAuMTY3DQoJYzAuODk0LDAuMTM0LDEuNzcxLDAuMzYxLDIuNjY1LDAuNWMwLjYyNCwwLjA4OCwxLjMyMS0wLjA4NSwxLjc0LTAuNThjMC4zNzktMC40MjQsMC40ODMtMS4wMDMsMC41NzQtMS41NDQNCgljMC45MjYtMC4zMDYsMS45MjktMC42NDYsMi45MDctMC4zODljMS4zNjcsMC4zMTEsMi43MiwwLjY3Miw0LjA5MSwwLjk2YzAuNzQ4LTAuMzY3LDEuMTA0LTEuMjA4LDEuODQ5LTEuNTgyDQoJYzAuODg0LTAuNDgxLDEuOTQ3LTAuMzMzLDIuODczLTAuMDY0YzEuMTMsMC4zMjIsMS45OTEsMS4xNjgsMy4wNDEsMS42NTVjMC43MzUtMC40MzgsMS4zMDQtMS4zMTYsMi4yNDYtMS4yNzUNCgljMS42OTgsMC40NDQsMy4wOTEsMS44MDMsNC44OTksMS44NjhjMS4yMjksMC4wMDEsMS43NzktMS4zNTQsMi45MTItMS41OTRjMC43NDQtMC4yMjgsMS40OTYsMC4xMjUsMi4xMDQsMC41NA0KCWMwLjc0NSwwLjUxNywxLjQzMiwxLjExLDIuMTMyLDEuNjg0YzEuMDUyLTAuNjIyLDIuMjUxLTEuMDg1LDMuNDkyLTEuMDI2YzEuNDQ4LDAuMjYxLDIuODQ3LDAuNzU0LDQuMjk0LDEuMDExDQoJYzAuNjE1LTAuMDI2LDAuOTY3LTAuNjQ5LDEuNDg5LTAuOTAyYzEuMDYyLTAuNDk3LDIuMjM3LTAuNzU1LDMuNDA5LTAuNzU2YzEuMzE2LDAuMTY5LDIuNTQzLDAuNzEyLDMuODIsMS4wNDINCgljMC42MjMtMC4xNzEsMS4xMzUtMC42NTksMS44MDMtMC42ODZjMS4wMjYtMC4wMjUsMi4wNTUtMC4wMDYsMy4wOC0wLjAwOGMwLjQwMS0wLjMyMSwwLjc2OS0wLjcwOSwxLjI2LTAuOQ0KCWMwLjg2OS0wLjM3LDEuNzQ0LTAuODM2LDIuNzAzLTAuODk4YzAuOTk0LDAuMDgsMS45NzUsMC4yODcsMi45NjQsMC40MDJjMC4yMzUtMS40MDEsMC44NDItMi43MDMsMS40ODEtMy45NTgNCgljMS4yNDEtMC4yMjcsMi40NjMtMC41OCwzLjY2LTAuOTczQzgwLjQwOSwxLjUxLDgwLjk1NiwwLjc4NCw4MS42MzUsMC4yMjJ6Ii8+DQoJPC9zdmc+"},162:function(e){e.exports={data:{allMenuItemsJson:{edges:[{node:{titel:"Weinkarte Hausmarke",beschreibung:"Schwäbischer Landwein aus eigenem Weinberg. Ausgebaut durch das Weingut Sakt Annagarten, Beilstein."}},{node:{titel:"Weinkarte",beschreibung:"Bottwartal Winzer"}},{node:{titel:"Bierkarte",beschreibung:""}},{node:{titel:"Spirituosen und Sektkarte",beschreibung:""}},{node:{titel:"Alkoholfreie & heiße Getränke",beschreibung:""}},{node:{titel:"Vesperkarte",beschreibung:""}},{node:{titel:"Warme Speisen",beschreibung:""}}]}}}},163:function(e,t,a){e.exports=a.p+"static/familie-a021f0d5f1d6391a3da4d6c090e96198.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9d25d85d5c55f7a7ca71.js.map