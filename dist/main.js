!function(n){var e={};function a(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=1)}([function(n,e,a){},function(n,e,a){"use strict";a.r(e);a(0);var t=()=>"\n    <p>\n      Don't now what happen, page not found.\n    </p>\n  ";var o=()=>'\n  <div class="container">\n    <div class="header__container">\n      <h1>\n        Where in the world?\n      </h1>\n      <span>\n        <i class="fas fa-moon"></i>\n          Dark Mode\n      </span>\n    </div>\n  </div>\n  ';var r=()=>'\n  <div class="container">\n    <div class="search__container">\n      <form action="" class="search__form" id="form">\n        <span>\n          <i class="fas fa-search"></i>\n        </span>\n        <input type="text" name="value" placeholder="Search for country...">\n      </form>\n  </div>\n  ';const i="https://restcountries.eu/rest/v2/";var c=async n=>{let e=null;e=n?`${i}name/${n}`:i+"all?fields=name;nativeName;region;capital;subregion;currencies;topLeveDomain;population;flag;";try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};var s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var l=n=>{let e=null;return n?("/"===n?e=n:(e="/:name",console.log(n)),e):"/"+n};const p={"/":async()=>{const n=await c();console.log(n);return`\n  <div class="container">\n    <div class="countries__container">\n    ${n.map(n=>`\n      <div class="countries__country">\n        <a href="#/${n.name.toLowerCase()}/">\n          <img src="${n.flag}" alt="Flag of country"/>\n        </a>\n        <div class="countries__country-container">\n          <h2>${n.name}</h2>\n          <p>\n            <span>Population:</span> ${n.population}\n          </p>\n          <p>\n            <span>Region:</span> ${n.region}\n          </p>\n          <p>\n            <span>Capital:</span> ${n.capital}\n          </p>\n        </div>\n      </div>`).join("")}\n    </div>\n  </div>\n  `},"/:name":async()=>{const n=s(),e=await c(n);console.log(e);return`\n    <button>\n      <a href="#/">\n        back\n      </a>\n    </button>\n    <div>\n      <img src="${e[0].flag}" alt="Flag of country"/>\n      <p>${e[0].name}</p>\n      <div>\n        <p>Native Name: ${e[0].nativeName} </p>\n        <p>Population: ${e[0].population}</p>\n        <p>Region: ${e[0].region}</p>\n        <p>Sub Region: ${e[0].subregion}</p>\n        <p>Capital: ${e[0].capital}</p>\n      </div>\n      <div>\n        <p>Top level Domain: ${e[0].topLeveDomain}</p>\n        <p>Currencies: ${e[0].currencies[0].name}</p>\n        <p>Languages: ${e[0].languages.map(n=>""+n.name)}</p>\n      </div>\n      <div>\n        <p>Border Countries</p>\n        ${e[0].borders.map(n=>`\n          <a href="#/${n}">${n}</a>\n        `).join("")}\n      </div>\n    </div>\n  `}};var u=async()=>{const n=document.getElementById("header"),e=document.getElementById("content"),a=document.getElementById("search");n.innerHTML=await o(),a.innerHTML=await r();let i=s(),c=await l(i),u=p[c]?p[c]:t;console.log(c),e.innerHTML=await u()};var d=async()=>{const n=document.getElementById("form");n.addEventListener("submit",(async function(e){e.preventDefault();const a="#/"+new FormData(n).get("value").toLowerCase(),t=a.link(a);console.log(t)}))};window.addEventListener("load",u),window.addEventListener("hashchange",u),window.addEventListener("load",()=>{d()})}]);