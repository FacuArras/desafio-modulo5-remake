!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=t.parcelRequire665a;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire665a=s),s.register("iE7OH",(function(t,n){var o,s;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var s={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),s[e]=t),t}})),s("iE7OH").register(JSON.parse('{"geT1p":"index.d8152a81.js","czsGD":"win-img.925a67b3.svg","1Icg9":"lose-img.9846907e.svg","itbBY":"tie-img.942fa99c.svg","LS69i":"piedra.c88f7ccf.svg","hOpzv":"papel.c276051c.svg","6VHzD":"tijera.6a2fdda1.svg"}'));const r={data:{currentGame:{playerPlay:"",computerPlay:""},history:[]},listeners:[],init(){const e=localStorage.getItem("rock-paper-scissors");JSON.parse(e)&&this.setState(JSON.parse(e))},getState(){return this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);localStorage.setItem("rock-paper-scissors",JSON.stringify(e))},setPlay(e,t){const n=this.getState();n.currentGame.playerPlay="",n.currentGame.computerPlay="",n.currentGame.playerPlay=e,n.currentGame.computerPlay=t,n.history.push({playerMove:n.currentGame.playerPlay,computerMove:n.currentGame.computerPlay}),this.setState(n)},whoWins(e,t){this.getState();const n=["scissors"===e&&"rock"===t,"rock"===e&&"paper"===t,"paper"===e&&"scissors"===t];return["scissors"===e&&"paper"===t,"rock"===e&&"scissors"===t,"paper"===e&&"rock"===t].includes(!0)?1:n.includes(!0)?-1:""===e?"No te olvides de elegir":0},getHistoryOfPoints(){let e=0,t=0;const n=this.getState().history;for(const o of n)1===this.whoWins(o.playerMove,o.computerMove)?e++:-1===this.whoWins(o.playerMove,o.computerMove)&&t++;return{player:e,computer:t}},subscribe(e){this.listeners.push(e)}};var a;a=s("aNJCr").getBundleURL("geT1p")+s("iE7OH").resolve("czsGD");var c;c=s("aNJCr").getBundleURL("geT1p")+s("iE7OH").resolve("1Icg9");var i;i=s("aNJCr").getBundleURL("geT1p")+s("iE7OH").resolve("itbBY");const l=[{path:/\/home/,component:function(e){const t=document.createElement("div");return t.innerHTML='\n        <div class="title">\n            <text-comp type="title">Piedra </text-comp>\n            <br> \n            <text-comp type="title">Papel </text-comp><text-comp type="span">ó</text-comp>\n            <br>\n            <text-comp type="title">Tijeras</text-comp>\n        </div>\n        <button-comp class="button">Empezar</button-comp>\n        <hands-comp></hands-comp>\n    ',t.querySelector(".button")?.shadowRoot?.querySelector(".button")?.addEventListener("click",(t=>{e.goTo("/play")})),t}},{path:/\/play/,component:function(e){const t=document.createElement("div");return t.innerHTML='\n        <div class="subtitle">\n            <text-comp type="subtitle">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-comp>\n        </div>\n        <button-comp class="button">¡Jugar!</button-comp>\n        <hands-comp></hands-comp>\n    ',t.querySelector(".button")?.shadowRoot?.querySelector(".button")?.addEventListener("click",(t=>{e.goTo("/game")})),t}},{path:/\/game/,component:function(e){const t=document.createElement("div");let n=0;t.innerHTML='\n        <hands-comp type="bigHand" class="computerHands"></hands-comp> \n        <div class="counter-cont">0</div>\n        <hands-comp type="bigHand" class="playerHands"></hands-comp>\n    ';const o=setInterval((()=>{n++;const s=t.querySelector(".counter-cont");if(s.innerHTML=`${n}`,n>3){clearInterval(o),s.style.display="none";const t=document.querySelector(".computerHands")?.shadowRoot?.querySelectorAll(".hand");for(const e of t){const t=r.getState().currentGame.computerPlay;if(e.getAttribute("id")===t){const e=document.querySelector(".computerHands")?.shadowRoot?.querySelector("#"+t);e?.classList.add("seleccionada")}}const n=setInterval((()=>{e.goTo("/results"),clearInterval(n)}),1500)}}),1e3),s=t.querySelector(".playerHands")?.shadowRoot?.querySelectorAll(".hand"),a=t.querySelector(".computerHands")?.shadowRoot?.querySelectorAll(".hand");for(const e of s)e.classList.add("noSeleccionada");for(const e of a)e.classList.add("noSeleccionada");return r.getState().currentGame.playerPlay="",t.querySelector(".playerHands")?.shadowRoot?.querySelector(".playerHands")?.addEventListener("click",(e=>{const n=e.target,o=t.querySelector(".playerHands")?.shadowRoot?.querySelector("#scissors"),s=t.querySelector(".playerHands")?.shadowRoot?.querySelector("#paper"),a=t.querySelector(".playerHands")?.shadowRoot?.querySelector("#rock");"scissors"===n.id?(o?.classList.toggle("seleccionada"),s?.classList.remove("seleccionada"),a?.classList.remove("seleccionada")):"paper"===n.id?(s?.classList.toggle("seleccionada"),o?.classList.remove("seleccionada"),a?.classList.remove("seleccionada")):"rock"===n.id&&(a?.classList.toggle("seleccionada"),s?.classList.remove("seleccionada"),o?.classList.remove("seleccionada")),r.setPlay(n.id,function(){switch(Math.floor(3*Math.random()+1)){case 1:return"rock";case 2:return"paper";case 3:return"scissors"}}())})),t}},{path:/\/results/,component:function(e){const t=document.createElement("div"),n=r.getState().currentGame.playerPlay,o=r.getState().currentGame.computerPlay,s=r.getHistoryOfPoints().player,l=r.getHistoryOfPoints().computer;if(1===r.whoWins(n,o))t.classList.add("win"),t.innerHTML=`\n            <img class="win__image" src="${a}"></img>\n            <div class="results">\n            <text-comp class="result__title" type="resultTitle">Resultados</text-comp>\n            <text-comp class="result__text" type="resultText">Vos: ${s}</text-comp>\n            <text-comp class="result__text" type="resultText">Máquina: ${l}</text-comp>\n            </div>\n            <button-comp class="button">Volver a jugar</button-comp>\n        `;else if(-1===r.whoWins(n,o))t.classList.add("lose"),t.innerHTML=`\n            <img class="lose__image" src="${c}"></img>\n            <div class="results">\n                <text-comp class="result__title" type="resultTitle">Resultados</text-comp>\n                <text-comp class="result__text" type="resultText">Vos: ${s}</text-comp>\n                <text-comp class="result__text" type="resultText">Máquina: ${l}</text-comp>\n            </div>\n            <button-comp class="button">Volver a jugar</button-comp>\n        `;else if(0===r.whoWins(n,o))t.classList.add("tie"),t.innerHTML=`\n            <img class="tie__image" src="${i}"></img>\n            <div class="results">\n                <text-comp class="result__title" type="resultTitle">Resultados</text-comp>\n                <text-comp class="result__text" type="resultText">Vos: ${s}</text-comp>\n                <text-comp class="result__text" type="resultText">Máquina: ${l}</text-comp>\n            </div>\n            <button-comp class="button">Volver a jugar</button-comp>\n        `;else{t.classList.add("tie"),t.innerHTML='\n            <text-comp type="warning">No te olvides de elegir una mano!!</text-comp>\n        ';const n=setInterval((()=>{e.goTo("/game"),clearInterval(n)}),3500)}return t.querySelector(".button")?.shadowRoot?.querySelector(".button")?.addEventListener("click",(t=>{e.goTo("/game")})),t}}];class d extends HTMLElement{render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("button");t.classList.add("button"),t.innerHTML=`\n            <text-comp type="button">${this.textContent}</text-comp>\n        `;const n=document.createElement("style");n.innerHTML='\n                button{\n                    padding: 0 50px;\n                    height: 87px;\n                    background-color: #006CFC;\n                    border-radius: 10px;\n                    border: solid #001997 10px;\n                    font-family: "Odibee Sans", cursive;\n                }\n            ',e.appendChild(t),e.appendChild(n)}constructor(){super(),this.render()}}customElements.define("button-comp",d);var p;p=s("aNJCr").getBundleURL("geT1p")+s("iE7OH").resolve("LS69i");var u;u=s("aNJCr").getBundleURL("geT1p")+s("iE7OH").resolve("hOpzv");var m;m=s("aNJCr").getBundleURL("geT1p")+s("iE7OH").resolve("6VHzD");class h extends HTMLElement{render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div");this.classList.value?t.classList.add(this.classList.value):t.classList.add("playerHands"),t.innerHTML=`\n            <div>\n                <img id="rock" class="hand" src="${p}" alt="handImage">\n            </div>\n            <div>\n                <img id="paper" class="hand" src="${u}" alt="handImage">\n            </div>\n            <div>\n                <img id="scissors" class="hand" src="${m}" alt="handImage">\n            </div>\n        `;const n=document.createElement("style"),o=t.querySelectorAll(".hand");if("bigHand"===this.getAttribute("type"))for(const e of o)e.classList.add("bigHand");n.innerHTML="  \n            .computerHands{\n                display: flex;\n                justify-content: center;\n                gap: 6%;\n                align-items: flex-end;\n                position: absolute;\n                top: 0;\n                right: 0;\n                left: 0;\n                rotate: 180deg;\n            }\n            .playerHands {\n                display: flex;\n                justify-content: center;\n                gap: 6%;\n                align-items: flex-end;\n                position: absolute;\n                bottom: 0;\n                right: 0;\n                left: 0;\n            }\n            .hand {\n                height: 20vh;\n            }\n            .bigHand{\n                height: 26vh !important;\n            }\n            .noSeleccionada{\n                opacity: 0.5;\n                transform: translateY(8vh);\n            }\n            .seleccionada{\n                opacity: 1;\n                transform: translateY(0vh);\n            }\n        ",e.appendChild(n),e.appendChild(t)}constructor(){super(),this.render()}}customElements.define("hands-comp",h);class g extends HTMLElement{render(){const e=this.attachShadow({mode:"open"});if("title"===this.getAttribute("type")){const t=document.createElement("h1");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                h1{\n                    font-weight: 700;\n                    font-size: 100px;\n                    margin: 0;\n                    color: #009048;\n                    display: inline;\n                }\n            ",e.appendChild(t),e.appendChild(n)}else if("button"===this.getAttribute("type")){const t=document.createElement("p");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                p{\n                    font-weight: 400;\n                    font-size: 45px;\n                    margin: 0;\n                    color: #D8FCFC;\n                }\n            ",e.appendChild(t),e.appendChild(n)}else if("subtitle"===this.getAttribute("type")){const t=document.createElement("h2");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                h2{\n                    font-weight: 600;\n                    font-size: 50px;\n                    margin: 0 auto;\n                    text-align: center;\n                    max-width: 300px;\n                }\n            ",e.appendChild(t),e.appendChild(n)}else if("resultTitle"===this.getAttribute("type")){const t=document.createElement("h4");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                h4{\n                    font-weight: 400;\n                    font-size: 55px;\n                    text-align: center;\n                    color: #000000;\n                    margin: 0;\n                }\n            ",e.appendChild(t),e.appendChild(n)}else if("resultText"===this.getAttribute("type")){const t=document.createElement("h5");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                h5{\n                    font-weight: 400;\n                    font-size: 45px;\n                    text-align: end;\n                    color: #000000;\n                    margin: 0;\n                }\n            ",e.appendChild(t),e.appendChild(n)}else if("warning"===this.getAttribute("type")){const t=document.createElement("h2");t.textContent=this.textContent;const n=document.createElement("style");n.innerHTML="\n                h2{\n                    font-weight: 600;\n                    font-size: 80px;\n                    margin: 0 auto;\n                    text-align: center;\n                    max-width: 300px;\n                }\n            ",e.appendChild(t),e.appendChild(n)}}constructor(){super(),this.render()}}customElements.define("text-comp",g),function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){for(const o of l)if(o.path.test(n)){const n=o.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}"/"===location.pathname?t("/home"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".root")),r.init()}();
//# sourceMappingURL=index.d8152a81.js.map