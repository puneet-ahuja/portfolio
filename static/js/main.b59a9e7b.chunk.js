(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),c=t.n(r);t(9),t(10),t(11),t(12),t(13);var s=function(e){var a=e.links,t=void 0===a?[]:a;return 0===t.length?null:i.a.createElement("div",{className:"social-links-container"},t.map((function(e,a){var t=e.href,n=e.iconUrl,r=e.alt;return i.a.createElement("a",{className:"icon",href:t,key:a,target:"_blank"},i.a.createElement("img",{className:"icon-image",src:n,alt:r}))})))},o=[{href:"https://www.facebook.com/ahujapuneet92",iconUrl:"/assets/icons/facebook.svg",alt:"Facebook"},{href:"https://www.linkedin.com/in/devpuneetahuja/",iconUrl:"/assets/icons/linkedin.svg",alt:"LinkedIn"},{href:"https://www.youtube.com/channel/UCeZTAw0Gccxn8cowQSORyLg",iconUrl:"/assets/icons/youtube.svg",alt:"Youtube"},{href:"https://github.com/puneet-ahuja",iconUrl:"/assets/icons/github.svg",alt:"GitHub"}];var l=function(e){var a=e.name,t=e.title,n=e.profileImageUrl;return i.a.createElement("div",{className:"infocard"},i.a.createElement("img",{src:n,alt:"Puneet's Profile",className:"profile-image"}),i.a.createElement("div",{className:"name"},a),i.a.createElement("div",{className:"title"},t),i.a.createElement(s,{links:o}))};t(14);var m=function(e){var a=e.navItems,t=void 0===a?[]:a;return 0===t.length?null:i.a.createElement("div",{className:"navigation-container"},t.map((function(e,a){var t=e.title,n=e.href;return i.a.createElement("div",{key:a,className:"navigation-item"},i.a.createElement("a",{href:n,className:"navigation-link"},t))})))},u=[{title:"About",href:"#about"},{title:"Experience",href:"#experience"},{title:"Videos",href:"#videos"},{title:"Blogs",href:"#blogs"}];var d=function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement(l,{name:"Puneet Ahuja",title:"SDE@OLX Group | Ex-SDE@Housing.com | Front end Developer | Javascript Enthusiast",profileImageUrl:"/assets/Profile.jpeg"}),i.a.createElement(m,{navItems:u}))},g=(t(15),t(16),t(17),[{title:"Technologies :",data:["React","Redux","Javascript","CSS/CSS3","HTML/HTML5","SASS","Express","Node"]},{title:"Also Passionate About:",data:["Search Engine Optimization","Service Workers","IntersectionObserver","Server Side Rendering","Rest APIs","GraphQL","Angular4"]}]);t(18);var p=function(e){var a=e.value;return i.a.createElement("span",{className:"tag"},a)};var v=function(){return i.a.createElement("div",{className:"about-section"},i.a.createElement("div",{className:"about-section-heading"},"Hi I'm Puneet."),i.a.createElement("div",{className:"about-section-subheading"},"I am currently learning at ",i.a.createElement("strong",null,"OLX India Pvt. Ltd.")," as ",i.a.createElement("strong",null,"Front End Engineer")),i.a.createElement("div",{className:"about-section-subheading"},"I am a ",i.a.createElement("strong",null,"Javascript Enthusiast")," with passion of writing scalable, easy-to-understand and clean-UIs."),g.map((function(e,a){var t=e.title,n=e.data,r=void 0===n?[]:n;return i.a.createElement("div",null,i.a.createElement("div",{className:"category-title"},t),r.map((function(e,a){return i.a.createElement(p,{value:e,key:a})})))})))};t(19);var f=function(e){var a=e.iconUrl,t=e.designation,n=e.companyName,r=e.duration,c=e.location,s=e.alt;return i.a.createElement("div",{className:"experience-container"},i.a.createElement("img",{src:a,className:"experience-icon",alt:s}),i.a.createElement("div",{className:"experience-details"},i.a.createElement("div",{className:"experience-designation"},t),i.a.createElement("div",{className:"experience-company-name"},n),i.a.createElement("div",{className:"experience-subheading"},r),i.a.createElement("div",{className:"experience-subheading"},c)))},E=[{iconUrl:"/assets/experienceLogos/olxgroup.png",alt:"OLX",designation:"Software Development Engineer - UI",companyName:"OLX India Pvt. Ltd.",duration:"Dec 2019 - Present",location:"Gurgaon, India"},{iconUrl:"/assets/experienceLogos/proptiger.png",alt:"Proptiger",designation:"Software Development Engineer - UI",companyName:"Proptiger | Housing.com | Makaan.com",duration:"Dec, 2018 - Dec, 2019",location:"Gurgaon, India"},{iconUrl:"/assets/experienceLogos/nagarro.jpeg",alt:"Nagarro",designation:"Associate",companyName:"Nagarro Software Pvt. Ltd.",duration:"Jan, 2017 - Dec, 2018",location:"Gurgaon, India"},{iconUrl:"/assets/experienceLogos/saxobank.png",alt:"Saxo Bank",designation:"External Consultant",companyName:"Saxo Bank",duration:"July, 2017 - Aug, 2017",location:"Gurgaon, India"},{iconUrl:"/assets/experienceLogos/ansaluniversity.png",alt:"Ansal University",designation:"Intern",companyName:"Ansal University",duration:"Jun, 2013 - July, 2013",location:"Gurgaon, India"}];var h=function(){return i.a.createElement("div",{className:"experiences-container"},E.map((function(e,a){return i.a.createElement(f,Object.assign({},e,{key:a}))})))},b=(t(20),[{title:"React Lazy Image",url:"https://www.youtube.com/embed/sRcUqOjiPQw"},{title:"Javascript Map",url:"https://www.youtube.com/embed/gahGgJltAkE"}]);var N=function(){return i.a.createElement("div",{className:"videos-container"},b.map((function(e,a){var t=e.title,n=e.url;return i.a.createElement("span",{className:"video-container",key:a},i.a.createElement("iframe",{src:n,title:t,className:"video"}),i.a.createElement("span",{className:"video-title"},t))})))},w=(t(21),[{title:"Script Tag \u2014 Defer and Async",url:"https://medium.com/@puneetahuja_23950/script-tag-defer-and-async-2aa3cc82e5cb",description:"In this blog, we will brush up the basics of Attributes in the script tag and know about the scenarios in which these attributes are used.",imageUrl:"https://miro.medium.com/max/1000/1*cb9LuADYJ2GhnnuF25Z0OA.png"},{title:"Cookies Vs LocalStorage Vs SessionStorage",url:"https://medium.com/@puneetahuja_23950/cookies-vs-localstorage-vs-sessionstorage-9cd77b864f",description:"This blog is about the description of different types of memories web application can use. Which memory should be used in which scenerios.",imageUrl:"https://miro.medium.com/max/1000/1*HC1PWdue5ZofBEwOMEsBBA.png"},{title:"JS Object: Freeze and Seal",url:"https://medium.com/@puneetahuja_23950/js-object-freeze-and-seal-9e059042cb81",description:"In this blog, we will discuss Object.freeze() and Object.seal(), what is the difference between them, and where to use these built-in functions.",imageUrl:"https://miro.medium.com/max/700/1*izqu6D9em-lifn42AxmVaw.png"}]);var y=function(){return i.a.createElement("div",{className:"blogs-container"},w.map((function(e,a){var t=e.title,n=e.description,r=e.url,c=e.imageUrl;return i.a.createElement("div",{className:"blog-container",key:a},i.a.createElement("img",{className:"blog-image",src:c,alt:t}),i.a.createElement("div",{className:"blog-details"},i.a.createElement("div",{className:"blog-title"},t),i.a.createElement("div",{className:"blog-description"},n),i.a.createElement("a",{className:"blog-link",href:r,target:"_blank"},"Read More ...")))})))};var k=function(e){var a=e.title,t=e.type,n=e.id;return i.a.createElement("div",{className:"section",id:n},a&&i.a.createElement("div",{className:"section-title"},a),function(){switch(t){case"about":return i.a.createElement(v,null);case"experience":return i.a.createElement(h,null);case"videos":return i.a.createElement(N,null);case"blogs":return i.a.createElement(y,null)}}())},x=[{id:"about",type:"about"},{title:"Experience",id:"experience",type:"experience"},{title:"Videos",id:"videos",type:"videos"},{title:"Blogs",id:"blogs",type:"blogs"}];var S=function(){return i.a.createElement("div",{className:"main-content"},x.map((function(e,a){return i.a.createElement(k,Object.assign({key:a},e))})))},I=t(3);t(22);var U=function(){var e=Object(n.useState)(!1),a=Object(I.a)(e,2),t=a[0],r=a[1];return i.a.createElement(i.a.Fragment,null,!t&&i.a.createElement("img",{src:"/assets/icons/menu.svg",alt:"hamburger-menu",className:"hamburger-menu",onClick:function(){return r(!0)}}),i.a.createElement("div",{className:"overlay"+(t?" show":""),onClick:function(){return r(!1)}}),i.a.createElement("div",{className:"drawer"+(t?" show":"")},t&&u.map((function(e,a){var t=e.title,n=e.href;return i.a.createElement("div",{key:a,className:"navigation-item"},i.a.createElement("a",{href:n,onClick:function(){return r(!1)},className:"navigation-link"},t))}))))};var L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement(S,null),i.a.createElement(U,null))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.b59a9e7b.chunk.js.map