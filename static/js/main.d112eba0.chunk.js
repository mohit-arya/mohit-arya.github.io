(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=n(3),i=n(4),u=n(6),l=n(5),m=n(7),f=n(10),p=n(1),d=n.n(p),b=n(2),g="https://api.opendota.com/api/teams",h="https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-2.png",v="ALL_TEAMS_VIEW",w="FAVOURITES_VIEW",S="name",E="wins",k="next",x="prev",O=function(){var e;function t(){return(t=Object(b.a)(d.a.mark(function t(n){var a,r,o,c;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.transaction("teamStore","readwrite"),r=a.objectStore("teamStore"),o=0,c=n.length;case 3:if(!(o<c)){t.next=9;break}return t.next=6,r.add(n[o]);case 6:o++,t.next=3;break;case 9:return t.next=11,a.complete;case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}return{init:function(){return new Promise(function(t,n){var a=window.indexedDB.open("teamDB",1);a.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains("teamStore")&&t.deleteObjectStore("teamStore");var n=t.createObjectStore("teamStore",{keyPath:"team_id"});n.createIndex("name","name",{unique:!1}),n.createIndex("wins","wins",{unique:!1})},a.onsuccess=function(n){e=n.target.result,t()},a.onerror=function(e){n(e)}})},insertTeams:function(e){return t.apply(this,arguments)},getTeamsCount:function(){return new Promise(function(t){e.transaction("teamStore","readonly").objectStore("teamStore").count().onsuccess=function(e){t(e.target.result)}})},getTeams:function(t,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"next";return new Promise(function(o){var c,s=c=e.transaction(["teamStore"],"readonly").objectStore("teamStore");a&&(c=s.index(a));var i=[],u=!1;c.openCursor(null,r).onsuccess=function(e){var a=e.target.result;if(a&&!u&&t>0)return u=!0,void a.advance(t);a?(i.push(a.value),i.length<n?a.continue():o(i)):o(i)}})}}}(),j=(n(19),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).getViewSwitcher=function(){return r.a.createElement("div",{className:"float-left"},r.a.createElement("button",{onClick:function(){n.props.onViewSwitch(v)},className:"btn btn-default"},"All Teams"),r.a.createElement("button",{onClick:function(){n.props.onViewSwitch(w)},className:"btn btn-default"},"My Favourites"))},n.getSortOptions=function(){return r.a.createElement("div",{className:"sort-options-container float-right"},r.a.createElement("span",{className:"sort-by"},"Sort By "),r.a.createElement("button",{onClick:function(){return n.props.onSortSelection(S,k)},className:"btn btn-default"},"Name"),r.a.createElement("button",{onClick:function(){return n.props.onSortSelection(E,x)},className:"btn btn-default"},"Wins"))},n.getTableHeader=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Logo"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Wins"),r.a.createElement("th",null,"Losses"),r.a.createElement("th",null,"Favourite")))},n.getTableBody=function(){return n.props.teams.map(function(e){return r.a.createElement("tr",{key:e.team_id},r.a.createElement("td",null,r.a.createElement("img",{alt:e.name,onError:n.handleImgError,className:"team-logo img-responsive",src:e.logo_url})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.wins),r.a.createElement("td",null,e.losses),r.a.createElement("td",null,r.a.createElement("span",{onClick:function(){return n.props.toggleFavourites(e)},className:"star-container"},n.props.isFavourite(e)?"\u2605":"\u2606")))})},n.getPaginationControls=function(){return r.a.createElement("div",{className:"pagination-controls-container float-right"},r.a.createElement("button",{onClick:n.props.onPreviousClick,className:"btn btn-info"},"Previous"),r.a.createElement("button",{onClick:n.props.onNextClick,className:"btn btn-info"},"Next"))},n.handleImgError=function(e){e.target.src=h},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.selectedView;return r.a.createElement("div",null,this.getViewSwitcher(),this.getSortOptions(),r.a.createElement("table",{className:"table table-striped"},this.getTableHeader(),r.a.createElement("tbody",null,this.getTableBody())),e===v?this.getPaginationControls():null)}}]),t}(a.Component)),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={teamsPerPage:10,currentPageNum:1,teams:[],teamsCount:null,favourites:[],selectedView:v,sortBy:null,sortOrder:k},n.componentDidMount=Object(b.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.isTeamListInDB();case 2:if(e.sent){e.next=6;break}return e.next=6,n.fetchAndStoreTeamList();case 6:n.getTeamsFromDb();case 7:case"end":return e.stop()}},e)})),n.isTeamListInDB=Object(b.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.init();case 2:return e.next=4,O.getTeamsCount();case 4:return t=e.sent,e.abrupt("return",t>0);case 6:case"end":return e.stop()}},e)})),n.fetchAndStoreTeamList=Object(b.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O.insertTeams(n);case 7:case"end":return e.stop()}},e)})),n.getTeamsFromDb=Object(b.a)(d.a.mark(function e(){var t,a,r,o,c,s,i,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.currentPageNum,r=t.teamsPerPage,o=t.sortBy,c=t.sortOrder,s=r*(a-1)+1,e.next=4,O.getTeams(s,r,o,c);case 4:return i=e.sent,e.next=7,O.getTeamsCount();case 7:u=e.sent,n.setState({teams:i,teamsCount:u});case 9:case"end":return e.stop()}},e)})),n.onNextClick=Object(b.a)(d.a.mark(function e(){var t,a,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.state,a=t.currentPageNum,r=t.teamsCount,o=t.teamsPerPage,a<r/o&&n.setState({currentPageNum:a+1},function(){n.getTeamsFromDb()});case 2:case"end":return e.stop()}},e)})),n.onPreviousClick=Object(b.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=n.state.currentPageNum)>1&&n.setState({currentPageNum:t-1},function(){n.getTeamsFromDb()});case 2:case"end":return e.stop()}},e)})),n.toggleFavourites=function(e){var t=n.state.favourites,a=Object(f.a)(t);n.isFavourite(e)?a=t.filter(function(t){return e.team_id!==t.team_id}):a.push(e),n.setState({favourites:a})},n.isFavourite=function(e){return n.state.favourites.some(function(t){return e.team_id===t.team_id})},n.onViewSwitch=function(e){n.setState({selectedView:e})},n.getTableData=function(){var e=n.state,t=e.selectedView,a=e.teams,r=e.favourites;return t===v?a:r},n.onSortSelection=function(e,t){n.setState({sortBy:e,sortOrder:t,currentPageNum:1},function(){n.getTeamsFromDb()})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{teams:this.getTableData(),onNextClick:this.onNextClick,onPreviousClick:this.onPreviousClick,isFavourite:this.isFavourite,toggleFavourites:this.toggleFavourites,onViewSwitch:this.onViewSwitch,onSortSelection:this.onSortSelection,selectedView:this.state.selectedView})}}]),t}(a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(N,null))}}]),t}(a.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d112eba0.chunk.js.map