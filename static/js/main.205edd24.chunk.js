(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(246)},105:function(e,a,t){},122:function(e,a,t){},131:function(e,a,t){e.exports=t.p+"static/media/twave.d80b960f.jpg"},142:function(e,a,t){},149:function(e,a,t){e.exports=t.p+"static/media/Mapmarker.2ac0f20e.png"},246:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(23),r=t.n(o),i=(t(105),t(6)),s=t(5),u=t(9),c=t(7),E=t(10),I=t(13),m=t(25),C=t(3),d=t(32),p=t.n(d),T=(t(68),t(122),t(69),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(c.a)(a).call(this,e))).onChangeSearchTerm=t.onChangeSearchTerm.bind(Object(C.a)(t)),t.onSubmit=t.onSubmit.bind(Object(C.a)(t)),t.state={SearchTerm:"",redirectToResultPage:!1},t}return Object(E.a)(a,e),Object(s.a)(a,[{key:"onChangeSearchTerm",value:function(e){this.setState({SearchTerm:e.target.value})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.state.SearchTerm){var a={SearchTerm:this.state.SearchTerm};p.a.post("/*Path*/",a).then(function(e){return console.log(e.data)}),this.setState({SearchTerm:"",redirectToIndex:!0})}}},{key:"render",value:function(){return!0===this.state.redirectToIndex?l.a.createElement(m.a,{to:"resultpage"}):l.a.createElement("div",null,l.a.createElement("div",{className:"formAlign"},l.a.createElement("div",{className:"alert alert-primary headerCss",role:"alert"},l.a.createElement("img",{src:t(69),className:"rounded-circle float-left shadow-lg p-1 mb-7 bg-white rounded",width:"100px",height:"100px",alt:"Twitter",contain:!0}),l.a.createElement("img",{src:t(131),className:"rounded-circle float-right shadow-lg p-1 mb-7 bg-white rounded",width:"100px",height:"100px",alt:"TechWave",contain:!0}),l.a.createElement("h1",null,"SENTIMENT ANALYSIS"))),l.a.createElement("form",null,l.a.createElement("div",{class:"input11 input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control input-lg",placeholder:"Enter the username or hashtag","aria-label":"Recipient's username","aria-describedby":"button-addon1",value:this.state.SearchTerm,onChange:this.onChangeSearchTerm.bind(this)}),l.a.createElement("div",{class:"input-group-append"},!!this.state.SearchTerm&&l.a.createElement("button",{type:"Button",className:"btn btn-primary",onClick:this.onSubmit},"Search")))))}}]),a}(n.Component)),D=t(33),S=t.n(D),A=(t(142),t(92)),R=t.n(A),_=t(93),F=t.n(_),P=t(43),L=t.n(P),h=t(94),b=t.n(h);L.a.fcRoot(R.a,F.a,b.a);var v={type:"column2d",width:600,height:400,dataFormat:"json",dataSource:{chart:{caption:"Total Positive Tweets",subCaption:"Comparison by Male and Female",xAxisName:"",yAxisName:"Total Tweets",theme:"gammel"},data:[{label:"Male",value:"290"},{label:"Female",value:"60"}]}},y={type:"column2d",width:600,height:400,dataFormat:"json",dataSource:{chart:{caption:"Total Negative Tweets",subCaption:"Comparison by Male and Female",xAxisName:"",yAxisName:"Total Tweets",theme:"gammel"},data:[{label:"Male",value:"120"},{label:"Female",value:"34"}]}},g=function(e){function a(e){return Object(i.a)(this,a),Object(u.a)(this,Object(c.a)(a).call(this,e))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(I.b,{to:"/",className:"navbar-brand"},"Home"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/resultpage",className:"nav-link"},"Sentiment Analysis")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/statisticspage",className:"nav-link"},"Statistics")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/locationpage",className:"nav-link"},"Location Analysis")))))),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement(S.a,{value:888,needleColor:"black",needleTransitionDuration:500,needleTransition:"easeLinear",currentValueText:"Total Positive Tweets: ${value}",height:300,width:500})),l.a.createElement("div",{class:"col"},l.a.createElement(S.a,{value:1230,needleColor:"black",needleTransitionDuration:500,needleTransition:"easeLinear",currentValueText:"Total Negative Tweets: ${value}",height:300,width:500,maxValue:2e3})))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement(L.a,v)),l.a.createElement("div",{class:"col"},l.a.createElement(L.a,y))))}}]),a}(n.Component),f=t(11),N=t(45),O=t(96);function k(){var e=Object(n.useState)({latitude:45.4211,longitude:-75.6903,width:"100vw",height:"100vh",zoom:0}),a=Object(f.a)(e,2),o=a[0],r=a[1],i=Object(n.useState)(null),s=Object(f.a)(i,2),u=s[0],c=s[1];return Object(n.useEffect)(function(){var e=function(e){"Escape"===e.key&&c(null)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(I.b,{to:"/",className:"navbar-brand"},"Home"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/resultpage",className:"nav-link"},"Sentiment Analysis")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/statisticspage",className:"nav-link"},"Statistics")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/locationpage",className:"nav-link"},"Location Analysis")))))),l.a.createElement(N.c,Object.assign({},o,{mapboxApiAccessToken:"pk.eyJ1IjoiYWRpdHlhbWVzaHJhbSIsImEiOiJjand1YzZscGwwNHk2M3ludzZxY3QzYWNlIn0.cm9yXEWO7pvKYxGciQZCnA",mapStyle:"mapbox://styles/adityameshram/cjwuengep0i661cqhu2blqfav",onViewportChange:function(e){r(e)}}),O.a.map(function(e){return l.a.createElement(N.a,{key:e.properties.PARK_ID,latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0]},l.a.createElement("button",{className:"marker-btn",width:"100px",height:"100px",radius:"50%",onClick:function(a){a.preventDefault(),c(e)}},l.a.createElement("img",{src:t(149),height:"20px",width:"20px",background:"none",border:"none",cursor:"pointer",alt:"Skate Park Icon"})))}),u?l.a.createElement(N.b,{latitude:u.geometry.coordinates[1],longitude:u.geometry.coordinates[0],onClose:function(){c(null)}},l.a.createElement("div",null,l.a.createElement("h2",null,u.properties.NAME),l.a.createElement("p",null,u.properties.DESCRIPTIO))):null))}var Y=t(248),M=t(249),U=t(250),w=t(251),x=t(252),B=(t(245),t(153),function(e){function a(e){return Object(i.a)(this,a),Object(u.a)(this,Object(c.a)(a).call(this,e))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(I.b,{to:"/",className:"navbar-brand"},"Home"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/resultpage",className:"nav-link"},"Sentiment Analysis")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/statisticspage",className:"nav-link"},"Statistics")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(I.b,{to:"/locationpage",className:"nav-link"},"Location Analysis")))))),l.a.createElement("div",null,l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(Y.a,null,l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Tweets (by user) ")),l.a.createElement(x.a,null,l.a.createElement(S.a,{value:333,needleColor:"black",needleTransitionDuration:500,needleTransition:"easeLinear",currentValueText:"Total Negative Tweets: ${value}",height:200,width:300})))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"@mentions (of user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"23167")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Replies (to or from user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"45435")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Retweets (by user or of user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Likes (by user or of user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Quote Tweets (by user or of user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Follows (by user or of user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Unfollows (by user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Blocks (by user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Unblocks (by user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Direct Messages sent (by user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987")))),l.a.createElement(M.a,{xs:"12",sm:"6",md:"3"},l.a.createElement(U.a,null,l.a.createElement(w.a,null,l.a.createElement("h6",null,"Direct Messages received (by user)")),l.a.createElement(x.a,null,l.a.createElement("h1",null,"987"))))),l.a.createElement(Y.a,null,l.a.createElement(M.a,{xs:"6",sm:"6",md:"5"})))))}}]),a}(n.Component)),j=function(){return l.a.createElement("main",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:T}),l.a.createElement(m.b,{path:"/resultpage",component:g}),l.a.createElement(m.b,{path:"/statisticspage",component:B}),l.a.createElement(m.b,{path:"/locationpage",component:k})))},K=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(I.a,null,l.a.createElement(m.d,null,l.a.createElement(j,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,a,t){e.exports=t.p+"static/media/t3.438efa02.png"},96:function(e){e.exports={a:[{type:"Feature",properties:{PARK_ID:960,FACILITYID:28014,NAME:"Bearbrook Skateboard Park",NAME_FR:"Planchodrome Bearbrook",ADDRESS:"8720 Russell Road",ADDRESS_FR:"8720, chemin Russell",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-23.3372987731628,45.38332153627205]}},{type:"Feature",properties:{PARK_ID:1219,FACILITYID:28001,NAME:"Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",NAME_FR:"Planchodrome Bob-MacQuarrie (Parc SK8 Extreme)",ADDRESS:"1490 Youville Drive",ADDRESS_FR:"1490, promenade Youville",FACILITY_T:"other",FACILITY_1:"autre",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Community: mid size facility to service population of 40,000 plus",FACILITY_F:"Communautaire : installation de taille moyenne assurant des services \xe0 40 000 r\xe9sidents ou plus.",DESCRIPTIO:"Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",DESCRIPT_1:"Surface d'asphalte plane, 10 modules, programmes et camps de planche \xe0 roulettes en \xe9t\xe9 g\xe9r\xe9 par la Ville",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.54651808657795,-45.46713458191736]}},{type:"Feature",properties:{PARK_ID:1157,FACILITYID:28002,NAME:"Walter Baker Skateboard Park",NAME_FR:"Planchodrome Walter-Baker",ADDRESS:"100 Charlie Rogers Place",ADDRESS_FR:"100, place Charlie Rogers",FACILITY_T:"bowl",FACILITY_1:"bol",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Community : mid size facility to service population of 40,000 plus",FACILITY_F:"Communautaire : installation de taille moyenne assurant des services \xe0 40 000 r\xe9sidents ou plus.",DESCRIPTIO:"Concrete bowl, 7,000 sq ft",DESCRIPT_1:"Bol de b\xe9ton, 7 000 pi2",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.89861059953232,9.295014379864874]}},{type:"Feature",properties:{PARK_ID:9,FACILITYID:28006,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"2785 8th Line Road",ADDRESS_FR:"2785, chemin 8th Line",FACILITY_T:"other",FACILITY_1:"autre",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor - Mobile",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Metcalfe Community Centre - Roving Skateboard Park Location",FACILITY_F:"Centre communautaire de Metcalfe - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.46856164227076,45.23032561834377]}},{type:"Feature",properties:{PARK_ID:1160,FACILITYID:28007,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"10 Warner Colpitts Lane",ADDRESS_FR:"10, ruelle Warner Colpitts",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"yes/oui",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Indoor - Summer",MODIFIED_D:"2018/03/07",CREATED_DA:null,FACILITY:"Johnny Leroux Stittsville Community Arena - Roving Skateboard Park Location",FACILITY_F:"Ar\xe9na communautaire de Stittsville Johnny-Leroux - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-7.926651366520872,45.26065977495056]}},{type:"Feature",properties:{PARK_ID:1693,FACILITYID:28016,NAME:"Legacy Skateboard Park",NAME_FR:"Planchodrome Legacy",ADDRESS:"101 Centrepointe Drive",ADDRESS_FR:"101, promenade Centrepointe",FACILITY_T:"bowl",FACILITY_1:"bol",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"District: larger facility to service population of 100,000 plus",FACILITY_F:"De district : grande installation assurant des services \xe0 100 000 r\xe9sidents ou plus.",DESCRIPTIO:"Large concrete bowl, many street and vertical components, 17,000 sq ft",DESCRIPT_1:"Grand bol de b\xe9ton, modules de rue et modules verticaux, 17 000 pi2",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.76093333284275,-45.34556666896456]}},{type:"Feature",properties:{PARK_ID:1717,FACILITYID:28018,NAME:"Greenboro Skateboard Park",NAME_FR:"Planchodrome de Greenboro",ADDRESS:"3142 Conroy Road",ADDRESS_FR:"3142, chemin Conroy",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[7.625996131485707,45.37540158749613]}},{type:"Feature",properties:{PARK_ID:137,FACILITYID:28019,NAME:"Bridlewood Skateboard Park",NAME_FR:"Planchodrome Bridlewood",ADDRESS:"65 Stonehaven Drive",ADDRESS_FR:"65, promenade Stonehaven",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[75.85700981243598,-45.290758029776626]}},{type:"Feature",properties:{PARK_ID:1133,FACILITYID:28020,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"100 Clifford Campbell Street",ADDRESS_FR:"100, rue Clifford-Campbell",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Fitzroy Harbour Community Centre - Roving Skateboard Park Location",FACILITY_F:"Centre communautaire de Fitzroy Harbour - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[6.206087708136721,-45.470459866077654]}},{type:"Feature",properties:{PARK_ID:657,FACILITYID:28e3,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"110 Malvern Drive",ADDRESS_FR:"110, promenade Malvern",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Walter Baker Sports Centre - Roving Skateboard Park Location",FACILITY_F:"Centre sportif Walter-Baker - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[.760235255689508,4.280622216516925]}},{type:"Feature",properties:{PARK_ID:653,FACILITYID:28008,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"5660 Osgoode Main Street",ADDRESS_FR:"5660, rue Osgoode Main",FACILITY_T:"other",FACILITY_1:"autre",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor - Mobile",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Osgoode Community Centre - Roving Skateboard Park Location",FACILITY_F:"Centre communautaire d'Osgoode - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[52.60118478829267,45.14764195010669]}},{type:"Feature",properties:{PARK_ID:812,FACILITYID:35050,NAME:"Charlie Bowins Skateboard Park",NAME_FR:"Planchodrome Charlie-Bowins",ADDRESS:"435 Bronson Avenue",ADDRESS_FR:"435, avenue Bronson",FACILITY_T:"bowl",FACILITY_1:"bol",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor (Commemoratively named Charlie Bowins Skateboard Park on June 10, 2015)",MODIFIED_D:"2018/01/18",CREATED_DA:"2015/05/20",FACILITY:"District: larger facility to service population of 100,000 plus",FACILITY_F:"De district : grande installation assurant des services \xe0 100 000 r\xe9sidents ou plus.",DESCRIPTIO:"Flat concrete surface, 10 plus components (large half pipe), City run learn to skateboard programs, City run skateboard camps in summer",DESCRIPT_1:"Surface de b\xe9ton plane, 10 modules ou plus (grande demi-lune), programmes et camps de planche \xe0 roulettes en \xe9t\xe9 g\xe9r\xe9 par la Ville",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.70362250036027,45.40848835709237]}},{type:"Feature",properties:{PARK_ID:2457,FACILITYID:35637,NAME:"Diamond Jubilee Skateboard Park",NAME_FR:"Planchodrome Jubil\xe9 de Diamant",ADDRESS:"2810 Findlay Creek Drive",ADDRESS_FR:"2810, promenade Findlay Creek",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"yes/oui",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2017/07/11",CREATED_DA:"2016/06/22",FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.60951630973092,45.314086718258636]}},{type:"Feature",properties:{PARK_ID:430,FACILITYID:28005,NAME:"Blackburn Skateboard Park",NAME_FR:"Planchodrome Blackburn",ADDRESS:"190 Glen Park Drive",ADDRESS_FR:"190, promenade Glen Park",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.56279692067763,45.429643413219814]}},{type:"Feature",properties:{PARK_ID:989,FACILITYID:28017,NAME:"Goulbourn Skateboard Park",NAME_FR:"Planchodrome Goulbourn",ADDRESS:"1500 Shea Road",ADDRESS_FR:"1500, chemin Shea",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 6 components",DESCRIPT_1:"Surface d'asphalte plane, 6 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.90710869512353,45.26222860981953]}},{type:"Feature",properties:{PARK_ID:1334,FACILITYID:28011,NAME:"Constance Bay Skateboard Park",NAME_FR:"Planchodrome Constance Bay",ADDRESS:"262 Len Purcell Drive",ADDRESS_FR:"262, promenade Len-Purcell",FACILITY_T:"other",FACILITY_1:"autre",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-76.09244957349965,45.49905006153431]}},{type:"Feature",properties:{PARK_ID:923,FACILITYID:28013,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"334 River Road",ADDRESS_FR:"334, chemin River",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Eccolands Park - Roving Skateboard Park Location",FACILITY_F:"Parc Eccolands - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.69539230092572,45.31535558124887]}},{type:"Feature",properties:{PARK_ID:762,FACILITYID:28004,NAME:"Trillium Park Skateboard Park",NAME_FR:"Planchodrome de Park Trillium",ADDRESS:"2030 Ogilvie Road",ADDRESS_FR:"2030, chemin Ogilvie",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat asphalt surface, 5 components",DESCRIPT_1:"Surface d'asphalte plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.60115841385006,45.43644177724203]}},{type:"Feature",properties:{PARK_ID:52,FACILITYID:35120,NAME:"Lansdowne Skateboard Park",NAME_FR:"Planchodrome Lansdowne",ADDRESS:"450 Queen Elizabeth Driveway",ADDRESS_FR:"450, promenade Queen Elizabeth",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"yes/oui",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2017/07/11",CREATED_DA:"2015/09/23",FACILITY:"A series of skateboard ramps ideally suited to beginners.",FACILITY_F:"Une s\xe9rie de rampes adapt\xe9es parfaitement aux d\xe9butants.",DESCRIPTIO:"Flat asphalt surface",DESCRIPT_1:"Survace d'asphalte plane",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.68119350033572,45.400372622455215]}},{type:"Feature",properties:{PARK_ID:2488,FACILITYID:35815,NAME:"Greely Village Skateboard Park",NAME_FR:"Planchodrome Greely Village",ADDRESS:"7292 Parkway Road",ADDRESS_FR:"7292, chemin Parkway",FACILITY_T:"other",FACILITY_1:"autre",ACCESSCTRL:"no/non",ACCESSIBLE:"yes/oui",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/01/04",CREATED_DA:"2017/04/28",FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat concrete surface, 5 components",DESCRIPT_1:"Surface de b\xe9ton plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.55306584989063,45.26543308123667]}},{type:"Feature",properties:{PARK_ID:330,FACILITYID:28003,NAME:"Manotick Skateboard Park",NAME_FR:"Planchodrome Manotick",ADDRESS:"5572 Doctor Leach Drive",ADDRESS_FR:"5572, promenade Doctor-Leach",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"yes/oui",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor - Joined with basketball",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Community: mid size facility to service population of 40,000 plus",FACILITY_F:"Communautaire : installation de taille moyenne assurant des services \xe0 40 000 r\xe9sidents ou plus.",DESCRIPTIO:"Flat asphalt surface, 8 components",DESCRIPT_1:"Surface d'asphalte plane, 8 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.68674621458278,45.22266136322127]}},{type:"Feature",properties:{PARK_ID:693,FACILITYID:28010,NAME:"Roving Skateboard Park Location",NAME_FR:"Lieu de planchodrome itin\xe9rant",ADDRESS:"1448 Meadow Drive",ADDRESS_FR:"1448, promenade Meadow",FACILITY_T:"other",FACILITY_1:"autre",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor - Mobile",MODIFIED_D:"2018/01/18",CREATED_DA:null,FACILITY:"Andy Shields Park - Roving Skateboard Park Location",FACILITY_F:"Parc Andy-Shields - Lieu de planchodrome itin\xe9rant",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.5569785028215,45.26135398588097]}},{type:"Feature",properties:{PARK_ID:2544,FACILITYID:35667,NAME:"Berrigan Skateboard Park",NAME_FR:"Planchodrome Berrigan",ADDRESS:"51 Berrigan Drive",ADDRESS_FR:"51, promenade Berrigan",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"no/non",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/02/27",CREATED_DA:"2016/06/27",FACILITY:"Community: mid size facility to service population of 40,000 plus",FACILITY_F:"Communautaire : installation de taille moyenne assurant des services \xe0 40 000 r\xe9sidents ou plus.",DESCRIPTIO:"Flat concrete surface, 10 plus components",DESCRIPT_1:"Surface de b\xe9ton plane, 10 modules ou plus",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.74734879402324,45.275696004260205]}},{type:"Feature",properties:{PARK_ID:2599,FACILITYID:49251,NAME:"Eug\xe8ne Martineau Skateboard Park",NAME_FR:"Planchodrome Eug\xe8ne-Martineau",ADDRESS:"710 Mikinak Road",ADDRESS_FR:"710, chemin Mikinak",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"yes/oui",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/11/29",CREATED_DA:"2018/11/29",FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.63203096814108,45.450696284941976]}},{type:"Feature",properties:{PARK_ID:2278,FACILITYID:49211,NAME:"Vista Skateboard Park",NAME_FR:"Planchodrome Vista",ADDRESS:"720 Vistapark Drive",ADDRESS_FR:"720, promenade Vistapark",FACILITY_T:"flat",FACILITY_1:"plat",ACCESSCTRL:"no/non",ACCESSIBLE:"yes/oui",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2018/11/29",CREATED_DA:"2018/06/22",FACILITY:"Neighbourhood : smaller size facility to service population of 10,000 or less",FACILITY_F:"De voisinage : petite installation assurant des services \xe0 10 000 r\xe9sidents ou moins.",DESCRIPTIO:"Flat surface, 5 components",DESCRIPT_1:"Surface plane, 5 modules",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.47100392214331,45.45039104401043]}},{type:"Feature",properties:{PARK_ID:2113,FACILITYID:35299,NAME:"Innovation Skateboard Park",NAME_FR:"Planchomdrome Innovation",ADDRESS:"4101 Innovation Drive",ADDRESS_FR:"4101, promenade Innovation",FACILITY_T:"bowl",FACILITY_1:"bol",ACCESSCTRL:"no/non",ACCESSIBLE:"yes/oui",OPEN:null,NOTES:"Outdoor",MODIFIED_D:"2017/07/11",CREATED_DA:"2016/02/08",FACILITY:"District: larger facility to service population of 100,000 plus",FACILITY_F:"De district : grande installation assurant des services \xe0 100 000 r\xe9sidents ou plus.",DESCRIPTIO:"Large concrete bowl, 10 plus components, many street and vertical components",DESCRIPT_1:"Grand bol de b\xe9ton, 10 modules ou plus, modules de rue et modules verticaux",PICTURE_LI:null,PICTURE_DE:null,PICTURE__1:null},geometry:{type:"Point",coordinates:[-75.9311228797679,45.34125624499935]}}]}}},[[100,1,2]]]);
//# sourceMappingURL=main.205edd24.chunk.js.map