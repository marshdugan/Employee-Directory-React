(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea","phone":"202-555-0173","email":"spongebob@gmail.com","dob":"7-14-1986"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor","phone":"267-555-0153","email":"krabs@gmail.com","dob":"11-20-1942"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head","phone":"610-555-4890","email":"squid@gmail.com","dob":"10-10-1972"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory","phone":"262-555-1835","email":"boygenius@gmail.com","dob":"2-14-1992"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas","phone":"980-355-0173","email":"stupiddog@gmail.com","dob":"2-18-1996"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington","phone":"484-555-7784","email":"doug@gmail.com","dob":"8-23-1997"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow","phone":"330-555-1221","email":"doc@gmail.com","dob":"7-27-1940"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City","phone":"555-555-5588","email":"jbravo@gmail.com","dob":"2-14-1975"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California","phone":"211-555-0072","email":"pickles@gmail.com","dob":"7-11-1990"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California","phone":"111-555-7752","email":"rocko@gmail.com","dob":"9-19-1993"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth","phone":"409-555-3370","email":"cplanet@gmail.com","dob":"9-15-1993"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump","phone":"610-788-4661","email":"ickis@gmail.com","dob":"4-06-1994"}]')},,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(2),l=t.n(i);var r=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Employee Directory"),o.a.createElement("p",null,"Click on carrots to filter or use the search box to narrow your results."))},c=t(3),m=t(4),s=t(5),p=t(7),u=t(8),g=(t(14),t(6));t(15);var h=function(e){return o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{src:e.image})),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.phone),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.dob)))},d=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={userData:g,person:""},e.handleInputChange=function(a){e.setState(Object(c.a)({},a.target.name,a.target.value))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"form"},o.a.createElement("input",{value:this.state.person,name:"person",onChange:this.handleInputChange,type:"text",placeholder:"Search"}),o.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Image"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Phone"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"DOB"))),this.state.userData&&this.state.userData.map((function(a){return a.name.toLowerCase().includes(e.state.person&&e.state.person.toLowerCase())?o.a.createElement(h,{image:a.image,name:a.name,phone:a.phone,email:a.email,dob:a.dob}):null}))))}}]),t}(n.Component);var b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r,null),o.a.createElement(d,null))};l.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d107f35c.chunk.js.map