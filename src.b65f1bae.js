parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/it.jpg":[["it.a9977d52.jpg","JXN0"],"JXN0"]}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={day:document.querySelector('[data-value="days"]'),hour:document.querySelector('[data-value="hours"]'),min:document.querySelector('[data-value="mins"]'),sec:document.querySelector('[data-value="secs"]'),textTimer:document.querySelector("h2")};exports.default=e;
},{}],"llwe":[function(require,module,exports) {
"use strict";var t=e(require("./refs.js"));function e(t){return t&&t.__esModule?t:{default:t}}const{day:s,hour:n,min:a,sec:r,textTimer:o}=t.default;class i{constructor({selector:t,endDate:e}){this.intervalId=null,this.selector=t,this.endDate=e,this.start()}start(){this.intervalId=setInterval(()=>{let t=(new Date).getTime(),e=this.endDate.getTime()-t;if(e<=0)this.stop();else{const t=this.getTimeComponents(e);this.updateClockface(t)}},1e3)}stop(){clearInterval(this.intervalId),o.textContent="истекший"}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}updateClockface({days:t,hours:e,mins:o,secs:i}){s.textContent=`${t}`,n.textContent=`${e}`,a.textContent=`${o}`,r.textContent=`${i}`}}const l=new i({selector:"#timer-1",endDate:new Date("Oct 6, 2021 19:30:00")});
},{"./refs.js":"VyiV"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/timerClass.js");
},{"./sass/main.scss":"clu1","./js/timerClass.js":"llwe"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.b65f1bae.js.map